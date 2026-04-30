import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Printer, Facebook, Instagram, ExternalLink, Heart, Users, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';
import ContactForm from '@/components/contact/ContactForm';
import FAQAccordion from '@/components/contact/FAQAccordion';

const JOB_APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeigC1KAtD8GeQISsPH01qv9G1blI9K7heUVIVsOYEYKe1zhg/viewform?usp=publish-editor';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CNP Community Services. Contact us about services, apply to join our team, or ask us anything.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(#009B8D 1px, transparent 1px), linear-gradient(90deg, #009B8D 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionTag light>We&apos;d Love to Hear From You</SectionTag>
            <h1 className="section-heading-light mt-2">Get In Touch</h1>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question about our services, want to apply, or just want to learn more? Reach out — we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection direction="left" className="lg:col-span-1">
              <SectionTag>Contact Info</SectionTag>
              <h2 className="section-heading text-2xl sm:text-3xl">Reach Us Directly</h2>
              <Divider />

              <div className="space-y-6 mt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-0.5">Address</p>
                    <p className="text-gray-600 text-sm">239 Main St<br />West Orange, NJ 07052</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-0.5">Email</p>
                    <a href="mailto:programs@mycnpservices.com" className="text-accent text-sm hover:underline">
                      programs@mycnpservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-0.5">Phone</p>
                    <a href="tel:+19737311101" className="text-accent text-sm hover:underline">
                      973-731-1101
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Printer size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-0.5">Fax</p>
                    <p className="text-gray-600 text-sm">973-731-1702</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-primary text-sm mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/cnptreasures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/cnpcommunityservices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-accent-light rounded-2xl border border-accent/20">
                <p className="text-primary font-semibold text-sm mb-1">Office Hours</p>
                <p className="text-gray-600 text-sm">Monday – Friday: 9:00 AM – 5:00 PM</p>
                <p className="text-gray-500 text-xs mt-1">Closed on observed holidays</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <SectionTag>Send a Message</SectionTag>
                <h2 className="section-heading text-2xl sm:text-3xl mb-2">Contact Us</h2>
                <p className="text-gray-600 text-sm mb-8">
                  Fill out the form below and we&apos;ll respond within 1–2 business days.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary to-[#0d2335] rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionTag light>Careers</SectionTag>
                  <h2 className="section-heading-light text-2xl sm:text-3xl mb-4">Join Our Team</h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    We&apos;re always looking for compassionate, dedicated individuals to join the CNP family. If you care about making a real difference in people&apos;s lives, we&apos;d love to hear from you.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      { icon: Users, label: 'Direct Support Professionals' },
                      { icon: Briefcase, label: 'Vocational Job Coaches' },
                      { icon: Heart, label: 'Life Skills Instructors' },
                    ].map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-accent" />
                        </div>
                        {label}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={JOB_APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Apply Now <ExternalLink size={16} />
                  </a>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">What We Look For</p>
                  <ul className="space-y-4">
                    {[
                      'Passion for supporting individuals with developmental disabilities',
                      'Reliable, patient, and empathetic communicator',
                      'Ability to work independently and as part of a team',
                      'Valid driver\'s license preferred for community-based roles',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gray-400 text-xs">
                      Questions about open positions? Email us at{' '}
                      <a href="mailto:programs@mycnpservices.com" className="text-accent hover:underline">
                        programs@mycnpservices.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionTag>FAQs</SectionTag>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <Divider className="justify-center" />
            <p className="text-gray-600">
              Find quick answers to common questions about our services and programs.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
