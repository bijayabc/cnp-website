import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/services/ServiceCard';
import FormsSection from '@/components/services/FormsSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore CNP Community Services programs including community-based supports, life skills training, vocational services, summer retreat, support brokerage, and CNP Treasures.',
};

const SERVICES = [
  {
    iconName: 'Users',
    title: 'Community Based Supports',
    description:
      'Personalized support for daily living, community integration, and skill building — provided where individuals live and work.',
    imageSrc: '/assets/community based supports.png',
    imageAlt: 'Community Based Supports',
  },
  {
    iconName: 'Heart',
    title: 'Life Skills & Individual Support',
    description:
      'Hands-on coaching in cooking, budgeting, hygiene, and communication to build lasting independence.',
    imageSrc: '/assets/Life Skills & Individual Support.png',
    imageAlt: 'Life Skills and Individual Support',
  },
  {
    iconName: 'Briefcase',
    title: 'Vocational Training & Employment Services',
    description:
      'Job readiness, resume support, and employer partnerships to help individuals enter and thrive in the workforce.',
    imageSrc: '/assets/Vocational Training & Employment Services.png',
    imageAlt: 'Vocational Training and Employment Services',
  },
  {
    iconName: 'Sun',
    title: 'Summer Retreat & Respite Services',
    description:
      'Enriching summer programs and short-term respite care that give individuals new experiences and families a well-earned break.',
    imageSrc: '/assets/Summer Retreat & Respite Services.png',
    imageAlt: 'Summer Retreat and Respite Services',
  },
  {
    iconName: 'Network',
    title: 'Support Brokerage',
    description:
      'Guidance navigating NJ DDD services — helping individuals and families understand their options and self-direct their supports.',
    imageSrc: '/assets/Support Brokerage.png',
    imageAlt: 'Support Brokerage',
  },
  {
    iconName: 'ShoppingBag',
    title: 'CNP Treasures',
    description:
      'A community thrift and treasure shop that creates vocational opportunities while raising funds for CNP programs.',
    imageSrc: '/assets/CNP Treasures.png',
    imageAlt: 'CNP Treasures',
  },
];

export default function ServicesPage() {
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
            <SectionTag light>What We Offer</SectionTag>
            <h1 className="section-heading-light mt-2">Our Services</h1>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive, person-centered programs designed to support individuals with developmental disabilities at every stage of life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <SectionTag>Programs</SectionTag>
            <h2 className="section-heading">How We Can Help</h2>
            <Divider className="justify-center" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each service is tailored to the individual&apos;s unique needs, strengths, and aspirations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <FormsSection />

      <section className="py-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold">
              Have questions about our services?
            </h2>
            <p className="text-white/80 mt-2">
              Our team is ready to help you find the right support.
            </p>
          </div>
          <Link href="/contact" className="btn-dark whitespace-nowrap flex-shrink-0">
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
