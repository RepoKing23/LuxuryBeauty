function TreatmentDetail({t,go}){
const {Button,BookingCta,FaqList,ReviewCard,TreatmentCard}=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const D=window.LB_DATA,X=window.LB_TX[t.slug];
if(!X)return null;
const cap={fontSize:9,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--brand-green)"};
const crumb={fontSize:9,letterSpacing:"0.16em",textTransform:"uppercase",color:"inherit",textDecoration:"none"};
const rev=D.reviews.find(r=>r.name===X.review)||D.reviews[1];
const rel=X.related.map(s=>D.treatments.find(x=>x.slug===s)).filter(Boolean);
const Check=({items,mark})=><ul style={{listStyle:"none",margin:0,padding:0,borderTop:"1px solid var(--rule-strong)"}}>{items.map(i=><li key={i} style={{display:"grid",gridTemplateColumns:"24px 1fr",gap:10,padding:"15px 0",borderBottom:"1px solid var(--rule-strong)"}}><span aria-hidden style={{color:"var(--brand-green)"}}>{mark}</span>{i}</li>)}</ul>;
return <main>
<section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",background:"var(--brand-accent)"}}>
<div style={{padding:"64px max(6vw,32px) 72px",display:"flex",flexDirection:"column"}}>
<nav aria-label="Breadcrumb" style={{display:"flex",gap:10,marginBottom:56,flexWrap:"wrap"}}><a href="#" style={crumb} {...go.link("Home")}>Home</a><span style={crumb}>/</span><a href="#" style={crumb} {...go.link("Treatments")}>Treatments</a><span style={crumb}>/</span><span style={{...crumb,opacity:.6}}>{t.name}</span></nav>
<p style={{...cap,color:"var(--foreground)",marginBottom:20}}>NP-led · Oakville, ON</p>
<h1 style={H("clamp(54px,6.4vw,100px)",{marginBottom:22,maxWidth:820})}>{X.h1}</h1>
<p style={{fontFamily:"var(--font-display)",fontSize:"clamp(26px,2.6vw,36px)",lineHeight:1.2,marginBottom:22,maxWidth:640}}>{X.line}</p>
<p style={{maxWidth:580,marginBottom:28}}>{X.first}</p>
<p style={{display:"flex",alignItems:"center",gap:10,fontSize:13,marginBottom:30}}><span aria-hidden style={{width:7,height:7,borderRadius:"50%",background:"var(--brand-green)"}}></span>Every client is assessed by a Nurse Practitioner before treatment.</p>
<div style={{display:"flex",flexWrap:"wrap",gap:14,marginBottom:30}}><Button arrow {...go.link("Book a consultation")}>Book a free consultation</Button><Button variant="brandOutline" href="tel:+14162940452">Call 416-294-0452</Button></div>
<p style={{marginTop:"auto",fontSize:11,color:"var(--brand-muted)"}}>Medically reviewed by Cleo R., NP · Updated November 2026</p>
</div>
<Img src={t.image} alt={t.seoHeading+" at Luxury Beauty by Cleo R."} eager w={1448} h={1086} style={{minHeight:620}}/>
</section>
<section aria-label="Quick facts" style={{borderBottom:"1px solid var(--border)",padding:"0 max(6vw,32px)"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,160px),1fr))",borderLeft:"1px solid var(--border)"}}>{[...X.facts,["Consultation","Free"]].map(([l,v])=><div key={l} style={{background:"var(--background)",borderRight:"1px solid var(--border)",borderTop:"1px solid var(--border)",marginTop:-1,padding:"28px 24px",display:"flex",flexDirection:"column",gap:8}}><span style={cap}>{l}</span><span style={{fontFamily:"var(--font-display)",fontSize:22,lineHeight:1.2}}>{v}</span></div>)}</div></section>
<section style={{...SP,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"4vw 9vw"}}>
<h2 style={H("clamp(48px,5.4vw,78px)")}>{X.whatTitle}</h2>
<div style={{display:"grid",gap:22,maxWidth:640}}><p style={{fontFamily:"var(--font-display)",fontSize:"clamp(24px,2.3vw,32px)",lineHeight:1.3}}>{X.what[0]}</p>{X.what.slice(1).map(p=><p key={p}>{p}</p>)}</div>
</section>
<section style={{...SP,background:"var(--clinical)"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"3vw 9vw",alignItems:"end",marginBottom:56}}><h2 style={H("clamp(48px,5.4vw,78px)")}>{t.slug==="weight"||t.slug==="iv"?"What’s included":"Areas we treat"}</h2><p style={{maxWidth:480}}>{X.areasIntro||"Cleo treats only what suits your face and goals. You’ll agree on every area before treatment starts."}</p></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,260px),1fr))",borderTop:"1px solid var(--rule-strong)",borderLeft:"1px solid var(--rule-strong)"}}>{X.areas.map(([a,d],i)=><div key={a} style={{background:"var(--clinical)",borderRight:"1px solid var(--rule-strong)",borderBottom:"1px solid var(--rule-strong)",padding:"30px 26px",minHeight:170,display:"flex",flexDirection:"column",gap:10}}><span style={{...cap,color:"var(--brand-muted)"}}>{String(i+1).padStart(2,"0")}</span><h3 style={H(30,{marginTop:"auto"})}>{a}</h3><p style={{fontSize:14}}>{d}</p></div>)}</div>
</section>
<section style={{...SP,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"5vw"}}>
<div><h2 style={H("clamp(48px,5.4vw,78px)",{marginBottom:24})}>Is it right for you?</h2><p style={{maxWidth:420}}>Your free consultation covers your health history and medications, so you’ll know whether this treatment suits you before you pay for anything.</p></div>
<div><p style={{...cap,marginBottom:16}}>A good fit if</p><Check items={X.fit} mark="✓"/></div>
<div><p style={{...cap,marginBottom:16}}>Cleo may suggest waiting if</p><Check items={X.wait} mark="—"/></div>
</section>
<section style={{...SP,background:"var(--surface)"}}>
<h2 style={H("clamp(48px,5.4vw,78px)",{marginBottom:56})}>Your appointment, step by step</h2>
<ol style={{listStyle:"none",margin:0,padding:0,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:"0 28px"}}>{X.steps.map(([s,d,tm],i)=><li key={s} style={{borderTop:"1px solid var(--foreground)",paddingTop:22,display:"flex",flexDirection:"column",gap:12,paddingBottom:30}}><span style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}><span style={{fontFamily:"var(--font-display)",fontSize:40,lineHeight:1,color:"var(--brand-green)"}}>{String(i+1).padStart(2,"0")}</span><span style={{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--brand-muted)"}}>{tm}</span></span><h3 style={H(28)}>{s}</h3><p style={{fontSize:14}}>{d}</p></li>)}</ol>
</section>
<section style={SP}>
<h2 style={H("clamp(48px,5.4vw,78px)",{marginBottom:56,maxWidth:900})}>Results, recovery and aftercare</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",borderTop:"1px solid var(--border)",borderLeft:"1px solid var(--border)"}}>
<div style={{background:"var(--background)",padding:"32px 30px",borderRight:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><p style={{...cap,marginBottom:14}}>Results</p><p>{X.results}</p></div>
<div style={{background:"var(--background)",padding:"32px 30px",borderRight:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><p style={{...cap,marginBottom:14}}>Side effects</p><p>{X.effects}</p></div>
<div style={{background:"var(--surface-warm)",padding:"32px 30px",borderRight:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><p style={{...cap,marginBottom:14}}>Aftercare</p><ul style={{margin:0,paddingLeft:18,display:"grid",gap:8}}>{X.after.map(a=><li key={a}>{a}</li>)}</ul></div>
</div>
</section>
<section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",background:"var(--surface-soft)"}}>
<Img src={LB_IMG+"cleo-white-coat-arms-crossed.webp"} alt="Cleo R., NP, in a white coat with arms crossed" w={1600} h={1067} style={{minHeight:560}}/>
<div style={{padding:"100px max(6vw,32px)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
<h2 style={H("clamp(46px,5vw,72px)",{marginBottom:28})}>Why choose Cleo</h2>
<p style={{maxWidth:520,marginBottom:28}}>Cleo is a Nurse Practitioner in Oakville and has worked in nursing since 2013. She’ll tell you when a smaller amount would look better, and when you don’t need treatment at all.</p>
<ul style={{listStyle:"none",margin:0,padding:0,borderTop:"1px solid var(--rule-strong)",maxWidth:520}}>{["Assessed by a Nurse Practitioner, every visit","RN since 2013 · NP since 2022","Care planned for every skin tone and face","Honest advice, including “not today”"].map(i=><li key={i} style={{padding:"14px 0",borderBottom:"1px solid var(--rule-strong)",fontFamily:"var(--font-display)",fontSize:22}}>{i}</li>)}</ul>
<p style={{marginTop:24,fontSize:12,color:"var(--brand-muted)"}}><a {...go.link("About")} style={{color:"inherit"}}>Meet Cleo</a></p>
</div></section>
{(window.LB_TX_DEEP[t.slug]||[]).length>0&&<section style={{...SP,background:"var(--surface)"}}><div style={{maxWidth:900,margin:"0 auto",display:"grid",gap:56}}>{window.LB_TX_DEEP[t.slug].map(([h,ps])=><article key={h}><h2 style={H("clamp(36px,4vw,56px)",{marginBottom:24})}>{h}</h2><div style={{display:"grid",gap:18,maxWidth:760}}>{ps.map(x=><p key={x}>{x}</p>)}</div></article>)}</div></section>}
<section style={{...SP,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"4vw 9vw"}}>
<div><h2 style={H("clamp(48px,5.4vw,78px)",{marginBottom:24})}>{t.slug==="lips"?"Lip filler":t.name.replace(" Treatments","")} FAQs</h2><p style={{maxWidth:380,marginBottom:20}}>Still unsure? Ask Cleo at your free consultation.</p><a {...go.link("FAQs")} style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"inherit"}}>All FAQs ↗</a></div>
<FaqList faqs={X.faqs}/>
</section>
<section style={{...SP,paddingTop:0,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"4vw 9vw",alignItems:"center"}}>
<div><p style={{...cap,marginBottom:16}}>Client experiences</p><h2 style={H("clamp(42px,4.6vw,64px)",{marginBottom:20})}>How clients describe their visit.</h2><p style={{fontSize:13,color:"var(--brand-muted)"}}><span style={{color:"var(--brand-green)",letterSpacing:"0.1em"}} aria-hidden>★★★★★</span> 5.0 on Google · <a href="https://maps.google.com/?cid=15124432982846143650" target="_blank" rel="noreferrer" style={{color:"inherit"}}>Read all reviews</a></p></div>
<div style={{background:"var(--border)",padding:1}}><ReviewCard {...rev} style={{minHeight:0}}/></div>
</section>
<section style={{...SP,background:"var(--surface)"}}>
<h2 style={H("clamp(44px,5vw,70px)",{marginBottom:48})}>Related treatments</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))",borderTop:"1px solid var(--border)",borderLeft:"1px solid var(--border)"}}>{rel.map(r=><TreatmentCard key={r.slug} {...r} {...go.link("treatment",r)}/>)}</div>
</section>
<BookingCta image={LB_IMG+"cleo-book-now.webp"} {...go.link("Book a consultation")}/></main>}
Object.assign(window,{TreatmentDetail});
