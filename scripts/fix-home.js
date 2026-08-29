const fs=require('fs'),path=require('path');const D=path.join(__dirname,'..','dist');let h=fs.readFileSync(path.join(D,'index.html'),'utf8');
const cats={finance:'Finance',education:'Education',travel:'Travel',engineering:'Engineering',math:'Math',work:'Work',conversion:'Converters',everyday:'Everyday',health:'Health & Wellness',tech:'Technology',cooking:'Cooking & Food',construction:'Home & Construction'};
function count(cat){const root=path.join(D,cat);if(!fs.existsSync(root))return 0;return fs.readdirSync(root,{withFileTypes:true}).filter(e=>e.isDirectory()&&fs.existsSync(path.join(root,e.name,'index.html'))).length}
for(const [id,name] of Object.entries(cats)){
 const n=count(id);const rx=new RegExp(`(<a[^>]+href=["']/${id}/["'][^>]*>[\\s\\S]*?<b>${name.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}<\\/b>[\\s\\S]*?<em>)(\\d+)( tools →<\\/em>)`,'i');
 h=h.replace(rx,`$1${n}$3`);
}
// Repair stale tool-count text in the hero.
const total=Object.keys(cats).reduce((n,c)=>n+count(c),0);h=h.replace(/Search \d+\+ tools…/i,`Search ${total}+ tools…`).replace(/<b>\d+\+<\/b><small>Tools<\/small>/i,`<b>${total}+</b><small>Tools</small>`);
fs.writeFileSync(path.join(D,'index.html'),h);console.log(`Homepage counts refreshed: ${total} tools across ${Object.keys(cats).length} categories.`);
