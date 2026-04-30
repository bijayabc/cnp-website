import type { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import WhatsetsSection from '@/components/home/WhatsetsSection';
import MissionSection from '@/components/home/MissionSection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'CNP Community Services | Empowering Individuals with Developmental Disabilities',
  description:
    'CNP Community Services is a New Jersey nonprofit supporting individuals with developmental disabilities through personalized care, life skills training, vocational support, and community programs in West Orange, NJ.',
  alternates: { canonical: 'https://www.mycnpservices.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'CNP Community Services',
  url: 'https://www.mycnpservices.com',
  logo: 'https://www.mycnpservices.com/assets/logo.png',
  description:
    'A New Jersey nonprofit dedicated to supporting individuals with developmental disabilities through personalized care, vocational training, life skills, and community inclusion.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '239 Main St',
    addressLocality: 'West Orange',
    addressRegion: 'NJ',
    postalCode: '07052',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-973-731-1101',
    contactType: 'customer service',
    areaServed: 'NJ',
    availableLanguage: ['English', 'Spanish'],
  },
  sameAs: [
    'https://www.facebook.com/cnptreasures/',
    'https://www.instagram.com/cnpcommunityservices/',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="jsonld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <WhatsetsSection />
      <MissionSection />
      <CTASection />
    </>
  );
}
