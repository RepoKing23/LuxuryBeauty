// Port of luxurybeauty-cloe-site components/scroll-reveal.tsx + site-header nav entrance (motion/react → Web Animations API).
// Uses a scroll/resize position check (not IntersectionObserver) so reveals always fire, including inside iframes/previews.
(()=>{
const TEXT=["main h1","main h2","main h3","main h4","main p","main blockquote","main li","main dt","main dd","main article > strong"].join(", ");
const IMG="main img:not([alt=''])";
const EASE="cubic-bezier(0.22, 1, 0.36, 1)";
let pending=[],anims=[],bound=false;
const reduced=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const off=el=>el.closest("[data-scroll-reveal='off']");
const run=(el,from,to,o)=>{const a=el.animate([from,to],{...o,easing:EASE,fill:"forwards"});anims.push(a);a.onfinish=()=>{Object.assign(el.style,to);a.cancel()}};
const inView=(el,margin)=>{const r=el.getBoundingClientRect(),vh=window.innerHeight||document.documentElement.clientHeight;if(!r.width&&!r.height)return false;
const bottom=vh*(1-margin),vis=Math.min(r.bottom,bottom)-Math.max(r.top,0);return vis>=Math.min(r.height*0.12,bottom*0.12)||(r.top<bottom&&r.bottom>0&&r.height<4)};
const check=()=>{if(!pending.length)return;pending=pending.filter(p=>{if(!p.el.isConnected)return false;if(inView(p.el,p.margin)){p.go();return false}return true})};
let ticking=false;const onScroll=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;check()});setTimeout(()=>{if(ticking){ticking=false;check()}},120)};
window.LB_scrollReveal=()=>{
anims.forEach(a=>a.cancel());anims=[];pending=[];
if(reduced())return;
if(!bound){addEventListener("scroll",onScroll,{passive:true});addEventListener("resize",onScroll);bound=true}
const groups=new Map();
document.querySelectorAll(TEXT).forEach(el=>{if(off(el))return;
const g=el.closest("section, article, footer")||el.parentElement||document.body;const i=groups.get(g)||0;groups.set(g,i+1);
el.style.opacity="0";el.style.transform="translateY(64px)";
pending.push({el,margin:0.07,go:()=>run(el,{opacity:"0",transform:"translateY(64px)"},{opacity:"1",transform:"translateY(0px)"},{duration:950,delay:Math.min(i*75,300)})});});
document.querySelectorAll(IMG).forEach(el=>{if(off(el))return;
el.style.opacity="0.4";el.style.filter="blur(20px)";
pending.push({el,margin:0.05,go:()=>{const go=()=>run(el,{opacity:"0.4",filter:"blur(20px)"},{opacity:"1",filter:"blur(0px)"},{duration:1100});
if(el instanceof HTMLImageElement&&!el.complete)el.addEventListener("load",go,{once:true});else go();}});});
check();
};
let navDone=false;
window.LB_navEntrance=()=>{if(navDone||reduced())return;const nav=document.querySelector("header nav");if(!nav)return;navDone=true;
nav.animate([{opacity:0,transform:"translateY(-16px)"},{opacity:1,transform:"translateY(0px)"}],{duration:650,easing:EASE});};
})();
