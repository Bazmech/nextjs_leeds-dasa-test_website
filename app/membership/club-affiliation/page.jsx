'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Building2, Percent, BookOpen, Mail } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export default function ClubAffiliationPage() {
  const benefits = [
    {
      icon: Percent,
      title: 'Discounted Rates',
      description: 'Affiliated clubs receive significant discounts on membership for their members.',
    },
    {
      icon: Users,
      title: 'Bulk Membership',
      description: 'Simplified administration with bulk membership processing for your club.',
    },
    {
      icon: BookOpen,
      title: 'Yearbooks Included',
      description: 'All members receive the comprehensive yearbook with maps and rules.',
    },
    {
      icon: Building2,
      title: 'Match Bookings',
      description: 'Priority access to match bookings on our waters for club events.',
    },
  ];

  const advantages = [
    'Reduced membership costs for your members',
    'Single point of contact for administration',
    'Bulk yearbook distribution',
    'Priority match venue bookings',
    'Access to all 40+ waters',
    'Automatic Anglers Club social membership',
    'Monthly newsletter distribution',
    'Representation at delegates meetings',
    'Vote on society matters',
    'Support from Leeds DASA committee',
  ];

  return (
    <>
      <PageHero
        title="Club Affiliation"
        subtitle="Affiliate your club with Leeds DASA to save your members money and gain access to our extensive waters."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-4">
                Why Affiliate Your Club?
              </h2>
              <p className="text-river-600 text-lg mb-8 leading-relaxed">
                Affiliation to Leeds & District ASA will keep down the cost of running your club 
                and save your members money. Just look at some of the benefits:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-xl border border-river-200 hover:border-river-300 transition-colors"
                  >
                    <benefit.icon className="w-10 h-10 text-sunset-600 mb-4" />
                    <h3 className="font-semibold text-river-900 mb-2">{benefit.title}</h3>
                    <p className="text-river-600 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Advantages list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-river-50 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-river-900 mb-6">
                  Affiliation Advantages
                </h3>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-river-700">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Affiliate */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">How to Affiliate</h2>
            <p className="section-subtitle mx-auto">
              Getting your club affiliated with Leeds DASA is straightforward
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Contact Us',
                  description: 'Get in touch with our committee to discuss affiliation for your club.',
                },
                {
                  step: 2,
                  title: 'Submit Member List',
                  description: 'Provide us with your club member list and contact details.',
                },
                {
                  step: 3,
                  title: 'Payment',
                  description: 'Make payment for your affiliated members at the discounted rate.',
                },
                {
                  step: 4,
                  title: 'Receive Materials',
                  description: 'We\'ll send yearbooks and membership cards for distribution to your members.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-white p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-sunset-700 text-white font-display text-xl font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-river-900 mb-1">{item.title}</h3>
                    <p className="text-river-600">{item.description}</p>
                  </div>
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
            Ready to Affiliate Your Club?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-300 text-lg max-w-2xl mx-auto mb-8"
          >
            Contact us to discuss affiliation and how we can work together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

