import{r as $,g as oe,h as Ce,i as Se,j as Be,k as me,n as $e,l as Te,m as he,q as x,s as J,v as de,_ as re,x as ve,y as N,z as q,A as ge,B as be,C as te,D as Ee,E as ne,o as h,c as b,a as v,F as D,G as H,H as B,I as U,J as R,K as V,L as G,M as K,N as F,t as W,b as A,d as X,w as Z,e as Me,p as Le,f as je}from"./entry.199ab4ef.js";const ze={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},Ae={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Re=e=>{const t=$(0);function o(r){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",t.value=r.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",n)}function n(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",n)}function a(r){r.preventDefault();const i=r.pageX-t.value;t.value=r.pageX,e.value.scrollBy(-i,0)}oe(()=>{e.value&&e.value.addEventListener("mousedown",o)}),Ce(()=>{e.value&&e.value.removeEventListener("mousedown",o)})};function we(e){return Se()?(Be(e),!0):!1}function S(e){return typeof e=="function"?e():me(e)}const Ie=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Oe=Object.prototype.toString,Pe=e=>Oe.call(e)==="[object Object]",z=()=>{};function ye(e,t){function o(...n){return new Promise((a,r)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(r)})}return o}function Ue(e,t={}){let o,n,a=z;const r=s=>{clearTimeout(s),a(),a=z};return s=>{const p=S(e),u=S(t.maxWait);return o&&r(o),p<=0||u!==void 0&&u<=0?(n&&(r(n),n=null),Promise.resolve(s())):new Promise((d,l)=>{a=t.rejectOnCancel?l:d,u&&!n&&(n=setTimeout(()=>{o&&r(o),n=null,d(s())},u)),o=setTimeout(()=>{n&&r(n),n=null,d(s())},p)})}}function De(...e){let t=0,o,n=!0,a=z,r,i,s,p,u;!Te(e[0])&&typeof e[0]=="object"?{delay:i,trailing:s=!0,leading:p=!0,rejectOnCancel:u=!1}=e[0]:[i,s=!0,p=!0,u=!1]=e;const d=()=>{o&&(clearTimeout(o),o=void 0,a(),a=z)};return f=>{const m=S(i),g=Date.now()-t,w=()=>r=f();return d(),m<=0?(t=Date.now(),w()):(g>m&&(p||!n)?(t=Date.now(),w()):s&&(r=new Promise((C,y)=>{a=u?y:C,o=setTimeout(()=>{t=Date.now(),n=!0,C(w()),d()},Math.max(0,m-g))})),!p&&!o&&(o=setTimeout(()=>n=!0,m)),n=!1,r)}}function We(e){return e||he()}function Ne(e,t=200,o={}){return ye(Ue(t,o),e)}function Fe(e,t=200,o=!1,n=!0,a=!1){return ye(De(t,o,n,a),e)}function xe(e,t=!0,o){We()?oe(e,o):t?e():$e(e)}function E(e){var t;const o=S(e);return(t=o==null?void 0:o.$el)!=null?t:o}const Y=Ie?window:void 0;function fe(...e){let t,o,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,a]=e,t=Y):[t,o,n,a]=e,!t)return z;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const r=[],i=()=>{r.forEach(d=>d()),r.length=0},s=(d,l,f,m)=>(d.addEventListener(l,f,m),()=>d.removeEventListener(l,f,m)),p=J(()=>[E(t),S(a)],([d,l])=>{if(i(),!d)return;const f=Pe(l)?{...l}:l;r.push(...o.flatMap(m=>n.map(g=>s(d,m,g,f))))},{immediate:!0,flush:"post"}),u=()=>{p(),i()};return we(u),u}function Ve(){const e=$(!1),t=he();return t&&oe(()=>{e.value=!0},t),e}function He(e){const t=Ve();return x(()=>(t.value,!!e()))}function _e(e,t,o={}){const{window:n=Y,...a}=o;let r;const i=He(()=>n&&"ResizeObserver"in n),s=()=>{r&&(r.disconnect(),r=void 0)},p=x(()=>Array.isArray(e)?e.map(l=>E(l)):[E(e)]),u=J(p,l=>{if(s(),i.value&&n){r=new ResizeObserver(t);for(const f of l)f&&r.observe(f,a)}},{immediate:!0,flush:"post"}),d=()=>{s(),u()};return we(d),{isSupported:i,stop:d}}function Ge(e,t={width:0,height:0},o={}){const{window:n=Y,box:a="content-box"}=o,r=x(()=>{var l,f;return(f=(l=E(e))==null?void 0:l.namespaceURI)==null?void 0:f.includes("svg")}),i=$(t.width),s=$(t.height),{stop:p}=_e(e,([l])=>{const f=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(n&&r.value){const m=E(e);if(m){const g=n.getComputedStyle(m);i.value=Number.parseFloat(g.width),s.value=Number.parseFloat(g.height)}}else if(f){const m=Array.isArray(f)?f:[f];i.value=m.reduce((g,{inlineSize:w})=>g+w,0),s.value=m.reduce((g,{blockSize:w})=>g+w,0)}else i.value=l.contentRect.width,s.value=l.contentRect.height},o);xe(()=>{const l=E(e);l&&(i.value="offsetWidth"in l?l.offsetWidth:t.width,s.value="offsetHeight"in l?l.offsetHeight:t.height)});const u=J(()=>E(e),l=>{i.value=l?t.width:0,s.value=l?t.height:0});function d(){p(),u()}return{width:i,height:s,stop:d}}const pe=1;function Xe(e,t={}){const{throttle:o=0,idle:n=200,onStop:a=z,onScroll:r=z,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:p="auto",window:u=Y,onError:d=c=>{console.error(c)}}=t,l=$(0),f=$(0),m=x({get(){return l.value},set(c){w(c,void 0)}}),g=x({get(){return f.value},set(c){w(void 0,c)}});function w(c,M){var k,O,P;if(!u)return;const T=S(e);T&&((P=T instanceof Document?u.document.body:T)==null||P.scrollTo({top:(k=S(M))!=null?k:g.value,left:(O=S(c))!=null?O:m.value,behavior:S(p)}))}const C=$(!1),y=de({left:!0,right:!1,top:!0,bottom:!1}),_=de({left:!1,right:!1,top:!1,bottom:!1}),se=c=>{C.value&&(C.value=!1,_.left=!1,_.right=!1,_.top=!1,_.bottom=!1,a(c))},ke=Ne(se,o+n),Q=c=>{var M;if(!u)return;const k=((M=c==null?void 0:c.document)==null?void 0:M.documentElement)||(c==null?void 0:c.documentElement)||E(c),{display:O,flexDirection:P}=getComputedStyle(k),T=k.scrollLeft;_.left=T<l.value,_.right=T>l.value;const le=Math.abs(T)<=(i.left||0),ie=Math.abs(T)+k.clientWidth>=k.scrollWidth-(i.right||0)-pe;O==="flex"&&P==="row-reverse"?(y.left=ie,y.right=le):(y.left=le,y.right=ie),l.value=T;let L=k.scrollTop;c===u.document&&!L&&(L=u.document.body.scrollTop),_.top=L<f.value,_.bottom=L>f.value;const ue=Math.abs(L)<=(i.top||0),ce=Math.abs(L)+k.clientHeight>=k.scrollHeight-(i.bottom||0)-pe;O==="flex"&&P==="column-reverse"?(y.top=ce,y.bottom=ue):(y.top=ue,y.bottom=ce),f.value=L},ae=c=>{var M;if(!u)return;const k=(M=c.target.documentElement)!=null?M:c.target;Q(k),C.value=!0,ke(c),r(c)};return fe(e,"scroll",o?Fe(ae,o,!0,!1):ae,s),xe(()=>{try{const c=S(e);if(!c)return;Q(c)}catch(c){d(c)}}),fe(e,"scrollend",se,s),{x:m,y:g,isScrolling:C,arrivedState:y,directions:_,measure(){const c=S(e);u&&c&&Q(c)}}}const ee=ve(N.ui.strategy,N.ui.carousel,Ae),Je=q({components:{UButton:ge},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>ee.default.prevButton},nextButton:{type:Object,default:()=>ee.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:o}=be("carousel",te(e,"ui"),ee,te(e,"class")),n=$(),a=$(0),{x:r,arrivedState:i}=Xe(n,{behavior:"smooth"}),{width:s}=Ge(n),{left:p,right:u}=Ee(i);Re(n),_e(n,w=>{var y,_;const[C]=w;a.value=((_=(y=C==null?void 0:C.target)==null?void 0:y.firstElementChild)==null?void 0:_.clientWidth)||0});const d=x(()=>Math.round(r.value/a.value)+1),l=x(()=>a.value?e.items.length-Math.round(s.value/a.value)+1:0);function f(){r.value+=a.value}function m(){r.value-=a.value}function g(w){r.value=(w-1)*a.value}return{ui:t,attrs:o,isFirst:p,isLast:u,carouselRef:n,indicatorsCount:l,currentIndex:d,onClickNext:f,onClickPrev:m,onClick:g,twMerge:ne}}}),qe=["aria-label","onClick"];function Ke(e,t,o,n,a,r){const i=ge;return h(),b("div",V({class:e.ui.wrapper},e.attrs),[v("div",{ref:"carouselRef",class:B([e.ui.container,"no-scrollbar"])},[(h(!0),b(D,null,H(e.items,(s,p)=>(h(),b("div",{key:p,class:B(e.ui.item)},[U(e.$slots,"default",{item:s,index:p},void 0,!0)],2))),128))],2),e.arrows?(h(),b("div",{key:0,class:B(e.ui.arrows.wrapper)},[U(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var s;return[e.prevButton?(h(),G(i,V({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(s=e.prevButton)==null?void 0:s.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):R("",!0)]},!0),U(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var s;return[e.nextButton?(h(),G(i,V({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(s=e.nextButton)==null?void 0:s.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):R("",!0)]},!0)],2)):R("",!0),e.indicators?(h(),b("div",{key:1,class:B(e.ui.indicators.wrapper)},[(h(!0),b(D,null,H(e.indicatorsCount,s=>U(e.$slots,"indicator",{key:s,onClick:e.onClick,active:s===e.currentIndex,index:s},()=>[v("button",{type:"button",class:B([e.ui.indicators.base,s===e.currentIndex?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${s}`,onClick:p=>e.onClick(s)},null,10,qe)],!0)),128))],2)):R("",!0)],16)}const Ye=re(Je,[["render",Ke],["__scopeId","data-v-38fed8dd"]]),Qe=""+new URL("chrome-web-store.59ea1d04.svg",import.meta.url).href,Ze=""+new URL("fx-addon.c02f4e96.svg",import.meta.url).href,j=ve(N.ui.strategy,N.ui.avatar,ze),et=q({components:{UIcon:K},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>j.default.icon},size:{type:String,default:()=>j.default.size,validator(e){return Object.keys(j.size).includes(e)}},chipColor:{type:String,default:()=>j.default.chipColor,validator(e){return["gray",...N.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>j.default.chipPosition,validator(e){return Object.keys(j.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=be("avatar",te(e,"ui"),j),n=x(()=>typeof e.src=="boolean"?null:e.src),a=x(()=>(e.alt||"").split(" ").map(l=>l.charAt(0)).join("").substring(0,2)),r=x(()=>ne(F(t.value.wrapper,(u.value||!n.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),i=x(()=>ne(F(t.value.rounded,t.value.size[e.size]),e.imgClass)),s=x(()=>F(t.value.icon.base,t.value.icon.size[e.size])),p=x(()=>F(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),u=$(!1);J(()=>e.src,()=>{u.value&&(u.value=!1)});function d(){u.value=!0}return{ui:t,attrs:o,wrapperClass:r,imgClass:i,iconClass:s,chipClass:p,url:n,placeholder:a,error:u,onError:d}}}),tt=["alt","src"];function nt(e,t,o,n,a,r){const i=K;return h(),b("span",{class:B(e.wrapperClass)},[e.url&&!e.error?(h(),b("img",V({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:t[0]||(t[0]=(...s)=>e.onError&&e.onError(...s))}),null,16,tt)):e.text?(h(),b("span",{key:1,class:B(e.ui.text)},W(e.text),3)):e.icon?(h(),G(i,{key:2,name:e.icon,class:B(e.iconClass)},null,8,["name","class"])):e.placeholder?(h(),b("span",{key:3,class:B(e.ui.placeholder)},W(e.placeholder),3)):R("",!0),e.chipColor?(h(),b("span",{key:4,class:B(e.chipClass)},W(e.chipText),3)):R("",!0),U(e.$slots,"default")],2)}const ot=re(et,[["render",nt]]),rt=[{name:"Vladyslav Bezborodko",rating:5,content:"Amazing extensions, works better than others. Anyway 5 stars deserved, works with local files and url, clear UI."},{name:"李政波",rating:5,content:"用过最好的 Markdown 插件, 没有之一"},{name:"Thomas Delplace",rating:5,content:"I'm a developer and I'm working on a really complex JS library right now so I had to write a documentation, even for myself to be able to find any information about anything on my code really quickly and easily. I preferred to do it oin markdown since it's adapted to github's platform. I tried several and no other chrome extension for markdown readding is nearly as good as this. This is just perfect! Thank you people for bringing that to life!"},{name:"karam nassar",rating:5,content:"What a great extension! Thank you."},{name:"Rachel Gardner",rating:5,content:"这是目前我认为最好的 Markdown 阅读器。支持内嵌的 HTML 标签，支持每个 md 文件引入 CSS。"},{name:"MrBean Maxus",rating:5,content:"This is so so beautiful. extremely underrated plugin. Clean layout and available in both themes dark and bright, perfect."},{name:"Rico",rating:5,content:"可以的，预览效果不错"},{name:"Sasha Talk",rating:5,content:"Works awesome! Thanks!"},{name:"hen wu",rating:5,content:"太棒了，点击文档里的图片还会有优雅的动效！"},{name:"jialin su",rating:5,content:"太棒了！简直就是办公神器！"},{name:"杨棣",rating:5,content:"非常好用"},{name:"Paolo Mereu",rating:5,content:"Di immediato funzionamento, il rendering è ottimale."},{name:"Sam Wong",rating:5,content:"非常棒，比 Markdown Preview Plus 好用"},{name:"Strigkos Nomikos",rating:5,content:"Very Good result"}],st=v("h2",{class:"text-5xl mt-20"},"What people are saying",-1),at=v("p",{class:"text-lg mt-5"},"Markdown Reader is used by 10000+ users!",-1),lt={class:"column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mt-20"},it={class:"break-inside-avoid shadow ring-1 ring-gray-200 bg-white rounded-xl p-6 text-center"},ut={class:"font-bold leading-8"},ct={class:"leading-none mb-1"},dt=q({__name:"reviews",setup(e){return(t,o)=>{const n=ot,a=K;return h(),b(D,null,[st,at,v("div",lt,[(h(!0),b(D,null,H(me(rt),r=>(h(),b("div",it,[A(n,{src:`/avatars/${r.name}.png`,alt:"Avatar",size:"md"},null,8,["src"]),v("div",ut,W(r.name),1),v("div",ct,[(h(!0),b(D,null,H(r.rating,i=>(h(),G(a,{name:"i-heroicons-star-solid",class:"text-[16px] text-amber-400"}))),256))]),X(' "'+W(r.content)+'" ',1)]))),256))])],64)}}}),ft=""+new URL("banner-light-1.8e73fa35.png",import.meta.url).href,pt=""+new URL("banner-light-2.1a95bb7d.png",import.meta.url).href,mt=""+new URL("banner-light-3.dc268b22.png",import.meta.url).href,ht=""+new URL("banner-light-4.1832c5e6.png",import.meta.url).href,vt=""+new URL("banner-light-5.996f2c17.png",import.meta.url).href,I=e=>(Le("data-v-4a6e73f2"),e=e(),je(),e),gt={class:"content"},bt=I(()=>v("h1",null,[X("Make reading "),v("span",null,"Markdown"),X(" easier!")],-1)),wt=I(()=>v("p",null,"Extremely fast rendering, multi-plugin, dual-theme markdown reading extension.",-1)),yt={class:"downloads mt-16 flex items-center justify-center"},xt={class:"text-3xl mr-8 -ml-40 items-center hidden md:flex"},_t=I(()=>v("img",{class:"download-logo mb-1",src:Qe,alt:"chrome-web-store"},null,-1)),kt=I(()=>v("div",null,"Chrome",-1)),Ct=I(()=>v("img",{class:"download-logo mb-1 fx",src:Ze,alt:"fx-addon"},null,-1)),St=I(()=>v("div",null,"Firefox",-1)),Bt={class:"banner mt-2"},$t=["src"],Tt=q({__name:"index",setup(e){const t=[ft,pt,mt,ht,vt];return(o,n)=>{const a=K,r=Me,i=Ye;return h(),b("div",gt,[bt,wt,v("div",yt,[v("span",xt,[X(" Install"),A(a,{class:"ml-1 animation-bounce",name:"i-heroicons-arrow-right-20-solid"})]),A(r,{to:"https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg",class:"text-center mr-7",target:"_blank"},{default:Z(()=>[_t,kt]),_:1}),A(r,{to:"https://addons.mozilla.org/firefox/addon/markdown-reader-ext/",class:"text-center",target:"_blank"},{default:Z(()=>[Ct,St]),_:1})]),v("div",Bt,[A(i,{items:t,ui:{item:"basis-full"},class:"rounded-lg overflow-hidden",arrows:""},{default:Z(({item:s})=>[v("img",{src:s,class:"w-full",draggable:"false"},null,8,$t)]),_:1})]),A(dt)])}}});const Mt=re(Tt,[["__scopeId","data-v-4a6e73f2"]]);export{Mt as default};
