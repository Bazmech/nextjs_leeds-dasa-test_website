'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Navigation } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import WaterCard from '@/components/ui/WaterCard';
import { canals } from '@/lib/data';

export default function CanalsPage() {
  return (
    <>
      <PageHero
        title="Canals"
        subtitle="Miles of peaceful canal fishing with easy towpath access and excellent stocks of fish."
      />

      {/* Canals Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-river-500 to-river-600 flex items-center justify-center">
              <Navigation className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-river-900">
                All Canal Stretches
              </h2>
              <p className="text-river-600">{canals.length} canal stretches available to members</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canals.map((canal, index) => (
              <WaterCard key={canal.id} water={canal} type="canals" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Canal fishing tips */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Canal Fishing Tips</h2>
            <p className="section-subtitle mx-auto">
              Maximize your success on our canal stretches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fish Near Features',
                description: 'Locks, bridges, moored boats, and weed beds all hold fish. Look for cover and structure.',
              },
              {
                title: 'Go Light',
                description: 'Canal fish can be wary. Fine lines, small hooks, and delicate presentation will catch more fish.',
              },
              {
                title: 'Feed Little and Often',
                description: 'Regular small amounts of bait will attract and hold fish better than heavy initial feeding.',
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-display text-xl font-bold text-river-900 mb-3">{tip.title}</h3>
                <p className="text-river-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-river-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Ready for Canal Fishing?
              </h2>
              <p className="text-river-300">
                Join Leeds DASA for access to all our canal stretches.
              </p>
            </div>
            <Link href="/membership" className="btn-primary whitespace-nowrap">
              Join Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

