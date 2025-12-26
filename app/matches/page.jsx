'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { upcomingMatches, clubMeetings } from '@/lib/data';

export default function MatchesPage() {
  return (
    <>
      <PageHero
        title="Matches & Meetings"
        subtitle="Compete in our regular matches or attend club meetings to stay informed about society matters."
      />

      {/* Match Types */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Match Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/matches/calendar" className="block group">
                <div className="card p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sunset-400 to-sunset-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-river-900 mb-4">
                    Match Calendar
                  </h3>
                  <p className="text-river-600 mb-6">
                    View all upcoming matches including league rounds, open matches, and championships. 
                    Book your place and see results.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sunset-700 font-semibold group-hover:gap-3 transition-all">
                    View calendar
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Club Meetings */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/matches/meetings" className="block group">
                <div className="card p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-river-500 to-river-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-river-900 mb-4">
                    Club Meetings
                  </h3>
                  <p className="text-river-600 mb-6">
                    Stay informed about society matters by attending our regular delegates meetings 
                    and annual general meeting.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sunset-700 font-semibold group-hover:gap-3 transition-all">
                    View meetings
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches Preview */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="section-title mb-2">Upcoming Matches</h2>
              <p className="text-river-600">Next few matches on the calendar</p>
            </div>
            <Link
              href="/matches/calendar"
              className="hidden md:inline-flex items-center gap-2 text-sunset-700 font-semibold hover:gap-3 transition-all"
            >
              View full calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingMatches.slice(0, 4).map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-river-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    match.type === 'League' ? 'bg-river-100 text-river-700' :
                    match.type === 'Championship' ? 'bg-sunset-100 text-sunset-700' :
                    'bg-earth-100 text-earth-700'
                  }`}>
                    {match.type}
                  </span>
                  <div className="flex items-center gap-1 text-river-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {match.time}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-river-900 mb-2">{match.name}</h3>
                <p className="text-river-600 text-sm mb-4">{match.venue}</p>
                <div className="pt-4 border-t border-river-100">
                  <span className="text-sunset-700 font-medium">
                    {new Date(match.date).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/matches/calendar" className="btn-primary">
              View Full Calendar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Match Types */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Match Types</h2>
            <p className="section-subtitle mx-auto">
              Various competitions throughout the season
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Championships',
                description: 'Annual championships with heats leading to finals. Compete for prestigious titles.',
                color: 'from-sunset-400 to-sunset-600',
              },
              {
                icon: Calendar,
                title: 'League Matches',
                description: 'Regular league rounds throughout the season. Accumulate points across multiple venues.',
                color: 'from-river-400 to-river-600',
              },
              {
                icon: Users,
                title: 'Open Matches',
                description: 'Open to all members. A great way to fish different venues and meet fellow anglers.',
                color: 'from-earth-400 to-earth-600',
              },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}>
                  <type.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-river-900 mb-3">{type.title}</h3>
                <p className="text-river-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

