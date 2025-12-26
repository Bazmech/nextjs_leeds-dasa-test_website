'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Users, Bell, Calendar, 
  ArrowRight, ExternalLink, Mail, Check 
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export default function ForumPage() {
  const forumBenefits = [
    {
      icon: Bell,
      title: 'Monthly Newsletter',
      description: 'Receive updates on matches, venue changes, and society news directly to your inbox.',
    },
    {
      icon: MessageSquare,
      title: 'Community Discussion',
      description: 'Connect with fellow anglers, share tips, and discuss your catches.',
    },
    {
      icon: Calendar,
      title: 'Match Updates',
      description: 'Get notified about upcoming matches, results, and booking deadlines.',
    },
    {
      icon: Users,
      title: 'Member Network',
      description: 'Build connections with anglers across the society.',
    },
  ];

  const features = [
    'Delegates meeting summaries',
    'Match bookings and results',
    'Venue information updates',
    'Close season notifications',
    'Special events announcements',
    'Tips and tackle advice',
  ];

  return (
    <>
      <PageHero
        title="Forum"
        subtitle="Join our online community to stay connected, receive updates, and discuss all things fishing."
      />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Why Join Our Forum?</h2>
            <p className="section-subtitle mx-auto">
              Stay connected with the Leeds DASA community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {forumBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sunset-400 to-sunset-600 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-river-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-river-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Info */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sunset-700 font-semibold mb-4 block">Members Newsletter</span>
              <h2 className="section-title mb-6">
                Stay Informed with Monthly Updates
              </h2>
              <p className="text-river-600 text-lg mb-8 leading-relaxed">
                When you register on our forum, you'll automatically be included in our 
                monthly email newsletter. This keeps you up to date with everything 
                happening at Leeds DASA.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-river-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Newsletter preview mockup */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-river-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-sunset-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-white">
                      <span className="font-semibold block">Leeds DASA Newsletter</span>
                      <span className="text-river-300 text-sm">January 2026</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-river-100 rounded w-3/4" />
                  <div className="h-4 bg-river-100 rounded w-full" />
                  <div className="h-4 bg-river-100 rounded w-5/6" />
                  <div className="h-px bg-river-200 my-4" />
                  <div className="h-4 bg-river-100 rounded w-2/3" />
                  <div className="h-4 bg-river-100 rounded w-full" />
                  <div className="h-4 bg-river-100 rounded w-4/5" />
                </div>
              </div>
            </motion.div>
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
            className="inline-flex items-center justify-center w-20 h-20 bg-sunset-600 rounded-2xl mb-8"
          >
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Join the Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-300 text-lg max-w-2xl mx-auto mb-8"
          >
            Register on our forum today and never miss an update from Leeds DASA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="https://www.leedsdasa.co.uk/forum" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Register Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <Link href="/membership" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-river-900">
              Become a Member
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

