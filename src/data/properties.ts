import { Property } from '@/types';

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'Chambre moderne tout confort',
    type: 'chambre',
    intent: 'location',
    price: 25000,
    location: 'Lomé',
    neighborhood: 'Adidogomé',
    bedrooms: 1,
    bathrooms: 1,
    area: 25,
    // Image d'une chambre moderne épurée
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'],
    featured: true,
    description: 'Une chambre lumineuse avec sanitaire interne, située dans un quartier calme et sécurisé d\'Adidogomé.',
    features: ['Sanitaire interne', 'Balcon', 'Compteur Cash Power personnel', 'Parking sécurisé'],
    agent: { name: 'Christophe', phone: '+228 90 00 00 01', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' }
  },
  {
    id: 'prop-2',
    title: 'Terrain avec titre foncier',
    type: 'terrain',
    intent: 'vente',
    price: 35000000,
    location: 'Lomé',
    neighborhood: 'Agoè',
    area: 600,
    // Image d'un terrain/bel espace ensoleillé
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'],
    featured: true,
    description: 'Idéalement situé à Agoè, ce lot de 1 lot (600m²) est parfait pour un projet résidentiel ou commercial immédiat.',
    features: ['Titre Foncier', 'Accès direct route principale', 'Électricité disponible', 'Zone non inondable'],
    agent: { name: 'Christophe', phone: '+228 90 00 00 01', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' }
  },
  {
    id: 'prop-3',
    title: 'Appartement F3 haut standing',
    type: 'appartement',
    intent: 'location',
    price: 55000,
    location: 'Lomé',
    neighborhood: 'Hedzranawoé',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    // Image d'un salon d'appartement moderne
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'],
    featured: true,
    description: 'Bel appartement moderne comprenant un grand salon et deux chambres bien ventilées.',
    features: ['Cuisine équipée', 'Sécurisé 24h/24', 'Groupe électrogène', 'Forage'],
    agent: { name: 'Christophe', phone: '+228 90 00 00 01', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' }
  },
  {
    id: 'prop-4',
    title: 'Appartement Premium meublé',
    type: 'appartement',
    intent: 'location',
    price: 65000,
    location: 'Lomé',
    neighborhood: 'Bè Kpota',
    bedrooms: 2,
    bathrooms: 2,
    area: 90,
    // Image d'un intérieur d'appartement design de luxe
    images: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'],
    featured: true,
    description: 'Appartement haut de gamme entièrement carrelé avec des finitions de luxe.',
    features: ['Climatisation', 'Wifi haut débit', 'Machine à laver', 'Gardiennage'],
    agent: { name: 'Christophe', phone: '+228 90 00 00 01', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' }
  }
];

// Boucle de génération pour les propriétés de 5 à 20 (avec images dynamiques alternées)
const imageTemplates = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Villa moderne
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', // Maison contemporaine
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', // Intérieur Luxe
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'  // Grande propriété
];

for (let i = 5; i <= 20; i++) {
  const types: ('chambre'|'maison'|'villa'|'appartement'|'terrain')[] = ['chambre', 'appartement', 'villa', 'terrain', 'maison'];
  const neighborhoods = ['Agoè', 'Adidogomé', 'Hedzranawoé', 'Bè Kpota'];
  const intents: ('location'|'vente')[] = ['location', 'vente'];
  
  const type = types[i % types.length];
  const intent = intents[i % intents.length];
  const neighborhood = neighborhoods[i % neighborhoods.length];
  const price = intent === 'location' ? 20000 + (i * 5000) : 15000000 + (i * 5000000);
  const imageUrl = imageTemplates[i % imageTemplates.length];

  properties.push({
    id: `prop-${i}`,
    title: `${type.charAt(0).toUpperCase() + type.slice(1)} - Opportunité ${neighborhood}`,
    type,
    intent,
    price,
    location: 'Lomé',
    neighborhood,
    bedrooms: type !== 'terrain' ? (i % 4) + 1 : undefined,
    bathrooms: type !== 'terrain' ? (i % 3) + 1 : undefined,
    area: 20 + (i * 35),
    images: [imageUrl],
    featured: i % 3 === 0,
    description: `Magnifique opportunité immobilière de type ${type} située dans le secteur recherché de ${neighborhood}. Dossier complet disponible à l'agence.`,
    features: ['Accessible', 'Électricité', 'Eau disponible'],
    agent: { name: 'Christophe', phone: '+228 90 00 00 01', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' }
  });
}