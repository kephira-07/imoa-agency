import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: ShieldCheck, title: "Intégrité", desc: "La transparence totale dans toutes nos transactions juridiques et financières au Togo." },
    { icon: Award, title: "Excellence", desc: "Un niveau de service premium et une rigueur absolue dans la sélection de nos biens." }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* En-tête Histoire */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">À propos d&apos;IMO</h1>
          <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
            Fondée à Lomé, **IMO** est née de la volonté de redéfinir les standards de l&apos;immobilier au Togo. 
            Face à un marché en pleine expansion, nous nous positionnons comme le partenaire de confiance des acquéreurs, 
            vendeurs et investisseurs locaux ainsi que de la diaspora togolaise, en offrant un service sécurisé, transparent et haut de gamme.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-primary">Notre Mission</h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Simplifier, sécuriser et valoriser vos projets immobiliers grâce à une expertise locale pointue et un accompagnement sur-mesure de bout en bout.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-primary">Notre Vision</h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Devenir la référence absolue de l&apos;immobilier premium et sécurisé au Togo, en combinant innovation digitale et relations humaines durables.
            </p>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm flex gap-4 items-start">
                <div className="text-accent p-2 bg-neutral-50 rounded-lg shrink-0">
                  <val.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-primary text-sm">{val.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}