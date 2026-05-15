'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--charcoal)',
      color: 'var(--warm-gray-light)',
      padding: 'clamp(60px, 8vw, 100px) 48px 40px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="footer-grid" style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '24px',
                fontWeight: 500,
                letterSpacing: '0.16em',
                color: 'var(--blush)',
                marginBottom: '2px',
              }}>ICONIQUE</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(158, 145, 138, 0.5)',
              }}>Aesthetic Clinic</p>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(158, 145, 138, 0.75)',
              maxWidth: '280px',
              marginBottom: '20px',
            }}>
              Premium anti-aging treatments and advanced skincare solutions. Transforming lives through innovative beauty technology.
            </p>
            {/* Certifications */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Licensed & Certified', 'Accredited by TESDA', 'Compliant with Safety Standards'].map((c) => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(158,145,138,0.6)', letterSpacing: '0.04em' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(232, 197, 184, 0.5)',
              marginBottom: '24px',
            }}>Why Choose ICONIQUE</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['12+ Years in the Philippines', 'FDA Approved', '10,000+ Satisfied Clients', 'Personalized Care For Each Client'].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(201,169,110,0.5)', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(158, 145, 138, 0.8)',
                    letterSpacing: '0.02em',
                  }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(232, 197, 184, 0.5)',
              marginBottom: '24px',
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['Benefits', '#benefits'], ['How It Works', '#how-it-works'], ['Testimonials', '#testimonials'], ['FAQ', '#faq'], ['Book Now', '#booking']].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(158, 145, 138, 0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blush)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(158, 145, 138, 0.8)')}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(232, 197, 184, 0.5)',
              marginBottom: '24px',
            }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <li style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 300, color: 'rgba(158, 145, 138, 0.8)' }}>
                Multiple locations across Metro Manila
              </li>
              <li>
                <a href="tel:+639176239910" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 300, color: 'rgba(158, 145, 138, 0.8)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blush)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(158, 145, 138, 0.8)')}
                >+63 917 623 9910</a>
              </li>
              <li>
                <a href="https://wa.me/639176239910" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(158,145,138,0.8)',
                  textDecoration: 'none',
                  border: '1px solid rgba(158,145,138,0.25)',
                  padding: '9px 16px',
                  borderRadius: '2px',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blush)'; e.currentTarget.style.color = 'var(--blush)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(158,145,138,0.25)'; e.currentTarget.style.color = 'rgba(158,145,138,0.8)'; }}
                >WhatsApp Consultation</a>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Facebook', 'Instagram', 'TikTok'].map((s) => (
                <a key={s} href="#" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: 'rgba(158, 145, 138, 0.5)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blush)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(158, 145, 138, 0.5)')}
                >{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Guidelines */}
        <div style={{
          borderTop: '1px solid rgba(107, 94, 86, 0.2)',
          paddingTop: '36px',
          marginBottom: '36px',
        }}>
          <h4 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(232, 197, 184, 0.4)',
            marginBottom: '20px',
          }}>Treatment Guidelines</h4>
          <div className="guidelines-grid">
            {[
              'Skip alcohol and smoking 24 hours before to optimize healing and results.',
              'Come with clean, product-free skin.',
              'Avoid strong facial treatments 1–2 weeks prior to prevent irritation.',
              'Mild redness or swelling is normal and should subside in a few hours to a day.',
              'No harsh skincare: Avoid retinol, glycolic acid, or scrubs for 3–5 days.',
              'Avoid hot saunas, steam rooms, or intense workouts for 24–48 hours.',
              'Be patient: Results are progressive and peak after 8–12 weeks.',
            ].map((g, i) => (
              <p key={i} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'rgba(107, 94, 86, 0.6)',
              }}>{g}</p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(107, 94, 86, 0.2)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 300,
            color: 'rgba(107, 94, 86, 0.5)',
            letterSpacing: '0.05em',
          }}>© {new Date().getFullYear()} ICONIQUE | All rights reserved. Individual results may vary.</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(158, 145, 138, 0.35)',
          }}>Consult with our licensed professionals for personalized treatment plans.</p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.3fr;
          gap: clamp(32px, 4vw, 60px);
        }
        .guidelines-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px 28px;
        }
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .guidelines-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; }
          .guidelines-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
