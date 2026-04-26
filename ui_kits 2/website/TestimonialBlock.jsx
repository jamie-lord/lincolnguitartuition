/* global React */
function TestimonialBlock() {
  const quotes = [
    {
      body: "Dan has been my guitar teacher for the last seven years. His support and guidance has been invaluable — got me through GCSE Music and Grade 8. He's friendly and approachable, and always good company.",
      name: 'Lewis Timimi',
      role: 'Grade 8, GCSE Music',
    },
    {
      body: "Dan McCaughern is by far one of the finest music educators in and around Lincoln. His lessons are very well presented, and his sense of humour is brilliant.",
      name: 'Dave Martin',
      role: 'Guitar teacher · rock virtuoso',
    },
    {
      body: "Dan is a very kindhearted, skilful and patient teacher. My daughters have progressed so much under his tuition.",
      name: 'Rich',
      role: "Parent",
    },
    {
      body: "I always feel prepared for exams. Dan is cool.",
      name: 'Ela-Lenka',
      role: 'Student',
    },
  ];

  return (
    <section id="testimonials" data-screen-label="Testimonials" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader number="04" label="Testimonials" title="In their own words." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 56 }}>
          {quotes.map((q, i) => (
            <div key={i} style={{
              background: 'var(--bg-1)', border: '1px solid var(--line-1)', borderRadius: 8,
              padding: '32px 32px 28px', display: 'flex', flexDirection: 'column', gap: 24,
              gridColumn: i === 0 ? 'span 2' : 'span 1',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 60, fontWeight: 300, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 0.5, height: 24 }}>"</div>
              <p style={{
                fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-sans)',
                fontSize: i === 0 ? 26 : 16,
                fontWeight: i === 0 ? 300 : 400,
                fontStyle: i === 0 ? 'italic' : 'normal',
                lineHeight: i === 0 ? 1.4 : 1.6,
                color: 'var(--fg-0)', letterSpacing: i === 0 ? '-0.01em' : 0,
                margin: 0,
              }}>{q.body}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                <span style={{ width: 24, height: 1, background: 'var(--amber)' }}></span>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--fg-0)', letterSpacing: '0.02em' }}>{q.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.18em', marginTop: 3, textTransform: 'uppercase' }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.TestimonialBlock = TestimonialBlock;
