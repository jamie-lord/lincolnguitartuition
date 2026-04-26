/* global React */
const { useState, useEffect } = React;

function Nav({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Backing tracks' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '14px 32px',
      background: scrolled ? 'rgba(10,8,7,0.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-1)' : '1px solid transparent',
      transition: 'background 220ms var(--ease-out), border-color 220ms var(--ease-out)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="#home" onClick={e => { e.preventDefault(); onNavigate('home'); }}
         style={{ display: 'flex', flexDirection: 'column', gap: 4, textDecoration: 'none', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 350, fontSize: 22, color: 'var(--fg-0)', letterSpacing: '-0.025em' }}>Lincoln Guitar</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 22, color: 'var(--amber)', letterSpacing: '-0.03em' }}>Tuition</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-2)', letterSpacing: '0.22em' }}>DAN McCAUGHERN · LINCOLN</div>
      </a>

      <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {items.map(item => (
          <a key={item.id} href={`#${item.id}`}
             onClick={e => { e.preventDefault(); onNavigate(item.id); }}
             style={{
               fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
               color: active === item.id ? 'var(--amber)' : 'var(--fg-1)',
               padding: '10px 14px', textDecoration: 'none',
               borderRadius: 4,
               transition: 'color 180ms var(--ease-out), background 180ms var(--ease-out)',
             }}
             onMouseEnter={e => { if (active !== item.id) e.currentTarget.style.color = 'var(--amber-bright)'; }}
             onMouseLeave={e => { if (active !== item.id) e.currentTarget.style.color = 'var(--fg-1)'; }}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={e => { e.preventDefault(); onNavigate('contact'); }}
           style={{
             marginLeft: 12,
             fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
             background: 'var(--amber)', color: 'var(--bg-0)',
             padding: '10px 18px', borderRadius: 4, textDecoration: 'none',
             transition: 'background 180ms var(--ease-out)',
           }}
           onMouseEnter={e => e.currentTarget.style.background = 'var(--amber-bright)'}
           onMouseLeave={e => e.currentTarget.style.background = 'var(--amber)'}>
          Book a lesson
        </a>
      </nav>
    </header>
  );
}

window.Nav = Nav;
