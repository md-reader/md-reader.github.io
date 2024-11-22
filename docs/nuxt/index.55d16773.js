import{_ as C,m as E,g as w,h as _,i as F,j as A,k as M,l as L,n as N,o,q as R,w as m,c as r,r as u,s as b,v as x,a as t,x as U,y as B,d as p,t as h,z as j,F as g,A as v,b as i,B as T,C as k,D as $,E as S,e as D,p as O,f as W}from"./entry.62cf99c7.js";import{f as z,_ as P}from"./firefox.7e979ba7.js";const V={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},q=E(w.ui.strategy,w.ui.card,V),G=_({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:n}=F("card",A(e,"ui"),q),l=M(()=>L(N(s.value.base,s.value.rounded,s.value.divide,s.value.ring,s.value.shadow,s.value.background),e.class));return{ui:s,attrs:n,cardClass:l}}});function H(e,s,n,l,y,c){return o(),R(B(e.$attrs.onSubmit?"form":e.as),U({class:e.cardClass},e.attrs),{default:m(()=>[e.$slots.header?(o(),r("div",{key:0,class:u([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[b(e.$slots,"header")],2)):x("",!0),t("div",{class:u([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[b(e.$slots,"default")],2),e.$slots.footer?(o(),r("div",{key:1,class:u([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[b(e.$slots,"footer")],2)):x("",!0)]),_:3},16,["class"])}const J=C(G,[["render",H]]),X={class:"flex justify-around items-center mt-32 xl:mt-52"},K={class:"flex-1 max-w-[500px] lg:max-w-[600px]"},Q={class:"poppins-semi-bold flex items-center gap-2 text-3xl xl:text-4xl leading-normal"},Y=["src"],Z={class:"pt-6 xl:pt-4 px-3 text-lg xl:text-xl"},ee=["src"],te=_({__name:"item",props:{title:{type:String,default:""},desc:{type:String,default:""},src:{type:String,default:""},icon:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(e){return(s,n)=>{const l=j;return o(),r("div",X,[t("div",K,[t("div",Q,[e.icon?(o(),R(l,{key:0,name:e.icon},null,8,["name"])):x("",!0),p(" "+h(e.title),1)]),t("img",{draggable:"false",src:e.src,class:"pt-6 block xl:hidden drop-shadow-md"},null,8,Y),t("div",Z,h(e.desc),1)]),t("img",{draggable:"false",src:e.src,class:u(["hidden xl:block max-w-[500px] drop-shadow-md",{"order-first":e.reverse}])},null,10,ee)])}}}),se=t("h2",null,"Powerful, Beautiful, and Fast!",-1),ae=t("p",{class:"desc"},"With out-of-the-box Plugins and Extremely Fast rendering.",-1),oe={class:"xl:columns-3 gap-10 mt-24 mb-44"},ne={class:"text-xl xl:text-[22px] poppins-semi-bold leading-none mb-4 xl:mb-5"},ie={class:"text-base xl:text-lg text-gray-600 dark:text-gray-300"},re=_({__name:"index",setup(e){const s=[{title:"Rich built-in Plugins",desc:"Enhance your Markdown experience with built-in support for Emojis, Footnotes, Annotations, Math Formulas, Flowcharts, Gantt Charts, and more."},{title:"Work Anywhere, Anytime",desc:"With the powerful built-in rendering engine, efficient and seamless previewing is ensured whether connected to the Internet or working offline."},{title:"Day & Night Compatibility",desc:"Switch between light and dark modes to suit your environment. Enjoy a comfortable reading experience, whether you have a bright display or a dim view."}],n=[{title:"Local & Online Markdown",desc:"Access and preview Markdown files from anywhere! Whether it’s a local file saved on your computer or an online document linked via URL, Markdown Reader seamlessly renders them all. Simplify your workflow with dual-source support.",src:"/images/local-and-online.svg",icon:"i-mdi-file"},{title:"Real-time rendering",desc:"See changes as you type! Markdown Reader provides instant feedback by rendering your Markdown in real-time. No need to switch between the editor and preview—just focus on your content creation.",src:"/images/reload.svg",icon:"i-mdi-lightning-bolt"},{title:"Seamless TOC Navigation",desc:"Easily navigate long documents with the auto generated table of contents. Sidebar TOC supports multi-level headings, helping you jump to any section instantly, saving time and improving productivity.",src:"/images/sidebar.svg",icon:"i-solar-hamburger-menu-bold"},{title:"Syntax Highlighting",desc:"Write and showcase code beautifully!  Markdown Reader highlights code in multiple programming languages, ensuring your code snippets are easy to read and look professional, whether for blogs or documentation.",src:"/images/highlight.svg",icon:"i-mdi-lightbulb-on"},{title:"Charts & Formula Support",desc:"Easily create flowcharts, diagrams, and present mathematical formulas using built-in tools like Mermaid and LaTeX. Ideal for education and technical documentation.",src:"/images/flow.svg",icon:"i-fluent-flow-32-filled"}];return(l,y)=>{const c=J;return o(),r(g,null,[se,ae,t("div",oe,[(o(),r(g,null,v(s,a=>i(c,{class:"break-inside-avoid xl:p-3 xl:m-0 max-w-[980px] m-auto mb-6 p-2 rounded-xl dark:bg-zinc-900"},{default:m(()=>[t("div",ne,h(a.title),1),t("div",ie,h(a.desc),1)]),_:2},1024)),64))]),(o(),r(g,null,v(n,(a,f)=>i(te,{title:a.title,desc:a.desc,src:a.src,icon:a.icon,reverse:!!(f%2)},null,8,["title","desc","src","icon","reverse"])),64))],64)}}}),le=""+new URL("chrome-web-store.59ea1d04.svg",import.meta.url).href,de=""+globalThis.__publicAssetsURL("images/banner-day.png"),ce=""+globalThis.__publicAssetsURL("images/banner-night.png"),d=e=>(O("data-v-783ee23b"),e=e(),W(),e),ue={class:"px-[50px]"},ge=d(()=>t("h1",{class:"text-5xl xl:text-6xl !leading-[1.1] md:w-[700px] w-auto"},[p(" Effortless "),t("span",{class:"logo-text"},"Markdown"),p(" Reading for Everyone! ")],-1)),me=d(()=>t("p",{class:"text-lg xl:text-xl mt-6"},"Turn Markdown into beautifully rendered pages with this powerful browser extension.",-1)),pe={class:"mt-10 flex items-center"},he={class:"text-2xl xl:text-3xl mr-7 flex items-center poppins-semi-bold"},_e=d(()=>t("img",{class:"inline-block h-[45px] mb-2.5",src:le,alt:"chrome-web-store"},null,-1)),fe=d(()=>t("div",{class:"leading-none"},"Chrome",-1)),be=d(()=>t("img",{class:"inline-block h-[45px] mb-2.5",src:z,alt:"fx-addon"},null,-1)),xe=d(()=>t("div",{class:"leading-none"},"Firefox",-1)),ye={class:"mt-14"},we={class:"block dark:opacity-95 drop-shadow-lg",draggable:"false",src:de},ve={class:"block dark:opacity-95 drop-shadow-lg",draggable:"false",src:ce},ke=_({__name:"index",setup(e){const s=T(),n=M({get(){return s.value==="dark"},set(){s.preference=s.value==="dark"?"light":"dark"}});return(l,y)=>{const c=j,a=D,f=re,I=P;return o(),r(g,null,[t("div",ue,[ge,me,t("div",pe,[t("span",he,[p(" Install"),i(c,{class:"ml-1.5 animation-bounce-right",name:"i-heroicons-arrow-right-20-solid"})]),i(a,{to:"https://chromewebstore.google.com/detail/medapdbncneneejhbgcjceippjlfkmkg",class:"text-center mr-8",target:"_blank"},{default:m(()=>[_e,fe]),_:1}),i(a,{to:"https://addons.mozilla.org/firefox/addon/markdown-reader-ext/",class:"text-center",target:"_blank"},{default:m(()=>[be,xe]),_:1})])]),t("div",ye,[k(t("img",we,null,512),[[$,!S(n)]]),k(t("img",ve,null,512),[[$,S(n)]])]),i(f),i(I)],64)}}});const Ce=C(ke,[["__scopeId","data-v-783ee23b"]]);export{Ce as default};