const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(DIST)) throw new Error('dist directory missing');

const style = `
<style id="toolatlas-ui-v2">
:root{--bg:#071019;--panel:#0d1b27;--panel2:#102535;--line:#ffffff14;--text:#f7fafc;--muted:#8ea3b1;--cyan:#56e7ff;--lime:#bcff62;--pink:#ff63ba}
body{background:radial-gradient(circle at 50% -15%,#17364b 0,#071019 48%) !important;color:var(--text)!important}
.ta-nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(16px);background:#071019d9;border-bottom:1px solid var(--line)}
.ta-navin{max-width:1160px;margin:auto;padding:10px 18px;display:flex;align-items:center;gap:16px}.ta-brand{font-weight:1000;letter-spacing:-.065em;font-size:20px;color:#fff;text-decoration:none}.ta-brand i{font-style:normal;color:var(--cyan)}
.ta-navlinks{margin-left:auto;display:flex;gap:6px}.ta-navlinks a,.ta-action{color:#a4b7c3;text-decoration:none;font-size:10px;font-weight:800;padding:8px 10px;border:1px solid var(--line);background:#ffffff05;border-radius:9px;cursor:pointer}.ta-navlinks a:hover,.ta-action:hover{color:#fff;background:#ffffff0c;border-color:#ffffff26}
.ta-toolbar{max-width:1160px;margin:0 auto;padding:0 18px 16px;display:flex;gap:8px;flex-wrap:wrap}.ta-toolbar .ta-action.primary{background:var(--cyan);color:#061219;border-color:transparent}.ta-toolbar .ta-action{font-family:inherit}
.ta-toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%) translateY(14px);opacity:0;pointer-events:none;padding:10px 13px;border-radius:10px;background:#102938;border:1px solid #ffffff19;color:#fff;font-size:9px;transition:.18s;z-index:100}.ta-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.ta-search{max-width:820px;margin:0 auto 22px;position:relative;padding:0 18px}.ta-search input{width:100%;padding:15px 16px;border-radius:13px;border:1px solid var(--line);background:#091722;color:#fff;outline:none;font:inherit;font-size:14px}.ta-search input:focus{border-color:#56e7ff55;box-shadow:0 0 0 4px #56e7ff0b}.ta-suggest{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.ta-suggest button{border:1px solid var(--line);background:#ffffff05;color:#9db1bd;border-radius:999px;padding:6px 9px;font-size:8px;cursor:pointer}.ta-suggest button:hover{color:#fff;background:#ffffff0b}
.ta-homegrid{max-width:1120px;margin:0 auto;padding:0 18px;display:grid;grid-template-columns:1.1fr .9fr;gap:12px}.ta-feature,.ta-statbox{border:1px solid var(--line);border-radius:16px;background:linear-gradient(145deg,#0d1f2b,#09151e);padding:20px}.ta-feature h2{font-size:15px;margin:0 0 7px}.ta-feature p{font-size:9px;line-height:1.65;color:var(--muted);margin:0}.ta-feature strong{color:var(--lime)}.ta-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.ta-statbox b{font-size:21px;display:block;color:#fff}.ta-statbox span{font-size:7px;color:#8196a4;text-transform:uppercase;letter-spacing:.1em}
.ta-section{max-width:1120px;margin:0 auto;padding:28px 18px}.ta-sectionhead{display:flex;justify-content:space-between;align-items:end;margin-bottom:12px}.ta-sectionhead h2{margin:0;font-size:24px;letter-spacing:-.04em}.ta-sectionhead p{margin:3px 0 0;color:var(--muted);font-size:9px}.ta-count{color:var(--cyan);font-size:8px;font-weight:900}
.ta-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}.ta-card{display:block;border:1px solid var(--line);border-radius:13px;background:#0b1924;padding:15px;color:#fff;text-decoration:none;transition:.16s transform,.16s border-color,.16s background;min-height:74px}.ta-card:hover{transform:translateY(-2px);border-color:#56e7ff35;background:#0e2230}.ta-card b{font-size:11px}.ta-card span{display:block;margin-top:5px;color:#8ea2b0;font-size:8px;line-height:1.5}
.ta-categorygrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}.ta-category{border:1px solid var(--line);border-radius:14px;padding:16px;background:#0b1924;color:#fff;text-decoration:none}.ta-category:hover{border-color:#ffffff2e}.ta-category b{font-size:11px}.ta-category span{display:block;color:#8ea2b0;font-size:8px;line-height:1.5;margin-top:5px}.ta-category em{font-style:normal;color:var(--cyan);display:block;font-size:8px;font-weight:900;margin-top:9px}
.ta-related{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.ta-related a{border:1px solid var(--line);border-radius:10px;background:#ffffff04;padding:10px 12px;color:#edf5f8;text-decoration:none;font-size:9px}.ta-related a:hover{background:#ffffff08;border-color:#56e7ff35}
@media(max-width:820px){.ta-homegrid{grid-template-columns:1fr}.ta-grid,.ta-categorygrid{grid-template-columns:repeat(2,minmax(0,1fr))}.ta-navlinks{display:none}}
@media(max-width:560px){.ta-grid,.ta-categorygrid,.ta-related{grid-template-columns:1fr}.ta-navin{padding:9px 14px}.ta-toolbar{padding:0 14px 12px}.ta-search{padding:0 14px}.ta-section{padding:24px 14px}.ta-homegrid{padding:0 14px}.ta-stats{grid-template-columns:1fr 1fr 1fr}.ta-action{font-size:9px}}
</style>`;

