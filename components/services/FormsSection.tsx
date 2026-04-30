'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Tent, Scale, Globe, ClipboardList, Info } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';

const PDF_DOCS = [
  { icon: Tent,      label: 'CNP Camp Application 2026',   href: '/pdfs/CNP-Camp-Application-2026.pdf' },
  { icon: FileText,  label: 'DDD Application — Full Form',  href: '/pdfs/DDD-Full-Fillable-Form.pdf' },
  { icon: FileText,  label: 'DDD Application — Short Form', href: '/pdfs/DDD-Short-Fillable-Form.pdf' },
  { icon: Scale,     label: 'Guardianship Application',     href: '/pdfs/Guardianship-Fillable-Form.pdf' },
];

const ONLINE_FORMS = [
  { icon: ClipboardList, label: 'CNP Community Services – Service Inquiry Form',                          href: 'https://docs.google.com/forms/d/e/1FAIpQLScqTMON8wVDIPgtijopbF3fCzImNjGZSHKqdPt1b49Qyqv9zw/viewform?usp=dialog' },
  { icon: Tent,          label: 'CNP Community Services – Camp Intake 2026',                              href: 'https://docs.google.com/forms/d/e/1FAIpQLSeuOcg-7lH7w7pjrzwxVaUJeum9bImcB9IfXMYUq1XMzqcPJQ/viewform?usp=dialog' },
  { icon: Scale,         label: 'Guardianship Intake Questionnaire – Adult with a Disability',            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeufBX95u_FtWyCDS_QmU3nFg0D7iH2a4IFP62WaO2ruLR4ag/viewform?usp=dialog' },
  { icon: Globe,         label: 'Guardianship Intake Questionnaire – Adult with a Disability (Español)',  href: 'https://docs.google.com/forms/d/e/1FAIpQLSczhz8WqXeuEf6ELJJVPRkONm7emLCXQxCHAqgK0FRfDmLuUg/viewform?usp=dialog' },
  { icon: FileText,      label: 'NJ DDD Services Application – Full Questionnaire',                       href: 'https://docs.google.com/forms/d/e/1FAIpQLSc0HrTOEZNHaZctOKGEj00crN7b2Dl8FCFDlaIxnmm4DviTHw/viewform?usp=dialog' },
  { icon: FileText,      label: 'NJ DDD Services Application – Short Questionnaire',                      href: 'https://docs.google.com/forms/d/e/1FAIpQLSd-DUrBjOxt_ap7SNDrejTMzr77AsA_ddOk2766cmCDG7BTuA/viewform?usp=dialog' },
];

function AnimatedRow({
  icon: Icon,
  label,
  href,
  badge,
  badgeClass,
  index,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  badge: string;
  badgeClass: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.07 }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4, transition: { duration: 0.15 } }}
        className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-accent hover:shadow-md transition-colors duration-200 group"
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.15 } }}
          className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0"
        >
          <Icon size={16} className="text-accent" />
        </motion.div>
        <span className="flex-1 text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
          {label}
        </span>
        <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded ${badgeClass}`}>
          {badge}
        </span>
      </motion.a>
    </motion.li>
  );
}

export default function FormsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <SectionTag>Resources</SectionTag>
          <h2 className="section-heading">Applications &amp; Forms</h2>
          <Divider />
          <p className="text-gray-600 max-w-2xl text-sm leading-relaxed">
            Download required documents or access our online forms below. If you need assistance
            completing any application, please{' '}
            <Link href="/contact" className="font-semibold text-primary hover:text-accent transition-colors">
              contact us
            </Link>{' '}
            — we&apos;re happy to help.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection delay={0.05}>
            <div className="flex items-center gap-2 mb-4">
              <Download size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-primary text-lg">Downloadable Documents</h3>
            </div>
            <ul className="space-y-3">
              {PDF_DOCS.map(({ icon, label, href }, i) => (
                <AnimatedRow
                  key={href}
                  icon={icon}
                  label={label}
                  href={href}
                  badge="PDF"
                  badgeClass="bg-red-100 text-red-600"
                  index={i}
                />
              ))}
            </ul>
            <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-4">
              <Info size={12} />
              PDF documents will open in a new tab. Right-click to save.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <ExternalLink size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-primary text-lg">Online Forms</h3>
            </div>
            <ul className="space-y-3">
              {ONLINE_FORMS.map(({ icon, label, href }, i) => (
                <AnimatedRow
                  key={href}
                  icon={icon}
                  label={label}
                  href={href}
                  badge="FORM"
                  badgeClass="bg-accent-light text-accent"
                  index={i}
                />
              ))}
            </ul>
            <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-4">
              <Info size={12} />
              Online forms open in Google Forms. A Google account is not required.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
