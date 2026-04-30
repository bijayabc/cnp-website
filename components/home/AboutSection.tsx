import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="section-heading">About CNP Community Services</h2>
            <Divider />
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                CNP Community Services is a dedicated organization committed to supporting individuals with developmental disabilities and their families. We provide compassionate, person-centered care that promotes independence, dignity, and community belonging.
              </p>
              <p>
                Our team of trained professionals works alongside each individual to design customized support plans that reflect their unique goals, strengths, and aspirations — helping them thrive in every aspect of life.
              </p>
              <p>
                From life skills training to vocational support and summer retreats, we offer a full spectrum of services designed to uplift, include, and empower those we serve.
              </p>
            </div>
            <Link href="/services" className="btn-primary mt-8 inline-flex">
              Explore Our Services <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/10 rounded-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/assets/client and family happy.png"
                  alt="Client and family happy together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
