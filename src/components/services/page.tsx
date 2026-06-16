"use client";

// Importe tes données (ajuste le chemin si ton JSON est ailleurs)
// Exemple : import { services } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import { Briefcase } from 'lucide-react';

// Données de secours si tu n'as pas encore de fichier JSON dédié
const mockServices = [
  { id: '1', title: 'Achat & Vente', description: 'Accompagnement complet pour acquérir ou céder vos biens avec des titres fonciers sécurisés.', icon: 'Home' },
  { id: '2', title: 'Location Gestion', description: 'Mise en location rapide et gestion rigoureuse de vos appartements, villas et boutiques.', icon: 'Key' },
  { id: '3', title: 'Expertise Immobilière', description: 'Évaluation précise de la valeur vénale ou locative de vos terrains et bâtiments.', icon: 'ClipboardCheck' },
];

export default function ServicesPage() {
  // Remplace 'mockServices' par tes vraies données 'services' dès que ton JSON est prêt
  const servicesList = mockServices; 

  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
            <Briefcase className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight md:text-4xl">
            Nos Services Immobiliers
          </h1>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Découvrez comment nos experts vous accompagnent dans toutes vos démarches de gestion, d'achat et de sécurisation de biens au Togo.
          </p>
        </div>

        {/* Grille de rendu qui appelle ton composant ServiceCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </main>
  );
}