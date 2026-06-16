import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "IMOA | Agence Immobilière Premium à Lomé, Togo",
  description: "Achat, vente, location et gestion immobilière haut de gamme au Togo. Trouvez des villas, appartements et terrains sécurisés avec IMOA.",
  openGraph: {
    title: "IMOA | Immobilier de Confiance au Togo",
    description: "Solutions immobilières premium à Lomé.",
    url: "https://imoa.tg",
    siteName: "IMOA",
    locale: "fr_TG",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 flex flex-col min-h-screen">
        {/* Barre de navigation globale */}
        <Navbar />

        {/* Le contenu de chaque page s'injecte ici */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Pied de page global */}
        <Footer />
      </body>
    </html>
  );
}