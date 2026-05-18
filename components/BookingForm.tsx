'use client';

import { useState } from 'react';
import * as fpixel from '@/lib/fpixel'
import { submitForm } from '@/lib/gtag'

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!form.phone.match(/^[0-9+\-\s]{10,15}$/)) newErrors.phone = 'Valid phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    fpixel.event('Lead', {
      
      content_name: 'HIFU Booking',
      content_category: 'Beauty Treatment',
    });
    submitForm('HIFU Booking Form')
    setSubmitted(true);
    setLoading(false);
  };

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.625rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'rgba(250,247,242,0.6)',
    marginBottom: '8px',
  };

  const inputStyle = (hasError: boolean) => ({
    width: '100%',
    padding: '15px 18px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 300,
    // Fix: light text so placeholder and typed text are visible
    color: 'rgba(250,247,242,0.9)',
    backgroundColor: 'rgba(250,247,242,0.07)',
    border: `1px solid ${hasError ? '#C4715A' : 'rgba(232, 197, 184, 0.4)'}`,
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 0.2s ease, background-color 0.2s ease',
  });

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: 'clamp(48px, 6vw, 80px) 24px',
        maxWidth: '480px',
        margin: '0 auto',
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'rgba(232,197,184,0.15)',
          border: '1px solid rgba(232,197,184,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 28px',
        }}>
          <span style={{ fontSize: '1.75rem', color: 'var(--gold)' }}>✓</span>
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 400,
          color: 'rgba(250,247,242,0.9)',
          marginBottom: '16px',
        }}>Your Session is Booked</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9375rem',
          fontWeight: 300,
          lineHeight: 1.7,
          color: 'rgba(250,247,242,0.6)',
        }}>
          Thank you. Our team will reach out within 24 hours to confirm your appointment and discuss your personalized treatment plan.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{
        border: '1px solid rgba(232, 197, 184, 0.2)',
        borderRadius: '2px',
        padding: 'clamp(32px, 4vw, 52px)',
        backgroundColor: 'rgba(250,247,242,0.04)',
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Name */}
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your full name"
              style={inputStyle(!!errors.name)}
              onFocus={e => {
                e.target.style.borderColor = 'var(--gold)';
                e.target.style.backgroundColor = 'rgba(250,247,242,0.1)';
              }}
              onBlur={e => {
                e.target.style.borderColor = errors.name ? '#C4715A' : 'rgba(232, 197, 184, 0.4)';
                e.target.style.backgroundColor = 'rgba(250,247,242,0.07)';
              }}
            />
            {errors.name && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', color: '#C4715A', marginTop: '6px', letterSpacing: '0.04em' }}>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle}>Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email address"
              style={inputStyle(!!errors.email)}
              onFocus={e => {
                e.target.style.borderColor = 'var(--gold)';
                e.target.style.backgroundColor = 'rgba(250,247,242,0.1)';
              }}
              onBlur={e => {
                e.target.style.borderColor = errors.email ? '#C4715A' : 'rgba(232, 197, 184, 0.4)';
                e.target.style.backgroundColor = 'rgba(250,247,242,0.07)';
              }}
            />
            {errors.email && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', color: '#C4715A', marginTop: '6px', letterSpacing: '0.04em' }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label style={labelStyle}>Contact Number *</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="09XX XXX XXXX or +639XX XXX XXXX"
              style={inputStyle(!!errors.phone)}
              onFocus={e => {
                e.target.style.borderColor = 'var(--gold)';
                e.target.style.backgroundColor = 'rgba(250,247,242,0.1)';
              }}
              onBlur={e => {
                e.target.style.borderColor = errors.phone ? '#C4715A' : 'rgba(232, 197, 184, 0.4)';
                e.target.style.backgroundColor = 'rgba(250,247,242,0.07)';
              }}
            />
            {errors.phone && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', color: '#C4715A', marginTop: '6px', letterSpacing: '0.04em' }}>
                {errors.phone}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              padding: '18px 24px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--charcoal)',
              backgroundColor: loading ? 'rgba(201,169,110,0.5)' : 'var(--gold)',
              border: 'none',
              borderRadius: '2px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.25s ease',
              marginTop: '8px',
              boxShadow: '0 8px 28px rgba(201,169,110,0.3)',
            }}
            onMouseEnter={e => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = '#d4b87e';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(201,169,110,0.45)';
              }
            }}
            onMouseLeave={e => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,169,110,0.3)';
              }
            }}
          >
            {loading ? 'Scheduling…' : 'Schedule Appointment'}
          </button>

          {/* Trust signals */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', marginTop: '4px' }}>
            {['Secure', 'Private', 'Verified'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--gold)' }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.625rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,247,242,0.4)',
                }}>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Placeholder color fix via global style injection */}
      <style>{`
        input::placeholder {
          color: rgba(250, 247, 242, 0.35) !important;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}