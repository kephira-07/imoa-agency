"use client";

import { use, useState } from 'react';
import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  BedDouble, 
  Square, 
  MapPin, 
  Phone, 
  CheckCircle, 
  ChevronLeft, 
  Calendar,
  ShieldCheck,
  User,
  MessageCircle
} from 'lucide-react';

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default function PropertyDetailPage({ params }: PropertyPageProps) {
  const resolvedParams = use(params);
  const property = properties.find(p => p.id === resolvedParams.id);

  // États pour le formulaire de contact standard
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!property) return notFound();

  // Formatage des prix en FCFA (XOF) de manière propre
  const formatPrice = (price: number, intent: 'location' | 'vente') => {
    const formatted = new Intl.NumberFormat('fr-FR').format(price);
    return intent === 'location' ? `${formatted} F CFA / mois` : `${formatted} F CFA`;
  };

  // Génération du lien WhatsApp avec message pré-rempli
  const whatsappNumber = property.agent.phone.replace(/\s+/g, ''); // Nettoie les espaces
  const whatsappMessage = encodeURIComponent(
    `Bonjour IMO, je suis intéressé par votre bien : "${property.title}" situé à ${property.neighborhood} (${formatPrice(property.price, property.intent)}). Est-il toujours disponible ?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

 const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // <--- CORRIGÉ ICI (au lieu de loading(true))
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000); // Ou le temps défini pour ton timeout
  };

  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Fil d'Ariane / Bouton Retour */}
        <div className="flex items-center justify-between">
          <Link 
            href="/properties" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-primary transition-colors bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" /> Retour aux annonces
          </Link>
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
            property.intent === 'vente' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
          }`}>
            À la {property.intent}
          </span>
        </div>

        {/* Titre et Localisation principale */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight leading-tight">
            {property.title}
          </h1>
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <MapPin className="w-4 h-4 text-accent shrink-0" />
            <span className="font-medium">{property.neighborhood}, {property.location} - Togo</span>
          </div>
        </div>

        {/* Layout principal : 2 Colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* COLONNE GAUCHE & CENTRE : Médias & Descriptifs */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Galerie d'images (Affiche la première image du tableau) */}
            <div className="relative aspect-[16/10] w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 animate-fade-in" />
              
              {/* VRAIE BALISE IMAGE INJECTÉE ICI */}
              {property.images && property.images.length > 0 ? (
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                  <p className="text-xs font-medium">Aucune image disponible</p>
                </div>
              )}
              
              {/* Badge Prix flottant sur l'image */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md text-primary px-6 py-3 rounded-2xl shadow-xl border border-white/20">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">Tarif demandé</p>
                <p className="text-xl md:text-2xl font-black text-primary">{formatPrice(property.price, property.intent)}</p>
              </div>
            </div>

            {/* Caractéristiques Clés rapides */}
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm text-center">
              <div className="space-y-1">
                <div className="w-8 h-8 mx-auto rounded-lg bg-neutral-50 flex items-center justify-center text-primary">
                  <Square className="w-4 h-4" />
                </div>
                <p className="text-xs text-neutral-400">Superficie</p>
                <p className="text-sm font-bold text-primary">{property.area} m²</p>
              </div>
              
              <div className="space-y-1 border-x border-neutral-100">
                <div className="w-8 h-8 mx-auto rounded-lg bg-neutral-50 flex items-center justify-center text-primary">
                  <BedDouble className="w-4 h-4" />
                </div>
                <p className="text-xs text-neutral-400">Chambres</p>
                <p className="text-sm font-bold text-primary">{property.bedrooms ?? '—'}</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 mx-auto rounded-lg bg-neutral-50 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-xs text-neutral-400">Catégorie</p>
                <p className="text-sm font-bold text-primary capitalize">{property.type}</p>
              </div>
            </div>

            {/* Description détaillée */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-primary">Description du bien</h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Équipements & Commodités */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-primary">Prestations & Commodités</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-600 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : Agent & Actions de contact */}
          <div className="space-y-6">
            
            {/* Boîte Profil Agent */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-neutral-100 text-primary rounded-full flex items-center justify-center border border-neutral-200 overflow-hidden">
                {property.agent.avatar ? (
                  <img src={property.agent.avatar} alt={property.agent.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-neutral-400" />
                )}
              </div>
              <div>
                <h3 className="font-bold text-primary text-base">{property.agent.name}</h3>
                <p className="text-xs text-neutral-400">Conseiller Immobilier IMO</p>
              </div>
              <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-500 flex justify-center items-center gap-2">
                <Calendar className="w-4 h-4" /> Visites disponibles 6j/7
              </div>
            </div>

            {/* Boutons d'actions immédiates */}
            <div className="space-y-3">
              {/* WhatsApp Premium */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                Discuter sur WhatsApp
              </a>

              <a 
                href={`tel:${whatsappNumber}`}
                className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 text-sm"
              >
                <Phone className="w-4 h-4" />
                Appeler l&apos;agence
              </a>
            </div>

            {/* Formulaire de demande de rappel interne */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="font-bold text-primary text-sm mb-4">Demande d&apos;informations écrite</h4>
              
              {success ? (
                <div className="text-center py-6 space-y-2 text-emerald-600">
                  <CheckCircle className="w-10 h-10 mx-auto" />
                  <p className="text-sm font-bold">Demande enregistrée !</p>
                  <p className="text-xs text-neutral-400">L&apos;agent vous recontactera sous peu.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Votre nom complet" 
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent transition-colors"
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="Votre numéro de téléphone" 
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent transition-colors"
                  />
                  <textarea 
                    rows={3}
                    placeholder="Je souhaite planifier une visite pour ce bien..." 
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 rounded-xl transition-all text-xs disabled:opacity-50"
                  >
                    {loading ? 'Envoi...' : 'Envoyer par e-mail'}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}