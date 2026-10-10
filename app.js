'use strict';
let approved = [];
const query = document.getElementById('query');
const count = document.getElementById('count');
const results = document.getElementById('results');
function draw() {
  const q = query.value.trim().toLocaleLowerCase();
  results.replaceChildren();
  const matches = q ? approved.filter(x => x.zomi.toLocaleLowerCase().includes(q) || x.english.toLocaleLowerCase().includes(q)) : approved.slice(0, 20);
  count.textContent = `${matches.length} ${q ? 'matching' : 'available'} approved ${matches.length === 1 ? 'entry' : 'entries'}`;
  if (!approved.length) {
    const p = document.createElement('p'); p.textContent = 'The dictionary is preparing its first reviewed entries. No translations have been certified for publication yet.'; results.append(p); return;
  }
  if (!matches.length) { const p = document.createElement('p'); p.textContent = 'No approved entry matches your search.'; results.append(p); return; }
  for (const x of matches.slice(0, 100)) {
    const article = document.createElement('article'); article.className = 'entry';
    const title = document.createElement('h3'); title.textContent = x.zomi;
    const meaning = document.createElement('p'); meaning.textContent = x.english;
    const badge = document.createElement('span'); badge.className = 'tag'; badge.textContent = 'Editorially approved';
    article.append(title, meaning, badge); results.append(article);
  }
}
fetch('./approved.json', {cache:'no-store'}).then(r => {if(!r.ok)throw new Error('Unable to load approved entries');return r.json()}).then(data => {if(!Array.isArray(data))throw new Error('Invalid dictionary format'); approved=data.filter(x=>x && x.status==='approved' && typeof x.zomi==='string' && typeof x.english==='string' && x.zomi.trim() && x.english.trim());draw()}).catch(()=>{count.textContent='Dictionary temporarily unavailable';results.textContent='Please try again later.'});
query.addEventListener('input', draw);
