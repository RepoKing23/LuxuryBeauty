// Port of luxurybeauty-cloe-site components/scroll-reveal.tsx + site-header nav entrance (motion/react → CSS transitions).
// Pending elements are tracked with a data attribute and re-queried on every check, so nothing can get stuck hidden.
(()=>{
const TEXT=["main h1","main h2","main h3","main h4","main p","main blockquote","main li","main dt","main dd","main article > strong"].join(", ");
const IMG="main img:not([alt=''])";
const EASE="cubic-bezier(0.22, 1, 0.36, 1)";
let bound=false;
const reduced=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const off=el=>el.closest("[data-scroll-reveal='off']");
const inView=(el,margin)=>{const r=el.getBoundingClientRect(),vh=window.innerHeight||document.documentElement.clientHeight,bottom=vh*(1-margin);
if(!r.width&&!r.height)return false;return r.top<bottom&&r.bottom>0};
const show=el=>{const kind=el.dataset.lbr,d=+el.dataset.lbrDelay||0;el.dataset.lbr="done";
if(kind==="img"){const go=()=>{el.style.transition=`opacity 1100ms ${EASE}, filter 1100ms ${EASE}`;el.style.opacity="1";el.style.filter="blur(0px)"};
if(el instanceof HTMLImageElement&&!el.complete){el.addEventListener("load",go,{once:true});el.addEventListener("error",go,{once:true});setTimeout(go,2500)}else go();}
else{el.style.transition=`opacity 950ms ${EASE} ${d}ms, transform 950ms ${EASE} ${d}ms`;el.style.opacity="1";el.style.transform="translateY(0px)";}
setTimeout(()=>{el.style.transition="";},2600)};
const check=()=>{document.querySelectorAll("[data-lbr='text'],[data-lbr='img']").forEach(el=>{if(inView(el,el.dataset.lbr==="img"?0.05:0.07))show(el)})};
let queued=false;const onScroll=()=>{if(queued)return;queued=true;setTimeout(()=>{queued=false;check()},60)};
window.LB_scrollReveal=()=>{
if(reduced())return;
if(!bound){addEventListener("scroll",onScroll,{passive:true});addEventListener("resize",onScroll);bound=true}
const groups=new Map();
document.querySelectorAll(TEXT).forEach(el=>{if(off(el)||el.dataset.lbr)return;
const g=el.closest("section, article, footer")||el.parentElement||document.body;const i=groups.get(g)||0;groups.set(g,i+1);
el.dataset.lbr="text";el.dataset.lbrDelay=Math.min(i*75,300);el.style.transition="none";el.style.opacity="0";el.style.transform="translateY(64px)";});
document.querySelectorAll(IMG).forEach(el=>{if(off(el)||el.dataset.lbr)return;
el.dataset.lbr="img";el.style.transition="none";el.style.opacity="0.4";el.style.filter="blur(20px)";});
document.body.offsetHeight;
requestAnimationFrame(check);setTimeout(check,120);
};
// safety net: anything still pending after it's been on screen gets shown
setInterval(()=>{if(document.querySelector("[data-lbr='text'],[data-lbr='img']"))check()},700);
let navDone=false;
window.LB_navEntrance=()=>{if(navDone||reduced())return;const nav=document.querySelector("header nav");if(!nav)return;navDone=true;
nav.animate([{opacity:0,transform:"translateY(-16px)"},{opacity:1,transform:"translateY(0px)"}],{duration:650,easing:EASE});};
})();
