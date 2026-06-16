"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Users, ShieldCheck, ArrowRight, Sparkles, Key, ClipboardCheck, Home } from 'lucide-react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import ServiceCard from '@/components/services/ServiceCard'; // Import de ta carte de service
import SearchBar from '@/components/shared/SearchBar';
import TestimonialCarousel from '@/components/shared/TestimonialCarousel';
import CTASection from '@/components/shared/CTASection';
import HeroSection from '@/components/HeroSection';

// Données des services intégrées localement (en attendant ton fichier JSON global)
const servicesData = [
  { 
    id: 's-1', 
    title: 'Achat & Vente Sécurisés', 
    description: 'Accompagnement de A à Z pour acquérir ou céder vos propriétés à Lomé avec vérification stricte des titres fonciers.', 
    icon: 'Home' 
  },
  { 
    id: 's-2', 
    title: 'Gestion Locative Premium', 
    description: 'Mise en valeur de vos appartements, villas ou chambres, sélection des locataires et encaissement serein de vos loyers.', 
    icon: 'Key' 
  },
  { 
    id: 's-3', 
    title: 'Expertise & Estimation', 
    description: 'Évaluation précise de la valeur marchande de vos terrains et constructions par des professionnels du marché togolais.', 
    icon: 'ClipboardCheck' 
  }
];

export default function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState(properties.filter(p => p.featured).slice(0, 6));

  const handleSearch = (filters: { type: string; neighborhood: string; budget: string }) => {
    let result = properties;
    if (filters.type) result = result.filter(p => p.type === filters.type);
    if (filters.neighborhood) result = result.filter(p => p.neighborhood.toLowerCase() === filters.neighborhood.toLowerCase());
    if (filters.budget) result = result.filter(p => p.price <= parseInt(filters.budget));
    setFilteredProperties(result.slice(0, 6));
  };

  return (
    <main className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Moteur de recherche */}
      <div className="px-4 -translate-y-10 relative z-20">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* 3. Biens en vedette */}
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-primary">Nos biens en vedette</h2>
          <p className="text-neutral-500 text-xs md:text-sm max-w-md mx-auto">
            Une sélection exclusive de nos opportunités immobilières les plus attractives à Lomé.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>

      {/* [NOUVEAU] 4. Section Services avec Ancre pour la Navbar */}
      <section id="services" className="bg-white border-y border-neutral-100 py-20 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* En-tête de la section */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
           
            <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
              Des services conçus pour sécuriser vos projets
            </h2>
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
              Que vous soyez propriétaire ou à la recherche du logement idéal, notre équipe déploie son expertise sur le terrain pour vous satisfaire.
            </p>
          </div>

          {/* Grille appelant ton composant ServiceCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Carrousel de Témoignages */}
      <div className="py-8">
        <TestimonialCarousel />
      </div>

      {/* 6. Section d'Appel à l'action final */}
      <CTASection />
    </main>
  );
}