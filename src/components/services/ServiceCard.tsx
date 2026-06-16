import { Service } from '@/types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Récupération dynamique de l'icône Lucide basée sur le nom stocké dans le JSON
  const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

  return (
    <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
        <IconComponent className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-primary">{service.title}</h3>
      <p className="text-xs text-neutral-500 leading-relaxed">{service.description}</p>
    </div>
  );
}