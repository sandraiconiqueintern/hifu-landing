'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
    }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/assets/hero/1.webm" type="video/webm" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(28,24,20,0.78) 0%, rgba(28,24,20,0.52) 55%, rgba(28,24,20,0.28) 100%)',
        zIndex: 1,
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 48px', width: '100%', position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '680px' }}>
          {/* Eyebrow */}
          <div className="animate-fade-up delay-1" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>ICONIQUE HIFU</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.04,
            color: '#FAF7F2',
            marginBottom: '6px',
          }}>
            Lift & Tighten
          </h1>
          <h1 className="animate-fade-up delay-2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 600,
            fontStyle: 'italic',
            lineHeight: 1.04,
            color: 'var(--blush)',
            marginBottom: '32px',
          }}>
            Without Surgery.
          </h1>

          <p className="animate-fade-up delay-3" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            fontWeight: 400,
            lineHeight: 1.8,
            color: 'rgba(250,247,242,0.80)',
            maxWidth: '520px',
            marginBottom: '20px',
          }}>
            Your skin carries your story. ICONIQUE HIFU uses advanced ultrasound precision 
            to restore firmness, redefine your contours, and reveal the lift you thought 
            only surgery could give — with zero downtime.
          </p>

          {/* Badges */}
          <div className="animate-fade-up delay-3" style={{
            display: 'flex',
            gap: '28px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}>
            {['No Downtime', 'Non-Invasive', 'Visible Results'].map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: 'rgba(250,247,242,0.85)',
                }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link href="#booking" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--charcoal)',
              backgroundColor: 'var(--gold)',
              padding: '18px 44px',
              borderRadius: '20px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              display: 'inline-block',
              boxShadow: '0 8px 32px rgba(201,169,110,0.4)',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b87e'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,169,110,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,169,110,0.4)'; }}
            >
              Book Your Session
            </Link>
            <Link href="#how-it-works" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,242,0.9)',
              backgroundColor: 'transparent',
              padding: '18px 44px',
              borderRadius: '20px',
              border: '1px solid rgba(250,247,242,0.35)',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(250,247,242,0.7)'; e.currentTarget.style.backgroundColor = 'rgba(250,247,242,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(250,247,242,0.35)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              What to Expect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
