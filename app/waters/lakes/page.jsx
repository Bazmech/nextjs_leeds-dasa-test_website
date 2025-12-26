'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Trees } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import WaterCard from '@/components/ui/WaterCard';
import { lakes } from '@/lib/data';

export default function LakesPage() {
  return (
    <>
      <PageHero
        title="Lakes"
        subtitle="Beautiful stillwaters and pools offering peaceful fishing in scenic surroundings."
      />

      {/* Lakes Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <Trees className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-river-900">
                All Lakes & Pools
              </h2>
              <p className="text-river-600">{lakes.length} stillwaters available to members</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lakes.map((lake, index) => (
              <WaterCard key={lake.id} water={lake} type="lakes" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Lake fishing tips */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Lake Fishing Tips</h2>
            <p className="section-subtitle mx-auto">
              Get the best from our stillwaters with these helpful tips
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Find the Features',
                description: 'Islands, overhanging trees, reed beds, and underwater bars all attract fish. Use your eyes and plumb the depth.',
              },
              {
                title: 'Consider the Weather',
                description: 'Wind direction can push food and fish to certain areas. Fish often follow the warm water in cold weather.',
              },
              {
                title: 'Be Patient',
                description: 'Stillwater fish can take time to find your bait. Give your swims adequate time before moving.',
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
                Discover Our Lakes
              </h2>
              <p className="text-river-300">
                Join Leeds DASA for access to all our beautiful stillwaters.
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

