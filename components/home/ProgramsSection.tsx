import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';

export default function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left" delay={0.1} className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-primary/10 rounded-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/assets/client enjoying themself.png"
                  alt="Client enjoying an activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <SectionTag>Our Programs</SectionTag>
            <h2 className="section-heading">What We Offer</h2>
            <Divider />
            <p className="text-gray-700 leading-relaxed mb-6">
              Each person has the ability to shine and grow through self-directed activities, in-home and community-based supports, life skills training, vocational and employment services, volunteer work, internships, respite care, and guardianship preparation.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {[
                'Community-Based Supports',
                'Life Skills Training',
                'Vocational Services',
                'Summer Retreat',
                'Support Brokerage',
                'Respite Care',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn-primary inline-flex">
              Explore Our Services <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
