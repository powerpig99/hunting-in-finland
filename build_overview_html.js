const fs = require('fs');
const path = require('path');

function parseMarkdown(md) {
  let html = md;

  // Escape raw HTML chars except allowed tags
  // Code blocks first
  const codeBlocks = [];
  html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const placeholder = `___CODEBLOCK_${codeBlocks.length}___`;
    codeBlocks.push({ lang, code });
    return placeholder;
  });

  // Inline code
  const inlineCodes = [];
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const placeholder = `___INLINECODE_${inlineCodes.length}___`;
    inlineCodes.push(code);
    return placeholder;
  });

  // GitHub callouts: > [!NOTE], > [!TIP], > [!WARNING], > [!CAUTION]
  html = html.replace(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:>.*\n?)*)/gim, (match, type, body) => {
    const cleanBody = body.replace(/^>\s?/gm, '').trim();
    const typeClass = type.toLowerCase() === 'caution' ? 'danger' : (type.toLowerCase() === 'warning' ? 'warning' : 'note');
    return `<div class="reader-alert ${typeClass}"><strong>${type.toUpperCase()}:</strong> ${cleanBody}</div>\n`;
  });

  // Standard blockquotes: > ...
  html = html.replace(/^>\s?(.*)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // Headers
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');

  // Bold & Italic
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%; border-radius:8px; margin:1rem 0;">');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');

  // Tables
  html = html.replace(/((?:\|[^\n]+\|\r?\n)+)/g, (match) => {
    const lines = match.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length < 2) return match;
    const headerCols = lines[0].split('|').slice(1, -1).map(c => c.trim());
    // check if line 1 is separator
    const isSep = /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[1]);
    if (!isSep) return match;

    let tableHtml = '<div class="table-container"><table><thead><tr>';
    headerCols.forEach(col => {
      tableHtml += `<th>${col}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    for (let i = 2; i < lines.length; i++) {
      const rowCols = lines[i].split('|').slice(1, -1).map(c => c.trim());
      tableHtml += '<tr>';
      rowCols.forEach(col => {
        tableHtml += `<td>${col}</td>`;
      });
      tableHtml += '</tr>';
    }
    tableHtml += '</tbody></table></div>';
    return tableHtml;
  });

  // Unordered lists
  html = html.replace(/(?:^|\n)(?:[-*+]\s+[^\n]+(?:\n|$))+/g, (match) => {
    const items = match.trim().split('\n').map(line => {
      return line.replace(/^[-*+]\s+/, '').trim();
    });
    return '\n<ul>\n' + items.map(item => `  <li>${item}</li>`).join('\n') + '\n</ul>\n';
  });

  // Ordered lists
  html = html.replace(/(?:^|\n)(?:\d+\.\s+[^\n]+(?:\n|$))+/g, (match) => {
    const items = match.trim().split('\n').map(line => {
      return line.replace(/^\d+\.\s+/, '').trim();
    });
    return '\n<ol>\n' + items.map(item => `  <li>${item}</li>`).join('\n') + '\n</ol>\n';
  });

  // Paragraphs
  const paragraphs = html.split(/\n{2,}/);
  html = paragraphs.map(para => {
    const p = para.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<div') || p.startsWith('<blockquote') || p.startsWith('<table') || p.startsWith('<hr') || p.startsWith('___CODEBLOCK_')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('\n\n');

  // Restore inline codes
  html = html.replace(/___INLINECODE_(\d+)___/g, (match, idx) => {
    const code = inlineCodes[idx];
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<code>${escaped}</code>`;
  });

  // Restore code blocks
  html = html.replace(/___CODEBLOCK_(\d+)___/g, (match, idx) => {
    const { lang, code } = codeBlocks[idx];
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang || 'text'}">${escaped}</code></pre>`;
  });

  return html;
}

