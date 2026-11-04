const {SiteHeader,SiteFooter}=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const ROUTES={"Book a consultation":"Contact","New Here?":"Visit","Before & After":"BeforeAfter","FAQs":"Faq","Privacy":"Privacy","Clinic policies":"Policies"};
const NAVLABEL={area:"Locations",Visit:"New Here?",BeforeAfter:"Before & After",Faq:"FAQs",treatment:"Treatments",concern:"Concerns"};
const IMG="/assets/images/";
const MENUS={Treatments:{columns:[
{title:"Treatments",items:[
{label:"Botox & Neurotoxins",desc:"Forehead lines, frown lines, crow’s feet",image:IMG+"treatment-botox.webp"},
{label:"Dermal Fillers",desc:"Cheeks, chin and jawline",image:IMG+"treatment-fillers-woman.webp"},
{label:"Lip Filler",badge:"New",desc:"Shape, balance and fullness",image:IMG+"treatment-lip-filler.webp"},
{label:"Fat Dissolving",desc:"Double chin and stubborn areas",image:IMG+"treatment-fat-dissolving.webp"},
{label:"Skin Boosters",desc:"Hydration and glow",image:IMG+"treatment-skin-boosters.webp"},
{label:"Weight Loss Treatments",desc:"Medically supervised support",image:IMG+"treatment-weight-loss.webp"},
{label:"IV Infusions",desc:"Hydration and nutrient support",image:IMG+"treatment-iv-infusion.webp"}],all:{label:"View all treatments",to:"Treatments"}},
{title:"Plan your visit",items:[{label:"Your first visit",to:"Visit",desc:"Free consultation, step by step"},{label:"Before & After",to:"BeforeAfter"},{label:"About Cleo",to:"About",desc:"Our approach and inclusive care"},{label:"FAQs",to:"Faq"}]}],
feature:{image:IMG+"consultation.webp",title:"Not sure where to start?",text:"Tell Cleo what you’d like to change. Your consultation is free.",cta:"Book a consultation",to:"Book a consultation"}}};
function App(){
const D=window.LB_DATA;
const [r,setR]=React.useState(()=>window.LB_pathToRoute(location.pathname));
React.useEffect(()=>{const f=()=>setR(window.LB_pathToRoute(location.pathname));addEventListener("popstate",f);return()=>removeEventListener("popstate",f)},[]);
const resolve=(p,item)=>{const tr=D.treatments.find(t=>t.name===p);
if(p==="area")return {page:"area",key:item};if(p==="treatment")return {page:"treatment",key:item.slug};if(p==="concern")return {page:"concern",key:item.name};if(tr)return {page:"treatment",key:tr.slug};return {page:ROUTES[p]||p}};
const go=(p,item)=>{const n=resolve(p,item);setR(n);history.pushState(null,"",window.LB_routeToPath(n));window.scrollTo(0,0)};
go.link=(p,item)=>({href:window.LB_routeToPath(resolve(p,item)),onClick:e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();go(p,item)}});
window.LB_hrefFor=(p,item)=>window.LB_routeToPath(resolve(p,item));
const P=r.page;let body;
React.useEffect(()=>{window.LB_applyMeta(P,r.key)},[P,r.key]);
React.useEffect(()=>{window.LB_navEntrance();const id=setTimeout(()=>window.LB_scrollReveal(),30);return()=>clearTimeout(id)},[P,r.key]);
if(P==="area"){body=<ServiceArea a={window.LB_AREAS[r.key]} go={go}/>}
else if(P==="treatment"){const t=D.treatments.find(x=>x.slug===r.key)||D.treatments[0];body=<TreatmentDetail t={t} go={go}/>}
else if(P==="concern"){const c=D.concerns.find(x=>x.name===r.key)||D.concerns[0];body=window.LB_CX[c.name]?<ConcernDetailV2 c={c} go={go}/>:<ConcernDetail c={c} go={go}/>}
else{const M={Treatments:Treatments,Concerns:Concerns,About:About,Contact:Contact,BeforeAfter:BeforeAfter,Visit:Visit,Faq:Faq,Policies:Policies,Privacy:Privacy,Locations:Locations,ThankYou:ThankYou,NotFound:NotFound};const C=M[P]||Home;body=<C go={go} openTreatment={t=>go("treatment",t)}/>}
return <><SiteHeader logoSrc="/assets/logo-icon-w256.webp" current={NAVLABEL[P]||P} menus={MENUS} onNavigate={go}/><div onClickCapture={e=>{const a=e.target.closest("a");if(a&&a.getAttribute("href")==="#")e.preventDefault()}}>{body}</div><SiteFooter logoSrc="/assets/logo-icon-w256.webp" onNavigate={go}/></>}
