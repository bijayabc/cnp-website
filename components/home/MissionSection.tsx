import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import { Quote } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #009B8D 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <SectionTag light>Our Mission</SectionTag>
            <div className="mt-4">
              <Quote size={48} className="text-accent mb-6 opacity-60" />
              <blockquote className="font-heading text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">
                To empower individuals with developmental disabilities to live meaningful, independent lives through personalized support, community inclusion, and compassionate care.
              </blockquote>
              <p className="text-accent mt-8 font-semibold text-lg">— CNP Community Services</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                <Image
                  src="/assets/cnp director at an event.png"
                  alt="CNP director at a community event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
