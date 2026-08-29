const fs=require('fs');const path=require('path');
const DIST=path.join(__dirname,'..','dist');
const TAG=`<script async src="https://www.googletagmanager.com/gtag/js?id=G-8S04TV7EFG"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-8S04TV7EFG');</script>`;
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.isFile()&&e.name==='index.html'){let s=fs.readFileSync(p,'utf8');if(!s.includes('G-8S04TV7EFG')){s=s.replace('</head>',`${TAG}</head>`);fs.writeFileSync(p,s)}}}}
if(fs.existsSync(DIST))walk(DIST);console.log('Injected GA4 into generated HTML pages.');
