'use client';
import Link from 'next/link';

const benefits = [
  {
    icon: '✦',
    title: 'Non-Surgical Lifting',
    description: 'Tighten and lift your face, jawline, and neck without a single needle, cut, or anesthetic. HIFU works entirely from outside the skin.',
  },
  {
    icon: '◎',
    title: 'Zero Downtime',
    description: 'Walk in, walk out, and go straight back to your life. Resume work, social activities, and your full routine immediately.',
  },
  {
    icon: '↑',
    title: 'Progressive Results',
    description: 'Notice an immediate lift — then watch your results deepen over 8–12 weeks as your own collagen rebuilds from within.',
  },
  {
    icon: '⊕',
    title: 'Deep Precision',
    description: 'HIFU targets the same deep foundational layer addressed in surgery — but without breaking the surface. Precision without pain.',
  },
  {
    icon: '✓',
    title: 'FDA Cleared',
    description: 'A clinically proven, FDA-cleared treatment trusted by dermatologists and aesthetic professionals worldwide.',
  },
  {
    icon: '◇',
    title: 'Naturally You',
    description: 'Results that look unmistakably like you — only lifted, firmer, and years fresher. No frozen expressions, no telltale signs.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" style={{
      padding: 'clamp(80px, 10vw, 140px) 48px',
      backgroundColor: 'var(--white)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>Why Choose ICONIQUE HIFU</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: 'var(--charcoal)',
            }}>
              Transformation You<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Can See & Feel</em>
            </h2>
            <Link href="#booking" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'white',
              backgroundColor: 'var(--rose)',
              padding: '14px 32px',
              borderRadius: '20px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              flexShrink: 0,
              boxShadow: '0 6px 24px rgba(196,113,90,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--rose-dark)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--rose)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book Your Session
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                padding: 'clamp(28px, 3vw, 44px)',
                border: '1px solid var(--cream-dark)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--white)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--blush)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(196, 113, 90, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--cream-dark)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '22px',
                color: 'var(--rose)',
                marginBottom: '20px',
                lineHeight: 1,
              }}>{benefit.icon}</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '22px',
                fontWeight: 500,
                color: 'var(--charcoal)',
                marginBottom: '12px',
                letterSpacing: '0.01em',
              }}>{benefit.title}</h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'var(--warm-gray)',
              }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background-color: var(--cream-dark);
          border: 1px solid var(--cream-dark);
        }
        .benefits-grid > div {
          background-color: var(--white);
        }
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
