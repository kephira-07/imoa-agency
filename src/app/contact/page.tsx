"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulation d'appel API
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Infos de contact */}
        <div className="lg:col-span-1 space-y-8 bg-primary text-white p-8 rounded-3xl shadow-sm">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Contactez IMO</h1>
            <p className="text-neutral-300 text-sm">Nos équipes sont disponibles pour répondre à toutes vos questions et planifier vos visites.</p>
          </div>

          <div className="space-y-6 pt-4 text-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Téléphone</p>
                <p className="font-semibold">+228 90 00 00 01</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Email</p>
                <p className="font-semibold">contact@imoa.tg</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Adresse</p>
                <p className="font-semibold">Boulevard du 13 Janvier, Lomé, Togo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Message envoyé avec succès !</h2>
              <p className="text-neutral-500 max-w-sm text-sm">Merci de votre confiance. Un agent de l'agence IMO reviendra vers vous par téléphone ou par email sous 24h ouvrées.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Nom complet</label>
                  <input required type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">Téléphone</label>
                  <input required type="tel" placeholder="+228" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Adresse email</label>
                <input required type="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Votre message</label>
                <textarea required rows={5} placeholder="Décrivez votre projet immobilier..." className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-4 rounded-xl transition-all shadow-md disabled:opacity-50 flex items-center justify-center text-sm"
              >
                {loading ? 'Traitement en cours...' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}