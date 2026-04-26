/* global React */
function Footer() {
  return (
    <footer style={{ padding: '64px 32px 32px', borderTop: '1px solid var(--line-2)', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, lineHeight: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 350, fontSize: 22, color: 'var(--fg-0)', letterSpacing: '-0.025em' }}>Lincoln Guitar</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 22, color: 'var(--amber)', letterSpacing: '-0.03em' }}>Tuition</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-2)', letterSpacing: '0.22em' }}>DAN McCAUGHERN · LINCOLN</div>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, marginTop: 24, maxWidth: 360 }}>
            Studio lessons, online tuition and session work. Based in central Lincoln. Skype lessons available.
          </p>
        </div>

        <FooterCol title="Lessons" links={['Studio', 'Online (Skype)', 'Gig prep', 'Exam prep', 'TRAP']}/>
        <FooterCol title="Listen" links={['Backing tracks', 'Videos', 'Session backing', 'Fallen House']}/>
        <FooterCol title="More" links={['About Dan', 'Testimonials', 'FAQs', 'Contact']}/>
      </div>

      <div style={{ maxWidth: 1280, margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid var(--line-1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>
          © DAN McCAUGHERN · LINCOLN, UK
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>
          Am · F · C · G
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--amber)', marginBottom: 16, textTransform: 'uppercase' }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(l => (
          <a key={l} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-1)', textDecoration: 'none', transition: 'color 180ms' }}
             onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
             onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-1)'}>{l}</a>
        ))}
      </div>
    </div>
  );
}

window.Footer = Footer;
