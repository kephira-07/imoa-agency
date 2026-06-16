"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Building2, ShieldCheck, MapPin } from 'lucide-react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "Trouvez votre espace de vie d'exception à Lomé.";
  
  // Effet machine à écrire pour simuler la frappe du message
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 60); // Vitesse de frappe (60ms par lettre)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-min flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. Image d'arrière-plan avec overlay dégradé sombre (Style Luxe) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" 
          alt="IMO Luxury Background" 
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Filtre sombre pour garantir la lisibilité du texte blanc et or */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenu Principal */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-16">
        
        {/* Bloc de Gauche : Textes & Recherche */}
        <div className="lg:col-span-7 space-y-8 text-white">
          
          <div className="space-y-4">
            {/* Petit badge animé */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Immobilier Sécurisé au Togo
            </motion.div>

            {/* Titre avec effet d'écriture dynamique */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] min-h-[120px] md:min-h-[190px]">
              {text}
              <span className="text-accent animate-[pulse_1s_infinite] font-light">|</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-neutral-300 text-sm md:text-base max-w-xl leading-relaxed"
            >
              Achat, vente et location de villas, appartements, chambres et terrains vérifiés avec titre foncier. Sécurisez votre investissement avec IMO.
            </motion.p>
          </div>

          {/* Boutons d'action rapides */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href="/properties" 
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-7 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-2 text-sm group"
            >
              Explorer le catalogue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-2xl border border-white/10 backdrop-blur-md transition-all text-sm"
            >
              Confier un bien
            </Link>
          </motion.div>

        </div>

        {/* Bloc de Droite : Petites cartes de statistiques flottantes (Style Neo-Bento épuré) */}
        <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4 relative">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6, type: "spring" }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-white space-y-2 mt-8 shadow-2xl"
          >
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
              <Building2 className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black">100%</p>
            <p className="text-xs text-neutral-300 font-medium">Biens vérifiés physiquement</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6, type: "spring" }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-white space-y-2 shadow-2xl"
          >
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black">4+</p>
            <p className="text-xs text-neutral-300 font-medium">Quartiers clés à Lomé</p>
          </motion.div>

        </div>

      </div>

      {/* Ajout d'une petite animation CSS pour l'image d'arrière-plan */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.02) rotate(0deg); }
          to { transform: scale(1.08) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
}