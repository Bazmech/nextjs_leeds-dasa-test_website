'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'left', 
  link = null,
  linkText = 'View all'
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
          <h2 className="section-title mb-4">{title}</h2>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
        </div>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-sunset-600 font-semibold hover:text-sunset-700 transition-colors group mt-2"
          >
            {linkText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

