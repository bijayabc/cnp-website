'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { FLYER_EVENTS } from '@/data/events';

import 'swiper/css';
import 'swiper/css/pagination';

export default function FlyerCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-1">
            What&apos;s Coming Up
          </p>
          <h2 className="font-heading text-primary text-3xl sm:text-4xl font-bold">
            Upcoming Events
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1.15}
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="pb-12"
      >
        {FLYER_EVENTS.map((event) => (
          <SwiperSlide key={event.title}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-white text-lg font-bold leading-snug mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                    <Calendar size={13} />
                    {event.date}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
