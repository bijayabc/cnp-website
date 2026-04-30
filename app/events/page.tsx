import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import Divider from '@/components/ui/Divider';
import EventsCalendar from '@/components/events/EventsCalendar';
import FlyerCarousel from '@/components/events/FlyerCarousel';

export const metadata: Metadata = {
  title: 'Events',
  description: 'View upcoming CNP Community Services events, camp deadlines, workshops, and community activities on our events calendar.',
};

export default function EventsPage() {
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
            <SectionTag light>Stay Connected</SectionTag>
            <h1 className="section-heading-light mt-2">Events & Calendar</h1>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
              Stay up to date with CNP Community Services events, deadlines, workshops, and community activities throughout the year.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionTag>Monthly View</SectionTag>
            <h2 className="section-heading">Events Calendar</h2>
            <Divider />
            <p className="text-gray-600 max-w-xl">
              Click on a highlighted date to see the event details. Use the arrows to navigate between months.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <EventsCalendar />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <FlyerCarousel />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
