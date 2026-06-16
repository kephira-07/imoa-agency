import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-neutral-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
        
        {/* Infos Agence */}
        <div className="space-y-4">
          <div className="text-2xl font-black tracking-wider">
            IMO
          </div>
          <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
            Agence immobilière de référence à Lomé. Nous sécurisons vos investissements fonciers et trouvons vos espaces de vie d&apos;exception au Togo..,
          </p>
        </div>

        {/* Liens Rapides */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Navigation</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><Link href="/properties" className="hover:text-white transition-colors">Nos Propriétés</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
          </ul>
        </div>

        {/* Contacts directs */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="space-y-3 text-xs text-neutral-400">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>Boulevard du 13 Janvier, Lomé, Togo</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>+228 90 00 00 01</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>contact@imoa.tg</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400 text-center sm:text-left">
        <div>&copy; {new Date().getFullYear()} IMO Real Estate. Tous droits réservés.</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">Mentions légales</Link>
          <Link href="#" className="hover:text-white">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}