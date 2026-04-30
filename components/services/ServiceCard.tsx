'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Users, Heart, Briefcase, Sun, Network, ShoppingBag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Heart,
  Briefcase,
  Sun,
  Network,
  ShoppingBag,
};

interface PDFLink {
  href: string;
  label: string;
}

export interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  pdfLinks?: PDFLink[];
  formLink?: { href: string; label: string };
  delay?: number;
}

export default function ServiceCard({
  iconName,
  title,
  description,
  imageSrc,
  imageAlt,
  pdfLinks,
  formLink,
  delay = 0,
}: ServiceCardProps) {
  const Icon = ICON_MAP[iconName] ?? Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col group"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        <motion.div
          whileHover={{ scale: 1.15, rotate: -6, transition: { duration: 0.2 } }}
          className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg"
        >
          <Icon size={22} className="text-white" />
        </motion.div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-primary text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>

        {(pdfLinks || formLink) && (
          <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
            {pdfLinks?.map((pdf) => (
              <a
                key={pdf.href}
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent border border-accent rounded-full px-3 py-1.5 hover:bg-accent hover:text-white transition-colors duration-200"
              >
                <Download size={13} />
                {pdf.label}
              </a>
            ))}
            {formLink && (
              <a
                href={formLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary rounded-full px-3 py-1.5 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={13} />
                {formLink.label}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
