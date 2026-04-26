/* global React */
function BioSection() {
  return (
    <section id="about" data-screen-label="About" style={{ padding: '96px 32px', borderTop: '1px solid var(--line-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader number="02" label="About" title="32 years on stage, in studios and in classrooms." />
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, marginTop: 64, alignItems: 'start' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 14, overflow: 'hidden', aspectRatio: '4 / 5',
              boxShadow: '0 30px 80px -20px rgba(0,0,0,0.85)',
            }}>
              <img src="../../assets/photos/dan-portrait-placeholder.svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Dan"/>
            </div>
            <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.18em' }}>
              DAN McCAUGHERN · MA COMPOSING (KINGSTON, LONDON)
            </div>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 32, lineHeight: 1.3, color: 'var(--fg-0)', letterSpacing: '-0.01em', marginBottom: 32 }}>
              "His accessible approach and totally inspiring music writing has led us to commissioning Dan on a number of times."
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--amber)', letterSpacing: '0.18em', marginBottom: 40 }}>
              NIKKI-KATE HEYES MBE · CEO, SOUNDLINCS
            </div>
            <div style={{ height: 1, background: 'var(--line-1)', marginBottom: 32 }}></div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-1)', marginBottom: 20 }}>
              I've been playing professionally for around 32 years — across the UK, Ireland and Europe — on TV, in theatre, on radio. As a composer, my works have been performed at The O2, in London's West End, and by a 112-piece orchestra in Lincoln Cathedral.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-1)', marginBottom: 32 }}>
              I'm now permanently based in Lincoln, teaching, composing and rehearsing with my band, Fallen House. My home studio was the first Rock School exam centre in Lincolnshire, and students get to use the studio facilities during lessons.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 32px' }}>
              {[
                'The Cathedral School (Now Minster School)',
                'LSST The Priory',
                'De Aston School',
                'London Music School (Head of Education, 4 yrs)',
                'East Coast Music Academy',
                "Christ's Hospital School",
                'Hill House School',
                'Various primary &amp; junior schools',
              ].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-2)', padding: '8px 0', borderTop: '1px solid var(--line-1)' }}>
                  <span style={{ width: 4, height: 4, background: 'var(--amber)', flexShrink: 0, marginTop: 6 }}></span>
                  <span dangerouslySetInnerHTML={{ __html: s }}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.BioSection = BioSection;
