import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Take the Next Step</p>
          <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking for services, want to join our team, or simply want to learn more — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link href="/events" className="btn-outline-white text-base">
              Upcoming Events <Calendar size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
