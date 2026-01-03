'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Phone, ExternalLink, 
  Beer, Tv, CircleDot, Car, Accessibility, Calendar,
  ArrowRight
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { anglersClub } from '@/lib/data';

export default function AnglersClubPage() {
  const facilityIcons = {
    'Full bar': Beer,
    'Big screen TV': Tv,
    'Snooker tables': CircleDot,
    'Function room hire': Calendar,
    'Free parking': Car,
    'Wheelchair access': Accessibility,
  };

  return (
    <>
      <PageHero
        title="The Anglers Club"
        subtitle="Our social club in the heart of Leeds. All members automatically receive social membership."
      />

      {/* Overview */}
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
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-earth-600 to-earth-800 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Beer className="w-24 h-24 text-white/30 mx-auto mb-4" />
                  <span className="font-display text-2xl font-bold text-white/50">The Anglers Club</span>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-6 bg-sunset-700 text-white p-6 rounded-2xl shadow-xl">
                <span className="block font-display text-3xl font-bold">Est.</span>
                <span className="font-display text-4xl font-bold">1891</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-4">
                Your Home Away From Home
              </h2>
              <p className="text-river-600 text-lg mb-6 leading-relaxed">
                The Anglers Club has been the heart of our society for over a century. 
                Located on Stoney Rock Lane in Leeds, it's the perfect place to meet 
                fellow anglers, discuss the day's fishing, and enjoy a drink.
              </p>
              <p className="text-river-600 text-lg mb-8 leading-relaxed">
                All Leeds DASA members automatically receive social membership to 
                The Anglers Club, giving you access to our bar, facilities, and events 
                throughout the year.
              </p>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-river-50 rounded-xl mb-6">
                <MapPin className="w-6 h-6 text-sunset-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-river-900 mb-2">Address</h3>
                  <address className="text-river-600 not-italic leading-relaxed">
                    {anglersClub.address.line1}<br />
                    {anglersClub.address.line2}<br />
                    {anglersClub.address.line3}<br />
                    {anglersClub.address.line4}<br />
                    {anglersClub.address.city}<br />
                    {anglersClub.address.postcode}
                  </address>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sunset-700 font-semibold hover:text-sunset-800"
              >
                Get directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-24 bg-river-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Opening Hours</h2>
            <p className="section-subtitle mx-auto">
              Plan your visit to the club
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {Object.entries(anglersClub.openingHours).map(([day, hours], index) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between p-4 ${
                    index !== Object.entries(anglersClub.openingHours).length - 1 
                      ? 'border-b border-river-100' 
                      : ''
                  }`}
                >
                  <span className="font-semibold text-river-900 capitalize">{day}</span>
                  <div className="flex items-center gap-2 w-40">
                    <Clock className="w-4 h-4 text-river-400 shrink-0" />
                    <span className="text-river-600 text-left">{hours}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Facilities</h2>
            <p className="section-subtitle mx-auto">
              Everything you need for a great social experience
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {anglersClub.facilities.map((facility, index) => {
              const Icon = facilityIcons[facility] || Beer;
              return (
                <motion.div
                  key={facility}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-river-50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-river-700 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-river-900">{facility}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-gradient-to-br from-earth-800 to-earth-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Events & Activities
            </h2>
            <p className="text-earth-300 text-lg max-w-2xl mx-auto">
              There's always something happening at The Anglers Club
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {anglersClub.events.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center border border-white/10"
              >
                <span className="text-white font-semibold">{event}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-river-900 mb-6"
          >
            Join Leeds DASA Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-river-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Membership includes automatic social membership to The Anglers Club. 
            Access our bar, facilities, and events as part of your subscription.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/membership" className="btn-primary text-lg">
              Become a Member
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

