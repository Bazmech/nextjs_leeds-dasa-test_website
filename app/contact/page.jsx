'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { anglersClub } from '@/lib/data';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Leeds and District Amalgamated Society of Anglers. We're here to help."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-river-600 mb-8">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>

              {formStatus === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll respond within 2-3 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-river-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-shadow"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-river-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-river-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-shadow"
                      placeholder="07123 456789"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-river-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-shadow"
                    >
                      <option value="">Select a subject...</option>
                      <option value="membership">Membership Enquiry</option>
                      <option value="waters">Waters Information</option>
                      <option value="matches">Matches & Competitions</option>
                      <option value="affiliation">Club Affiliation</option>
                      <option value="club">The Anglers Club</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-river-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-shadow resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl font-bold text-river-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-river-600 mb-8">
                You can also reach us through the following channels.
              </p>

              <div className="space-y-6 mb-12">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-river-50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-river-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-river-900 mb-2">Address</h3>
                    <address className="text-river-600 not-italic leading-relaxed">
                      {anglersClub.address.line1}<br />
                      {anglersClub.address.line2}<br />
                      {anglersClub.address.line3}<br />
                      {anglersClub.address.line4}<br />
                      {anglersClub.address.city} {anglersClub.address.postcode}
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-river-50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-sunset-500 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-river-900 mb-2">Email</h3>
                    <a 
                      href="mailto:info@leedsdasa.co.uk" 
                      className="text-sunset-600 hover:text-sunset-700 transition-colors"
                    >
                      info@leedsdasa.co.uk
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 p-6 bg-river-50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-earth-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-river-900 mb-2">Club Opening Hours</h3>
                    <p className="text-river-600">
                      Monday - Thursday: 7pm - 11pm<br />
                      Friday: 7pm - 12am<br />
                      Saturday: 12pm - 12am<br />
                      Sunday: 12pm - 10pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-river-200 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-river-400 mx-auto mb-2" />
                  <span className="text-river-500">Interactive map</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

