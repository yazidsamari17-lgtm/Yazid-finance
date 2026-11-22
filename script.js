(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Menu mobile accessible
  const toggle = $('#menuToggle');
  const nav = $('#mainNav');
  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
    };
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    $$('a', nav).forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (nav.classList.contains('open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  // Barre de progression de lecture
  const progress = $('#progressBar');
  let ticking = false;
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });
  updateProgress();

  // Animations progressives, avec solution de repli
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  // Année dynamique
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Tableau de bord pédagogique de la page d'accueil
  const canvas = $('#financeChart');
  if (canvas && typeof window.Chart === 'function') {
    const labels12 = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    const values = [102, 105, 103, 109, 112, 110, 116, 119, 117, 123, 126, 130];
    const palette = ['#55a6ff', '#56d6a3', '#e7b96d', '#9b8cff'];
    const tabs = $$('.chart-tab');
    const period = $('#periodSelect');
    let chart;
    let type = 'line';

    const makeConfig = () => {
      const count = period && period.value === '6' ? 6 : 12;
      const dataLabels = labels12.slice(-count);
      const dataValues = values.slice(-count);
      const common = { responsive: true, maintainAspectRatio: false, plugins: {
        legend: { labels: { color: '#a9bad0', usePointStyle: true, boxWidth: 8 } },
        tooltip: { backgroundColor: '#15263d', titleColor: '#fff', bodyColor: '#dce7f7', borderColor: '#35577d', borderWidth: 1 }
      }};
      if (type === 'doughnut') return {
        type, data: { labels: ['Activité A', 'Activité B', 'Activité C', 'Autres'], datasets: [{ data: [38, 27, 21, 14], backgroundColor: palette, borderColor: '#101d30', borderWidth: 3, hoverOffset: 7 }] },
        options: { ...common, cutout: '62%' }
      };
      if (type === 'bar') return {
        type, data: { labels: ['Indicateur A', 'Indicateur B', 'Indicateur C', 'Indicateur D'], datasets: [{ label: 'Valeur pédagogique', data: [130, 112, 94, 78], backgroundColor: palette, borderRadius: 5, maxBarThickness: 54 }] },
        options: { ...common, scales: { x: { ticks: { color: '#8298b5' }, grid: { display: false } }, y: { beginAtZero: true, ticks: { color: '#8298b5' }, grid: { color: 'rgba(130,160,195,.12)' } } } }
      };
      return {
        type: 'line', data: { labels: dataLabels, datasets: [{ label: 'Indice fictif', data: dataValues, borderColor: '#55a6ff', backgroundColor: 'rgba(85,166,255,.13)', fill: true, tension: .32, borderWidth: 2.5, pointRadius: 3, pointHoverRadius: 6 }] },
        options: { ...common, interaction: { mode: 'index', intersect: false }, scales: { x: { ticks: { color: '#8298b5' }, grid: { color: 'rgba(130,160,195,.08)' } }, y: { ticks: { color: '#8298b5' }, grid: { color: 'rgba(130,160,195,.12)' } } } }
      };
    };
    const renderChart = () => {
      if (chart) chart.destroy();
      chart = new window.Chart(canvas, makeConfig());
    };
    tabs.forEach(tab => tab.addEventListener('click', () => {
      type = tab.dataset.chart || 'line';
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      renderChart();
    }));
    if (period) period.addEventListener('change', renderChart);
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.classList.contains('active'))));
    renderChart();
  }
})();
