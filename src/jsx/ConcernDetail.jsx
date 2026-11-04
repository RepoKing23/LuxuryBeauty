function ConcernDetailV2({c,go}){
const {Button,BookingCta,FaqList}=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const D=window.LB_DATA,X=window.LB_CX[c.name];
if(!X)return null;
const cap={fontSize:9,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--brand-green)"};
const crumb={fontSize:9,letterSpacing:"0.16em",textTransform:"uppercase",color:"inherit",textDecoration:"none"};
const tr=s=>D.treatments.find(x=>x.slug===s);
const others=D.concerns.filter(x=>x.name!==c.name&&x.name!=="Lips"&&window.LB_CX[x.name]);
return <main>
<section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",background:"var(--surface-soft)"}}>
<div style={{padding:"64px max(6vw,32px) 72px",display:"flex",flexDirection:"column"}}>
<nav aria-label="Breadcrumb" style={{display:"flex",gap:10,marginBottom:56,flexWrap:"wrap"}}><a href="#" style={crumb} {...go.link("Home")}>Home</a><span style={crumb}>/</span><a href="#" style={crumb} {...go.link("Concerns")}>Concerns</a><span style={crumb}>/</span><span style={{...crumb,opacity:.6}}>{c.name}</span></nav>
<p style={{...cap,color:"var(--foreground)",marginBottom:20}}>Concern · Oakville, ON</p>
<h1 style={H("clamp(50px,6vw,94px)",{marginBottom:22,maxWidth:820})}>{X.h1}</h1>
<p style={{fontFamily:"var(--font-display)",fontSize:"clamp(26px,2.6vw,36px)",lineHeight:1.2,marginBottom:22,maxWidth:640}}>{X.line}</p>
<p style={{maxWidth:580,marginBottom:28}}>{X.first}</p>
<div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:30}}><Button arrow {...go.link("Book a consultation")}>Book a free consultation</Button><Button variant="brandOutline" href="tel:+14162940452">Call 416-294-0452</Button></div>
<p style={{marginTop:"auto",fontSize:11,color:"var(--brand-muted)"}}>Medically reviewed by Cleo R., NP · Updated November 2026</p>
</div>
<Img src={LB_IMG+X.img} alt={X.h1+" — Cleo R., NP"} eager w={1448} h={1086} style={{minHeight:580}}/>
</section>
<section style={SP}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"3vw 9vw",alignItems:"end",marginBottom:56}}><h2 style={H("clamp(48px,5.4vw,78px)")}>Why it happens</h2><p style={{maxWidth:480}}>Knowing the cause helps Cleo choose the right option. Most people have more than one of these at once.</p></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,260px),1fr))",borderTop:"1px solid var(--border)",borderLeft:"1px solid var(--border)"}}>{X.causes.map(([t,d],i)=><div key={t} style={{borderRight:"1px solid var(--border)",borderBottom:"1px solid var(--border)",padding:"30px 26px",minHeight:220,display:"flex",flexDirection:"column",gap:12}}><span style={{fontFamily:"var(--font-display)",fontSize:40,lineHeight:1,color:"var(--brand-accent)"}}>{String(i+1).padStart(2,"0")}</span><h3 style={H(28,{marginTop:"auto"})}>{t}</h3><p style={{fontSize:14}}>{d}</p></div>)}</div>
</section>
<section style={{...SP,background:"var(--clinical)"}}>
<h2 style={H("clamp(48px,5.4vw,78px)",{marginBottom:20})}>Your treatment options</h2>
<p style={{maxWidth:560,marginBottom:52}}>Each option works differently. Many clients combine two over a few visits.</p>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:24}}>{X.options.map(([n,d,best,slug])=>{const t=slug&&tr(slug);return <article key={n} style={{background:"var(--background)",display:"flex",flexDirection:"column"}}>
{t&&<div style={{position:"relative",aspectRatio:"16 / 9",overflow:"hidden"}}><img src={t.image} alt={n+" in Oakville"} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/></div>}
<div style={{padding:"28px 28px 30px",display:"flex",flexDirection:"column",gap:14,flex:1}}><h3 style={H(32)}>{n}</h3><p>{d}</p><div style={{borderTop:"1px solid var(--border)",paddingTop:14}}><span style={{...cap,display:"block",marginBottom:6}}>Best for</span><span style={{fontSize:14}}>{best}</span></div>
{t&&<a {...go.link("treatment",t)} style={{marginTop:"auto",fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"inherit",width:"fit-content",borderBottom:"1px solid var(--foreground)",paddingBottom:3,textDecoration:"none"}}>{t.seoHeading} <span aria-hidden>↗</span></a>}</div></article>})}</div>
</section>
<section style={{...SP,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"4vw 9vw"}}>
<div><h2 style={H("clamp(46px,5vw,72px)",{marginBottom:24})}>Which option suits you?</h2><p style={{maxWidth:400}}>A quick guide. Cleo confirms the right plan at your free consultation.</p></div>
<div style={{borderTop:"1px solid var(--foreground)"}}>{X.guide.map(([a,b])=><div key={a} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:"6px 28px",padding:"20px 0",borderBottom:"1px solid var(--border)"}}><span><span style={{...cap,color:"var(--brand-muted)",display:"block",marginBottom:4}}>If</span>{a}</span><span style={{fontFamily:"var(--font-display)",fontSize:22,lineHeight:1.2}}><span style={{...cap,display:"block",marginBottom:6,fontFamily:"var(--font-body)"}}>Cleo may suggest</span>{b}</span></div>)}</div>
</section>
<section style={{...SP,background:"var(--surface)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"4vw 9vw"}}>
<div><h2 style={H("clamp(44px,4.8vw,68px)",{marginBottom:28})}>What to expect</h2><ul style={{listStyle:"none",margin:0,padding:0,borderTop:"1px solid var(--rule-strong)"}}>{X.expect.map(e=><li key={e} style={{padding:"16px 0",borderBottom:"1px solid var(--rule-strong)"}}>{e}</li>)}</ul></div>
<div><h2 style={H("clamp(44px,4.8vw,68px)",{marginBottom:28})}>Care at home</h2><ul style={{listStyle:"none",margin:0,padding:0,borderTop:"1px solid var(--rule-strong)"}}>{X.care.map(e=><li key={e} style={{display:"grid",gridTemplateColumns:"24px 1fr",gap:8,padding:"16px 0",borderBottom:"1px solid var(--rule-strong)"}}><span aria-hidden style={{color:"var(--brand-green)"}}>✓</span>{e}</li>)}</ul></div>
</section>
<section style={{...SP,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"4vw 9vw"}}>
<div><h2 style={H("clamp(46px,5vw,72px)",{marginBottom:24})}>Questions about {c.name.toLowerCase()}</h2><a {...go.link("FAQs")} style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"inherit"}}>All FAQs ↗</a></div>
<FaqList faqs={X.faqs}/>
</section>
<section style={{...SP,paddingTop:0}}>
<p style={{...cap,marginBottom:18}}>Other concerns</p>
<div style={{borderTop:"1px solid var(--border)"}}>{others.map(o=><a key={o.name} {...go.link("concern",o)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20,padding:"22px 4px",borderBottom:"1px solid var(--border)",color:"inherit",textDecoration:"none",fontFamily:"var(--font-display)",fontSize:"clamp(24px,2.6vw,34px)"}}>{window.LB_CX[o.name].h1}<span aria-hidden style={{fontSize:16}}>↗</span></a>)}</div>
</section>
<BookingCta image={LB_IMG+"cleo-book-now.webp"} {...go.link("Book a consultation")}/></main>}
Object.assign(window,{ConcernDetailV2});
