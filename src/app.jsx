const {SiteHeader,SiteFooter}=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const ROUTES={"Book a consultation":"Contact","New Here?":"Visit","The Cleo Difference":"Difference","Before & After":"BeforeAfter","FAQs":"Faq","Inclusive care":"Inclusive","Privacy":"Privacy","Clinic policies":"Policies"};
const NAVLABEL={area:"Locations",Visit:"New Here?",Difference:"The Cleo Difference",BeforeAfter:"Before & After",Faq:"FAQs",treatment:"Treatments",concern:"Concerns"};
const IMG="/assets/images/";
const MENUS={Treatments:{columns:[
{title:"Treatments",items:[
{label:"Botox & Neurotoxins",desc:"Forehead lines, frown lines, crow’s feet",image:IMG+"treatment-botox.webp"},
{label:"Dermal Fillers",desc:"Cheeks, chin and jawline",image:IMG+"treatment-fillers-woman.png"},
{label:"Lip Filler",badge:"New",desc:"Shape, balance and fullness",image:IMG+"treatment-lip-filler.png"},
{label:"Fat Dissolving",desc:"Double chin and stubborn areas",image:IMG+"treatment-fat-dissolving.webp"},
{label:"Skin Boosters",desc:"Hydration and glow",image:IMG+"treatment-skin-boosters.webp"},
{label:"Weight Loss Treatments",desc:"Medically supervised support",image:IMG+"treatment-weight-loss.webp"},
{label:"IV Infusions",desc:"Hydration and nutrient support",image:IMG+"treatment-iv-infusion.webp"}],all:{label:"View all treatments",to:"Treatments"}},
{title:"Plan your visit",items:[{label:"Your first visit",to:"Visit",desc:"Free consultation, step by step"},{label:"Before & After",to:"BeforeAfter"},{label:"Inclusive care",to:"Inclusive",desc:"Care for every skin tone"},{label:"FAQs",to:"Faq"}]}],
feature:{image:IMG+"consultation.webp",title:"Not sure where to start?",text:"Tell Cleo what you’d like to change. Your consultation is free.",cta:"Book a consultation",to:"Book a consultation"}}};
function App(){
const D=window.LB_DATA;
const H=!!window.LB_HISTORY;
const [r,setR]=React.useState(()=>{if(H)return window.LB_pathToRoute(location.pathname);try{return JSON.parse(localStorage.getItem("lb-route"))||{page:"Home"}}catch(e){return {page:"Home"}}});
React.useEffect(()=>{if(!H)return;const f=()=>setR(window.LB_pathToRoute(location.pathname));addEventListener("popstate",f);return()=>removeEventListener("popstate",f)},[]);
const go=(p,item)=>{let n;const tr=D.treatments.find(t=>t.name===p);
if(p==="area")n={page:"area",key:item};else if(p==="treatment")n={page:"treatment",key:item.slug};else if(p==="concern"&&item.name==="Lips")n={page:"treatment",key:"lips"};else if(p==="concern")n={page:"concern",key:item.name};else if(tr)n={page:"treatment",key:tr.slug};else n={page:ROUTES[p]||p};
setR(n);if(H)history.pushState(null,"",window.LB_routeToPath(n));else localStorage.setItem("lb-route",JSON.stringify(n));window.scrollTo(0,0)};
const P=r.page;let body;
React.useEffect(()=>{window.LB_applyMeta(P,r.key)},[P,r.key]);
React.useEffect(()=>{window.LB_navEntrance();const id=setTimeout(()=>window.LB_scrollReveal(),30);return()=>clearTimeout(id)},[P,r.key]);
if(P==="area"){body=<ServiceArea a={window.LB_AREAS[r.key]} go={go}/>}
else if(P==="treatment"){const t=D.treatments.find(x=>x.slug===r.key)||D.treatments[0];body=<TreatmentDetail t={t} go={go}/>}
else if(P==="concern"){const c=D.concerns.find(x=>x.name===r.key)||D.concerns[0];body=window.LB_CX[c.name]?<ConcernDetailV2 c={c} go={go}/>:<ConcernDetail c={c} go={go}/>}
else{const M={Treatments:Treatments,Concerns:Concerns,About:About,Contact:Contact,BeforeAfter:BeforeAfter,Difference:Difference,Visit:Visit,Faq:Faq,Inclusive:Inclusive,Policies:Policies,Privacy:Privacy,Locations:Locations,ThankYou:ThankYou,NotFound:NotFound};const C=M[P]||Home;body=<C go={go} openTreatment={t=>go("treatment",t)}/>}
return <><SiteHeader logoSrc="/assets/logo-icon.png" current={NAVLABEL[P]||P} menus={MENUS} onNavigate={go}/><div onClickCapture={e=>{const a=e.target.closest("a");if(a&&a.getAttribute("href")==="#")e.preventDefault()}}>{body}</div><SiteFooter logoSrc="/assets/logo-icon.png" onNavigate={go}/></>}
