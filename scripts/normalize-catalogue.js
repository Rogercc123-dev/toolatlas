const fs=require('fs');const path=require('path');
const ROOT=path.join(__dirname,'..'),DIST=path.join(ROOT,'dist'),BUILD=path.join(__dirname,'build.js'),EXPAND=path.join(__dirname,'expand-tools.js');
const CATS={finance:'Finance',education:'Education',travel:'Travel',engineering:'Engineering',math:'Math',work:'Work',conversion:'Converters',everyday:'Everyday',health:'Health & Wellness',tech:'Technology',cooking:'Cooking & Food',construction:'Home & Construction'};
function esc(s){return String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
// Recover the category assigned to the original build.js records instead of guessing from slugs.
const src=fs.readFileSync(BUILD,'utf8');
const map=new Map();
const re=/\['([^']+)','([^']+)','([^']+)'/g;let m;while((m=re.exec(src)))map.set(m[1],m[3]);
// Also read the expanded catalogue so its pages remain authoritative.
const ex=fs.readFileSync(EXPAND,'utf8');
const exRe=/\['([^']+)','([^']+)','([^']+)','([^']*)'/g;while((m=exRe.exec(ex)))map.set(m[2],m[1]);
for(const slug of fs.readdirSync(DIST,{withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>e.name)){
  const from=path.join(DIST,slug);const cat=map.get(slug);if(!cat)continue;const targetRoot=path.join(DIST,cat),target=path.join(targetRoot,slug);fs.mkdirSync(targetRoot,{recursive:true});
  if(fs.existsSync(target))continue;fs.renameSync(from,target);
}
// Repair expanded pages that had no <title>, and repair any generic ToolAtlas title from earlier builds.
function walk(dir,out=[]){if(!fs.existsSync(dir))return out;for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p,out);else if(e.name==='index.html')out.push(p)}return out;}
for(const file of walk(DIST)){
  if(file===path.join(DIST,'index.html'))continue;
  let html=fs.readFileSync(file,'utf8');
  const h1=(html.match(/<h1>([\s\S]*?)<\/h1>/i)||[])[1];
  if(!h1)continue;
  const titleText=h1.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
  if(!/<title>/i.test(html))html=html.replace('</head>',`<title>${esc(titleText)} | ToolAtlas</title></head>`);
  else if(/<title>\s*ToolAtlas\s*<\/title>/i.test(html))html=html.replace(/<title>[\s\S]*?<\/title>/i,`<title>${esc(titleText)} | ToolAtlas</title>`);
  html=html.replace(/https:\/\/toolatlas\.online\/TOOLSLUG\//g,()=>{const rel=path.relative(DIST,path.dirname(file)).replace(/\\/g,'/');return `https://toolatlas.online/${rel}/`;});
  fs.writeFileSync(file,html);
}
console.log('Catalogue normalization complete.');
