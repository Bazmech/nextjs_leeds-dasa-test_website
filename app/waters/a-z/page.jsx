'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { rivers, canals, lakes } from '@/lib/data';

export default function WatersAZPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Combine all waters with their types
  const allWaters = [
    ...rivers.map(w => ({ ...w, type: 'rivers', typeName: 'River' })),
    ...canals.map(w => ({ ...w, type: 'canals', typeName: 'Canal' })),
    ...lakes.map(w => ({ ...w, type: 'lakes', typeName: 'Lake' })),
  ].sort((a, b) => a.name.localeCompare(b.name));

  // Filter waters
  const filteredWaters = allWaters.filter(water => {
    const matchesSearch = water.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         water.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || water.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Group by first letter
  const groupedWaters = filteredWaters.reduce((acc, water) => {
    const letter = water.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(water);
    return acc;
  }, {});

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <>
      <PageHero
        title="Waters A-Z"
        subtitle="Browse all our waters in alphabetical order. Find the perfect spot for your next session."
      />

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b border-river-100 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-river-400" />
              <input
                type="text"
                placeholder="Search waters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
              />
            </div>

            {/* Type filter */}
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All' },
                { key: 'rivers', label: 'Rivers' },
                { key: 'canals', label: 'Canals' },
                { key: 'lakes', label: 'Lakes' },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedType(filter.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === filter.key
                      ? 'bg-river-700 text-white'
                      : 'bg-river-100 text-river-700 hover:bg-river-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Alphabet jumps */}
          <div className="flex flex-wrap gap-1 mt-6 justify-center">
            {alphabet.map((letter) => {
              const hasWaters = groupedWaters[letter]?.length > 0;
              return (
                <a
                  key={letter}
                  href={hasWaters ? `#letter-${letter}` : undefined}
                  className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                    hasWaters
                      ? 'bg-river-100 text-river-700 hover:bg-sunset-700 hover:text-white'
                      : 'text-river-300 cursor-default'
                  }`}
                >
                  {letter}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waters List */}
      <section className="py-12 bg-river-50 min-h-[50vh]">
        <div className="container-custom">
          {filteredWaters.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-river-500 text-lg">No waters found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.keys(groupedWaters).sort().map((letter) => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-48">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-xl bg-sunset-700 text-white font-display text-2xl font-bold flex items-center justify-center">
                      {letter}
                    </span>
                    <div className="h-px flex-grow bg-river-200" />
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedWaters[letter].map((water, index) => (
                      <motion.div
                        key={water.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={`/waters/${water.type}/${water.id}`}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-river-100 hover:border-river-200 hover:shadow-lg transition-all group"
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            water.type === 'rivers' ? 'bg-blue-100 text-blue-600' :
                            water.type === 'canals' ? 'bg-river-100 text-river-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="font-semibold text-river-900 group-hover:text-sunset-600 transition-colors truncate">
                              {water.name}
                            </h3>
                            <span className="text-river-500 text-sm">{water.typeName}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-river-400 group-hover:text-sunset-600 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-river-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-river-900">{allWaters.length}</span>
              <span className="block text-river-500">Total Waters</span>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-blue-600">{rivers.length}</span>
              <span className="block text-river-500">Rivers</span>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-river-600">{canals.length}</span>
              <span className="block text-river-500">Canals</span>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-green-600">{lakes.length}</span>
              <span className="block text-river-500">Lakes</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

