"use strict";
let entries=[];
let approvedEntries=[];
const query=document.getElementById('query'),count=document.getElementById('count'),results=document.getElementById('results');
const norm=s=>String(s||'').toLocaleLowerCase().trim();
function draw(){
 const q=norm(query.value);results.replaceChildren();
 const all=[...approvedEntries,...entries];
 const matches=q?all.filter(x=>norm(x.zomi).includes(q)||norm(x.english).includes(q)):all.slice(0,30);
 count.textContent=`${matches.length} ${q?'matching':'shown'} research ${matches.length===1?'entry':'entries'} · ${entries.length} unverified candidates + ${approvedEntries.length} approved`;
 if(!matches.length){const p=document.createElement('p');p.textContent='No research entry matches your search.';results.append(p);return;}
 for(const x of matches.slice(0,100)){
  const article=document.createElement('article');article.className='entry';
  const title=document.createElement('h3');title.textContent=x.zomi;
  const meaning=document.createElement('p');meaning.textContent=x.english;
  const badge=document.createElement('span');badge.className=x.status==='approved'?'tag approved':'tag unverified';badge.textContent=x.status==='approved'?'Administrator approved':'Unverified research candidate';
  article.append(title,meaning,badge);
  if(x.source && /^https:\/\//.test(x.source)){const p=document.createElement('p');p.className='source';const a=document.createElement('a');a.href=x.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Candidate source (not verification)';p.append(a);article.append(p);}
  results.append(article);
 }
 if(matches.length>100){const p=document.createElement('p');p.textContent='Showing first 100 matches. Refine your search to narrow results.';results.append(p);}
}
fetch('./candidates.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Load failed');return r.json()}).then(data=>{
 if(!Array.isArray(data))throw Error('Invalid format');
 entries=data.filter(x=>x&&typeof x.zomi==='string'&&typeof x.english==='string'&&x.zomi.trim()&&x.english.trim()).map(x=>({...x,status:'unverified'}));draw();
 fetch('./approved.json',{cache:'no-store'}).then(r=>r.ok?r.json():[]).then(rows=>{if(Array.isArray(rows)){approvedEntries=rows.filter(x=>x&&x.status==='approved'&&typeof x.zomi==='string'&&x.zomi.trim()&&typeof x.english==='string'&&x.english.trim());draw();}}).catch(()=>{});
}).catch(()=>{count.textContent='Dictionary temporarily unavailable';results.textContent='Please try again later.'});
query.addEventListener('input',draw);

(function(){
 const link=document.getElementById('contribute-link');
 const status=document.getElementById('contribute-status');
 const url=String(window.ZOMI_CONTRIBUTE_FORM_URL||'').trim();
 let valid=false;
 try{const u=new URL(url);valid=u.protocol==='https:' && (u.hostname==='docs.google.com'||u.hostname==='forms.gle') && (u.hostname==='forms.gle'||u.pathname.includes('/forms/'));}catch(e){}
 if(valid){link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.removeAttribute('aria-disabled');link.textContent='Contribute a word ↗';status.textContent='Submissions are privately reviewed by the administrator before publication.';}
 else{link.addEventListener('click',e=>e.preventDefault());}
})();
