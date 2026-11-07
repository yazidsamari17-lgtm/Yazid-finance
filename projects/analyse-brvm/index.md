---
---

@import "{{ site.theme }}";

:root {
  --bg-primary: #071521;
  --bg-secondary: #0d1d2d;
  --bg-card: rgba(15, 28, 42, 0.92);
  --bg-card-alt: rgba(18, 35, 52, 0.95);
  --border-color: rgba(203, 167, 92, 0.28);
  --text-primary: #f3f5f7;
  --text-secondary: #d4d9df;
  --text-muted: #9ca9b8;
  --accent: #d7af4b;
  --accent-bright: #f1d07a;
  --shadow-soft: 0 18px 38px rgba(3, 10, 18, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: radial-gradient(circle at top, rgba(31, 69, 99, 0.35), transparent 30%), var(--bg-primary);
  color: var(--text-primary);
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.7;
}

.page-header {
  background: linear-gradient(135deg, rgba(5, 16, 26, 0.9), rgba(11, 28, 41, 0.88));
  border-bottom: 1px solid rgba(215, 175, 75, 0.2);
  box-shadow: var(--shadow-soft);
}

.page-header .project-name {
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.page-header .project-tagline {
  color: var(--text-secondary);
}

.page-header .btn {
  background: rgba(215, 175, 75, 0.08);
  border-color: rgba(215, 175, 75, 0.35);
  color: var(--text-primary);
}

.main-content {
  max-width: 1100px;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.main-content h1,
.main-content h2,
.main-content h3 {
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.main-content h1 {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  margin-bottom: 1rem;
}

.main-content h2 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(215, 175, 75, 0.2);
}

.main-content p,
.main-content li {
  color: var(--text-secondary);
}

.main-content a {
  color: var(--accent-bright);
}

.main-content a:hover {
  color: var(--text-primary);
}

.hero {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0 0.5rem;
}

.eyebrow {
  color: var(--accent-bright);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-copy h2 {
  font-size: clamp(1.7rem, 3vw, 2.6rem);
  line-height: 1.25;
  margin-top: 0;
}

.hero-panel {
  display: grid;
  gap: 1rem;
}

.mini-card,
.project-card,
.skill-card,
.contact-panel {
  background: linear-gradient(180deg, rgba(17, 30, 44, 0.98), rgba(10, 20, 30, 0.98));
  border: 1px solid var(--border-color);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
}

.mini-card {
  padding: 1.2rem 1.2rem;
}

.mini-card span,
.project-tag {
  display: inline-block;
  color: var(--accent-bright);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.mini-card strong,
.project-card h3,
.skill-card h3 {
  color: var(--text-primary);
}

.mini-card small {
  color: var(--text-muted);
  display: block;
  margin-top: 0.4rem;
}

.mini-card.accent {
  border-color: rgba(215, 175, 75, 0.38);
}

.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem 1rem;
  margin: 1.2rem 0 2rem;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  background: rgba(12, 24, 36, 0.7);
  border: 1px solid rgba(215, 175, 75, 0.12);
}

.top-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
}

.top-nav a:hover {
  color: var(--text-primary);
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #b98e2d);
  color: #0b1721;
  box-shadow: 0 10px 22px rgba(215, 175, 75, 0.28);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 28px rgba(215, 175, 75, 0.36);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-primary);
  border: 1px solid rgba(215, 175, 75, 0.3);
}

.btn-secondary:hover {
  background: rgba(215, 175, 75, 0.08);
}

.project-grid,
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.project-card,
.skill-card {
  padding: 1.4rem 1.3rem;
}

.project-card h3 {
  margin: 0.3rem 0 0.8rem;
  font-size: 1.2rem;
}

.project-card p,
.skill-card li {
  color: var(--text-secondary);
}

.project-card .project-link {
  display: inline-block;
  margin-top: 0.8rem;
  font-weight: 700;
}

.skill-card ul {
  margin: 0.7rem 0 0 1.2rem;
  padding: 0;
}

.contact-panel {
  padding: 1.2rem 1.4rem;
  margin-top: 1rem;
}

blockquote {
  background: rgba(255, 255, 255, 0.02);
  border-left: 4px solid var(--accent);
  color: var(--text-secondary);
  padding: 1rem 1.2rem;
  border-radius: 0 10px 10px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background: rgba(13, 23, 33, 0.7);
  border: 1px solid rgba(215, 175, 75, 0.18);
}

th, td {
  padding: 0.75rem 0.8rem;
  border-bottom: 1px solid rgba(215, 175, 75, 0.12);
  color: var(--text-secondary);
  text-align: left;
}

th {
  background: rgba(215, 175, 75, 0.08);
  color: var(--text-primary);
}

code {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  color: var(--accent-bright);
}

@media screen and (max-width: 768px) {
  .hero,
  .project-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .main-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .page-header .project-name {
    font-size: 1.75rem;
  }

  .page-header .btn {
    margin-bottom: 0.5rem;
  }
}

@media screen and (max-width: 480px) {
  .btn {
    width: 100%;
    text-align: center;
  }

  .cta-group {
    display: grid;
  }
}

