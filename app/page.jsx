'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Fish, MapPin, Users, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import WaterCard from '@/components/ui/WaterCard';
import FeatureCard from '@/components/ui/FeatureCard';
import { rivers, canals, lakes, membershipBenefits, upcomingMatches } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-river-900 via-river-800 to-river-950" />
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-sunset-500/20 rounded-full blur-3xl animate-orb-pulse" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-river-400/20 rounded-full blur-3xl animate-orb-pulse-reverse" />
          
          {/* Water pattern overlay */}
          <div className="absolute inset-0 bg-water-pattern opacity-10" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              2026 Memberships now available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-300 to-sunset-500">
              Leeds & District<br />
                Amalgamated Society
              <br />of Anglers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-river-100 max-w-2xl mb-10 leading-relaxed"
            >
              Join one of the largest and oldest angling associations in England. 
              Access over 40 waters across rivers, canals, and lakes with your membership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/membership" className="btn-primary text-lg px-8 py-4">
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
              <Link 
                href="/waters" 
                className="inline-flex items-center gap-2 px-6 py-4 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors"
              >
                Explore Our Waters
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
            >
              {[
                { icon: MapPin, value: '40+', label: 'Waters' },
                { icon: Users, value: '1903', label: 'Est.' },
                { icon: Calendar, value: '365', label: 'Days Access' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-sunset-400" aria-hidden="true" />
                  <div>
                    <span className="font-display text-2xl font-bold text-white">{stat.value}</span>
                    <span className="ml-2 text-river-200">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Instant Access Banner */}
      <section className="bg-sunset-500 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <CreditCard className="w-8 h-8 text-white" aria-hidden="true" />
            <p className="text-white font-semibold text-lg">
              As soon as you pay, you can go fishing! Simply show your PayPal receipt as proof of membership.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-river-50 to-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Join Leeds DASA?"
            subtitle="Membership benefits that make us one of England's premier angling societies"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <FeatureCard key={benefit.title} feature={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Rivers Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Rivers"
            subtitle="Explore our diverse river stretches across the Yorkshire region"
            link="/waters/rivers"
            linkText="View all rivers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rivers.slice(0, 4).map((river, index) => (
              <WaterCard key={river.id} water={river} type="rivers" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Canals Section */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <SectionHeader
            title="Canals"
            subtitle="Miles of peaceful canal fishing with easy access"
            link="/waters/canals"
            linkText="View all canals"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canals.slice(0, 3).map((canal, index) => (
              <WaterCard key={canal.id} water={canal} type="canals" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Lakes Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Lakes"
            subtitle="Stillwater fishing on beautiful lakes and pools"
            link="/waters/lakes"
            linkText="View all lakes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lakes.slice(0, 3).map((lake, index) => (
              <WaterCard key={lake.id} water={lake} type="lakes" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-24 bg-gradient-to-br from-river-900 to-river-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-5" />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            title="Upcoming Matches"
            subtitle="Compete in our regular matches and championships"
            link="/matches/calendar"
            linkText="View full calendar"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingMatches.slice(0, 4).map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    match.type === 'League' ? 'bg-river-400/20 text-river-200' :
                    match.type === 'Championship' ? 'bg-sunset-400/20 text-sunset-200' :
                    'bg-white/10 text-white/80'
                  }`}>
                    {match.type}
                  </span>
                  <span className="text-river-200 text-sm">{match.time}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{match.name}</h3>
                <div className="flex items-center gap-2 text-river-200">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">{match.venue}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-sunset-400 font-medium">
                    {new Date(match.date).toLocaleDateString('en-GB', { 
                      weekday: 'long',
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative styling */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-river-600 to-transparent" />
      </section>

      {/* Anglers Club CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-earth-100 to-earth-50 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sunset-700 font-semibold mb-4"
                >
                  Social Club
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="section-title mb-6"
                >
                  The Anglers Club
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-river-600 text-lg mb-8 leading-relaxed"
                >
                  Members automatically gain social membership to The Anglers Club. 
                  Enjoy our bar, events, and facilities in the heart of Leeds.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/anglers-club" className="btn-secondary">
                    Visit The Anglers Club
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-river-700 to-river-800 flex items-center justify-center">
                <Fish className="w-32 h-32 text-white/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-river-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Stay Updated
              </h2>
              <p className="text-river-300">
                Register on our forum to receive monthly newsletters with match bookings, venue info, and more.
              </p>
            </div>
            <Link href="/forum" className="btn-primary whitespace-nowrap">
              Join Our Forum
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

