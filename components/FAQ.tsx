'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is HIFU painful?',
    answer: 'Most clients experience mild discomfort or a warm tingling sensation during the procedure. Pain tolerance varies per person but it is generally very manageable and no anesthesia is required.',
  },
  {
    question: 'How long does a HIFU session take?',
    answer: 'A full face treatment typically takes 60 to 90 minutes. Smaller areas like the neck or chin can take as little as 30 minutes.',
  },
  {
    question: 'When will I see results?',
    answer: 'Some initial tightening is visible immediately after treatment. However, the full results develop gradually over 2 to 3 months as your body produces new collagen.',
  },
  {
    question: 'How long do the results last?',
    answer: 'Results typically last 12 to 18 months. Many clients choose to do a maintenance session once a year to sustain their results.',
  },
  {
    question: 'Is HIFU safe?',
    answer: 'Yes. HIFU is FDA-cleared and has been used safely in thousands of treatments worldwide. Our practitioners are trained and certified to perform the procedure.',
  },
  {
    question: 'Am I a good candidate for HIFU?',
    answer: 'HIFU works best for clients with mild to moderate skin laxity. It is ideal for those who want to lift and tighten skin without surgery. A consultation with our specialists will determine if it is right for you.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{
      padding: 'clamp(80px, 10vw, 140px) 48px',
      backgroundColor: 'var(--cream)',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>Got Questions?</span>
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--charcoal)',
            marginBottom: '16px',
          }}>
            Frequently Asked <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Questions</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: 'var(--warm-gray)',
          }}>Everything you need to know before your first HIFU session.</p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderTop: index === 0 ? '1px solid var(--blush)' : 'none',
                borderBottom: '1px solid var(--blush)',
              }}
            >
              <button
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: 'clamp(18px, 2.5vw, 26px) 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.0625rem, 2.2vw, 1.3125rem)',
                  fontWeight: openIndex === index ? 500 : 400,
                  color: openIndex === index ? 'var(--rose)' : 'var(--charcoal)',
                  lineHeight: 1.3,
                  transition: 'color 0.2s ease',
                }}>
                  {faq.question}
                </span>
                <span style={{
                  color: 'var(--rose)',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>+</span>
              </button>

              <div style={{
                maxHeight: openIndex === index ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'var(--warm-gray)',
                  paddingBottom: 'clamp(18px, 2.5vw, 26px)',
                  paddingRight: '44px',
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
