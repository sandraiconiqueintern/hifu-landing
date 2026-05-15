'use client';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'A personalized skin assessment and tailored treatment plan crafted just for you — before anything else begins.',
  },
  {
    number: '02',
    title: 'Comfortable Procedure',
    description: 'No needles, no incisions, no anesthesia. Just focused ultrasound energy delivered comfortably to your skin.',
  },
  {
    number: '03',
    title: '45–90 Minutes',
    description: 'A single session depending on the area treated. Walk in on your lunch break and walk out transformed.',
  },
  {
    number: '04',
    title: 'Results That Deepen',
    description: 'Notice an instant lift from day one. Full results continue developing over 8–12 weeks as collagen rebuilds.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: 'clamp(80px, 10vw, 140px) 48px',
      backgroundColor: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, var(--blush), transparent)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, var(--blush), transparent)',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>What to Expect</span>
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            color: 'var(--charcoal)',
            marginBottom: '16px',
          }}>
            Your Journey to <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Lifted Skin</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 300,
            color: 'var(--warm-gray)',
            maxWidth: '440px',
            margin: '0 auto',
            lineHeight: 1.75,
          }}>
            From your first consultation to the moment you see results — here is exactly what the ICONIQUE experience looks like.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.number} style={{ position: 'relative' }}>
              {index < steps.length - 1 && (
                <div className="step-connector" />
              )}
              <div style={{
                backgroundColor: 'var(--white)',
                padding: 'clamp(28px, 3vw, 44px)',
                height: '100%',
                borderRadius: '2px',
                borderTop: '2px solid var(--blush)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = 'var(--rose)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(196, 113, 90, 0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = 'var(--blush)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
              >
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3.25rem, 6vw, 4.5rem)',
                  fontWeight: 300,
                  color: 'var(--blush)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}>{step.number}</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  fontWeight: 500,
                  color: 'var(--charcoal)',
                  marginBottom: '12px',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'var(--warm-gray)',
                }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <Link href="#booking" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'white',
            backgroundColor: 'var(--rose)',
            padding: '18px 52px',
            borderRadius: '20px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            display: 'inline-block',
            boxShadow: '0 8px 28px rgba(196,113,90,0.3)',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--rose-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(196,113,90,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--rose)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(196,113,90,0.3)'; }}
          >
            Book Your Session
          </Link>
        </div>
      </div>

      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .step-connector {
          display: block;
          position: absolute;
          top: calc(44px + clamp(28px, 3vw, 44px));
          right: -12px;
          width: 24px;
          height: 1px;
          background: var(--blush);
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .step-connector { display: none; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
}
