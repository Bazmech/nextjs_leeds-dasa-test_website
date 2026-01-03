'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion, Send, Check, AlertCircle } from 'lucide-react';
import { submitQuestion } from '@/app/actions/faq';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-river-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-500 focus-visible:ring-inset rounded"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-semibold text-river-900 pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-river-500 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-river-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

function AskQuestionForm({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
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
      case 'question':
        if (!value.trim()) return 'Please enter your question';
        if (value.trim().length < 10) return 'Question must be at least 10 characters';
        return null;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    const fields = ['name', 'email', 'question'];
    
    fields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, question: true });
    return Object.keys(newErrors).length === 0;
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all text-river-900 placeholder:text-river-400";
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-300 focus:ring-red-500 focus:border-transparent bg-red-50`;
    }
    return `${baseClass} border-river-200 focus:ring-sunset-500 focus:border-transparent`;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('question', formData.question);
    formDataObj.append('page', page);
    
    const result = await submitQuestion(formDataObj);
    
    if (result) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', question: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }
    setIsSubmitting(false);
  }

  return (
    <div className="border-river-200 pt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-river-600 to-river-700 hover:from-river-700 hover:to-river-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <MessageCircleQuestion className="w-5 h-5" />
        Can't find your answer? Ask a question
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="faq-name" className="block text-sm font-medium text-river-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="faq-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('name')}
                  placeholder="Your name"
                />
                <AnimatePresence>
                  {errors.name && touched.name && <FormError message={errors.name} />}
                </AnimatePresence>
              </div>
              
              <div>
                <label htmlFor="faq-email" className="block text-sm font-medium text-river-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="faq-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('email')}
                  placeholder="your@email.com"
                />
                <AnimatePresence>
                  {errors.email && touched.email && <FormError message={errors.email} />}
                </AnimatePresence>
              </div>
              
              <div>
                <label htmlFor="faq-question" className="block text-sm font-medium text-river-700 mb-2">
                  Your Question *
                </label>
                <textarea
                  id="faq-question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`${getInputClassName('question')} resize-none`}
                  placeholder="What would you like to know?"
                />
                <AnimatePresence>
                  {errors.question && touched.question && <FormError message={errors.question} />}
                </AnimatePresence>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn-primary w-full justify-center ${
                  isSubmitted 
                    ? '!bg-green-600 hover:!bg-green-600 cursor-default'
                    : 'disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Question Submitted!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Question
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ faqs, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState([0]); // First item open by default
  const pathname = usePathname();

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
      <AskQuestionForm page={pathname} />
    </div>
  );
}

