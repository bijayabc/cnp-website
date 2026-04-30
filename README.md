# CNP Community Services — Website

Production website for [CNP Community Services](https://www.mycnpservices.com), a New Jersey nonprofit supporting individuals with developmental disabilities.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> If you see a blank screen, run `npm run dev:clean` instead — this clears the cache before starting.

---

## Project Structure

```
app/
├── layout.tsx           # Root layout — Header, Footer, fonts, SEO metadata
├── page.tsx             # Home page
├── services/page.tsx    # Services page
├── events/page.tsx      # Events page (calendar + flyer carousel)
├── contact/page.tsx     # Contact page (form + careers + FAQ)
├── api/contact/         # (Unused) Server-side form handler stub
├── sitemap.ts           # Auto-generates /sitemap.xml
└── robots.ts            # Auto-generates /robots.txt

components/
├── layout/
│   ├── Header.tsx       # Sticky nav, mobile drawer, language toggle
│   └── Footer.tsx
├── ui/
│   ├── AnimatedSection.tsx   # Reusable Framer Motion scroll-reveal wrapper
│   ├── Button.tsx
│   ├── Divider.tsx
│   ├── LanguageToggle.tsx    # EN / ES Google Translate toggle
│   └── SectionTag.tsx
├── home/                # Home page sections
├── services/
│   ├── ServiceCard.tsx
│   └── FormsSection.tsx # Applications & Forms section (PDFs + Google Forms)
├── events/
│   ├── EventsCalendar.tsx
│   └── FlyerCarousel.tsx
└── contact/
    ├── ContactForm.tsx
    └── FAQAccordion.tsx

data/
└── events.ts            # ← THE ONLY FILE TO EDIT for calendar/flyer updates

public/
├── assets/              # Images (see list below)
└── pdfs/                # Downloadable PDF forms
```

---

## Updating Events & Flyers

**`data/events.ts` is the only file you need to edit** to update the events calendar or flyer carousel. No code knowledge required — just edit the arrays.

### Calendar Events
```ts
{ date: '2026-06-01', title: 'Summer Retreat Begins' }
```
- `date` must be in `YYYY-MM-DD` format
- Appears as a teal dot on the calendar grid

### Flyer Cards (Carousel)
```ts
{
  title: 'Summer Retreat 2026',
  date:  'June 1 – August 15, 2026',
  img:   '/assets/Summer Retreat & Respite Services.png',
  alt:   'Summer Retreat 2026',
}
```
- `img` can be a local path (`/assets/filename.png`) or a full URL

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your key:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Free key from [web3forms.com](https://web3forms.com) — powers the contact form |

On Vercel, add the same variable under **Project Settings → Environment Variables**.

---

## Forms & Applications

### Contact / Job Application Forms
- Contact form submits to **Web3Forms** and emails the submission to the address tied to `NEXT_PUBLIC_WEB3FORMS_KEY`
- Job applications link to a **Google Form** — URL is set in one constant at the top of `app/contact/page.tsx`:
  ```ts
  const JOB_APPLICATION_FORM_URL = 'https://docs.google.com/forms/...';
  ```

### Applications & Forms (Services page)
All PDF and Google Form links live in `components/services/FormsSection.tsx` in two plain arrays (`PDF_DOCS` and `ONLINE_FORMS`). Edit those arrays to add, remove, or update links.

---

## Required Assets

Place these files in `public/assets/` (filenames are case-sensitive):

| File | Used on |
|---|---|
| `logo.png` | Header, Footer, Hero, favicon |
| `client and family happy.png` | Home — About section |
| `client enjoying themself.png` | Home — Programs section |
| `client smiling.png` | Home — What Sets Us Apart |
| `cnp director at an event.png` | Home — Mission section |
| `community based supports.png` | Services card |
| `Life Skills & Individual Support.png` | Services card |
| `Vocational Training & Employment Services.png` | Services card |
| `Summer Retreat & Respite Services.png` | Services card + flyer carousel |
| `Support Brokerage.png` | Services card |
| `CNP Treasures.png` | Services card + flyer carousel |

Place PDFs in `public/pdfs/`:
- `CNP-Camp-Application-2026.pdf`
- `DDD-Full-Fillable-Form.pdf`
- `DDD-Short-Fillable-Form.pdf`
- `Guardianship-Fillable-Form.pdf`

---

## Deployment

This site is deployed on **Vercel**. Every push to `main` triggers an automatic redeploy.

1. Push to GitHub
2. Connect the repo to Vercel
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel → Settings → Environment Variables
4. Deploy

### Domain
Update the base URL in these four files when the domain is confirmed:
- `app/layout.tsx` — `BASE_URL` constant
- `app/page.tsx` — `jsonLd` and `alternates.canonical`
- `app/sitemap.ts`
- `app/robots.ts`

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Scroll animations |
| Swiper.js | Events flyer carousel |
| Lucide React | Icons |
| Web3Forms | Contact form email delivery |
| Google Translate | EN / ES language toggle |
| Vercel | Hosting & deployment |

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `primary` | `#1B3648` | Navy — nav, headings, buttons |
| `accent` | `#009B8D` | Teal — CTAs, highlights, dividers |
| `accent-light` | `#E0F5F4` | Light teal — section backgrounds |
| Heading font | Playfair Display | All `h1`–`h6` |
| Body font | Inter | All body text |
