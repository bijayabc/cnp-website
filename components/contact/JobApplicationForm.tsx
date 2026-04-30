'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

const INITIAL: FormState = { name: '', email: '', phone: '', position: '', message: '' };

const POSITIONS = [
  'Direct Support Professional',
  'Community Support Specialist',
  'Vocational Job Coach',
  'Life Skills Instructor',
  'Summer Camp Counselor',
  'Administrative Staff',
  'Support Broker',
  'Other',
];

export default function JobApplicationForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'YOUR_ACCESS_KEY',
          subject: `CNP Website Job Application: ${form.position} — ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm(INITIAL);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-accent" />
        </div>
        <h3 className="font-heading text-primary text-2xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">Thank you for your interest in joining our team. We&apos;ll review your application and be in touch.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline text-sm px-5 py-2.5">
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="job-name" className="block text-sm font-semibold text-primary mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="job-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="job-email" className="block text-sm font-semibold text-primary mb-1.5">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="job-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="job-phone" className="block text-sm font-semibold text-primary mb-1.5">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="job-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="job-position" className="block text-sm font-semibold text-primary mb-1.5">
            Position Applying For <span className="text-accent">*</span>
          </label>
          <select
            id="job-position"
            name="position"
            required
            value={form.position}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-white"
          >
            <option value="">Select a position</option>
            {POSITIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="job-message" className="block text-sm font-semibold text-primary mb-1.5">
          Cover Note / Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="job-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a bit about yourself, your experience, and why you want to join CNP Community Services…"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Submit Application <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
