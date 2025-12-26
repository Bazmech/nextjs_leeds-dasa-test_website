'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, User, Building2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import FeatureCard from '@/components/ui/FeatureCard';
import { membershipBenefits, membershipPrices } from '@/lib/data';

const membershipTypes = [
  {
    title: 'Individual Membership',
    description: 'Personal membership with full access to all waters and facilities.',
    icon: User,
    href: '/membership/individual',
    featured: true,
  },
  {
    title: 'Club Affiliation',
    description: 'Affiliate your club with Leeds DASA and save your members money.',
    icon: Building2,
    href: '/membership/club-affiliation',
  },
  {
    title: 'Yearbook',
    description: 'Get your comprehensive yearbook with water details and maps.',
    icon: Users,
    href: '/membership/yearbook',
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        subtitle="Join one of England's largest and oldest angling associations and start fishing today."
      />

      {/* Membership Types */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  type.featured 
                    ? 'border-sunset-500 bg-gradient-to-b from-sunset-50 to-white' 
                    : 'border-river-200 hover:border-river-300'
                }`}
              >
                {type.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sunset-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  type.featured ? 'bg-sunset-500' : 'bg-river-700'
                }`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-river-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-river-600 mb-6">
                  {type.description}
                </p>
                <Link
                  href={type.href}
                  className={`inline-flex items-center gap-2 font-semibold ${
                    type.featured ? 'text-sunset-700 hover:text-sunset-800' : 'text-river-700 hover:text-river-800'
                  }`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Individual Membership Prices</h2>
            <p className="section-subtitle mx-auto">
              Membership runs from January 1st to December 31st. No joining fee required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {Object.entries(membershipPrices.individual).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg shadow-river-950/5"
              >
                <span className="text-river-600 font-semibold capitalize">{key}</span>
                <div className="my-4">
                  <span className="font-display text-4xl font-bold text-river-900">£{value.price}</span>
                </div>
                <p className="text-sm text-river-500">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Family membership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-md mx-auto bg-gradient-to-br from-sunset-500 to-sunset-600 rounded-xl p-6 text-center text-white"
          >
            <span className="font-semibold">Family Membership</span>
            <div className="my-4">
              <span className="font-display text-4xl font-bold">£{membershipPrices.family.price}</span>
            </div>
            <p className="text-sm text-white/80">{membershipPrices.family.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/membership/individual" className="btn-primary">
              Buy Membership Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Membership Benefits</h2>
            <p className="section-subtitle mx-auto">
              Everything you get when you become a Leeds DASA member
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <FeatureCard key={benefit.title} feature={benefit} index={index} />
            ))}
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
            Ready to Start Fishing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-300 text-lg max-w-2xl mx-auto mb-8"
          >
            Join today and get instant access to over 40 waters. Show your PayPal receipt as proof of membership.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/membership/individual" className="btn-primary text-lg">
              Become a Member
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

