'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(28, 24, 20, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232, 197, 184, 0.15)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.375rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                color: 'var(--blush)',
              }}>ICONIQUE</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.5625rem',
                letterSpacing: '0.25em',
                color: 'rgba(232,197,184,0.5)',
                textTransform: 'uppercase',
                marginTop: '1px',
              }}>Aesthetic Clinic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden-mobile">
            {[['Benefits', '#benefits'], ['How It Works', '#how-it-works'], ['Testimonials', '#testimonials'], ['FAQ', '#faq']].map(([item, href]) => (
              <Link
                key={item}
                href={href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: 'rgba(250,247,242,0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blush)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,247,242,0.75)')}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#booking"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--charcoal)',
                backgroundColor: 'var(--gold)',
                padding: '12px 28px',
                borderRadius: '20px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px rgba(201,169,110,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b87e'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--blush)',
            }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            backgroundColor: 'rgba(28,24,20,0.97)',
            borderTop: '1px solid rgba(232,197,184,0.15)',
            padding: '20px 0 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {[['Benefits', '#benefits'], ['How It Works', '#how-it-works'], ['Testimonials', '#testimonials'], ['FAQ', '#faq']].map(([item, href]) => (
              <Link
                key={item}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  color: 'rgba(250,247,242,0.75)',
                  textDecoration: 'none',
                  padding: '14px 4px',
                  borderBottom: '1px solid rgba(232,197,184,0.1)',
                  letterSpacing: '0.04em',
                }}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                marginTop: '20px',
                textAlign: 'center',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--charcoal)',
                backgroundColor: 'var(--gold)',
                padding: '14px 24px',
                borderRadius: '2px',
                textDecoration: 'none',
              }}
            >
              Book Your Session
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
