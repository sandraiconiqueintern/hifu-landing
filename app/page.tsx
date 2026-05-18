'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import AwardsMarquee from '@/components/AwardsMarquee'
import FAQ from '@/components/FAQ'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <AwardsMarquee />
      <FAQ />

      {/* Booking Section */}
      <section id="booking" style={{
        padding: 'clamp(80px, 10vw, 140px) 48px',
        backgroundColor: 'var(--charcoal)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(196,113,90,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(201,169,110,0.06) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="booking-grid">
            <div style={{ paddingRight: 'clamp(0px, 4vw, 60px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}>Get Started</span>
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                color: 'rgba(250,247,242,0.9)',
                marginBottom: '20px',
              }}>
                Take the First Step<br />
                <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--blush)' }}>Towards Your Transformation</em>
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.0625rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(250,247,242,0.55)',
                marginBottom: '36px',
                maxWidth: '400px',
              }}>
                No payment required. No commitment. Just a conversation about what your skin needs — and a plan to get you there.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'Clinically-proven ultrasound lifting',
                  'Smooths wrinkles & firms sagging skin',
                  'Instant lift + progressive results',
                  'Performed by certified beauty experts',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '18px', height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201,169,110,0.15)',
                      border: '1px solid rgba(201,169,110,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{ fontSize: '0.5625rem', color: 'var(--gold)' }}>✓</span>
                    </div>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      color: 'rgba(250,247,242,0.65)',
                      letterSpacing: '0.02em',
                    }}>{item}</span>
                  </div>
                ))}
              </div>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--rose)',
              }}>Appointments are limited — secure your spot today</p>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>

        <style>{`
          .booking-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(40px, 6vw, 80px);
            align-items: center;
          }
          @media (max-width: 900px) {
            .booking-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  )
}