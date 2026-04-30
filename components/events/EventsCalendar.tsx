'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { CALENDAR_EVENTS } from '@/data/events';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function EventsCalendar() {
  const today = new Date();
  const [current, setCurrent] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const eventMap = useMemo(() => {
    const map: Record<string, string[]> = {};
    CALENDAR_EVENTS.forEach(({ date, title }) => {
      if (!map[date]) map[date] = [];
      map[date].push(title);
    });
    return map;
  }, []);

  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();
  const firstDayOfMonth = new Date(current.year, current.month, 1).getDay();

  const monthEvents = useMemo(() => {
    const prefix = `${current.year}-${String(current.month + 1).padStart(2, '0')}`;
    return CALENDAR_EVENTS.filter((e) => e.date.startsWith(prefix));
  }, [current]);

  const prev = () => {
    setCurrent((c) => {
      if (c.month === 0) return { year: c.year - 1, month: 11 };
      return { year: c.year, month: c.month - 1 };
    });
    setSelectedDate(null);
  };

  const next = () => {
    setCurrent((c) => {
      if (c.month === 11) return { year: c.year + 1, month: 0 };
      return { year: c.year, month: c.month + 1 };
    });
    setSelectedDate(null);
  };

  const formatDate = (day: number) =>
    `${current.year}-${String(current.month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const isToday = (day: number) => {
    return (
      today.getFullYear() === current.year &&
      today.getMonth() === current.month &&
      today.getDate() === day
    );
  };

  const cells = Array.from({ length: firstDayOfMonth + daysInMonth }, (_, i) => {
    const day = i - firstDayOfMonth + 1;
    return day > 0 ? day : null;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-primary px-6 py-5 flex items-center justify-between">
          <button
            onClick={prev}
            className="p-2 text-white hover:text-accent transition-colors rounded-lg hover:bg-white/10"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="font-heading text-white text-xl font-bold">
            {MONTHS[current.month]} {current.year}
          </h2>
          <button
            onClick={next}
            className="p-2 text-white hover:text-accent transition-colors rounded-lg hover:bg-white/10"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-7 mb-3">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <div key={`empty-${i}`} />;
              const dateStr = formatDate(day);
              const hasEvent = !!eventMap[dateStr];
              const isSelected = selectedDate === dateStr;
              const todayDay = isToday(day);

              return (
                <button
                  key={dateStr}
                  onClick={() => setSelectedDate(isSelected ? null : dateStr)}
                  className={`relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-medium transition-all duration-150 ${
                    isSelected
                      ? 'bg-accent text-white shadow-md'
                      : todayDay
                      ? 'bg-primary text-white'
                      : hasEvent
                      ? 'hover:bg-accent-light text-primary'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {day}
                  {hasEvent && (
                    <span
                      className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-white' : 'bg-accent'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {selectedDate && eventMap[selectedDate] && (
          <div className="border-t border-gray-100 px-6 py-4 bg-accent-light">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
              {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <ul className="space-y-1">
              {eventMap[selectedDate].map((title) => (
                <li key={title} className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-accent-light px-6 py-5 flex items-center gap-3 border-b border-accent/20">
          <CalendarDays size={20} className="text-accent" />
          <h3 className="font-heading text-primary font-bold text-lg">
            {MONTHS[current.month]} Events
          </h3>
        </div>
        <div className="p-6">
          {monthEvents.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-8">No events this month.</p>
          ) : (
            <ul className="space-y-4">
              {monthEvents.map(({ date, title }) => {
                const d = new Date(date + 'T00:00:00');
                return (
                  <li
                    key={date + title}
                    className="flex gap-4 items-start cursor-pointer group"
                    onClick={() => setSelectedDate(date)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex flex-col items-center justify-center">
                      <span className="text-accent text-xs font-bold leading-none">
                        {d.toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-white text-lg font-bold leading-tight">
                        {d.getDate()}
                      </span>
                    </div>
                    <div className="pt-1">
                      <p className="text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                        {title}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {d.toLocaleDateString('en-US', { weekday: 'long' })}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
