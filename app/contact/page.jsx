'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { anglersClub } from '@/lib/data';

function FormError({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className="flex items-center gap-1.5 mt-2 text-red-600 text-sm"
    >
      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </motion.div>
  );
}

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your name';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return null;
      case 'email':
        if (!value.trim()) return 'Please enter your email address';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return null;
      case 'subject':
        if (!value) return 'Please select a subject';
        return null;
      case 'message':
        if (!value.trim()) return 'Please enter your message';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return null;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user starts typing
    if (touched[id]) {
      const error = validateField(id, value);
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    const error = validateField(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    const fields = ['name', 'email', 'subject', 'message'];
    
    fields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all";
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-300 focus:ring-red-500 focus:border-transparent bg-red-50`;
    }
    return `${baseClass} border-river-200 focus:ring-sunset-500 focus:border-transparent`;
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
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll respond within 2-3 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-river-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('name')}
                        placeholder="John Smith"
                      />
                      <AnimatePresence>
                        {errors.name && touched.name && <FormError message={errors.name} />}
                      </AnimatePresence>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-river-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('email')}
                        placeholder="john@example.com"
                      />
                      <AnimatePresence>
                        {errors.email && touched.email && <FormError message={errors.email} />}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-river-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-river-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition-all"
                      placeholder="07123 456789"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-river-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName('subject')}
                    >
                      <option value="">Select a subject...</option>
                      <option value="membership">Membership Enquiry</option>
                      <option value="waters">Waters Information</option>
                      <option value="matches">Matches & Competitions</option>
                      <option value="affiliation">Club Affiliation</option>
                      <option value="club">The Anglers Club</option>
                      <option value="other">Other</option>
                    </select>
                    <AnimatePresence>
                      {errors.subject && touched.subject && <FormError message={errors.subject} />}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-river-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClassName('message')} resize-none`}
                      placeholder="How can we help you?"
                    />
                    <AnimatePresence>
                      {errors.message && touched.message && <FormError message={errors.message} />}
                    </AnimatePresence>
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
                        <Send className="w-5 h-5 ml-2" aria-hidden="true" />
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
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
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
                    <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-river-900 mb-2">Email</h3>
                    <a 
                      href="mailto:info@leedsdasa.co.uk" 
                      className="text-sunset-700 hover:text-sunset-800 transition-colors"
                    >
                      info@leedsdasa.co.uk
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 p-6 bg-river-50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-earth-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" aria-hidden="true" />
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
              <div className="aspect-[4/3] rounded-2xl bg-river-200 flex items-center justify-center overflow-hidden" role="img" aria-label="Map showing club location">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-river-400 mx-auto mb-2" aria-hidden="true" />
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

