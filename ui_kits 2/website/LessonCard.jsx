/* global React */
function LessonCard({ num, kind, title, body, price, tags, featured }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--bg-3)' : 'var(--bg-2)',
        border: '1px solid',
        borderColor: hover ? 'rgba(232,155,60,0.3)' : 'var(--line-1)',
        borderRadius: 8,
        padding: '32px 28px',
        cursor: 'pointer',
        transition: 'all 220ms var(--ease-out)',
        display: 'flex', flexDirection: 'column', gap: 16,
        boxShadow: featured
          ? '0 1px 0 rgba(255,237,200,0.04) inset, 0 8px 24px -8px rgba(0,0,0,0.7)'
          : 'none',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--amber)' }}>
          {num} / {kind}
        </span>
        {featured && <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em',
          color: 'var(--bg-0)', background: 'var(--amber)', padding: '3px 8px', borderRadius: 999,
        }}>POPULAR</span>}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 350, fontSize: 30,
        color: 'var(--fg-0)', lineHeight: 1.1, letterSpacing: '-0.02em',
        fontVariationSettings: '"opsz" 96, "SOFT" 30',
      }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)' }}>{body}</p>
      <div style={{ height: 1, background: 'var(--line-1)', margin: '4px 0' }}></div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--fg-1)',
            border: '1px solid var(--line-2)', padding: '4px 10px', borderRadius: 999,
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, color: 'var(--amber)', letterSpacing: '-0.01em' }}>
          {price}
        </span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: hover ? 'var(--amber-bright)' : 'var(--amber)', letterSpacing: '0.04em' }}>
          Enquire →
        </span>
      </div>
    </div>
  );
}

function LessonsGrid() {
  return (
    <section id="lessons" data-screen-label="Lessons" style={{ padding: '96px 32px', maxWidth: 1280, margin: '0 auto' }}>
      <SectionHeader number="01" label="Lessons" title="Three ways to learn." sub="In the studio, online from anywhere, or as a one-off prep session before a gig or exam."/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 48 }}>
        <LessonCard num="01" kind="IN-PERSON" title="Studio lessons" body="Central Lincoln. Full studio kit — amps, recording rig, the lot. All ages, all levels."
          price="From £30 / hr" tags={["Beginner", "Grade 1–8", "Rock School", "Classical"]} featured/>
        <LessonCard num="02" kind="ONLINE" title="Skype lessons" body="Wherever you are. Same approach, same patience — fewer cables to trip over."
          price="From £25 / hr" tags={["Anywhere", "Any timezone", "All levels"]}/>
        <LessonCard num="03" kind="ONE-OFF" title="Gig &amp; exam prep" body="Coming up to a performance or a grade exam? Book a focused session — repertoire, sight-reading, nerves."
          price="From £40 / session" tags={["Performance", "Theory", "Improvisation"]}/>
      </div>
    </section>
  );
}

function SectionHeader({ number, label, title, sub }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'end' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.22em', color: 'var(--amber)', display: 'flex', alignItems: 'center', gap: 14 }}>
          <span>{number} / {label.toUpperCase()}</span>
        </div>
        <div style={{ height: 1, background: 'var(--line-2)', marginTop: 14 }}></div>
      </div>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 56,
          color: 'var(--fg-0)', lineHeight: 1.05, letterSpacing: '-0.025em',
          fontVariationSettings: '"opsz" 144, "SOFT" 30',
        }}>{title}</h2>
        {sub && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: 'var(--fg-2)', marginTop: 16, maxWidth: 600 }}>{sub}</p>}
      </div>
    </div>
  );
}

window.LessonCard = LessonCard;
window.LessonsGrid = LessonsGrid;
window.SectionHeader = SectionHeader;
