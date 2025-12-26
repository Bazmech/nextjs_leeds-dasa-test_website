'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Waves } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import WaterCard from '@/components/ui/WaterCard';
import { rivers } from '@/lib/data';

export default function RiversPage() {
  return (
    <>
      <PageHero
        title="Rivers"
        subtitle="Explore our diverse river stretches across the Yorkshire region, offering varied fishing for all abilities."
      />

      {/* Rivers Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Waves className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-river-900">
                All River Stretches
              </h2>
              <p className="text-river-600">{rivers.length} rivers available to members</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rivers.map((river, index) => (
              <WaterCard key={river.id} water={river} type="rivers" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* River fishing tips */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">River Fishing Tips</h2>
            <p className="section-subtitle mx-auto">
              Get the most from our river stretches with these helpful tips
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Read the Water',
                description: 'Look for features like crease lines, slacks behind obstructions, and deeper pools where fish hold.',
              },
              {
                title: 'Match the Flow',
                description: 'Adjust your tackle to suit the flow. Heavier gear for fast water, lighter for slacks and margins.',
              },
              {
                title: 'Time Your Visit',
                description: 'Early morning and late evening are often best. After rain, fish can be more active but conditions may be challenging.',
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
                Want to Fish Our Rivers?
              </h2>
              <p className="text-river-300">
                Join Leeds DASA for instant access to all our river stretches.
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

