'use client';

import { motion } from 'framer-motion';

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = null,
  overlay = true 
}) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-river-800 via-river-700 to-river-900" />
        )}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-river-950/60 via-river-950/40 to-river-950/80" />
        )}
        
        {/* Animated water pattern overlay */}
        <div className="absolute inset-0 bg-water-pattern opacity-20" />
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sunset-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-river-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

