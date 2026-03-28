/* ============================================
   KEEL — Marine snow, depth, observation
   ============================================ */

/* ---- Marine snow particles ---- */
(function marinesnow() {
  const canvas = document.createElement('canvas');
  canvas.id = 'marine-snow';
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    zIndex: '1',
    pointerEvents: 'none',
    opacity: '0.6',
  });
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function seed() {
    const count = Math.floor((w * h) / 18000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.15,
      dy: Math.random() * 0.25 + 0.08,
      o: Math.random() * 0.5 + 0.1,
      phase: Math.random() * Math.PI * 2,
      drift: Math.random() * 0.3 + 0.1,
    }));
  }

  let t = 0;
  function frame() {
    ctx.clearRect(0, 0, w, h);
    t += 0.008;
    for (const p of particles) {
      p.x += p.dx + Math.sin(t + p.phase) * p.drift * 0.3;
      p.y += p.dy;
      if (p.y > h + 4) { p.y = -4; p.x = Math.random() * w; }
      if (p.x > w + 4) p.x = -4;
      if (p.x < -4) p.x = w + 4;
      const flicker = 0.7 + Math.sin(t * 2 + p.phase) * 0.3;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180, 200, 215, ${p.o * flicker})`;
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  resize();
  seed();
  frame();
  window.addEventListener('resize', () => { resize(); seed(); });
})();

/* ---- Scroll-triggered reveals ---- */
(function reveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.post-list-item, .post-content > *').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${i * 60}ms`);
    observer.observe(el);
  });
})();

/* ---- Reading progress (single posts only) ---- */
(function progress() {
  const article = document.querySelector('.post-content');
  if (!article) return;

  const bar = document.createElement('div');
  bar.className = 'reading-progress';
  document.body.appendChild(bar);

  function update() {
    const rect = article.getBoundingClientRect();
    const total = article.scrollHeight;
    const visible = window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const pct = Math.min(1, scrolled / (total - visible));
    bar.style.setProperty('--progress', pct);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
