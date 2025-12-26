'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Map, Fish, Calendar, Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export default function YearbookPage() {
  const yearbookFeatures = [
    {
      icon: Map,
      title: 'Detailed Maps',
      description: 'Clear maps showing access points, parking, and key features for every water.',
    },
    {
      icon: Fish,
      title: 'Species Information',
      description: 'Details on fish species present, average weights, and best methods.',
    },
    {
      icon: Calendar,
      title: 'Rules & Regulations',
      description: 'Comprehensive rules for each venue including close seasons and restrictions.',
    },
    {
      icon: BookOpen,
      title: 'Match Information',
      description: 'Match pegs, booking information, and competition schedules.',
    },
  ];

  const contents = [
    'Complete list of all 40+ waters',
    'Detailed maps with access points',
    'Parking information',
    'Species present at each venue',
    'Rules and regulations',
    'Close season dates',
    'Match booking information',
    'Contact details',
    'Emergency procedures',
    'Society constitution',
  ];

  return (
    <>
      <PageHero
        title="Yearbook"
        subtitle="Your comprehensive guide to all Leeds DASA waters with maps, rules, and essential information."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-river-700 to-river-900 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <BookOpen className="w-24 h-24 text-white/30 mx-auto mb-4" />
                  <span className="font-display text-2xl font-bold text-white/50">2026 Yearbook</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-sunset-500/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-river-400/20 rounded-full blur-xl" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-sunset-600 text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="font-display text-lg font-bold">Now Available</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-4">
                2026 Yearbooks Now Live
              </h2>
              <p className="text-river-600 text-lg mb-8 leading-relaxed">
                The Leeds DASA yearbook is your essential companion for fishing our waters. 
                Included with your membership, it contains everything you need to know about 
                each of our 40+ venues.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {yearbookFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-river-50"
                  >
                    <feature.icon className="w-8 h-8 text-sunset-500 mb-3" />
                    <h3 className="font-semibold text-river-900 mb-1">{feature.title}</h3>
                    <p className="text-river-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <Link href="/membership/individual" className="btn-primary">
                Get Your Yearbook
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">What's Inside</h2>
            <p className="section-subtitle mx-auto">
              Everything you need for a successful season on the bank
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {contents.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg"
                >
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-river-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-river-900 to-river-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-5" />
        <div className="container-custom relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Included with Every Membership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-300 text-lg max-w-2xl mx-auto mb-8"
          >
            Your yearbook is included with your membership and will be posted to you after payment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/membership/individual" className="btn-primary text-lg">
              Buy Membership
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

