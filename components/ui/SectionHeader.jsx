'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'left', 
  link = null,
  linkText = 'View all',
  dark = false
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className={`flex ${align === 'center' ? 'flex-col items-center' : 'items-start justify-between flex-wrap gap-4'}`}>
        <div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-river-900'}`}>{title}</h2>
          {subtitle && (
            <p className={`text-lg md:text-xl max-w-2xl ${dark ? 'text-white/70' : 'text-river-600'}`}>{subtitle}</p>
          )}
        </div>
        {link && (
          <Link
            href={link}
            className={`inline-flex items-center gap-2 font-semibold transition-colors group mt-2 ${dark ? 'text-sunset-400 hover:text-sunset-300' : 'text-sunset-600 hover:text-sunset-700'}`}
          >
            {linkText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

