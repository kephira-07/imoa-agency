"use client";

import { useState } from 'react';
import { Search, MapPin, DollarSign, Home } from 'lucide-react';

interface SearchBarProps {
  onSearch: (filters: any) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [type, setType] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ type, neighborhood, budget });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
    >
      <div className="space-y-2">
        <label className="text-xs font-bold text-primary uppercase tracking-wider block">Type de bien</label>
        <div className="relative">
          <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-3 text-sm text-neutral-800 focus:outline-none focus:border-accent appearance-none transition-colors"
          >
            <option value="">Tous les types</option>
            <option value="chambre">Chambre</option>
            <option value="appartement">Appartement</option>
            <option value="villa">Villa</option>
            <option value="terrain">Terrain</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-primary uppercase tracking-wider block">Quartier (Lomé)</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
          <select 
            value={neighborhood} 
            onChange={(e) => setNeighborhood(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-3 text-sm text-neutral-800 focus:outline-none focus:border-accent appearance-none transition-colors"
          >
            <option value="">Toutes zones</option>
            <option value="Agoè">Agoè</option>
            <option value="Adidogomé">Adidogomé</option>
            <option value="Hedzranawoé">Hedzranawoé</option>
            <option value="Bè Kpota">Bè Kpota</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-primary uppercase tracking-wider block">Budget Max (CFA)</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
          <input 
            type="number" 
            placeholder="Ex: 50000000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-3 text-sm text-neutral-800 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        <Search className="w-4 h-4" />
        Filtrer
      </button>
    </form>
  );
}