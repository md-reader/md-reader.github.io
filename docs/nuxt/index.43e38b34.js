import{r as S,g as z,h as he,i as be,j as ge,k as we,n as _e,l as ye,m as ae,q as R,s as X,v as Z,_ as ie,x as ke,y as ee,z as ue,A as ce,B as Ce,C as te,D as xe,E as Se,o as x,c as M,a as g,F as oe,G as ne,H as D,I,J as $,K as F,L as se,d as V,b as U,w as N,e as Be,p as Le,f as Ee,M as Me}from"./entry.d7d0ca05.js";const Re={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Te=e=>{const t=S(0);function o(r){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",t.value=r.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",n)}function n(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",n)}function a(r){r.preventDefault();const i=r.pageX-t.value;t.value=r.pageX,e.value.scrollBy(-i,0)}z(()=>{e.value&&e.value.addEventListener("mousedown",o)}),he(()=>{e.value&&e.value.removeEventListener("mousedown",o)})};function de(e){return be()?(ge(e),!0):!1}function k(e){return typeof e=="function"?e():we(e)}const je=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ae=Object.prototype.toString,Oe=e=>Ae.call(e)==="[object Object]",T=()=>{};function fe(e,t){function o(...n){return new Promise((a,r)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(r)})}return o}function De(e,t={}){let o,n,a=T;const r=s=>{clearTimeout(s),a(),a=T};return s=>{const p=k(e),c=k(t.maxWait);return o&&r(o),p<=0||c!==void 0&&c<=0?(n&&(r(n),n=null),Promise.resolve(s())):new Promise((f,l)=>{a=t.rejectOnCancel?l:f,c&&!n&&(n=setTimeout(()=>{o&&r(o),n=null,f(s())},c)),o=setTimeout(()=>{n&&r(n),n=null,f(s())},p)})}}function Ie(...e){let t=0,o,n=!0,a=T,r,i,s,p,c;!ye(e[0])&&typeof e[0]=="object"?{delay:i,trailing:s=!0,leading:p=!0,rejectOnCancel:c=!1}=e[0]:[i,s=!0,p=!0,c=!1]=e;const f=()=>{o&&(clearTimeout(o),o=void 0,a(),a=T)};return d=>{const m=k(i),v=Date.now()-t,h=()=>r=d();return f(),m<=0?(t=Date.now(),h()):(v>m&&(p||!n)?(t=Date.now(),h()):s&&(r=new Promise((y,b)=>{a=c?b:y,o=setTimeout(()=>{t=Date.now(),n=!0,y(h()),f()},Math.max(0,m-v))})),!p&&!o&&(o=setTimeout(()=>n=!0,m)),n=!1,r)}}function $e(e){return e||ae()}function Ue(e,t=200,o={}){return fe(De(t,o),e)}function Pe(e,t=200,o=!1,n=!0,a=!1){return fe(Ie(t,o,n,a),e)}function pe(e,t=!0,o){$e()?z(e,o):t?e():_e(e)}function B(e){var t;const o=k(e);return(t=o==null?void 0:o.$el)!=null?t:o}const P=je?window:void 0;function re(...e){let t,o,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,a]=e,t=P):[t,o,n,a]=e,!t)return T;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const r=[],i=()=>{r.forEach(f=>f()),r.length=0},s=(f,l,d,m)=>(f.addEventListener(l,d,m),()=>f.removeEventListener(l,d,m)),p=X(()=>[B(t),k(a)],([f,l])=>{if(i(),!f)return;const d=Oe(l)?{...l}:l;r.push(...o.flatMap(m=>n.map(v=>s(f,m,v,d))))},{immediate:!0,flush:"post"}),c=()=>{p(),i()};return de(c),c}function We(){const e=S(!1),t=ae();return t&&z(()=>{e.value=!0},t),e}function Fe(e){const t=We();return R(()=>(t.value,!!e()))}function me(e,t,o={}){const{window:n=P,...a}=o;let r;const i=Fe(()=>n&&"ResizeObserver"in n),s=()=>{r&&(r.disconnect(),r=void 0)},p=R(()=>Array.isArray(e)?e.map(l=>B(l)):[B(e)]),c=X(p,l=>{if(s(),i.value&&n){r=new ResizeObserver(t);for(const d of l)d&&r.observe(d,a)}},{immediate:!0,flush:"post"}),f=()=>{s(),c()};return de(f),{isSupported:i,stop:f}}function Ne(e,t={width:0,height:0},o={}){const{window:n=P,box:a="content-box"}=o,r=R(()=>{var l,d;return(d=(l=B(e))==null?void 0:l.namespaceURI)==null?void 0:d.includes("svg")}),i=S(t.width),s=S(t.height),{stop:p}=me(e,([l])=>{const d=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(n&&r.value){const m=B(e);if(m){const v=n.getComputedStyle(m);i.value=Number.parseFloat(v.width),s.value=Number.parseFloat(v.height)}}else if(d){const m=Array.isArray(d)?d:[d];i.value=m.reduce((v,{inlineSize:h})=>v+h,0),s.value=m.reduce((v,{blockSize:h})=>v+h,0)}else i.value=l.contentRect.width,s.value=l.contentRect.height},o);pe(()=>{const l=B(e);l&&(i.value="offsetWidth"in l?l.offsetWidth:t.width,s.value="offsetHeight"in l?l.offsetHeight:t.height)});const c=X(()=>B(e),l=>{i.value=l?t.width:0,s.value=l?t.height:0});function f(){p(),c()}return{width:i,height:s,stop:f}}const le=1;function He(e,t={}){const{throttle:o=0,idle:n=200,onStop:a=T,onScroll:r=T,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:p="auto",window:c=P,onError:f=u=>{console.error(u)}}=t,l=S(0),d=S(0),m=R({get(){return l.value},set(u){h(u,void 0)}}),v=R({get(){return d.value},set(u){h(void 0,u)}});function h(u,L){var _,A,O;if(!c)return;const C=k(e);C&&((O=C instanceof Document?c.document.body:C)==null||O.scrollTo({top:(_=k(L))!=null?_:v.value,left:(A=k(u))!=null?A:m.value,behavior:k(p)}))}const y=S(!1),b=Z({left:!0,right:!1,top:!0,bottom:!1}),w=Z({left:!1,right:!1,top:!1,bottom:!1}),G=u=>{y.value&&(y.value=!1,w.left=!1,w.right=!1,w.top=!1,w.bottom=!1,a(u))},ve=Ue(G,o+n),W=u=>{var L;if(!c)return;const _=((L=u==null?void 0:u.document)==null?void 0:L.documentElement)||(u==null?void 0:u.documentElement)||B(u),{display:A,flexDirection:O}=getComputedStyle(_),C=_.scrollLeft;w.left=C<l.value,w.right=C>l.value;const J=Math.abs(C)<=(i.left||0),K=Math.abs(C)+_.clientWidth>=_.scrollWidth-(i.right||0)-le;A==="flex"&&O==="row-reverse"?(b.left=K,b.right=J):(b.left=J,b.right=K),l.value=C;let E=_.scrollTop;u===c.document&&!E&&(E=c.document.body.scrollTop),w.top=E<d.value,w.bottom=E>d.value;const Y=Math.abs(E)<=(i.top||0),Q=Math.abs(E)+_.clientHeight>=_.scrollHeight-(i.bottom||0)-le;A==="flex"&&O==="column-reverse"?(b.top=Q,b.bottom=Y):(b.top=Y,b.bottom=Q),d.value=E},q=u=>{var L;if(!c)return;const _=(L=u.target.documentElement)!=null?L:u.target;W(_),y.value=!0,ve(u),r(u)};return re(e,"scroll",o?Pe(q,o,!0,!1):q,s),pe(()=>{try{const u=k(e);if(!u)return;W(u)}catch(u){f(u)}}),re(e,"scrollend",G,s),{x:m,y:v,isScrolling:y,arrivedState:b,directions:w,measure(){const u=k(e);c&&u&&W(u)}}}const H=ke(ee.ui.strategy,ee.ui.carousel,Re),Ve=ue({components:{UButton:ce},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>H.default.prevButton},nextButton:{type:Object,default:()=>H.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:o}=Ce("carousel",te(e,"ui"),H,te(e,"class")),n=S(),a=S(0),{x:r,arrivedState:i}=He(n,{behavior:"smooth"}),{width:s}=Ne(n),{left:p,right:c}=xe(i);Te(n),me(n,h=>{var b,w;const[y]=h;a.value=((w=(b=y==null?void 0:y.target)==null?void 0:b.firstElementChild)==null?void 0:w.clientWidth)||0});const f=R(()=>Math.round(r.value/a.value)+1),l=R(()=>a.value?e.items.length-Math.round(s.value/a.value)+1:0);function d(){r.value+=a.value}function m(){r.value-=a.value}function v(h){r.value=(h-1)*a.value}return{ui:t,attrs:o,isFirst:p,isLast:c,carouselRef:n,indicatorsCount:l,currentIndex:f,onClickNext:d,onClickPrev:m,onClick:v,twMerge:Se}}}),ze=["aria-label","onClick"];function Xe(e,t,o,n,a,r){const i=ce;return x(),M("div",F({class:e.ui.wrapper},e.attrs),[g("div",{ref:"carouselRef",class:D([e.ui.container,"no-scrollbar"])},[(x(!0),M(oe,null,ne(e.items,(s,p)=>(x(),M("div",{key:p,class:D(e.ui.item)},[I(e.$slots,"default",{item:s,index:p},void 0,!0)],2))),128))],2),e.arrows?(x(),M("div",{key:0,class:D(e.ui.arrows.wrapper)},[I(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var s;return[e.prevButton?(x(),se(i,F({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(s=e.prevButton)==null?void 0:s.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):$("",!0)]},!0),I(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var s;return[e.nextButton?(x(),se(i,F({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(s=e.nextButton)==null?void 0:s.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):$("",!0)]},!0)],2)):$("",!0),e.indicators?(x(),M("div",{key:1,class:D(e.ui.indicators.wrapper)},[(x(!0),M(oe,null,ne(e.indicatorsCount,s=>I(e.$slots,"indicator",{key:s,onClick:e.onClick,active:s===e.currentIndex,index:s},()=>[g("button",{type:"button",class:D([e.ui.indicators.base,s===e.currentIndex?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${s}`,onClick:p=>e.onClick(s)},null,10,ze)],!0)),128))],2)):$("",!0)],16)}const Ge=ie(Ve,[["render",Xe],["__scopeId","data-v-38fed8dd"]]),qe=""+new URL("chrome-web-store.59ea1d04.svg",import.meta.url).href,Je=""+new URL("fx-addon.c02f4e96.svg",import.meta.url).href,Ke=""+new URL("banner-light-1.8e73fa35.png",import.meta.url).href,Ye=""+new URL("banner-light-2.1a95bb7d.png",import.meta.url).href,Qe=""+new URL("banner-light-3.dc268b22.png",import.meta.url).href,Ze=""+new URL("banner-light-4.1832c5e6.png",import.meta.url).href,et=""+new URL("banner-light-5.996f2c17.png",import.meta.url).href,j=e=>(Le("data-v-074d11c0"),e=e(),Ee(),e),tt={class:"content"},ot=j(()=>g("h1",null,[V("Make reading "),g("b",null,"Markdown"),V(" easier!")],-1)),nt=j(()=>g("p",null,"Extremely fast rendering, multi-plugin, dual-theme markdown reading extension.",-1)),st={class:"downloads mt-16 flex items-center justify-center"},rt={class:"text-3xl mr-8 -ml-40 items-center hidden md:flex"},lt=j(()=>g("img",{class:"download-logo mb-1",src:qe,alt:"chrome-web-store"},null,-1)),at=j(()=>g("div",null,"Chrome",-1)),it=j(()=>g("img",{class:"download-logo mb-1 fx",src:Je,alt:"fx-addon"},null,-1)),ut=j(()=>g("div",null,"Firefox",-1)),ct={class:"banner mt-2"},dt=["src"],ft=ue({__name:"index",setup(e){const t=[Ke,Ye,Qe,Ze,et];return(o,n)=>{const a=Me,r=Be,i=Ge;return x(),M("div",tt,[ot,nt,g("div",st,[g("span",rt,[V(" Install"),U(a,{class:"ml-1 animation-bounce",name:"i-heroicons-arrow-right-20-solid"})]),U(r,{to:"https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg",class:"text-center mr-7",target:"_blank"},{default:N(()=>[lt,at]),_:1}),U(r,{to:"https://addons.mozilla.org/firefox/addon/markdown-reader-ext/",class:"text-center",target:"_blank"},{default:N(()=>[it,ut]),_:1})]),g("div",ct,[U(i,{items:t,ui:{item:"basis-full"},class:"rounded-lg overflow-hidden",arrows:""},{default:N(({item:s})=>[g("img",{src:s,class:"w-full",draggable:"false"},null,8,dt)]),_:1})])])}}});const mt=ie(ft,[["__scopeId","data-v-074d11c0"]]);export{mt as default};