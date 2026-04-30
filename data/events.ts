export interface CalendarEvent {
  date: string; // ISO format YYYY-MM-DD
  title: string;
}

export interface FlyerEvent {
  title: string;
  date: string;
  img: string;
  alt: string;
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { date: '2026-04-10', title: 'Camp Intake Deadline' },
  { date: '2026-04-15', title: 'Spring Community Cookout' },
  { date: '2026-05-05', title: 'Service Inquiry Open House' },
  { date: '2026-05-15', title: 'Vocational Training Info Session' },
  { date: '2026-05-28', title: 'Summer Retreat Registration Opens' },
  { date: '2026-06-01', title: 'Summer Retreat Begins' },
  { date: '2026-06-10', title: 'CNP Treasures Market' },
  { date: '2026-06-20', title: 'Support Brokerage Meetup' },
  { date: '2026-07-04', title: 'Office Closed – Holiday' },
  { date: '2026-07-12', title: 'Summer Camp Activities' },
  { date: '2026-07-25', title: 'Job Fair Preparation Workshop' },
  { date: '2026-08-01', title: 'Back-to-School Backpack Drive' },
  { date: '2026-08-15', title: 'Life Skills Cooking Class' },
  { date: '2026-09-07', title: 'Office Closed – Labor Day' },
  { date: '2026-09-15', title: 'Fall Program Orientation' },
  { date: '2026-10-10', title: 'Community Harvest Celebration' },
  { date: '2026-10-31', title: 'Halloween Party' },
  { date: '2026-11-26', title: 'Office Closed – Thanksgiving' },
  { date: '2026-12-15', title: 'Holiday Appreciation Event' },
  { date: '2026-12-25', title: 'Office Closed – Christmas' },
];

export const FLYER_EVENTS: FlyerEvent[] = [
  {
    title: 'Summer Retreat 2026',
    date: 'June 1 – August 15, 2026',
    img: '/assets/Summer Retreat & Respite Services.png',
    alt: 'Summer Retreat 2026',
  },
  {
    title: 'Camp Intake 2026 — Registration Open',
    date: 'Deadline: April 10, 2026',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&h=667&q=80',
    alt: 'Camp Intake 2026',
  },
  {
    title: 'Vocational Training Info Session',
    date: 'May 15, 2026 · 10:00 AM',
    img: '/assets/Vocational Training & Employment Services.png',
    alt: 'Vocational Training Info Session',
  },
  {
    title: 'Spring Community Cookout',
    date: 'April 15, 2026 · 12:00 PM',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&h=667&q=80',
    alt: 'Spring Community Cookout',
  },
  {
    title: 'CNP Treasures Market',
    date: 'June 10, 2026',
    img: '/assets/CNP Treasures.png',
    alt: 'CNP Treasures Market',
  },
  {
    title: 'Life Skills Workshop Series',
    date: 'Ongoing · Every other Wednesday',
    img: '/assets/Life Skills & Individual Support.png',
    alt: 'Life Skills Workshop',
  },
];
