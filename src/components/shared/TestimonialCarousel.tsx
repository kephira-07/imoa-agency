"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8 relative">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Ce que disent nos clients</h2>
        <p className="text-xs text-neutral-500">La satisfaction de nos clients est notre plus belle réussite.</p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-100 shadow-sm relative min-h-[220px] flex flex-col justify-between">
        <Quote className="absolute top-6 right-8 w-12 h-12 text-accent/10 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-neutral-600 text-sm md:text-base italic leading-relaxed">
              &ldquo;{testimonials[current].comment}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 text-primary font-bold text-sm flex items-center justify-center">
                {testimonials[current].avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">{testimonials[current].name}</h4>
                <p className="text-xs text-neutral-400">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Contrôles */}
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={prev} className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-primary transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}