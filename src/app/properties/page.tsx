"use client";

import { useState, useMemo } from 'react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import { ArrowUpDown, Search, Building2 } from 'lucide-react';

export default function PropertiesPage() {
  // États pour la recherche, les filtres et le tri
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const [selectedIntent, setSelectedIntent] = useState<string>('Tous');
  const [sortBy, setSortBy] = useState<string>('default');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Liste des catégories pour les boutons filtres (Style application mobile)
  const categories = ['Tous', 'Chambre', 'Maison', 'Villa', 'Appartement', 'Terrain'];

  // Logique de filtrage et de tri combinée (optimisée avec useMemo)
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // 1. Filtre par type de bien (Chambre, Villa, etc.)
    if (selectedType !== 'Tous') {
      result = result.filter(p => p.type === selectedType.toLowerCase());
    }

    // 2. Filtre par intention (Location ou Vente)
    if (selectedIntent !== 'Tous') {
      result = result.filter(p => p.intent === selectedIntent.toLowerCase());
    }

    // 3. Barre de recherche multicritère (Quartier, Titre ou Type)
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.neighborhood.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    // 4. Tri par prix sans muter le tableau original
    if (sortBy === 'price-asc') {
      return [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      return [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedType, selectedIntent, sortBy, searchQuery]);

  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* En-tête de la page */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight md:text-4xl">
            Découvrez nos offres à Lomé
          </h1>
          <p className="text-neutral-500 text-sm">
            Explorez notre catalogue de biens vérifiés et sécurisés par nos experts au Togo.
          </p>
        </div>

        {/* Panneau des Filtres et de Recherche */}
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-neutral-100 shadow-sm space-y-4">
          
          {/* Ligne 1 : Recherche & Tri */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Rechercher un quartier, titre... (ex: Agoè, Villa)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            
            {/* Menu de tri */}
            <div className="flex items-center gap-2 text-neutral-600 bg-neutral-50 px-4 py-2.5 rounded-xl border border-neutral-200 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <ArrowUpDown className="w-4 h-4 text-accent" />
                <span>Trier par</span>
              </div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none text-sm font-medium text-neutral-700 cursor-pointer text-ellipsis overflow-hidden"
              >
                <option value="default">Par défaut</option>
                <option value="price-asc">Prix : du moins cher au plus cher</option>
                <option value="price-desc">Prix : du plus cher au moins cher</option>
              </select>
            </div>
          </div>

          {/* Ligne 2 : Type de Transaction (Onglets discrets) */}
          <div className="flex gap-2 pt-2 border-t border-neutral-100">
            {['Tous', 'Location', 'Vente'].map((intent) => (
              <button
                key={intent}
                onClick={() => setSelectedIntent(intent)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedIntent === intent 
                    ? 'bg-accent/10 text-primary' 
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {intent === 'Tous' ? 'Tout afficher' : intent}
              </button>
            ))}
          </div>

          {/* Ligne 3 : Catégories en Pilules (Défilant sur mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedType(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide border transition-all whitespace-nowrap ${
                  selectedType === cat 
                    ? 'bg-primary text-white border-primary shadow-sm' 
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Grille de rendu des cartes */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          /* État vide si aucun bien ne correspond aux filtres */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-neutral-200 p-8 space-y-3">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-primary">Aucun résultat trouvé</h3>
            <p className="text-neutral-400 text-xs max-w-xs mx-auto">
              Nous n&apos;avons pas trouvé de biens correspondant exactement à vos critères de recherche actuels. Élargissez vos filtres !
            </p>
          </div>
        )}
      </div>
    </main>
  );
}