const readmePath = path.join(__dirname, 'README.md');
const readmeContent = fs.readFileSync(readmePath, 'utf8');
const parsedBody = parseMarkdown(readmeContent);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overview & Complete Guide | Hunting in Finland (芬兰狩猎全景指南)</title>
  <link rel="stylesheet" href="styles.css">
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
    .doc-main-container {
      max-width: 960px;
      margin: 2rem auto;
      padding: 0 1.25rem 4rem;
      flex: 1;
      width: 100%;
    }
    .doc-card {
      background: #fff;
      border-radius: var(--radius-lg);
      padding: 2.5rem 3rem;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-slate-200);
    }
    .doc-content-area {
      line-height: 1.75;
      font-size: 1.02rem;
      color: #334155;
    }
    .doc-content-area h1 {
      font-size: 2rem;
      color: var(--color-forest-dark);
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      line-height: 1.25;
      border-bottom: 2px solid var(--color-slate-200);
      padding-bottom: 0.5rem;
    }
    .doc-content-area h2 {
      font-size: 1.45rem;
      color: #0f172a;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      border-bottom: 1px solid var(--color-slate-200);
      padding-bottom: 0.4rem;
    }
    .doc-content-area h3 {
      font-size: 1.18rem;
      color: #1e293b;
      margin-top: 1.5rem;
      margin-bottom: 0.6rem;
    }
    .doc-content-area p {
      margin-bottom: 1rem;
    }
    .doc-content-area ul, .doc-content-area ol {
      margin-bottom: 1.25rem;
      padding-left: 1.75rem;
    }
    .doc-content-area li {
      margin-bottom: 0.4rem;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    th, td {
      border: 1px solid var(--color-slate-300);
      padding: 0.75rem 1rem;
      text-align: left;
    }
    th {
      background: #f8fafc;
      font-weight: 700;
      color: #0f172a;
    }
    tr:nth-child(even) td {
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
    pre {
      background: #0f172a;
      color: #f8fafc;
      padding: 1rem 1.25rem;
      border-radius: var(--radius-sm);
      overflow-x: auto;
      font-size: 0.88rem;
      margin: 1.25rem 0;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      background: rgba(0,0,0,0.06);
      padding: 0.15rem 0.35rem;
      border-radius: 4px;
      font-size: 0.88em;
    }
    pre code {
      background: transparent;
      padding: 0;
    }
    blockquote {
      border-left: 4px solid var(--color-forest-accent);
      padding-left: 1rem;
      margin: 1.25rem 0;
      color: var(--color-slate-600);
      font-style: italic;
    }
    hr {
      border: 0;
      border-top: 1px solid var(--color-slate-200);
      margin: 2rem 0;
    }
    @media (max-width: 768px) {
      .doc-card {
        padding: 1.5rem;
      }
      .doc-content-area h1 {
        font-size: 1.6rem;
      }
    }
  </style>
</head>
<body>

  <!-- Sticky Header Bar -->
  <header class="doc-sticky-header">
    <div class="doc-nav-left">
      <a href="index.html" class="doc-btn-back">← Finnish Hunting Portal</a>
      <a href="https://powerpig99.github.io/not-a-toe/" class="doc-btn-back" target="_blank" rel="noopener" title="Author Blog (Not a ToE)">🌌 Blog</a>
    </div>
    <div>
      <a href="README.md" class="doc-btn-back" target="_blank" style="background:rgba(255,255,255,0.08); font-weight:normal; font-size:0.8rem;">📄 Raw README.md</a>
    </div>
  </header>

  <!-- Main Content -->
  <main class="doc-main-container">
    <article class="doc-card">
      <div class="doc-content-area">
        ${parsedBody}
      </div>
    </article>
  </main>

  <footer style="background:#1a2e26; color:rgba(255,255,255,0.7); text-align:center; padding:2rem 1rem; font-size:0.88rem;">
    <p>🌲 <strong>Hunting in Finland: The Complete Beginner & Resident Field Guide</strong></p>
    <p style="margin-top:0.5rem;"><a href="index.html" style="color:#a7f3d0;">Home Portal</a> • <a href="https://powerpig99.github.io/not-a-toe/" style="color:#a7f3d0;" target="_blank" rel="noopener">Not a ToE Blog</a> • <a href="https://github.com/powerpig99/hunting-in-finland" style="color:#a7f3d0;" target="_blank" rel="noopener">GitHub Repository</a></p>
  </footer>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'overview.html'), html, 'utf8');
console.log('Successfully generated overview.html from README.md');
