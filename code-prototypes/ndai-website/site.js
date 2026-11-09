// Shared header, footer and section components for all NeuroDiscovery pages.
const PAGES={home:'index.html',rwd:'real-world-data.html',rwe:'real-world-evidence.html',ct:'clinical-trials.html',dc:'data-collaboration.html',pp:'provider-platform.html',pn:'providers.html',pe:'patient-engagement.html',about:'about.html',careers:'careers.html',test:'testimonials.html',news:'news.html',newsd:'news-detail.html',contact:'contact.html'};
const ICON={
 chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 15l3-3 3 2 4-5"/></svg>',
 doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M8 3v3M12 3v3M16 3v3M8 11h8M8 15h8"/></svg>',
 dollar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M15 9c0-1.2-1.3-2-3-2s-3 .8-3 2 1.3 1.8 3 2 3 .8 3 2-1.3 2-3 2-3-.8-3-2M12 5.5v13"/></svg>',
 chip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
 trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4v16h16"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
 hub:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M6.5 6.5l3.3 3.3M17.5 6.5l-3.3 3.3M6.5 17.5l3.3-3.3M17.5 17.5l-3.3-3.3"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
 brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 006 0V7a3 3 0 00-3-3zM15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-6 0"/></svg>',
 user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0114 0v2"/></svg>',
 users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14a6 6 0 013.5 6"/></svg>',
 globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',
 screen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 12l2-3 3 4 2-2 3 3"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="13" height="17" rx="2"/><circle cx="15" cy="15" r="3.5"/><path d="M18 18l3 3M7 7h7M7 11h4"/></svg>',
 bars:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 17v-4M12 17V9M16 17v-6"/></svg>',
 loop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
 send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/></svg>',
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
 heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20s-8-4.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 6.5-8 11-8 11z"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
 pill:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)"/><path d="M9 9l6 6"/></svg>',
 msg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 5h16v11H8l-4 4z"/></svg>',
 file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M12 10v6"/></svg>',
 flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/></svg>',
 note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
 wave:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M6 11h3l2-3 2 6 2-3h3M9 21h6"/></svg>',
 world:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 9h3v3H8zM13 13h3v3h-3zM3 12h3M18 12h3"/></svg>'
};
const ic=n=>ICON[n]||ICON.chart;
const cur=document.body.dataset.page;
const L=(k,t,f)=>`<a href="${PAGES[k]}" class="${cur===k?'cur':''}"><i class="mi"><img src="assets/${f}.svg" alt=""></i>${t}</a>`;

document.body.insertAdjacentHTML('afterbegin',`
<header class="top"><div class="wrap">
 <a href="index.html" class="logo"><img src="assets/imgGroup7.svg" alt=""><img src="assets/imgGroup6.svg" alt="NeuroDiscovery AI"></a>
 <nav class="main" id="nav">
  <div class="dd"><button>Who We Serve</button><div class="menu">
   <div><h6>Life Sciences</h6>${L('ct','Clinical Trial Recruitment','imgGroup3506')}${L('rwd','Real World Data','imgGroup')}${L('rwe','Real World Evidence','imgGroup3507')}</div>
   <div><h6>Providers</h6>${L('pp','Provider Platform','imgGroup3508')}${L('dc','Data Collaboration','imgGroup3505')}</div>
   <div><h6>Patients</h6>${L('pe','Patient Engagement','imgGroup3509')}</div></div></div>
  <div class="dd"><button>Who We Are</button><div class="menu">
   <div><h6>Company</h6>${L('about','About Us','imgGroup3506')}${L('careers','Careers','imgGroup')}</div>
   <div><h6>News</h6>${L('news','Announcements','imgGroup3508')}</div></div></div>
  <div class="dd"><button>Resources</button><div class="menu">
   <div><h6>Learn</h6>${L('news','Blogs','imgGroup3507')}${L('newsd','White Papers','imgGroup3506')}</div>
   <div><h6>Proof</h6>${L('test','Customer Stories','imgGroup3509')}${L('pn','Providers','imgGroup3505')}</div></div></div>
  <a href="${PAGES.contact}" class="cta" style="margin-left:12px">Contact us <b>↗</b></a>
 </nav><button class="burger" id="burger" aria-label="Menu">☰</button>
</div></header>`);

