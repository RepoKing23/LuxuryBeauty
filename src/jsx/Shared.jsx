const NS=window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const SP={padding:"130px max(6vw,32px)"};
const H=(size,extra)=>({margin:0,fontFamily:"var(--font-display)",fontWeight:400,lineHeight:0.98,letterSpacing:"-0.02em",fontSize:size,...extra});
const Img=({src,style,alt="",w,h,eager})=><div style={{position:"relative",overflow:"hidden",...style}}><img src={src} alt={alt} width={w} height={h} loading={eager?"eager":"lazy"} fetchpriority={eager?"high":undefined} decoding="async" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/></div>;
const RuledList=({items})=><ul style={{margin:0,padding:0,listStyle:"none",borderTop:"1px solid var(--rule-strong)"}}>{items.map(i=><li key={i} style={{borderBottom:"1px solid var(--rule-strong)",padding:"17px 0",fontFamily:"var(--font-display)",fontSize:24}}>{i}</li>)}</ul>;
Object.assign(window,{SP,H,Img,RuledList});