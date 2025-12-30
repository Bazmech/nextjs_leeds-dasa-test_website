'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CreditCard, Shield, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { membershipPrices } from '@/lib/data';

export default function IndividualMembershipPage() {
  const [selectedType, setSelectedType] = useState('adult');

  const membershipOptions = [
    { key: 'adult', label: 'Adult', age: '18-64' },
    { key: 'senior', label: 'Senior', age: '65+' },
    { key: 'junior', label: 'Junior', age: '12-17' },
    { key: 'child', label: 'Child', age: 'Under 12' },
    { key: 'disabled', label: 'Disabled', age: 'Registered disabled' },
  ];

  const benefits = [
    'Access to 40+ waters across Leeds and district',
    'Fish on rivers, canals, and lakes',
    'Automatic Anglers Club social membership',
    'Entry to club matches and championships',
    'Monthly newsletter subscription',
    'Comprehensive yearbook with maps',
    'Instant access - show PayPal receipt',
    'Valid January 1st to December 31st',
  ];

  return (
    <>
      <PageHero
        title="Individual Membership"
        subtitle="Personal membership with full access to all Leeds DASA waters and facilities."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Pricing selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-2">
                Select Your Membership
              </h2>
              <p className="text-river-600 mb-8">
                Choose the membership type that applies to you.
              </p>

              {/* Membership type selector */}
              <div className="space-y-3 mb-8">
                {membershipOptions.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setSelectedType(option.key)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      selectedType === option.key
                        ? 'border-sunset-500 bg-sunset-50'
                        : 'border-river-200 hover:border-river-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedType === option.key
                          ? 'border-sunset-700 bg-sunset-700'
                          : 'border-river-300'
                      }`}>
                        {selectedType === option.key && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-river-900">{option.label}</span>
                        <span className={`text-sm ml-2 ${selectedType === option.key ? 'text-river-700' : 'text-river-600'}`}>({option.age})</span>
                      </div>
                    </div>
                    <span className="font-display text-2xl font-bold text-river-900">
                      £{membershipPrices.individual[option.key].price}
                    </span>
                  </button>
                ))}
              </div>

              {/* Family option */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-sunset-600 to-sunset-700 text-white mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">Family Membership</span>
                    <p className="text-white/80 text-sm">{membershipPrices.family.description}</p>
                  </div>
                  <span className="font-display text-2xl font-bold">£{membershipPrices.family.price}</span>
                </div>
              </div>

              {/* Buy button */}
              <div className="space-y-4">
                <button className="btn-primary w-full justify-center text-lg py-4">
                  Buy Now - £{membershipPrices.individual[selectedType].price}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                
                <div className="flex items-center justify-center gap-6 text-sm text-river-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Instant access</span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-2">
                What's Included
              </h2>
              <p className="text-river-600 mb-8">
                Everything you get with your Leeds DASA membership.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-river-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Important notice */}
              <div className="mt-8 p-6 bg-sunset-50 rounded-xl border border-sunset-200">
                <h3 className="font-semibold text-river-900 mb-2">Important</h3>
                <p className="text-river-600 text-sm">
                  Membership runs from January 1st to December 31st each year. There is no joining fee. 
                  As soon as you pay, you can go fishing - simply show your PayPal receipt as proof of membership 
                  until your card/yearbook arrives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

