"use client";

import Link from 'next/link';
import { Property } from '@/types';
import { BedDouble, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  
  // Formatage propre du prix en FCFA
  const formatPrice = (price: number, intent: 'location' | 'vente') => {
    const formatted = new Intl.NumberFormat('fr-FR').format(price);
    return intent === 'location' ? `${formatted} F CFA / mois` : `${formatted} F CFA`;
  };

  return (
    <Link 
      href={`/properties/${property.id}`}
      className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-350 flex flex-col h-full"
    >
      {/* Zone Image de la Carte */}
      <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
        {/* Badge Intention (Achat / Vente) */}
        <span className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${
          property.intent === 'vente' ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'
        }`}>
          {property.intent === 'vente' ? 'À Vendre' : 'À Louer'}
        </span>

        {/* VRAIE BALISE IMAGE ICI */}
        {property.images && property.images.length > 0 ? (
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xs">
            Aucune image
          </div>
        )}
      </div>

      {/* Contenu textuel de la carte */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Prix du bien */}
          <p className="text-lg font-black text-primary">
            {formatPrice(property.price, property.intent)}
          </p>

          {/* Titre */}
          <h3 className="text-sm font-bold text-neutral-800 line-clamp-1 group-hover:text-accent transition-colors">
            {property.title}
          </h3>

          {/* Localisation / Quartier */}
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>{property.neighborhood}, {property.location}</span>
          </div>
        </div>

        {/* Caractéristiques d'usage bas de carte */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-50 text-[11px] font-bold text-neutral-500">
          <div className="flex items-center gap-1.5">
            <Square className="w-3.5 h-3.5 text-neutral-400" />
            <span>{property.area} m²</span>
          </div>

          {/* N'affiche les chambres que si le bien n'est pas un terrain */}
          {property.type !== 'terrain' && property.bedrooms !== undefined && (
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-neutral-400" />
              <span>{property.bedrooms} ch.</span>
            </div>
          )}

          <span className="bg-neutral-50 px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wide text-primary">
            {property.type}
          </span>
        </div>

      </div>
    </Link>
  );
}