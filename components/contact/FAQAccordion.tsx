'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How do I apply for services?',
    answer:
      'Contact us via the form above or call our office. We\'ll schedule an intake meeting to discuss your needs and available programs. Our team will work with you to determine the best fit and develop a personalized support plan.',
  },
  {
    question: 'Does CNP accept DDD funding?',
    answer:
      'Yes. We work with New Jersey\'s Division of Developmental Disabilities (DDD) to support individuals with approved funding plans. Our support brokerage team can help you navigate the DDD system and understand your options.',
  },
  {
    question: 'Where are your services provided?',
    answer:
      'Services are provided in-home, in the community, and at various CNP locations throughout New Jersey. We believe in meeting individuals where they are — in the environments where they live, work, and thrive.',
  },
  {
    question: 'How do I apply for summer camp?',
    answer:
      'Download the Camp Application PDF from our Services page and submit it before the deadline listed on the Events page. You can also contact us directly for assistance completing the application.',
  },
  {
    question: 'What makes CNP different from other providers?',
    answer:
      'Unlike providers who dictate daily schedules, CNP empowers clients to make choices driven by their own passions and interests. We believe success looks different for everyone, and we build individualized plans that reflect each person\'s unique goals and aspirations.',
  },
  {
    question: 'How do I get started with support brokerage?',
    answer:
      'Download our DDD forms from the Services page and contact our support brokerage team. We\'ll guide you through the process of self-directing your services and help you understand what funding and supports you may be eligible for.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors duration-200 ${
              isOpen ? 'border-accent bg-accent-light' : 'border-gray-200 bg-white hover:border-accent/40'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`font-heading font-bold text-base pr-4 ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
              >
                <ChevronDown size={20} className={isOpen ? 'text-accent' : 'text-gray-400'} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
