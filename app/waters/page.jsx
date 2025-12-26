'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Waves, Navigation, Trees, Fish } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import WaterCard from '@/components/ui/WaterCard';
import { rivers, canals, lakes } from '@/lib/data';

const waterTypes = [
  {
    name: 'Rivers',
    description: 'Flowing waters with diverse species and challenging fishing.',
    icon: Waves,
    href: '/waters/rivers',
    count: rivers.length,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Canals',
    description: 'Miles of peaceful canal fishing with easy access.',
    icon: Navigation,
    href: '/waters/canals',
    count: canals.length,
    color: 'from-river-500 to-river-600',
  },
  {
    name: 'Lakes',
    description: 'Stillwater fishing on beautiful pools and lakes.',
    icon: Trees,
    href: '/waters/lakes',
    count: lakes.length,
    color: 'from-green-500 to-green-600',
  },
];

export default function WatersPage() {
  return (
    <>
      <PageHero
        title="Our Waters"
        subtitle="Explore over 40 diverse waters across Leeds and the surrounding district, including rivers, canals, and lakes."
      />

      {/* Water Types Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {waterTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={type.href} className="block group">
                  <div className="card p-8 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-2xl font-bold text-river-900">
                        {type.name}
                      </h3>
                      <span className="px-3 py-1 bg-river-100 text-river-600 rounded-full text-sm font-medium">
                        {type.count}+ waters
                      </span>
                    </div>
                    <p className="text-river-600 mb-6">{type.description}</p>
                    <span className="inline-flex items-center gap-2 text-sunset-600 font-semibold group-hover:gap-3 transition-all">
                      View {type.name.toLowerCase()}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick A-Z Link */}
      <section className="py-12 bg-gradient-to-r from-sunset-500 to-sunset-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="font-display text-2xl font-bold mb-2">Looking for a specific water?</h2>
              <p className="text-white/80">Browse all our waters in alphabetical order.</p>
            </div>
            <Link href="/waters/a-z" className="btn-secondary">
              Waters A-Z
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rivers Preview */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <SectionHeader
            title="Rivers"
            subtitle="Flowing waters with diverse species"
            link="/waters/rivers"
            linkText="View all rivers"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rivers.slice(0, 4).map((river, index) => (
              <WaterCard key={river.id} water={river} type="rivers" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Canals Preview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Canals"
            subtitle="Miles of peaceful canal fishing"
            link="/waters/canals"
            linkText="View all canals"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canals.slice(0, 3).map((canal, index) => (
              <WaterCard key={canal.id} water={canal} type="canals" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Lakes Preview */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <SectionHeader
            title="Lakes"
            subtitle="Stillwater fishing on beautiful pools"
            link="/waters/lakes"
            linkText="View all lakes"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lakes.slice(0, 3).map((lake, index) => (
              <WaterCard key={lake.id} water={lake} type="lakes" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-river-900 to-river-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-5" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-sunset-500 rounded-2xl mb-8"
          >
            <Fish className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Explore Our Waters?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-300 text-lg max-w-2xl mx-auto mb-8"
          >
            Join Leeds DASA today and get access to all our waters instantly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/membership" className="btn-primary text-lg">
              Become a Member
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

