/* global React */
function ContactBlock() {
  return (
    <section id="contact" data-screen-label="Contact" style={{ padding: '96px 32px', background: 'var(--bg-1)', borderTop: '1px solid var(--line-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.22em', color: 'var(--amber)', marginBottom: 20 }}>05 / GET IN TOUCH</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--fg-0)', marginBottom: 32, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}>
            Send a <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>message.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <ContactRow icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>}
              label="Studio" value="01522 539730"/>
            <ContactRow icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>}
              label="Mobile" value="077 0833 6550"/>
            <ContactRow icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>}
              label="Email" value="dan@lincolnguitartuition.uk"/>
            <ContactRow icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
              label="Studio" value="Central Lincoln · LN1"/>
          </div>
        </div>
        <form style={{ background: 'var(--bg-2)', borderRadius: 14, padding: 32, border: '1px solid var(--line-1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
            <Field label="Name" defaultValue="" placeholder="Your name"/>
            <Field label="Email" defaultValue="" placeholder="you@example.com"/>
          </div>
          <Field label="Looking to learn" defaultValue="" placeholder="e.g. jazz, blues, Grade 5 prep…"/>
          <div style={{ marginTop: 18 }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--fg-2)', textTransform: 'uppercase' }}>Message</span>
              <textarea rows="5" placeholder="Tell me a bit about where you're at and what you'd like to work on."
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, background: 'var(--bg-0)', color: 'var(--fg-0)', border: '1px solid var(--line-1)', padding: '12px 14px', borderRadius: 4, outline: 'none', resize: 'vertical' }}/>
            </label>
          </div>
          <button type="button" style={{
            marginTop: 24, width: '100%',
            fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
            background: 'var(--amber)', color: 'var(--bg-0)', border: 0,
            padding: '14px 24px', borderRadius: 4, cursor: 'pointer',
          }}>Send message</button>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderTop: '1px solid var(--line-1)' }}>
      <div style={{ width: 36, height: 36, border: '1px solid var(--line-2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--amber)', flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--fg-2)', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--fg-0)', marginTop: 2 }}>{value}</div>
      </div>
    </div>
  );
}

function Field({ label, defaultValue, placeholder }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: focus ? 'var(--amber)' : 'var(--fg-2)', textTransform: 'uppercase', transition: 'color 180ms' }}>{label}</span>
      <input defaultValue={defaultValue} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)', fontSize: 14,
          background: 'var(--bg-0)', color: 'var(--fg-0)',
          border: '1px solid', borderColor: focus ? 'var(--amber)' : 'var(--line-1)',
          padding: '12px 14px', borderRadius: 4, outline: 'none',
          boxShadow: focus ? '0 0 0 2px rgba(232,155,60,0.18)' : 'none',
          transition: 'all 180ms var(--ease-out)',
        }}/>
    </label>
  );
}

window.ContactBlock = ContactBlock;
