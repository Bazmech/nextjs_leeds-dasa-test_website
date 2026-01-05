'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Fish, 
  AlertTriangle, Check, Calendar, ArrowRight,
  Car, Waves, Footprints
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import RiverLevel from '@/components/RiverLevel';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { rivers, canals, lakes, parkingDistances } from '@/lib/data';
import { riverStations } from '@/lib/riverStations';

const waterFaqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipiscing?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Duis aute irure dolor in reprehenderit?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Sed ut perspiciatis unde omnis iste natus error?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    question: 'Nemo enim ipsam voluptatem quia voluptas sit?',
    answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    question: 'Neque porro quisquam est qui dolorem ipsum?',
    answer: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
];

const allWaters = {
  rivers,
  canals,
  lakes,
};

export default function WaterDetail({ type, id }) {
  const waters = allWaters[type] || [];
  const water = waters.find(w => w.id === id);
  const station = type === 'rivers' ? riverStations[id] : null;
  const parkingInfo = type === 'rivers' ? parkingDistances[id] : null;

  if (!water) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-river-900 mb-4">Water Not Found</h1>
          <p className="text-river-600 mb-8">Sorry, we couldn't find the water you're looking for.</p>
          <Link href="/waters" className="btn-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Waters
          </Link>
        </div>
      </div>
    );
  }

  const typeName = type === 'rivers' ? 'River' : type === 'canals' ? 'Canal' : 'Lake';

  return (
    <>
      <PageHero
        title={water.name}
        subtitle={water.description}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-river-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/waters" className="text-river-500 hover:text-river-700">Waters</Link>
            <span className="text-river-300">/</span>
            <Link href={`/waters/${type}`} className="text-river-500 hover:text-river-700 capitalize">{type}</Link>
            <span className="text-river-300">/</span>
            <span className="text-river-900 font-medium">{water.name}</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Image placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-video rounded-2xl bg-gradient-to-br from-river-200 to-river-300 flex items-center justify-center mb-8 overflow-hidden"
              >
                <Fish className="w-24 h-24 text-river-400" />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl font-bold text-river-900 mb-4">About This Water</h2>
                <p className="text-river-600 leading-relaxed">
                  {water.description}
                </p>
                <p className="text-river-600 leading-relaxed mt-4">
                  This {typeName.toLowerCase()} offers excellent fishing opportunities for members of Leeds DASA. 
                  Please ensure you have your membership card with you at all times and follow all 
                  rules and regulations as outlined in your yearbook.
                </p>
              </motion.div>

              {/* Species */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl font-bold text-river-900 mb-4">Species Present</h2>
                <div className="flex flex-wrap gap-2">
                  {water.species.map((species) => (
                    <span 
                      key={species}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-river-100 text-river-700 rounded-full"
                    >
                      <Fish className="w-4 h-4" />
                      {species}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Facilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl font-bold text-river-900 mb-4">Facilities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {water.facilities.map((facility) => (
                    <div 
                      key={facility}
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-xl"
                    >
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-river-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Parking to Riverbank Distance - only for rivers with data */}
              {parkingInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mb-8"
                >
                  <h2 className="font-display text-2xl font-bold text-river-900 mb-4">
                    Walk to Riverbank
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-river-50 rounded-2xl p-4 sm:p-6 border border-river-200">
                    {/* Mobile: vertical stack, Desktop: horizontal */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                      {/* Car icon */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg">
                          <Car className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <span className="text-river-600 font-medium text-sm sm:text-base">Parking</span>
                      </div>
                      
                      {/* Distance indicator */}
                      <div className="flex flex-col items-center gap-2 py-2 sm:py-0">
                        {/* Arrow down on mobile */}
                        <div className="flex sm:hidden text-river-300">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        
                        {parkingInfo.distance === 0 ? (
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm sm:text-base">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Park on bank!</span>
                          </div>
                        ) : (
                          <div className="flex flex-col sm:flex-row items-center gap-2">
                            {/* Footprints - hidden on mobile */}
                            <div className="hidden sm:flex items-center gap-1 text-river-400">
                              {[...Array(Math.min(Math.ceil(parkingInfo.distance / 100), 8))].map((_, i) => (
                                <Footprints key={i} className="w-4 h-4" style={{ opacity: 1 - (i * 0.1) }} />
                              ))}
                            </div>
                            <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-river-200">
                              <span className="text-xl sm:text-2xl font-bold text-river-900">{parkingInfo.distance}</span>
                              <span className="text-river-500 ml-1 text-sm sm:text-base">metres</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Arrow down on mobile */}
                        <div className="flex sm:hidden text-river-300">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Riverbank icon */}
                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline text-river-600 font-medium text-sm sm:text-base">Riverbank</span>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                          <Waves className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <span className="sm:hidden text-river-600 font-medium text-sm">Riverbank</span>
                      </div>
                    </div>
                    
                    {/* Note if available */}
                    {parkingInfo.note && (
                      <div className="mt-4 pt-4 border-t border-river-200">
                        <p className="text-xs sm:text-sm text-river-600 italic text-center">
                          📝 {parkingInfo.note}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl font-bold text-river-900 mb-4">Location</h2>
                <div className="aspect-video rounded-2xl bg-river-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-river-400 mx-auto mb-2" />
                    <span className="text-river-500">Map view</span>
                  </div>
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-display text-2xl font-bold text-river-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={waterFaqs} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24 space-y-6"
              >
                {/* River Level - only for rivers with monitoring stations */}
                {station && (
                  <RiverLevel
                    stationId={station.stationId}
                    stationName={station.stationName}
                    riverName={station.river}
                  />
                )}

                {/* Quick info */}
                <div className="bg-river-50 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-river-900 mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-river-600" />
                      </div>
                      <div>
                        <span className="block text-river-500 text-sm">Type</span>
                        <span className="font-semibold text-river-900">{typeName}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <Fish className="w-5 h-5 text-river-600" />
                      </div>
                      <div>
                        <span className="block text-river-500 text-sm">Species</span>
                        <span className="font-semibold text-river-900">{water.species.length} types</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-river-600" />
                      </div>
                      <div>
                        <span className="block text-river-500 text-sm">Access</span>
                        <span className="font-semibold text-river-900">Members only</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rules reminder */}
                <div className="bg-sunset-50 rounded-2xl p-6 border border-sunset-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-sunset-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-river-900 mb-2">Remember</h3>
                      <ul className="text-sm text-river-600 space-y-1">
                        <li>• Carry your membership card</li>
                        <li>• Follow venue-specific rules</li>
                        <li>• Check close season dates</li>
                        <li>• Handle fish with care</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-river-800 to-river-900 rounded-2xl p-6 text-white">
                  <h3 className="font-display text-lg font-bold mb-2">Want to fish here?</h3>
                  <p className="text-river-300 text-sm mb-4">
                    Join Leeds DASA for access to this water and over 40 more.
                  </p>
                  <Link href="/membership" className="btn-primary w-full justify-center">
                    Join Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Back link */}
                <Link 
                  href={`/waters/${type}`}
                  className="inline-flex items-center gap-2 text-river-600 hover:text-river-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {type}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