document.body.insertAdjacentHTML('beforeend',`
<footer><div class="wrap"><div class="fgrid">
 <div class="about"><a href="index.html" class="logo"><img src="assets/imgGroup4.svg" style="height:39px"><img src="assets/imgGroup3.svg" style="height:32px"></a>
  <p>The neurology intelligence platform powering real-world evidence, clinical insights, and patient care across US healthcare.</p>
  <div class="soc"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">𝕏</a><a href="#" aria-label="YouTube">▶</a></div></div>
 <div><h6>Solutions</h6><ul><li><a href="${PAGES.rwd}" class="${cur=='rwd'?'cur':''}">Real-World Data</a></li><li><a href="${PAGES.rwe}" class="${cur=='rwe'?'cur':''}">Real-World Evidence</a></li><li><a href="${PAGES.ct}" class="${cur=='ct'?'cur':''}">Clinical Trials</a></li><li><a href="${PAGES.dc}" class="${cur=='dc'?'cur':''}">Data Collaboration</a></li><li><a href="${PAGES.pp}" class="${cur=='pp'?'cur':''}">Provider Platform</a></li><li><a href="${PAGES.pe}" class="${cur=='pe'?'cur':''}">Patient Engagement</a></li></ul></div>
 <div><h6>Who We Are</h6><ul><li><a href="${PAGES.about}">About Us</a></li><li><a href="${PAGES.careers}">Careers</a></li><li><a href="${PAGES.news}">Announcements</a></li></ul></div>
 <div><h6>Resources</h6><ul><li><a href="${PAGES.news}">Blogs</a></li><li><a href="${PAGES.newsd}">White Papers</a></li><li><a href="${PAGES.test}">Customer Stories</a></li><li><a href="${PAGES.rwe}">Publications</a></li><li><a href="${PAGES.news}">Conferences</a></li></ul></div>
 <div class="addr"><b>USA, HQ</b><p>4080 McGinnis Ferry Rd, Bld 1400 STE 1404, Alpharetta, GA</p><a href="mailto:usa@neurodiscovery.ai">usa@neurodiscovery.ai</a><hr>
  <b>India, HQ</b><p>#677, 27th Main, 13th Cross, Sector 1, HSR Layout, Bangalore — 560102</p><a href="mailto:india@neurodiscovery.ai">india@neurodiscovery.ai</a></div>
</div><div class="fbot"><span>Copyright © 2026 Neuro Discovery AI. All rights reserved.</span><span>Privacy &nbsp;|&nbsp; Terms &nbsp;|&nbsp; Cookies</span></div></div></footer>
<div class="modal" id="modal"><div class="box"><button class="x" id="mx">×</button><video id="mv" controls playsinline></video></div></div>`);

