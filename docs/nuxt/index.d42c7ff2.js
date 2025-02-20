import{g as Pe,h as Q,F,r as _,i as R,j as be,k as P,l as x,m as de,n as le,q as ve,s as oe,v as Ee,x as Oe,y as N,z as Ae,_ as re,A as ge,B as Z,C as he,D as ae,E as V,o as w,G as X,w as S,b as k,H as I,I as je,a as v,c as $,J as B,K as J,t as L,d as z,L as ie,M as Fe,N as Ne,O as ne,P as Ce,Q as ye,R as Me,S as Le,T as G,U as q,e as Re,V as ce,p as He,f as De}from"./entry.e0dcdecc.js";import{_ as Ue}from"./reviews.vue.8e63b001.js";const Be={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},ze={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};function U(e,t,...a){if(e in t){let s=t[e];return typeof s=="function"?s(...a):s}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),We=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(We||{});function W({visible:e=!0,features:t=0,ourProps:a,theirProps:n,...s}){var l;let o=we(n,a),d=Object.assign(s,{props:o});if(e||t&2&&o.static)return te(d);if(t&1){let p=(l=o.unmount)==null||l?0:1;return U(p,{[0](){return null},[1](){return te({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return te(d)}function te({props:e,attrs:t,slots:a,slot:n,name:s}){var l,o;let{as:d,...p}=_e(e,["unmount","static"]),m=(l=a.default)==null?void 0:l.call(a,n),f={};if(n){let i=!1,c=[];for(let[b,h]of Object.entries(n))typeof h=="boolean"&&(i=!0),h===!0&&c.push(b);i&&(f["data-headlessui-state"]=c.join(" "))}if(d==="template"){if(m=xe(m??[]),Object.keys(p).length>0||Object.keys(t).length>0){let[i,...c]=m??[];if(!Ve(i)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(u=>u.trim()).filter((u,r,g)=>g.indexOf(u)===r).sort((u,r)=>u.localeCompare(r)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let b=we((o=i.props)!=null?o:{},p),h=Pe(i,b);for(let u in b)u.startsWith("on")&&(h.props||(h.props={}),h.props[u]=b[u]);return h}return Array.isArray(m)&&m.length===1?m[0]:m}return Q(d,Object.assign({},p,f),{default:()=>m})}function xe(e){return e.flatMap(t=>t.type===F?xe(t.children):[t])}function we(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},a={};for(let n of e)for(let s in n)s.startsWith("on")&&typeof n[s]=="function"?(a[s]!=null||(a[s]=[]),a[s].push(n[s])):t[s]=n[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(a).map(n=>[n,void 0])));for(let n in a)Object.assign(t,{[n](s,...l){let o=a[n];for(let d of o){if(s instanceof Event&&s.defaultPrevented)return;d(s,...l)}}});return t}function _e(e,t=[]){let a=Object.assign({},e);for(let n of t)n in a&&delete a[n];return a}function Ve(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ge=0;function qe(){return++Ge}function ke(){return qe()}var E=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(E||{});function y(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function pe(e,t){if(e)return e;let a=t??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function Ke(e,t){let a=_(pe(e.value.type,e.value.as));return R(()=>{a.value=pe(e.value.type,e.value.as)}),be(()=>{var n;a.value||y(t)&&y(t)instanceof HTMLButtonElement&&!((n=y(t))!=null&&n.hasAttribute("type"))&&(a.value="button")}),a}var Xe=Object.defineProperty,Je=(e,t,a)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,fe=(e,t,a)=>(Je(e,typeof t!="symbol"?t+"":t,a),a);class Qe{constructor(){fe(this,"current",this.detect()),fe(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Ye=new Qe;function Ze(e){if(Ye.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=y(e);if(t)return t.ownerDocument}return document}let et=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var O=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(O||{}),K=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(K||{}),tt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(tt||{});function at(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(et)).sort((t,a)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER)))}var nt=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(nt||{}),st=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(st||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let lt=["textarea","input"].join(",");function ot(e){var t,a;return(a=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,lt))!=null?a:!1}function D(e,t=a=>a){return e.slice().sort((a,n)=>{let s=t(a),l=t(n);if(s===null||l===null)return 0;let o=s.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function H(e,t,{sorted:a=!0,relativeTo:n=null,skipElements:s=[]}={}){var l;let o=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,d=Array.isArray(e)?a?D(e):e:at(e);s.length>0&&d.length>1&&(d=d.filter(h=>!s.includes(h))),n=n??o.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,d.indexOf(n))-1;if(t&4)return Math.max(0,d.indexOf(n))+1;if(t&8)return d.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},i=0,c=d.length,b;do{if(i>=c||i+c<=0)return 0;let h=m+i;if(t&16)h=(h+c)%c;else{if(h<0)return 3;if(h>=c)return 1}b=d[h],b==null||b.focus(f),i+=p}while(b!==o.activeElement);return t&6&&ot(b)&&b.select(),2}var Se=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Se||{});let $e=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:a}){return()=>{let{features:n,...s}=e,l={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return W({ourProps:l,theirProps:s,slot:{},attrs:a,slots:t,name:"Hidden"})}}});function rt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let it=P({props:{onFocus:{type:Function,required:!0}},setup(e){let t=_(!0);return()=>t.value?Q($e,{as:"button",type:"button",features:Se.Focusable,onFocus(a){a.preventDefault();let n,s=50;function l(){var o;if(s--<=0){n&&cancelAnimationFrame(n);return}if((o=e.onFocus)!=null&&o.call(e)){t.value=!1,cancelAnimationFrame(n);return}n=requestAnimationFrame(l)}n=requestAnimationFrame(l)}}):null}});var ut=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ut||{}),dt=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(dt||{});let Te=Symbol("TabsContext");function Y(e){let t=oe(Te,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Y),a}return t}let ue=Symbol("TabsSSRContext"),ct=P({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:a,emit:n}){var s;let l=_((s=e.selectedIndex)!=null?s:e.defaultIndex),o=_([]),d=_([]),p=x(()=>e.selectedIndex!==null),m=x(()=>p.value?e.selectedIndex:l.value);function f(u){var r;let g=D(i.tabs.value,y),T=D(i.panels.value,y),M=g.filter(A=>{var j;return!((j=y(A))!=null&&j.hasAttribute("disabled"))});if(u<0||u>g.length-1){let A=U(l.value===null?0:Math.sign(u-l.value),{[-1]:()=>1,[0]:()=>U(Math.sign(u),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0}),j=U(A,{[0]:()=>g.indexOf(M[0]),[1]:()=>g.indexOf(M[M.length-1])});j!==-1&&(l.value=j),i.tabs.value=g,i.panels.value=T}else{let A=g.slice(0,u),j=[...g.slice(u),...A].find(Ie=>M.includes(Ie));if(!j)return;let ee=(r=g.indexOf(j))!=null?r:i.selectedIndex.value;ee===-1&&(ee=i.selectedIndex.value),l.value=ee,i.tabs.value=g,i.panels.value=T}}let i={selectedIndex:x(()=>{var u,r;return(r=(u=l.value)!=null?u:e.defaultIndex)!=null?r:null}),orientation:x(()=>e.vertical?"vertical":"horizontal"),activation:x(()=>e.manual?"manual":"auto"),tabs:o,panels:d,setSelectedIndex(u){m.value!==u&&n("change",u),p.value||f(u)},registerTab(u){var r;if(o.value.includes(u))return;let g=o.value[l.value];o.value.push(u),o.value=D(o.value,y);let T=(r=o.value.indexOf(g))!=null?r:l.value;T!==-1&&(l.value=T)},unregisterTab(u){let r=o.value.indexOf(u);r!==-1&&o.value.splice(r,1)},registerPanel(u){d.value.includes(u)||(d.value.push(u),d.value=D(d.value,y))},unregisterPanel(u){let r=d.value.indexOf(u);r!==-1&&d.value.splice(r,1)}};de(Te,i);let c=_({tabs:[],panels:[]}),b=_(!1);R(()=>{b.value=!0}),de(ue,x(()=>b.value?null:c.value));let h=x(()=>e.selectedIndex);return R(()=>{le([h],()=>{var u;return f((u=e.selectedIndex)!=null?u:e.defaultIndex)},{immediate:!0})}),be(()=>{if(!p.value||m.value==null||i.tabs.value.length<=0)return;let u=D(i.tabs.value,y);u.some((r,g)=>y(i.tabs.value[g])!==y(r))&&i.setSelectedIndex(u.findIndex(r=>y(r)===y(i.tabs.value[m.value])))}),()=>{let u={selectedIndex:l.value};return Q(F,[o.value.length<=0&&Q(it,{onFocus:()=>{for(let r of o.value){let g=y(r);if((g==null?void 0:g.tabIndex)===0)return g.focus(),!0}return!1}}),W({theirProps:{...a,..._e(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:t,attrs:a,name:"TabGroup"})])}}}),pt=P({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:a}){let n=Y("TabList");return()=>{let s={selectedIndex:n.selectedIndex.value},l={role:"tablist","aria-orientation":n.orientation.value};return W({ourProps:l,theirProps:e,slot:s,attrs:t,slots:a,name:"TabList"})}}}),ft=P({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${ke()}`}},setup(e,{attrs:t,slots:a,expose:n}){let s=Y("Tab"),l=_(null);n({el:l,$el:l}),R(()=>s.registerTab(l)),ve(()=>s.unregisterTab(l));let o=oe(ue),d=x(()=>{if(o.value){let r=o.value.tabs.indexOf(e.id);return r===-1?o.value.tabs.push(e.id)-1:r}return-1}),p=x(()=>{let r=s.tabs.value.indexOf(l);return r===-1?d.value:r}),m=x(()=>p.value===s.selectedIndex.value);function f(r){var g;let T=r();if(T===K.Success&&s.activation.value==="auto"){let M=(g=Ze(l))==null?void 0:g.activeElement,A=s.tabs.value.findIndex(j=>y(j)===M);A!==-1&&s.setSelectedIndex(A)}return T}function i(r){let g=s.tabs.value.map(T=>y(T)).filter(Boolean);if(r.key===E.Space||r.key===E.Enter){r.preventDefault(),r.stopPropagation(),s.setSelectedIndex(p.value);return}switch(r.key){case E.Home:case E.PageUp:return r.preventDefault(),r.stopPropagation(),f(()=>H(g,O.First));case E.End:case E.PageDown:return r.preventDefault(),r.stopPropagation(),f(()=>H(g,O.Last))}if(f(()=>U(s.orientation.value,{vertical(){return r.key===E.ArrowUp?H(g,O.Previous|O.WrapAround):r.key===E.ArrowDown?H(g,O.Next|O.WrapAround):K.Error},horizontal(){return r.key===E.ArrowLeft?H(g,O.Previous|O.WrapAround):r.key===E.ArrowRight?H(g,O.Next|O.WrapAround):K.Error}}))===K.Success)return r.preventDefault()}let c=_(!1);function b(){var r;c.value||(c.value=!0,!e.disabled&&((r=y(l))==null||r.focus({preventScroll:!0}),s.setSelectedIndex(p.value),rt(()=>{c.value=!1})))}function h(r){r.preventDefault()}let u=Ke(x(()=>({as:e.as,type:t.type})),l);return()=>{var r;let g={selected:m.value},{id:T,...M}=e,A={ref:l,onKeydown:i,onMousedown:h,onClick:b,id:T,role:"tab",type:u.value,"aria-controls":(r=y(s.panels.value[p.value]))==null?void 0:r.id,"aria-selected":m.value,tabIndex:m.value?0:-1,disabled:e.disabled?!0:void 0};return W({ourProps:A,theirProps:M,slot:g,attrs:t,slots:a,name:"Tab"})}}}),mt=P({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:a}){let n=Y("TabPanels");return()=>{let s={selectedIndex:n.selectedIndex.value};return W({theirProps:e,ourProps:{},slot:s,attrs:a,slots:t,name:"TabPanels"})}}}),bt=P({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${ke()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:a,expose:n}){let s=Y("TabPanel"),l=_(null);n({el:l,$el:l}),R(()=>s.registerPanel(l)),ve(()=>s.unregisterPanel(l));let o=oe(ue),d=x(()=>{if(o.value){let f=o.value.panels.indexOf(e.id);return f===-1?o.value.panels.push(e.id)-1:f}return-1}),p=x(()=>{let f=s.panels.value.indexOf(l);return f===-1?d.value:f}),m=x(()=>p.value===s.selectedIndex.value);return()=>{var f;let i={selected:m.value},{id:c,tabIndex:b,...h}=e,u={ref:l,id:c,role:"tabpanel","aria-labelledby":(f=y(s.tabs.value[p.value]))==null?void 0:f.id,tabIndex:m.value?b:-1};return!m.value&&e.unmount&&!e.static?Q($e,{as:"span",...u}):W({ourProps:u,theirProps:h,slot:i,attrs:t,slots:a,features:se.Static|se.RenderStrategy,visible:m.value,name:"TabPanel"})}}});function vt(e){return Ee()?(Oe(e),!0):!1}function gt(e){return typeof e=="function"?e():N(e)}const ht=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function me(e){var t;const a=gt(e);return(t=a==null?void 0:a.$el)!=null?t:a}const yt=ht?window:void 0;function xt(){const e=_(!1),t=Ae();return t&&R(()=>{e.value=!0},t),e}function wt(e){const t=xt();return x(()=>(t.value,!!e()))}function _t(e,t,a={}){const{window:n=yt,...s}=a;let l;const o=wt(()=>n&&"ResizeObserver"in n),d=()=>{l&&(l.disconnect(),l=void 0)},p=x(()=>Array.isArray(e)?e.map(i=>me(i)):[me(e)]),m=le(p,i=>{if(d(),o.value&&n){l=new ResizeObserver(t);for(const c of i)c&&l.observe(c,s)}},{immediate:!0,flush:"post"}),f=()=>{d(),m()};return vt(f),{isSupported:o,stop:f}}const kt=ge(Z.ui.strategy,Z.ui.tabs,ze),St=P({components:{HTabGroup:ct,HTabList:pt,HTab:ft,HTabPanels:mt,HTabPanel:bt},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:a,attrs:n}=he("tabs",ae(e,"ui"),kt,ae(e,"class")),s=_(),l=_([]),o=_(),d=_(e.modelValue||e.defaultIndex);function p(f){var c;const i=(c=l.value[f])==null?void 0:c.$el;i&&o.value&&(o.value.style.top=`${i.offsetTop}px`,o.value.style.left=`${i.offsetLeft}px`,o.value.style.width=`${i.offsetWidth}px`,o.value.style.height=`${i.offsetHeight}px`)}function m(f){d.value=f,t("change",f),e.modelValue!==void 0&&t("update:modelValue",d.value),p(d.value)}return _t(s,()=>{p(d.value)}),le(()=>e.modelValue,f=>{d.value=f,p(d.value)}),R(()=>p(d.value)),{ui:a,attrs:n,listRef:s,itemRefs:l,markerRef:o,selectedIndex:d,onChange:m}}}),$t={class:"truncate"};function Tt(e,t,a,n,s,l){const o=V("HTab"),d=V("HTabList"),p=V("HTabPanel"),m=V("HTabPanels"),f=V("HTabGroup");return w(),X(f,ie({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:S(()=>[k(d,{ref:"listRef",class:I([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:je([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:S(()=>[v("div",{ref:"markerRef",class:I(e.ui.list.marker.wrapper)},[v("div",{class:I([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(w(!0),$(F,null,B(e.items,(i,c)=>(w(),X(o,{key:c,ref_for:!0,ref:"itemRefs",disabled:i.disabled,as:"template"},{default:S(({selected:b,disabled:h})=>[v("button",{class:I([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,b?e.ui.list.tab.active:e.ui.list.tab.inactive])},[J(e.$slots,"default",{item:i,index:c,selected:b,disabled:h},()=>[v("span",$t,L(i.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),k(m,{class:I(e.ui.container)},{default:S(()=>[(w(!0),$(F,null,B(e.items,(i,c)=>(w(),X(p,{key:c,class:I(e.ui.base),tabindex:"-1"},{default:S(({selected:b})=>[J(e.$slots,i.slot||"item",{item:i,index:c,selected:b},()=>[z(L(i.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const It=re(St,[["render",Tt]]),Pt=ge(Z.ui.strategy,Z.ui.card,Be),Et=P({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:a}=he("card",ae(e,"ui"),Pt),n=x(()=>Fe(Ne(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:a,cardClass:n}}});function Ot(e,t,a,n,s,l){return w(),X(Ce(e.$attrs.onSubmit?"form":e.as),ie({class:e.cardClass},e.attrs),{default:S(()=>[e.$slots.header?(w(),$("div",{key:0,class:I([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[J(e.$slots,"header")],2)):ne("",!0),v("div",{class:I([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[J(e.$slots,"default")],2),e.$slots.footer?(w(),$("div",{key:1,class:I([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[J(e.$slots,"footer")],2)):ne("",!0)]),_:3},16,["class"])}const At=re(Et,[["render",Ot]]),jt={class:"flex justify-around items-center mt-20 xs:mt-32 xl:mt-52"},Ft={"data-aos":"fade-up",class:"flex-1 max-w-[500px] lg:max-w-[600px]"},Nt={class:"poppins-semi-bold flex items-center gap-2 text-[22px] xs:text-3xl leading-normal"},Ct=["src"],Mt={class:"pt-6 xl:pt-4 px-3 text-base xs:text-lg xl:text-xl xl:text-gray-600 xl:dark:text-gray-300"},Lt=["data-aos","src"],Rt=P({__name:"item",props:{title:{type:String,default:""},desc:{type:String,default:""},src:{type:String,default:""},icon:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(e){return(t,a)=>{const n=ye;return w(),$("div",jt,[v("div",Ft,[v("div",Nt,[e.icon?(w(),X(n,{key:0,name:e.icon},null,8,["name"])):ne("",!0),z(" "+L(e.title),1)]),v("img",{draggable:"false",src:e.src,class:"pt-6 block xl:hidden drop-shadow-md"},null,8,Ct),v("div",Mt,L(e.desc),1)]),v("img",{"data-aos":e.reverse?"fade-right":"fade-left","data-aos-delay":"200",draggable:"false",src:e.src,class:I(["hidden xl:block max-w-[500px] drop-shadow-md",{"order-first":e.reverse}])},null,10,Lt)])}}}),Ht=v("h2",{"data-aos":"fade-up"},"Powerful, Beautiful, and Fast!",-1),Dt=v("p",{"data-aos":"fade-up",class:"desc"},"With out-of-the-box Plugins and Extremely Fast rendering. ",-1),Ut={class:"xl:columns-3 gap-10 mt-16 xs:mt-24 mb-28 xs:mb-44"},Bt={class:"flex gap-4 text-2xl sm:text-3xl xl:text-3xl poppins-semi-bold leading-none mb-4"},zt={class:"flex-1"},Wt={class:"text-sm xs:text-base xl:text-lg text-gray-600 dark:text-gray-300"},Vt=P({__name:"index",setup(e){const t=[{icon:"📦",title:" Rich built-in Plugins",desc:"Out-of-the-box Markdown features with built-in support for Emojis, Footnotes, Annotations, Math Formulas, Flowcharts, Gantt Charts, and more."},{icon:"🌏",title:"Work Anywhere, Anytime",desc:"With the powerful built-in rendering engine, efficient and seamless previewing is ensured whether connected to the Internet or working offline."},{icon:"🌗",title:"Day & Night Compatibility",desc:"Switch between light and dark modes to suit your environment. Enjoy a comfortable reading experience, whether you have a bright display or a dim view."}],a=[{title:"Local & Online Markdown",desc:"Access and preview Markdown files from anywhere! Whether it’s a local file saved on your computer or an online document linked via URL, Markdown Reader seamlessly renders them all. Simplify your workflow with dual-source support.",src:"/images/local-and-online.svg",icon:"i-mdi-file"},{title:"Real-time rendering",desc:"See changes as you type! Markdown Reader provides instant feedback by rendering your Markdown in real-time. No need to switch between the editor and preview—just focus on your content creation.",src:"/images/reload.svg",icon:"i-mdi-lightning-bolt"},{title:"Seamless TOC Navigation",desc:"Easily navigate long documents with the auto generated table of contents. Sidebar TOC supports multi-level headings, helping you jump to any section instantly, saving time and improving productivity.",src:"/images/sidebar.svg",icon:"i-solar-hamburger-menu-bold"},{title:"Syntax Highlighting",desc:"Write and showcase code beautifully!  Markdown Reader highlights code in multiple programming languages, ensuring your code snippets are easy to read and look professional, whether for blogs or documentation.",src:"/images/highlight.svg",icon:"i-mdi-lightbulb-on"},{title:"Charts & Formula Support",desc:"Easily create flowcharts, diagrams, and present mathematical formulas using built-in tools like Mermaid and LaTeX. Ideal for education and technical documentation.",src:"/images/flow.svg",icon:"i-fluent-flow-32-filled"}];return(n,s)=>{const l=At;return w(),$(F,null,[Ht,Dt,v("div",Ut,[(w(),$(F,null,B(t,o=>k(l,{"data-aos":"fade-up",class:"break-inside-avoid xl:p-3 xl:m-0 max-w-[980px] m-auto mb-6 p-2 rounded-2xl dark:bg-zinc-900"},{default:S(()=>[v("div",Bt,[z(L(o.icon),1),v("span",zt,L(o.title),1)]),v("div",Wt,L(o.desc),1)]),_:2},1024)),64))]),(w(),$(F,null,B(a,(o,d)=>k(Rt,ie(o,{reverse:!!(d%2)}),null,16,["reverse"])),64))],64)}}}),Gt=""+globalThis.__publicAssetsURL("images/Chrome.png"),qt=""+globalThis.__publicAssetsURL("images/Edge.png"),Kt=""+globalThis.__publicAssetsURL("images/Firefox.png"),Xt=""+globalThis.__publicAssetsURL("images/banner/light-1.png"),C=e=>(He("data-v-ad46fcfd"),e=e(),De(),e),Jt={class:"px-8 xs:px-[50px]"},Qt=C(()=>v("h1",{"data-aos":"fade-in-up","data-aos-offset":"0",class:"text-[40px] xs:text-5xl xl:text-6xl !leading-[1.1] md:w-[700px] w-auto"},[z(" Effortless "),v("span",{class:"logo-text"},"Markdown"),z(" Reading for Everyone! ")],-1)),Yt=C(()=>v("p",{"data-aos":"fade-in-up","data-aos-offset":"0","data-aos-delay":"250",class:"text-base xs:text-lg xl:text-xl mt-6"}," Turn Markdown into beautifully rendered pages with this powerful browser extension.",-1)),Zt={class:"mt-6 xs:mt-10 flex items-center"},ea=C(()=>v("img",{class:"inline-block h-[35px] sm:h-[45px] mb-2.5",src:Gt,alt:"chrome-web-store"},null,-1)),ta=C(()=>v("div",{class:"leading-none text-sm sm:text-[15px]"},"Chrome",-1)),aa=C(()=>v("img",{class:"inline-block h-[35px] sm:h-[45px] mb-2.5",src:qt,alt:"edge-addons"},null,-1)),na=C(()=>v("div",{class:"leading-none text-sm sm:text-[15px]"},"Edge",-1)),sa=C(()=>v("img",{class:"inline-block h-[35px] sm:h-[45px] mb-2.5",src:Kt,alt:"firefox-addons"},null,-1)),la=C(()=>v("div",{class:"leading-none text-sm sm:text-[15px]"},"Firefox",-1)),oa={"data-aos":"fade-in-up","data-aos-offset":"0",class:"hidden sm:block mt-24"},ra={class:"opacity-0 invisible"},ia=C(()=>v("img",{class:"block",draggable:"false",src:Xt},null,-1)),ua=[ia],da={class:"relative"},ca=["src"],pa={class:"relative"},fa=["src"],ma=P({__name:"index",setup(e){const t=Me(),a=x(()=>{if(!t.unknown)return t.value==="dark"}),n=_(0),s=[{label:"Basic"},{label:"Common"},{label:"KaTeX"},{label:"Mermaid"},{label:"Gallery"}];return(l,o)=>{const d=ye,p=Re,m=It,f=Vt,i=Ue;return w(),$(F,null,[v("div",Jt,[Qt,Yt,v("div",Zt,[k(p,{"data-aos":"fade-in-down","data-aos-offset":"0",to:"/install",class:"install-btn poppins-semi-bold"},{default:S(()=>[z(" Install "),k(d,{class:"ml-1.5 animation-bounce-right",name:"i-heroicons-arrow-right-20-solid"})]),_:1}),k(p,{"data-aos":"fade-left","data-aos-offset":"0","data-aos-delay":"400",to:"https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg",class:"hidden xs:inline-block text-center mr-5 sm:mr-8 -mb-2",target:"_blank_Chrome"},{default:S(()=>[ea,ta]),_:1}),k(p,{"data-aos":"fade-left","data-aos-offset":"0","data-aos-delay":"450",to:"https://microsoftedge.microsoft.com/addons/detail/markdown-reader/djnplooklihmkcioemdjfcednfkpiodc",class:"hidden xs:inline-block text-center mr-6 sm:mr-8 -mb-2",target:"_blank_Edge"},{default:S(()=>[aa,na]),_:1}),k(p,{"data-aos":"fade-left","data-aos-offset":"0","data-aos-delay":"500",to:"https://addons.mozilla.org/firefox/addon/markdown-reader-ext/",class:"hidden xs:inline-block text-center -mb-2",target:"_blank_Firefox"},{default:S(()=>[sa,la]),_:1})])]),v("div",oa,[k(m,{modelValue:N(n),"onUpdate:modelValue":o[0]||(o[0]=c=>Le(n)?n.value=c:null),items:s,class:"mb-8 mx-auto px-5 max-w-[38rem]",ui:{strategy:"merge",list:{background:"bg-[#ededed] dark:bg-[#2d2d36]",tab:{active:"dark:bg-zinc-900",size:"text-xs md:text-sm",font:"font-[PoppinsSemiBold]"}}}},null,8,["modelValue"]),G(v("div",ra,ua,512),[[q,N(a)===void 0]]),G(v("div",da,[(w(),$(F,null,B(s,(c,b)=>k(ce,{name:"preview"},{default:S(()=>[G((w(),$("img",{class:I(["block drop-shadow-lg",{"absolute top-0 left-0":b!==N(n)}]),draggable:"false",src:`/images/banner/dark-${b+1}.png`,key:c.label},null,10,ca)),[[q,b===N(n)]])]),_:2},1024)),64))],512),[[q,N(a)===!0]]),G(v("div",pa,[(w(),$(F,null,B(s,(c,b)=>k(ce,{name:"preview"},{default:S(()=>[G((w(),$("img",{class:I(["block drop-shadow-lg",{"absolute top-0 left-0":b!==N(n)}]),draggable:"false",src:`/images/banner/light-${b+1}.png`,key:c.label},null,10,fa)),[[q,b===N(n)]])]),_:2},1024)),64))],512),[[q,N(a)===!1]])]),k(f),k(i)],64)}}});const ga=re(ma,[["__scopeId","data-v-ad46fcfd"]]);export{ga as default};
