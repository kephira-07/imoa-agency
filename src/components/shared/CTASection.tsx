"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-16 px-6 rounded-3xl max-w-7xl mx-auto my-12 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Prêt à concrétiser votre projet immobilier à Lomé ?</h2>
        <p className="text-neutral-300 text-sm md:text-base">Qu&apos;il s&apos;agisse d&apos;un achat, d&apos;une vente, d&apos;une mise en location ou d&apos;une gestion, nos experts sont là pour vous guider.</p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <Link href="/contact" className="inline-block bg-accent text-primary font-bold px-8 py-4 rounded-xl shadow-lg transition-colors hover:bg-accent/90">
            Contactez notre agence
          </Link>
        </motion.div>
      </div>
    </section>
  );
}