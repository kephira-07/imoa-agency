export interface Property {
  id: string;
  title: string;
  type: 'chambre' | 'maison' | 'villa' | 'appartement' | 'terrain';
  intent: 'location' | 'vente';
  price: number;
  location: string;
  neighborhood: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number; // en m²
  images: string[];
  featured: boolean;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    avatar: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}