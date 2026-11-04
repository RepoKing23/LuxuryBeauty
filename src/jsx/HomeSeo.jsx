const capsLb={fontSize:9,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--brand-green)"};
const blank={color:"var(--brand-muted)",borderBottom:"1px dashed var(--brand-muted)"};

function CredentialStrip(){
const items=[
["Experience","RN since 2013 · NP since 2022"],
["Every visit","Assessed by a Nurse Practitioner before treatment"],
["Products","Health Canada-approved only"],
["Google reviews",<><span style={{color:"var(--brand-green)",letterSpacing:"0.1em"}} aria-hidden>★★★★★</span> 5.0 on Google</>,"Read reviews","https://maps.google.com/?cid=15124432982846143650"]];
return <section aria-label="Credentials" style={{borderBottom:"1px solid var(--border)",background:"var(--background)"}}>
<div style={{padding:"0 max(6vw,32px)"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",borderLeft:"1px solid var(--border)"}}>
{items.map(([l,v,a,href])=><div key={l} style={{display:"flex",flexDirection:"column",gap:8,padding:"30px 26px 28px",background:"var(--background)",borderRight:"1px solid var(--border)",borderTop:"1px solid var(--border)",marginTop:-1}}>
<span style={capsLb}>{l}</span>
<span style={{fontFamily:"var(--font-display)",fontSize:21,lineHeight:1.2,textWrap:"pretty"}}>{v}</span>
{a&&<a href={href||"#"} target={href?"_blank":undefined} rel="noreferrer" style={{marginTop:"auto",fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"inherit",textDecoration:"none"}}>{a} <span aria-hidden>↗</span></a>}
</div>)}
</div></div></section>}

function ProductsSection(){
const {SectionHeading}=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const cats=[["Neuromodulators","Forehead, frown lines, crow’s feet"],["Hyaluronic acid fillers","Lips, cheeks, chin, jawline"],["Fat dissolving","Double chin and small areas"],["Skin boosters","Hydration and skin quality"],["IV therapy","Hydration and nutrient blends"]];
return <section style={{...SP,background:"var(--surface-warm)"}}>
<SectionHeading title={<>The products<br/>we trust.</>}>Cleo uses only Health Canada-approved injectables and skin products from licensed medical suppliers. At your consultation she’ll tell you exactly what she recommends and why.</SectionHeading>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,210px),1fr))",borderTop:"1px solid var(--border)",borderLeft:"1px solid var(--border)"}}>
{cats.map(([c,d])=><div key={c} style={{background:"var(--background)",borderRight:"1px solid var(--border)",borderBottom:"1px solid var(--border)",padding:"28px 26px 30px",display:"flex",flexDirection:"column",gap:10,minHeight:230}}>
<span style={capsLb}>{c}</span>
<span style={{fontSize:13,color:"var(--brand-muted)"}}>{d}</span>
<div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:6,paddingTop:22,borderTop:"1px solid var(--border)"}}>
<span style={{fontFamily:"var(--font-display)",fontSize:24,...blank,width:"fit-content",borderBottom:"none"}}>Brand name</span>
<span style={{fontFamily:"var(--font-display)",fontSize:24,color:"var(--brand-muted)"}}>Brand name</span>
</div></div>)}
</div>
<p style={{marginTop:22,fontSize:12,color:"var(--brand-muted)",maxWidth:720}}>Prescription product names are listed for information only. Cleo confirms the product, quantity and price at your consultation.</p>
</section>}

function InsuranceSection({go}){
const {TextLink}=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const slots=Array.from({length:8},(_,i)=>"insurer logo "+(i+1));
const tile=(l,k,hide)=><div key={k} aria-hidden={hide||undefined} style={{flex:"0 0 auto",width:200,height:96,display:"grid",placeItems:"center",border:"1px solid var(--border)",background:"repeating-linear-gradient(135deg,var(--background) 0 8px,var(--surface) 8px 9px)",fontFamily:"ui-monospace,Menlo,monospace",fontSize:10,letterSpacing:"0.06em",color:"var(--brand-muted)"}}>{l}</div>;
return <section style={{padding:"110px 0",background:"var(--background)",borderTop:"1px solid var(--border)"}}>
<style>{"@keyframes lbMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.lb-marquee:hover .lb-track{animation-play-state:paused}@media (prefers-reduced-motion:reduce){.lb-track{animation:none!important}}"}</style>
<div style={{padding:"0 max(6vw,32px)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"4vw 8vw",alignItems:"end",marginBottom:56}}>
<h2 style={H("clamp(50px,6vw,84px)",{maxWidth:640})}>Using your health benefits.</h2>
<div style={{display:"grid",gap:16,maxWidth:520}}><p>Many workplace plans cover Nurse Practitioner services. Cleo gives you a detailed receipt with her registration number so you can submit a claim to your provider.</p><p style={{fontSize:13,color:"var(--brand-muted)"}}>OHIP doesn’t cover cosmetic treatments. Coverage depends on your plan, so check with your insurer before booking.</p><TextLink {...go.link("FAQs")}>Insurance questions</TextLink></div>
</div>
<div className="lb-marquee" style={{overflow:"hidden",maskImage:"linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",WebkitMaskImage:"linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)"}}>
<div className="lb-track" style={{display:"flex",gap:20,width:"max-content",animation:"lbMarquee 36s linear infinite"}}>{slots.map((l,i)=>tile(l,"a"+i))}{slots.map((l,i)=>tile(l,"b"+i,true))}</div>
</div>
</section>}
Object.assign(window,{CredentialStrip,ProductsSection,InsuranceSection});
