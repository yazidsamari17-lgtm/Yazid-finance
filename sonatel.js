(() => {
  'use strict';
  if (typeof window.Chart !== 'function') return;

  const fr = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 });
  const years = ['2023', '2024', '2025'];
  const C = { blue: '#397fca', light: '#62b2ff', pale: '#9acfff', green: '#56d6a3', amber: '#e7b96d', grid: 'rgba(130,160,195,.12)', tick: '#8298b5', text: '#a9bad0' };

  Chart.defaults.font.family = 'DM Sans, sans-serif';
  Chart.defaults.color = C.text;

  const bar = (label, data, color) => ({ label, data, backgroundColor: color, borderRadius: 4 });
  const line = (label, data, color) => ({ label, data, borderColor: color, backgroundColor: color, tension: 0.3, borderWidth: 2, pointRadius: 4 });

  function make(id, type, datasets, unit) {
    const el = document.getElementById(id);
    if (!el) return;
    new Chart(el, {
      type,
      data: { labels: years, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { labels: { color: C.text, boxWidth: 12, padding: 16 } },
          tooltip: {
            backgroundColor: '#15263d', titleColor: '#fff', bodyColor: '#c6d7ec', borderColor: '#3c628c', borderWidth: 1,
            callbacks: { label: (c) => ' ' + c.dataset.label + ' : ' + fr.format(c.parsed.y) + ' ' + unit }
          }
        },
        scales: {
          x: { ticks: { color: C.tick }, grid: { color: C.grid } },
          y: { ticks: { color: C.tick, callback: (v) => fr.format(v) }, grid: { color: C.grid }, title: { display: true, text: unit, color: C.tick } }
        }
      }
    });
  }

  // Montants en milliards de FCFA (millions de FCFA du classeur / 1 000), comptes consolidés IFRS
  make('chartActivite', 'bar', [
    bar('Chiffre d\'affaires', [1620.7, 1776.4, 1923.1], C.blue),
    bar('Résultat d\'exploitation (EBIT)', [515.7, 619.5, 669.8], C.light),
    bar('Résultat net consolidé', [331.7, 393.7, 413.6], C.pale)
  ], 'Mds FCFA');

  make('chartMarges', 'line', [
    line('Marge opérationnelle', [31.8, 34.9, 34.8], C.light),
    line('Marge nette', [20.5, 22.2, 21.5], C.amber)
  ], '% du CA');

  make('chartRentabilite', 'line', [
    line('ROCE', [42.0, 42.7, 40.6], C.light),
    line('ROE part du Groupe', [34.4, 34.1, 30.9], C.green),
    line('ROA net', [13.8, 13.9, 13.0], C.amber)
  ], '%');

  make('chartStructure', 'bar', [
    bar('Dettes financières', [381.9, 460.5, 402.7], C.blue),
    bar('Disponibilités', [400.0, 460.4, 536.1], C.light),
    bar('Dette financière nette', [5.8, 23.0, -113.3], C.amber)
  ], 'Mds FCFA');

  make('chartFlux', 'bar', [
    bar('Flux de trésorerie opérationnels', [643.1, 660.0, 681.6], C.blue),
    bar('CAPEX', [288.1, 300.9, 289.2], C.amber),
    bar('Flux résiduel simplifié', [355.0, 359.1, 392.4], C.green)
  ], 'Mds FCFA');
})();