// ---- section builders (used by page scripts) ----
const S={
 hero:o=>`<div class="hero" style="background:${o.bg||'#000'} url(img/${o.img}) center/cover no-repeat">${o.video?`<video class="hvid${o.vsoft?' soft':''}"${o.vfill?` data-fill="${o.vfill}" data-fpos="${o.vfpos||'center'}"`:''} data-box="${(o.vbox||[]).join(',')}" src="videos/${o.video}" autoplay muted loop playsinline></video>`:''}<div class="wrap"><h1 class="reveal">${o.h}</h1><p class="reveal">${o.p}</p><a href="${PAGES.contact}" class="cta reveal">${o.btn||'Contact us'} <b>↗</b></a></div></div>`,
 cards:o=>`<section class="${o.alt?'alt':''}"><div class="wrap"><h2 class="h2 reveal">${o.h}</h2><p class="sub reveal">${o.p}</p><div class="fcards">${o.items.map(([i,t,d])=>`<div class="fc reveal"><div class="ic">${ic(i)}</div><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></div></section>`,
 partners:o=>`<section class="alt"><div class="wrap"><h2 class="h2 reveal" style="max-width:900px">${o.h}</h2>${o.p?`<p class="sub reveal">${o.p}</p>`:''}<div class="pgrid"><div class="reveal"><h5>Partners &amp; Collaborators</h5><img src="img/logos.jpg" alt="Partner logos"></div><div class="reveal"><h5>Network Scale &amp; Depth</h5><div class="stats">${[['6M+','Unique patient records'],['3M+','Active longitudinal patients'],['60+','Key opinion leaders'],['100+','Active trial sites'],['1000+','Neurologists in network'],['All','Neurology conditions covered'],['15+','Years of longitudinal neurology data'],['FDA-grade','Real world evidence']].map(([v,l])=>`<div class="stat"><b data-v="${v}">${v}</b><small>${l}</small></div>`).join('')}</div></div></div></div></section>`,
 sources:o=>`<section><div class="wrap"><h2 class="h2 reveal">${o.h}</h2><p class="sub reveal">${o.p}</p><div class="sources reveal">${o.items.map(([i,t,d,span])=>`<div class="src" style="grid-column:span ${span}"><i>${ic(i).replace('<svg','<svg width="20"')}</i><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></div></section>`,
 impact:o=>`<div class="impact" style="${o.img?`background-image:url(img/${o.img})`:'background:#101720'}"><div class="wrap"><h2 class="reveal">${o.h}</h2><div class="icards">${o.items.map(([i,t,d])=>`<div class="ic3 reveal">${ic(i)}<h4>${t}</h4><p>${d}</p></div>`).join('')}</div></div></div>`,
 band:o=>`<div class="band"><div class="wrap">${o.big?`<h2 class="h2 reveal">${o.h}</h2>`:`<h3 class="reveal">${o.h}</h3>`}<p class="sub reveal" style="margin-top:8px">${o.p}</p><div class="row reveal">${o.items.map(([v,l])=>`<div><b data-v="${v}">${v}</b><small>${l}</small></div>`).join('')}</div></div></div>`,
 faq:o=>`<section><div class="wrap"><h2 class="h2 c reveal" style="max-width:${o.wide?'none':'640px'};margin:0 auto">Frequently asked questions</h2><div class="faq reveal">${o.items.map(([q,a],i)=>`<details ${i===0&&o.open?'open':''}><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>`,
 cta:o=>`<div class="ctaband"><div class="art"></div><div class="wrap"><h2 class="reveal">${o.h}</h2><p class="reveal">${o.p}</p><a href="${PAGES.contact}" class="cta reveal">Contact us <b>↗</b></a></div></div>`,
 rows:o=>`<section class="alt2"><div class="wrap rowsec"><div><h2 class="h2 reveal">${o.h}</h2><p class="sub reveal">${o.p}</p></div><div>${o.items.map(([i,t,d])=>`<div class="rowc reveal"><span>${ic(i)}</span><div><h4>${t}</h4><p>${d}</p></div></div>`).join('')}</div></div></section>`,
 img:o=>`<section class="${o.alt||''}"><div class="wrap"><h2 class="h2 reveal">${o.h}</h2><p class="sub reveal" style="max-width:900px">${o.p}</p><img class="reveal" src="img/${o.img}" alt="${o.alt_t||''}" style="margin-top:40px;width:100%"></div></section>`,
 stories:o=>`<section${o.cls?` class="${o.cls}"`:''}><div class="wrap"><h2 class="h2 reveal">${o.h||'Client Success Stories'}</h2><div class="stories">${o.items.map(([img,t,d],i)=>{const th=`<div class="thumb reveal" data-video="${o.video||'videos/lifesciense-vid_v1.mp4'}"><img src="img/${img}" alt=""><span class="play"></span></div>`,tx=`<div class="story reveal"><h3>${t}</h3><p>${d}</p><a class="pill" href="testimonials.html">Learn more</a></div>`;return i%2?tx+th:th+tx}).join('')}</div></div></section>`,
 trust:o=>`<section><div class="wrap"><div class="trust"><h2 class="h2 reveal">Built for trust and success</h2><div class="g">${[['t-hipaa','Data Security &amp; HIPAA','HIPAA-compliant platform with end-to-end encryption, role-based access control, and regular security audits.'],['t-soc2','SOC 2 Type II','Independent verification of our security and availability controls. Your data stays on secure, dedicated servers.'],['t-impl','Seamless Implementation','Dedicated support team for smooth integration. 4-6 week implementation with training and go-live support included.'],['t-247','24/7 Support &amp; Updates','Ongoing technical support and continuous platform improvements based on user feedback and latest research.']].map(([i,t,d])=>`<div class="reveal"><img src="img/${i}.jpg" alt=""><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></div></div></section>`,
 scards:o=>`<section${o.cls?` class="${o.cls}"`:''}><div class="wrap"><h2 class="h2 reveal" style="max-width:800px">${o.h}</h2><div class="scards">${o.items.map(([img,t,d])=>`<div class="scard reveal"><div class="thumb" data-video="videos/lifesciense-vid_v1.mp4"><img src="img/${img}" alt=""><span class="play"></span></div><div class="b"><h4>${t}</h4><p>${d}</p><a class="pill" href="testimonials.html">Learn more</a></div></div>`).join('')}</div></div></section>`,
 raw:o=>o.html
};
function render(list){document.getElementById('page').innerHTML=list.map(([t,o])=>S[t](o)).join('');init()}

function init(){
 placeVids();
 document.querySelectorAll('.hvid').forEach(v=>{v.muted=true;const on=()=>v.classList.add('on');v.addEventListener('playing',on,{once:true});v.addEventListener('pause',()=>{if(!document.hidden)v.play().catch(()=>{})});v.play().then(on).catch(()=>{})});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-v]').forEach(count);io.unobserve(e.target)}}),{threshold:.1});
 document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)d.parentElement.querySelectorAll('details').forEach(o=>{if(o!==d)o.open=false})}));
}
function count(el){const m=el.dataset.v.match(/^([\d,]+)(.*)$/);if(!m)return;const n=+m[1].replace(/,/g,''),suf=m[2],comma=m[1].includes(',');let t0;const step=t=>{t0??=t;const p=Math.min((t-t0)/1300,1),v=Math.round(n*(1-Math.pow(1-p,3)));el.textContent=(comma?v.toLocaleString():v)+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
document.getElementById('burger').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('.dd>button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));
document.addEventListener('click',e=>{const t=e.target.closest('[data-video]');if(!t)return;const v=document.getElementById('mv');v.src=t.dataset.video;document.getElementById('modal').classList.add('on');v.play()});
const closeM=()=>{document.getElementById('modal').classList.remove('on');document.getElementById('mv').pause()};
document.getElementById('mx').onclick=closeM;document.getElementById('modal').onclick=e=>{if(e.target.id==='modal')closeM()};addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});

// Place hero videos exactly where the art sits in the 1920x728 Figma hero, scaled to the current width.
function placeVids(){document.querySelectorAll('.hvid[data-box]').forEach(v=>{const b=v.dataset.box.split(',').map(Number);if(b.length<4)return;const hero=v.parentElement,W=hero.clientWidth,H=hero.clientHeight,k=W/1920;
 if(W<900){Object.assign(v.style,{left:'0',top:'0',width:'100%',height:'100%',objectFit:'cover',objectPosition:'70% center',filter:'brightness(.4)'});return}v.style.objectFit='';v.style.filter='';
 if(v.dataset.fill){const f=+v.dataset.fill;Object.assign(v.style,{left:W*(1-f)+'px',top:'0px',width:W*f+'px',height:H+'px',right:'auto',bottom:'auto',objectFit:'cover',objectPosition:v.dataset.fpos||'center'});return}
 Object.assign(v.style,{left:b[0]*k+'px',top:(b[1]*k+(H-728*k)/2)+'px',width:b[2]*k+'px',height:b[3]*k+'px',right:'auto',bottom:'auto'})})}
addEventListener('resize',placeVids);
