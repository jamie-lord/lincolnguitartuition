/* global React */
function Hero() {
  return (
    <section id="home" data-screen-label="Home" style={{
      position: 'relative', minHeight: '88vh',
      padding: '96px 32px 64px',
      display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48, alignItems: 'center',
      maxWidth: 1280, margin: '0 auto',
    }}>
      {/* Left: copy */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--amber)', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <span style={{ width: 36, height: 1, background: 'var(--amber)' }}></span>
          <span>Est. Lincoln · 32 years professional</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1',
          fontSize: 'clamp(56px, 8vw, 112px)',
          lineHeight: 1.02, letterSpacing: '-0.025em',
          color: 'var(--fg-0)', marginBottom: 28,
        }}>
          Tuition that opens<br/>up <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>possibilities.</em>
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.65,
          color: 'var(--fg-1)', maxWidth: 560, marginBottom: 36,
        }}>
          Thinking about learning to play? Been playing for a few years and got stuck?
          Studio lessons in central Lincoln — all styles, all levels.
        </p>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <button style={{
            fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
            background: 'var(--amber)', color: 'var(--bg-0)', border: 0,
            padding: '14px 24px', borderRadius: 4, cursor: 'pointer',
            transition: 'background 180ms var(--ease-out), box-shadow 180ms var(--ease-out)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--amber-bright)'; e.currentTarget.style.boxShadow = '0 0 28px -4px rgba(232,155,60,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--amber)'; e.currentTarget.style.boxShadow = 'none'; }}>
            Book a lesson
          </button>
          <button style={{
            fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
            background: 'transparent', color: 'var(--fg-0)', border: '1px solid var(--line-3)',
            padding: '13px 24px', borderRadius: 4, cursor: 'pointer',
          }}>
            Listen to backing tracks
          </button>
        </div>

        {/* tracklist accent */}
        <div style={{ marginTop: 56, display: 'flex', gap: 14, alignItems: 'center', color: 'var(--fg-2)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em' }}>STYLES</span>
          <span style={{ width: 24, height: 1, background: 'var(--line-2)' }}></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-1)', letterSpacing: '0.08em' }}>
            Rock · Jazz · Classical · Country · Folk · Funk
          </span>
        </div>
      </div>

      {/* Right: portrait card */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'relative', borderRadius: 14, overflow: 'hidden',
          aspectRatio: '4 / 5',
          boxShadow: '0 30px 80px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,237,200,0.05) inset',
        }}>
          <img src="../../assets/photos/dan-portrait-placeholder.svg"
               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Dan McCaughern"/>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(10,8,7,0.5) 75%, rgba(10,8,7,0.95) 100%)',
          }}></div>
          <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--amber)', letterSpacing: '0.22em' }}>YOUR TUTOR</div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 32, color: 'var(--fg-0)', marginTop: 4, letterSpacing: '-0.02em' }}>Dan McCaughern</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>MA Composing · Kingston University</div>
          </div>
        </div>
        {/* corner ornament */}
        <div style={{ position: 'absolute', top: -12, right: -12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--amber)', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          01 · LINCOLN
        </div>
      </div>

      {/* ambient lamp glow */}
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(232,155,60,0.08), transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }}></div>
    </section>
  );
}

window.Hero = Hero;
