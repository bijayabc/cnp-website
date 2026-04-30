import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';
import { CheckCircle } from 'lucide-react';

const DIFFERENTIATORS = [
  'Client-driven daily activity choices',
  'Passion-based individualized plans',
  'Trained, compassionate professionals',
  'Community-integrated support model',
];

export default function WhatsetsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-accent-light rounded-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/assets/client smiling.png"
                  alt="Client smiling and thriving"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <SectionTag>Our Approach</SectionTag>
            <h2 className="section-heading">What Sets Us Apart</h2>
            <Divider />
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike most service providers who dictate each day&apos;s activities to clients, we empower our clients to make choices driven by their passions and interests. Success in life is unique for each individual. We value and support those differences.
            </p>
            <ul className="space-y-3">
              {DIFFERENTIATORS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
