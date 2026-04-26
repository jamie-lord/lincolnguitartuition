/* global React */
const { useState: useStateBT } = React;

function BackingTrackPlayer() {
  const [playing, setPlaying] = useStateBT(null);
  const tracks = [
    { id: 1, title: '12-bar blues in A', key: 'A', tempo: 92, len: '04:32', style: 'Blues' },
    { id: 2, title: 'Modal jam · D dorian', key: 'Dm', tempo: 110, len: '06:18', style: 'Jazz' },
    { id: 3, title: 'Rock progression', key: 'E', tempo: 124, len: '03:48', style: 'Rock' },
    { id: 4, title: 'Funk in C minor', key: 'Cm', tempo: 104, len: '05:02', style: 'Funk' },
    { id: 5, title: 'Folk fingerstyle in G', key: 'G', tempo: 76, len: '04:14', style: 'Folk' },
    { id: 6, title: 'Latin groove · Am', key: 'Am', tempo: 96, len: '05:30', style: 'Latin' },
  ];

  return (
    <section id="tracks" data-screen-label="Backing Tracks" style={{ padding: '96px 32px', background: 'var(--bg-1)', borderTop: '1px solid var(--line-1)', borderBottom: '1px solid var(--line-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader number="03" label="Backing tracks" title="Practice with the room." sub="A small library of original backing tracks. Use them in lessons, take them home, jam over them at 2am."/>
        <div style={{ marginTop: 56, background: 'var(--bg-2)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 1px 0 rgba(255,237,200,0.04) inset, 0 8px 24px -8px rgba(0,0,0,0.7)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '60px 4fr 100px 90px 100px 80px', padding: '14px 24px', borderBottom: '1px solid var(--line-1)', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.18em' }}>
            <div>#</div><div>TITLE</div><div>KEY</div><div>BPM</div><div>STYLE</div><div style={{ textAlign: 'right' }}>LEN</div>
          </div>
          {tracks.map((t, i) => {
            const isPlaying = playing === t.id;
            return (
              <div key={t.id}
                onClick={() => setPlaying(isPlaying ? null : t.id)}
                style={{
                  display: 'grid', gridTemplateColumns: '60px 4fr 100px 90px 100px 80px',
                  padding: '18px 24px', alignItems: 'center', cursor: 'pointer',
                  borderBottom: i < tracks.length - 1 ? '1px solid var(--line-1)' : 'none',
                  background: isPlaying ? 'rgba(232,155,60,0.06)' : 'transparent',
                  transition: 'background 180ms var(--ease-out)',
                }}
                onMouseEnter={e => { if (!isPlaying) e.currentTarget.style.background = 'var(--bg-3)'; }}
                onMouseLeave={e => { if (!isPlaying) e.currentTarget.style.background = 'transparent'; }}>
                <div>
                  <button style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: isPlaying ? 'var(--amber)' : 'transparent',
                    border: '1px solid', borderColor: isPlaying ? 'var(--amber)' : 'var(--line-3)',
                    color: isPlaying ? 'var(--bg-0)' : 'var(--fg-1)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 180ms var(--ease-out)',
                  }}>
                    {isPlaying ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21"/></svg>
                    )}
                  </button>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500, color: isPlaying ? 'var(--amber)' : 'var(--fg-0)' }}>{t.title}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--amber)', letterSpacing: '0.04em' }}>{t.key}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-1)' }}>{t.tempo}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-2)' }}>{t.style}</div>
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)' }}>{t.len}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.BackingTrackPlayer = BackingTrackPlayer;
