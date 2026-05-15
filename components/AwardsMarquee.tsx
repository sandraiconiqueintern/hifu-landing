'use client';
import Link from 'next/link';

const awards = [
  { src: '/assets/awards/BEST CHOICE AWARD.webp', alt: 'Best Choice Award' },
  { src: '/assets/awards/BEST MAGAZINE.webp', alt: 'Best Magazine Award' },
  { src: '/assets/awards/BUSINESS CIRCLE AWARD.webp', alt: 'Business Circle Award' },
  { src: '/assets/awards/NETIZENS CHOICE AWARD.webp', alt: 'Netizens Choice Award' },
  { src: '/assets/awards/REVERIE BADGE.webp', alt: 'Reverie Badge' },
  { src: '/assets/awards/TESDA ACCREDITED.webp', alt: 'TESDA Accredited' },
];

// Duplicate for seamless loop
const allAwards = [...awards, ...awards, ...awards];

export default function AwardsMarquee() {
  return (
    <section style={{
      backgroundColor: 'var(--charcoal)',
      padding: 'clamp(64px, 8vw, 100px) 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 4vw, 56px)', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>Award-Winning Excellence</span>
          <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--blush)',
          marginBottom: '12px',
        }}>
          Trusted by Clients,<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(250,247,242,0.7)' }}>Recognized by Industry</em>
        </h2>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative' }}>
        {/* Edge fade left */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0, bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, var(--charcoal), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        {/* Edge fade right */}
        <div style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, var(--charcoal), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          {allAwards.map((award, i) => (
            <div key={i} style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 32px',
            }}>
              <img
                src={award.src}
                alt={award.alt}
                style={{
                  height: 'clamp(80px, 10vw, 130px)',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0.9) saturate(0.85)',
                  opacity: 0.85,
                  transition: 'opacity 0.3s, filter 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = '1';
                  (e.currentTarget as HTMLImageElement).style.filter = 'brightness(1) saturate(1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = '0.85';
                  (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.9) saturate(0.85)';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 'clamp(40px, 5vw, 60px)', padding: '0 48px' }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontStyle: 'italic',
          fontWeight: 300,
          color: 'rgba(250,247,242,0.6)',
          marginBottom: '8px',
        }}>Experience the gold standard in non-surgical lifting</p>
        <div style={{ marginBottom: '28px' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            color: 'rgba(250,247,242,0.4)',
            textDecoration: 'line-through',
            letterSpacing: '0.05em',
          }}>₱15,000</span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 600,
            color: 'var(--gold)',
            letterSpacing: '-0.01em',
            marginLeft: '12px',
          }}>ONLY ₱1,495</span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blush)',
            marginLeft: '12px',
            verticalAlign: 'middle',
          }}>Introductory Price</span>
        </div>
        <Link href="#booking" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--charcoal)',
          backgroundColor: 'var(--gold)',
          padding: '18px 52px',
          borderRadius: '20px',
          textDecoration: 'none',
          transition: 'all 0.25s ease',
          display: 'inline-block',
          boxShadow: '0 8px 32px rgba(201,169,110,0.35)',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b87e'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,169,110,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,169,110,0.35)'; }}
        >
          Secure Your Spot Today
        </Link>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(250,247,242,0.3)',
          marginTop: '16px',
          letterSpacing: '0.08em',
          borderRadius: '10px',
        }}>Appointments are limited</p>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
