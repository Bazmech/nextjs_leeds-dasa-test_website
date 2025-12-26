'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { upcomingMatches } from '@/lib/data';

export default function MatchCalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(2026);
  const [filterType, setFilterType] = useState('all');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Filter matches
  const filteredMatches = upcomingMatches.filter(match => {
    const matchDate = new Date(match.date);
    const matchesMonth = matchDate.getMonth() === selectedMonth && matchDate.getFullYear() === selectedYear;
    const matchesType = filterType === 'all' || match.type === filterType;
    return matchesType; // For demo, show all matches regardless of month
  });

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <>
      <PageHero
        title="Match Calendar"
        subtitle="View all upcoming matches and book your place. Members can participate in leagues, open matches, and championships."
      />

      {/* Filter & Navigation */}
      <section className="py-8 bg-white border-b border-river-100 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Month navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevMonth}
                className="p-2 rounded-lg hover:bg-river-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-river-700" />
              </button>
              <span className="font-display text-xl font-bold text-river-900 min-w-[180px] text-center">
                {months[selectedMonth]} {selectedYear}
              </span>
              <button
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-river-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-river-700" />
              </button>
            </div>

            {/* Type filter */}
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All' },
                { key: 'League', label: 'League' },
                { key: 'Open', label: 'Open' },
                { key: 'Championship', label: 'Championship' },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setFilterType(filter.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterType === filter.key
                      ? 'bg-river-700 text-white'
                      : 'bg-river-100 text-river-700 hover:bg-river-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-16 bg-river-50 min-h-[50vh]">
        <div className="container-custom">
          {filteredMatches.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-river-300 mx-auto mb-4" />
              <p className="text-river-500 text-lg">No matches scheduled for this period.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredMatches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden border border-river-100 hover:shadow-lg transition-shadow"
                >
                  <div className="grid md:grid-cols-[200px_1fr_200px] gap-6">
                    {/* Date */}
                    <div className={`p-6 flex flex-col items-center justify-center text-center ${
                      match.type === 'Championship' ? 'bg-gradient-to-br from-sunset-600 to-sunset-700' :
                      match.type === 'League' ? 'bg-gradient-to-br from-river-600 to-river-700' :
                      'bg-gradient-to-br from-earth-500 to-earth-600'
                    } text-white`}>
                      <span className="text-sm font-medium opacity-80">
                        {new Date(match.date).toLocaleDateString('en-GB', { weekday: 'long' })}
                      </span>
                      <span className="font-display text-4xl font-bold">
                        {new Date(match.date).getDate()}
                      </span>
                      <span className="text-sm font-medium">
                        {new Date(match.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          match.type === 'League' ? 'bg-river-100 text-river-700' :
                          match.type === 'Championship' ? 'bg-sunset-100 text-sunset-700' :
                          'bg-earth-100 text-earth-700'
                        }`}>
                          {match.type}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-river-900 mb-3">
                        {match.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-river-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-river-400" />
                          <span>{match.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-river-400" />
                          <span>Draw: {match.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="p-6 flex items-center justify-center border-l border-river-100">
                      <button className="btn-primary">
                        Book Place
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-river-900 mb-6 text-center">
              Match Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-river-50 rounded-xl">
                <h3 className="font-semibold text-river-900 mb-2">Booking</h3>
                <p className="text-river-600 text-sm">
                  Book your place in matches through our forum or by contacting the match secretary. 
                  Booking closes 48 hours before each match.
                </p>
              </div>
              <div className="p-6 bg-river-50 rounded-xl">
                <h3 className="font-semibold text-river-900 mb-2">Draw Times</h3>
                <p className="text-river-600 text-sm">
                  Draw times are shown for each match. Please arrive at least 30 minutes before 
                  the draw to sign in and prepare.
                </p>
              </div>
              <div className="p-6 bg-river-50 rounded-xl">
                <h3 className="font-semibold text-river-900 mb-2">Entry Fees</h3>
                <p className="text-river-600 text-sm">
                  Entry fees vary by match type. League matches and open matches typically have 
                  different fee structures.
                </p>
              </div>
              <div className="p-6 bg-river-50 rounded-xl">
                <h3 className="font-semibold text-river-900 mb-2">Results</h3>
                <p className="text-river-600 text-sm">
                  Match results are posted on our forum and announced at The Anglers Club 
                  after each event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

