const fs = require('fs');
const path = require('path');

// Load CHAPTERS_DATA from chapters.js
let code = fs.readFileSync(path.join(__dirname, 'chapters.js'), 'utf8');
code += '\n;module.exports = CHAPTERS_DATA;';
const fn = new Function('module', 'exports', code);
const mod = { exports: [] };
fn(mod, mod.exports);
const chapters = mod.exports;

const docsDir = path.join(__dirname, 'docs');

chapters.forEach((ch, idx) => {
  const prevCh = idx > 0 ? chapters[idx - 1] : null;
  const nextCh = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  const filename = `${ch.num}_${ch.slug}.html`;
  const mdFilename = `${ch.num}_${ch.slug}.md`;

  const chapterOptionsHtml = chapters.map(c => `
    <option value="${c.num}_${c.slug}.html" ${c.id === ch.id ? 'selected' : ''}>
      ${c.num}. ${c.title.en}
    </option>
  `).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ch.title.en} | Finnish Hunting Handbook</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    body {
      background-color: var(--color-slate-100);
      color: var(--color-slate-800);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .doc-sticky-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(26, 46, 38, 0.96);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .doc-nav-left {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-wrap: wrap;
    }
    .doc-btn-back {
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 600;
      font-size: 0.88rem;
      padding: 0.4rem 0.85rem;
      background: rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-sm);
      transition: all var(--transition-fast);
    }
    .doc-btn-back:hover {
      background: var(--color-forest-accent);
      color: #fff;
      transform: translateX(-2px);
    }
    .doc-select {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius-sm);
      font-size: 0.85rem;
      cursor: pointer;
      outline: none;
      max-width: 320px;
    }
    .doc-select option {
      background: #1a2e26;
      color: #fff;
    }
    .doc-lang-controls {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .doc-lang-label {
      color: rgba(255,255,255,0.7);
      font-size: 0.8rem;
      margin-right: 0.2rem;
    }
    .doc-lang-btn {
      padding: 0.35rem 0.65rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-sm);
      color: #fff;
      font-size: 0.82rem;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .doc-lang-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }
    .doc-lang-btn.active {
      background: var(--color-orange-500);
      border-color: var(--color-orange-500);
      font-weight: 700;
    }
    .doc-dual-btn {
      padding: 0.35rem 0.65rem;
      background: rgba(255, 255, 255, 0.08);
      border: 1px dashed rgba(255, 255, 255, 0.35);
      border-radius: var(--radius-sm);
      color: #cbd5e1;
      font-size: 0.82rem;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .doc-dual-btn.active {
      background: var(--color-forest-accent);
      border-color: var(--color-forest-accent);
      color: #fff;
      font-weight: 700;
    }
    .doc-main-container {
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1.5rem;
      flex: 1;
      width: 100%;
    }
    .doc-card {
      background: #fff;
      border-radius: var(--radius-lg);
      padding: 2.5rem 2.75rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--color-slate-200);
    }
    .doc-header-block {
      border-bottom: 2px solid var(--color-slate-200);
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    .doc-chapter-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--color-slate-100);
      border: 1px solid var(--color-slate-300);
      color: var(--color-forest-dark);
      font-size: 0.82rem;
      font-weight: 700;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .doc-title {
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-forest-dark);
      line-height: 1.25;
      margin-bottom: 0.75rem;
    }
    .doc-subtitle-box {
      background: #f1f5f9;
      border-left: 4px solid var(--color-orange-500);
      padding: 1rem 1.25rem;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      color: var(--color-slate-700);
      font-size: 1rem;
      line-height: 1.5;
    }
    .doc-content-area {
      line-height: 1.7;
      color: #334155;
    }
    .doc-content-area h2 {
      font-size: 1.4rem;
      color: var(--color-forest-dark);
      margin-top: 2rem;
      margin-bottom: 0.85rem;
      border-bottom: 1px solid var(--color-slate-200);
      padding-bottom: 0.4rem;
    }
    .doc-content-area h3 {
      font-size: 1.15rem;
      color: #1e293b;
      margin-top: 1.5rem;
      margin-bottom: 0.6rem;
    }
    .doc-content-area p {
      margin-bottom: 1rem;
    }
    .doc-content-area ul, .doc-content-area ol {
      margin-bottom: 1.25rem;
      padding-left: 1.5rem;
    }
    .doc-content-area li {
      margin-bottom: 0.4rem;
    }
    .doc-content-area table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.92rem;
    }
    .doc-content-area th, .doc-content-area td {
      border: 1px solid var(--color-slate-300);
      padding: 0.75rem 1rem;
      text-align: left;
    }
    .doc-content-area th {
      background: #f8fafc;
      font-weight: 700;
      color: #0f172a;
    }
    .doc-content-area tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .reader-alert {
      padding: 1rem 1.25rem;
      border-radius: var(--radius-sm);
      margin: 1.5rem 0;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .reader-alert.note {
      background-color: #eff6ff;
      border-left: 4px solid #3b82f6;
      color: #1e40af;
    }
    .reader-alert.warning {
      background-color: #fffbeb;
      border-left: 4px solid #f59e0b;
      color: #92400e;
    }
    .reader-alert.danger {
      background-color: #fef2f2;
      border-left: 4px solid #ef4444;
      color: #991b1b;
    }
    .secondary-preview-box {
      margin-top: 0.6rem;
      padding: 0.75rem 1rem;
      background: #f8fafc;
      border-left: 3px solid var(--color-orange-500);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      color: #64748b;
      font-size: 0.92em;
    }
    .doc-footer-nav {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--color-slate-200);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .doc-footer-links {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
    .doc-nav-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.1rem;
      background: var(--color-slate-200);
      color: var(--color-slate-800);
      border-radius: var(--radius-md);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all var(--transition-fast);
    }
    .doc-nav-btn:hover {
      background: var(--color-forest-dark);
      color: #fff;
    }
    .doc-nav-btn.primary {
      background: var(--color-forest-dark);
      color: #fff;
    }
    .doc-nav-btn.primary:hover {
      background: var(--color-forest-accent);
    }
    .doc-raw-link {
      color: #64748b;
      font-size: 0.85rem;
      text-decoration: underline;
    }
    .doc-raw-link:hover {
      color: var(--color-forest-dark);
    }
    @media (max-width: 768px) {
      .doc-card {
        padding: 1.5rem;
      }
      .doc-title {
        font-size: 1.5rem;
      }
      .doc-select {
        max-width: 100%;
        width: 100%;
      }
    }
  </style>
</head>
<body>

  <!-- Sticky Header Bar -->
  <header class="doc-sticky-header">
    <div class="doc-nav-left">
      <a href="../index.html" class="doc-btn-back">← Finnish Hunting Portal</a>
      <select class="doc-select" onchange="if(this.value) window.location.href=this.value" aria-label="Jump to Chapter">
        ${chapterOptionsHtml}
      </select>
    </div>
    <div class="doc-lang-controls">
      <span class="doc-lang-label">Lang:</span>
      <button class="doc-lang-btn" data-lang="en" onclick="setLanguage('en')">🇬🇧 EN</button>
      <button class="doc-lang-btn" data-lang="zh" onclick="setLanguage('zh')">🇨🇳 中文</button>
      <button class="doc-lang-btn" data-lang="fi" onclick="setLanguage('fi')">🇫🇮 Suomi</button>
      <button id="doc-dual-toggle" class="doc-dual-btn" onclick="toggleDualLanguage()" title="Toggle Dual-Language Comparison">🌐 Dual Mode</button>
    </div>
  </header>

  <!-- Main Article Body -->
  <main class="doc-main-container">
    <article class="doc-card">
      <header class="doc-header-block">
        <div class="doc-chapter-badge">
          <span>${ch.icon}</span>
          <span>Chapter ${ch.num} of ${String(chapters.length).padStart(2, '0')}</span>
        </div>
        <h1 id="doc-article-title" class="doc-title">${ch.title.en}</h1>
        <div id="doc-article-subtitle" class="doc-subtitle-box">${ch.subtitle.en}</div>
      </header>

      <!-- Primary Content Area -->
      <div id="doc-content-body" class="doc-content-area">
        ${ch.content.en}
      </div>

      <!-- Navigation & Raw Source Footer -->
      <footer class="doc-footer-nav">
        <div>
          ${prevCh ? `<a href="${prevCh.num}_${prevCh.slug}.html" class="doc-nav-btn">← Ch ${prevCh.num}</a>` : `<a href="../index.html" class="doc-nav-btn">← Main Portal</a>`}
        </div>
        <div class="doc-footer-links">
          <a href="${mdFilename}" class="doc-raw-link" target="_blank">View Raw .md Source</a>
          <button onclick="window.scrollTo({top:0, behavior:'smooth'})" class="doc-nav-btn" style="cursor:pointer;">↑ Top</button>
        </div>
        <div>
          ${nextCh ? `<a href="${nextCh.num}_${nextCh.slug}.html" class="doc-nav-btn primary">Ch ${nextCh.num} →</a>` : `<a href="../index.html" class="doc-nav-btn primary">Complete Guide ✓</a>`}
        </div>
      </footer>
    </article>
  </main>

  <script src="../chapters.js"></script>
  <script>
    const CURRENT_CHAPTER_ID = "${ch.id}";
    let currentLang = localStorage.getItem('fi_hunt_lang') || 'en';
    let secondaryLang = localStorage.getItem('fi_hunt_secondary_lang') || 'none';
    let dualEnabled = (secondaryLang !== 'none' && secondaryLang !== currentLang);

    function updateLanguageUI() {
      // Update buttons active class
      document.querySelectorAll('.doc-lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
      });
      const dualBtn = document.getElementById('doc-dual-toggle');
      if (dualBtn) {
        dualBtn.classList.toggle('active', dualEnabled);
        dualBtn.textContent = dualEnabled ? '🌐 Dual: ON (' + secondaryLang.toUpperCase() + ')' : '🌐 Dual Mode';
      }

      // Find current chapter
      const chData = CHAPTERS_DATA.find(c => c.id === CURRENT_CHAPTER_ID);
      if (!chData) return;

      // Update Document Title
      const titleEl = document.getElementById('doc-article-title');
      const subEl = document.getElementById('doc-article-subtitle');
      const bodyEl = document.getElementById('doc-content-body');

      const title1 = chData.title[currentLang] || chData.title['en'];
      const sub1 = chData.subtitle[currentLang] || chData.subtitle['en'];
      const content1 = chData.content[currentLang] || chData.content['en'];

      if (dualEnabled && secondaryLang !== 'none' && secondaryLang !== currentLang) {
        const title2 = chData.title[secondaryLang] || chData.title['en'];
        const sub2 = chData.subtitle[secondaryLang] || chData.subtitle['en'];
        const content2 = chData.content[secondaryLang] || chData.content['en'];

        titleEl.innerHTML = '<div>' + title1 + '</div><div style="font-size: 1.15rem; color: #64748b; font-weight: 500; margin-top: 0.35rem;">' + title2 + '</div>';
        subEl.innerHTML = '<div>' + sub1 + '</div><div class="secondary-preview-box">' + sub2 + '</div>';
        bodyEl.innerHTML = '<div class="primary-lang-content">' + content1 + '</div>' +
          '<div style="margin: 2.5rem 0; border-top: 2px dashed #cbd5e1; padding-top: 1.5rem; background: #f8fafc; padding: 1.5rem; border-radius: 8px;">' +
          '<div style="font-weight: 700; color: #d97706; margin-bottom: 1rem; font-size: 0.95rem;">🌐 Comparison Language (' + (secondaryLang === 'zh' ? '中文' : (secondaryLang === 'fi' ? 'Suomi' : 'English')) + '):</div>' +
          '<div class="secondary-lang-content" style="color: #475569;">' + content2 + '</div>' +
          '</div>';
      } else {
        titleEl.textContent = title1;
        subEl.textContent = sub1;
        bodyEl.innerHTML = content1;
      }

      document.title = title1 + ' | Finnish Hunting Handbook';
    }

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('fi_hunt_lang', lang);
      if (secondaryLang === lang) {
        secondaryLang = 'none';
        localStorage.setItem('fi_hunt_secondary_lang', 'none');
        dualEnabled = false;
      }
      updateLanguageUI();
    }

    function toggleDualLanguage() {
      if (dualEnabled) {
        dualEnabled = false;
        secondaryLang = 'none';
        localStorage.setItem('fi_hunt_secondary_lang', 'none');
      } else {
        dualEnabled = true;
        if (currentLang === 'en') secondaryLang = 'zh';
        else if (currentLang === 'zh') secondaryLang = 'en';
        else secondaryLang = 'en';
        localStorage.setItem('fi_hunt_secondary_lang', secondaryLang);
      }
      updateLanguageUI();
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      ${prevCh ? `if (e.key === 'ArrowLeft') window.location.href = '${prevCh.num}_${prevCh.slug}.html';` : ''}
      ${nextCh ? `if (e.key === 'ArrowRight') window.location.href = '${nextCh.num}_${nextCh.slug}.html';` : ''}
      if (e.key === 'Escape') window.location.href = '../index.html';
    });

    document.addEventListener('DOMContentLoaded', () => {
      updateLanguageUI();
    });
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(docsDir, filename), html, 'utf8');
  console.log(`Generated docs/${filename}`);
});

console.log(`All ${chapters.length} documentation HTML files generated successfully.`);
