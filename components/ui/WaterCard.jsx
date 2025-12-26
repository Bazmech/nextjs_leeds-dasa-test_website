'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Fish, ArrowRight } from 'lucide-react';

export default function WaterCard({ water, type, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-river-200 to-river-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <Fish className="w-16 h-16 text-river-400" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-river-950/60 to-transparent" />
        
        {/* Type badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-river-700 capitalize">
          {type}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-river-900 mb-2 group-hover:text-sunset-600 transition-colors">
          {water.name}
        </h3>
        
        <p className="text-river-600 text-sm mb-4 line-clamp-2">
          {water.description}
        </p>

        {/* Species */}
        {water.species && (
          <div className="flex flex-wrap gap-1 mb-4">
            {water.species.slice(0, 4).map((species) => (
              <span 
                key={species} 
                className="px-2 py-1 bg-river-100 text-river-700 rounded text-xs"
              >
                {species}
              </span>
            ))}
            {water.species.length > 4 && (
              <span className="px-2 py-1 bg-river-100 text-river-700 rounded text-xs">
                +{water.species.length - 4}
              </span>
            )}
          </div>
        )}

        <Link 
          href={`/waters/${type}/${water.id}`}
          className="inline-flex items-center gap-2 text-sunset-600 font-medium hover:text-sunset-700 transition-colors group/link"
        >
          More details
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

