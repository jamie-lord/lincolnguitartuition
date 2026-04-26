// Sticky nav scroll state
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 32) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = nav.querySelector('[data-nav-toggle]');
  const list = document.getElementById('site-nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Track list — single-playing audio with play/pause + progress
(function () {
  const lists = document.querySelectorAll('[data-track-list]');
  if (!lists.length) return;

  let currentAudio = null;
  let currentTrack = null;

  const formatTime = (s) => {
    if (!Number.isFinite(s)) return '';
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, '0')}`;
  };

  const stop = (track) => {
    track.classList.remove('is-playing');
    const playIcon = track.querySelector('.track__icon-play');
    const pauseIcon = track.querySelector('.track__icon-pause');
    if (playIcon) playIcon.style.display = '';
    if (pauseIcon) pauseIcon.style.display = 'none';
    const bar = track.querySelector('[data-track-progress]');
    if (bar) bar.style.width = '0%';
  };

  lists.forEach((list) => {
    const tracks = list.querySelectorAll('[data-track]');
    tracks.forEach((track) => {
      const btn = track.querySelector('[data-track-btn]');
      const audio = track.querySelector('[data-track-audio]');
      const lenEl = track.querySelector('[data-track-len]');
      const progress = track.querySelector('[data-track-progress]');
      if (!btn || !audio) return;

      audio.addEventListener('loadedmetadata', () => {
        if (lenEl && !lenEl.textContent.trim()) {
          lenEl.textContent = formatTime(audio.duration);
        }
      });

      audio.addEventListener('timeupdate', () => {
        if (progress && audio.duration) {
          progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
        }
      });

      audio.addEventListener('ended', () => stop(track));

      btn.addEventListener('click', () => {
        if (currentAudio && currentAudio !== audio) {
          currentAudio.pause();
          if (currentTrack) stop(currentTrack);
        }
        if (audio.paused) {
          audio.play().catch(() => {});
          track.classList.add('is-playing');
          const playIcon = track.querySelector('.track__icon-play');
          const pauseIcon = track.querySelector('.track__icon-pause');
          if (playIcon) playIcon.style.display = 'none';
          if (pauseIcon) pauseIcon.style.display = '';
          currentAudio = audio;
          currentTrack = track;
        } else {
          audio.pause();
          stop(track);
          currentAudio = null;
          currentTrack = null;
        }
      });
    });
  });
})();
