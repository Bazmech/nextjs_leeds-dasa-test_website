'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { clubMeetings } from '@/lib/data';

export default function MeetingsPage() {
  return (
    <>
      <PageHero
        title="Club Meetings"
        subtitle="Stay informed about society matters by attending our regular meetings at The Anglers Club."
      />

      {/* Upcoming Meetings */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="section-title mb-4">Upcoming Meetings</h2>
            <p className="section-subtitle">
              All meetings are held at The Anglers Club unless otherwise stated.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl">
            {clubMeetings.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-river-50 rounded-xl p-6 border border-river-100"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Date */}
                  <div className="flex items-center gap-4 md:w-48 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-river-700 text-white flex flex-col items-center justify-center">
                      <span className="font-display text-xl font-bold">
                        {new Date(meeting.date).getDate()}
                      </span>
                      <span className="text-xs">
                        {new Date(meeting.date).toLocaleDateString('en-GB', { month: 'short' })}
                      </span>
                    </div>
                    <div>
                      <span className="block font-semibold text-river-900">
                        {new Date(meeting.date).toLocaleDateString('en-GB', { weekday: 'long' })}
                      </span>
                      <span className="text-river-600 text-sm">{meeting.time}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <h3 className="font-display text-xl font-bold text-river-900 mb-2">
                      {meeting.name}
                    </h3>
                    <p className="text-river-600 text-sm mb-2">{meeting.description}</p>
                    <div className="flex items-center gap-2 text-river-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{meeting.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Types of Meetings</h2>
            <p className="section-subtitle mx-auto">
              Regular opportunities to get involved in society matters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-river-700 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-river-900 mb-4">
                Delegates Meetings
              </h3>
              <p className="text-river-600 mb-4">
                Monthly meetings where club delegates discuss society matters, venue updates, 
                and upcoming events. All affiliated clubs should send a representative.
              </p>
              <ul className="space-y-2 text-river-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sunset-600 rounded-full" />
                  Held monthly at The Anglers Club
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sunset-600 rounded-full" />
                  Usually 7:30pm start time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sunset-600 rounded-full" />
                  Minutes distributed to all clubs
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-sunset-600 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-river-900 mb-4">
                Annual General Meeting
              </h3>
              <p className="text-river-600 mb-4">
                The AGM is held once a year and is open to all members. Important decisions 
                about the society's future are made and officers are elected.
              </p>
              <ul className="space-y-2 text-river-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sunset-600 rounded-full" />
                  Held annually in March
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sunset-600 rounded-full" />
                  All members welcome
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sunset-600 rounded-full" />
                  Election of officers
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-river-900 to-river-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-5" />
        <div className="container-custom relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Stay Informed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-300 text-lg max-w-2xl mx-auto mb-8"
          >
            Register on our forum to receive monthly newsletters with meeting summaries, 
            venue updates, and society news.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/forum" className="btn-primary text-lg">
              Join Our Forum
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

