'use client';
import Link from 'next/link';

const clientStories = [
  {
    name: 'Abbygail',
    age: 42,
    image: '/assets/testimonial/1.webp',
    quote: 'My jawline looks so much more defined, and I feel like my skin has tightened naturally over time. The best part is there was no downtime — I went back to work right after.',
  },
  {
    name: 'Beth',
    age: 41,
    image: '/assets/testimonial/2.webp',
    quote: 'My skin feels firmer, and even my makeup sits better now. It\'s subtle but noticeable — like I just look fresher overall.',
  },
  {
    name: 'Carla',
    age: 51,
    image: '/assets/testimonial/3.webp',
    quote: 'HIFU gave me the most natural results. It lifted my cheeks, reduced sagging, and I can see the results improving weeks after.',
  },
  {
    name: 'Steph',
    age: 39,
    image: '/assets/testimonial/4.webp',
    quote: 'This was my first aesthetic treatment, and I\'m glad I chose HIFU. It wasn\'t painful, and the results were gradual — so no one could tell I had something done.',
  },
  {
    name: 'Elaine',
    age: 60,
    image: '/assets/testimonial/5.webp',
    quote: 'At 60, I didn\'t want surgery, but I also wanted to feel good about myself. HIFU gave me that lift around my neck and jawline that I thought was gone forever.',
  },
];

const textTestimonials = [
  { name: 'Maria Santos', location: 'Quezon City', rating: 5, text: 'I was skeptical at first but after one session my jawline was visibly lifted. No pain, no downtime. I went straight to work after!' },
  { name: 'Angela Reyes', location: 'Makati City', rating: 5, text: 'The results are so natural-looking. My friends kept asking if I lost weight — I just got HIFU at Iconique. Highly recommend!' },
  { name: 'Christine Lim', location: 'BGC, Taguig', rating: 5, text: 'Professional staff, clean clinic, and amazing results. My skin feels tighter and more lifted after just one treatment.' },
  { name: 'Joanna Cruz', location: 'Mandaluyong', rating: 5, text: 'Best investment I made for my skin. I look 5 years younger and I did not have to go under the knife. Thank you Iconique!' },
  { name: 'Bea Villanueva', location: 'Pasig City', rating: 5, text: 'I have been doing HIFU at Iconique for 2 years now. The consistency of results keeps me coming back every year.' },
  { name: 'Tricia Gomez', location: 'Las Piñas', rating: 5, text: 'Super worth it! The team was very accommodating and explained everything before the procedure. I felt very safe.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      backgroundColor: 'var(--white)',
      overflow: 'hidden',
    }}>
      {/* Client Stories */}
      <div style={{ padding: 'clamp(80px, 10vw, 140px) 48px clamp(48px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>Real Results</span>
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
              Proven Results From Your<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Very First Treatment</em>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              fontWeight: 300,
              color: 'var(--warm-gray)',
              maxWidth: '420px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}>
              Real women. Real results. Every story below is a testament to what ICONIQUE HIFU can do for you.
            </p>
          </div>

          {/* Story Cards */}
          <div className="stories-grid">
            {clientStories.map((story) => (
              <div
                key={story.name}
                className="story-card"
                style={{
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--charcoal)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 32px rgba(28,24,20,0.12)',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 56px rgba(28,24,20,0.22)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(28,24,20,0.12)';
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', flexShrink: 0, overflow: 'hidden', height: '65%' }}>
                  <img
                    src={story.image}
                    alt={`${story.name}'s results`}
                    className="story-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '60px',
                    background: 'linear-gradient(to bottom, transparent, var(--charcoal))',
                  }} />
                </div>

                {/* Text panel */}
                <div style={{
                  flex: 1,
                  padding: 'clamp(16px, 2vw, 24px) clamp(16px, 2vw, 24px) clamp(20px, 2.5vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: 'rgba(250,247,242,0.88)',
                  }}>"{story.quote}"</p>

                  <div>
                    <div style={{ display: 'flex', gap: '3px', marginBottom: '6px' }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} style={{ color: 'var(--gold)', fontSize: '0.75rem' }}>★</span>
                      ))}
                    </div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: 'var(--blush)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>{story.name}, {story.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Testimonials */}
      <div style={{
        backgroundColor: 'var(--cream)',
        padding: 'clamp(64px, 8vw, 100px) 48px',
        borderTop: '1px solid var(--cream-dark)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="testimonials-grid">
            {textTestimonials.map((t) => (
              <div key={t.name} style={{
                padding: 'clamp(24px, 2.5vw, 36px)',
                border: '1px solid var(--cream-dark)',
                borderRadius: '2px',
                backgroundColor: 'var(--white)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--blush)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(196, 113, 90, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--cream-dark)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--gold)', fontSize: '0.9375rem' }}>★</span>
                    ))}
                  </div>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.65,
                    color: 'var(--charcoal)',
                  }}>"{t.text}"</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--blush-light)',
                    border: '1px solid var(--blush)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--rose)',
                    }}>{t.name.split(' ').map((n: string) => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'var(--charcoal)',
                      marginBottom: '2px',
                    }}>{t.name}</p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.8125rem',
                      color: 'var(--warm-gray-light)',
                      letterSpacing: '0.05em',
                    }}>{t.location}</p>
                  </div>
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
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--rose-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--rose)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          height: clamp(380px, 46vw, 600px);
        }
        .story-card {
          height: 100%;
        }
        .story-card:hover .story-img {
          transform: scale(1.05);
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1200px) {
          .stories-grid { grid-template-columns: repeat(3, 1fr); height: auto; }
          .story-card { aspect-ratio: 2/3; }
        }
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .stories-grid { grid-template-columns: repeat(2, 1fr); }
          .story-card { aspect-ratio: 3/4; }
        }
        @media (max-width: 560px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .stories-grid { grid-template-columns: 1fr; height: auto; }
          .story-card { aspect-ratio: unset; min-height: 420px; }
        }
      `}</style>
    </section>
  );
}
