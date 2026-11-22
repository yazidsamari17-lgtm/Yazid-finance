(() => {
  'use strict';

  const grid = document.getElementById('galerieGrille');
  const empty = document.getElementById('galerieVide');
  const box = document.getElementById('lightbox');
  if (!grid) return;

  const BASE = 'Assets/Galerie/';
  const NOM_VALIDE = /^[\w\-. ()]+\.(jpe?g|png|webp|gif|avif)$/i;
  let photos = [];
  let index = 0;

  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');

  const url = (p) => BASE + encodeURIComponent(p.fichier);
  const alt = (p) => p.alt || p.titre || p.legende || 'Photo de la galerie professionnelle';

  function show(i) {
    if (!photos.length || !lbImg) return;
    index = (i + photos.length) % photos.length;
    const p = photos[index];
    lbImg.src = url(p);
    lbImg.alt = alt(p);
    lbCap.textContent = [p.titre, p.legende].filter(Boolean).join(' — ');
  }

  function open(i) {
    show(i);
    if (box && typeof box.showModal === 'function' && !box.open) box.showModal();
  }

  function render() {
    photos.forEach((p, i) => {
      const fig = document.createElement('figure');
      fig.className = 'gallery-item';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Agrandir : ' + alt(p));
      const img = document.createElement('img');
      img.src = url(p);
      img.alt = alt(p);
      img.loading = 'lazy';
      img.decoding = 'async';
      btn.appendChild(img);
      btn.addEventListener('click', () => open(i));
      fig.appendChild(btn);
      if (p.titre || p.legende || p.date || p.categorie) {
        const cap = document.createElement('figcaption');
        if (p.titre) { const b = document.createElement('b'); b.textContent = p.titre; cap.appendChild(b); }
        if (p.legende) { const s = document.createElement('span'); s.textContent = p.legende; cap.appendChild(s); }
        const meta = [p.categorie, p.date].filter(Boolean).join(' · ');
        if (meta) { const m = document.createElement('small'); m.textContent = meta.toUpperCase(); cap.appendChild(m); }
        fig.appendChild(cap);
      }
      grid.appendChild(fig);
    });
    grid.hidden = false;
    if (empty) empty.hidden = true;
  }

  if (box) {
    document.getElementById('lbClose')?.addEventListener('click', () => box.close());
    document.getElementById('lbPrev')?.addEventListener('click', () => show(index - 1));
    document.getElementById('lbNext')?.addEventListener('click', () => show(index + 1));
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  fetch(BASE + 'galerie.json', { cache: 'no-cache' })
    .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then((data) => {
      const liste = Array.isArray(data) ? data : (data && data.photos) || [];
      photos = liste.filter((p) => p && typeof p.fichier === 'string' && NOM_VALIDE.test(p.fichier));
      if (photos.length) render();
    })
    .catch(() => { /* galerie vide ou fichier absent : le message d'attente reste affiché */ });
})();