const js = `
<script id="toolatlas-ui-v2-js">
(function(){
  function toast(msg){var t=document.querySelector('.ta-toast');if(!t){t=document.createElement('div');t.className='ta-toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__taToast);window.__taToast=setTimeout(function(){t.classList.remove('show')},1200)}
  function addNav(){if(document.querySelector('.ta-nav'))return;var n=document.createElement('header');n.className='ta-nav';n.innerHTML='<div class="ta-navin"><a class="ta-brand" href="/">TOOL<i>ATLAS</i></a><nav class="ta-navlinks"><a href="/">Home</a><a href="/#tools">Tools</a><a href="/#categories">Categories</a><a href="/sitemap.xml">Sitemap</a></nav></div>';document.body.insertBefore(n,document.body.firstChild)}
  function addToolbar(){if(!document.querySelector('#calc')||document.querySelector('.ta-toolbar'))return;var bar=document.createElement('div');bar.className='ta-toolbar';bar.innerHTML='<button class="ta-action primary" id="taCalcTop">Calculate</button><button class="ta-action" id="taReset">Reset</button><button class="ta-action" id="taCopy">Copy result</button><button class="ta-action" id="taShare">Share</button>';var main=document.querySelector('main');if(main&&main.parentNode)main.parentNode.insertBefore(bar,main);var form=document.querySelector('#calc');document.getElementById('taCalcTop').onclick=function(){if(form)form.requestSubmit()};document.getElementById('taReset').onclick=function(){if(form)form.reset();var r=document.querySelector('#result');if(r){r.textContent='';r.classList.remove('show')}toast('Reset')};document.getElementById('taCopy').onclick=function(){var r=document.querySelector('#result');var text=r?r.textContent.trim():'';if(!text){toast('Calculate something first');return}navigator.clipboard&&navigator.clipboard.writeText(text).then(function(){toast('Result copied')},function(){toast('Copy unavailable')})};document.getElementById('taShare').onclick=function(){if(navigator.share){navigator.share({title:document.title,url:location.href}).catch(function(){})}else if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(function(){toast('Link copied')})}}
  }
  function addSearch(){if(location.pathname!=='/'||document.querySelector('.ta-search'))return;var hero=document.querySelector('.hero');if(!hero)return;var s=document.createElement('div');s.className='ta-search';s.innerHTML='<input id="taSearch" placeholder="Search '+((window.__TA_COUNT||300))+' tools…" autocomplete="off"><div class="ta-suggest"><button data-q="salary">salary</button><button data-q="percentage">percentage</button><button data-q="fuel">fuel</button><button data-q="GPA">GPA</button><button data-q="rocket">rocket</button></div>';hero.appendChild(s);var input=s.querySelector('#taSearch');input.addEventListener('input',function(){var q=input.value.toLowerCase().trim();document.querySelectorAll('a[href]').forEach(function(a){if(!a.classList.contains('card')&&!a.classList.contains('ta-card'))return;var hit=!q||a.textContent.toLowerCase().indexOf(q)>=0;a.style.display=hit?'':'none'})});s.querySelectorAll('button').forEach(function(b){b.onclick=function(){input.value=b.getAttribute('data-q');input.dispatchEvent(new Event('input'));input.focus()}})}
  addNav();addToolbar();addSearch();
  if(!document.querySelector('.ta-toast')){var t=document.createElement('div');t.className='ta-toast';document.body.appendChild(t)}
})();
</script>`;

function walk(dir, out) { out=out||[]; for (const e of fs.readdirSync(dir,{withFileTypes:true})) { const p=path.join(dir,e.name); if(e.isDirectory()) walk(p,out); else if(e.name==='index.html') out.push(p); } return out; }

for (const file of walk(DIST)) {
  let html=fs.readFileSync(file,'utf8');
  if (html.includes('toolatlas-ui-v2')) continue;
  html=html.replace('</head>',style+'</head>');
  html=html.replace('</body>',js+'</body>');
  fs.writeFileSync(file,html);
}

console.log('ToolAtlas UI pass applied to '+walk(DIST).length+' pages.');
