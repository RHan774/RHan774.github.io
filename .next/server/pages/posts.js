(()=>{var e={};e.id=679,e.ids=[679,888,660],e.modules={5466:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>m,getServerSideProps:()=>h,getStaticPaths:()=>p,getStaticProps:()=>u,reportWebVitals:()=>j,routeModule:()=>S,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>N,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>g});var a=r(7093),n=r(5244),i=r(1323),c=r(2899),l=r.n(c),d=r(4529),o=r(1074),x=e([o]);o=(x.then?(await x)():x)[0];let m=(0,i.l)(o,"default"),u=(0,i.l)(o,"getStaticProps"),p=(0,i.l)(o,"getStaticPaths"),h=(0,i.l)(o,"getServerSideProps"),f=(0,i.l)(o,"config"),j=(0,i.l)(o,"reportWebVitals"),g=(0,i.l)(o,"unstable_getStaticProps"),y=(0,i.l)(o,"unstable_getStaticPaths"),v=(0,i.l)(o,"unstable_getStaticParams"),b=(0,i.l)(o,"unstable_getServerProps"),N=(0,i.l)(o,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/posts",pathname:"/posts",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:o});s()}catch(e){s(e)}})},5711:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(997),a=r(1664),n=r.n(a),i=r(8670),c=r(5564);function l({post:e}){return(0,s.jsxs)("div",{className:"post-card",children:[s.jsx(n(),{href:`/posts/${e.id}`,className:"block",children:s.jsx("h3",{className:"text-xl font-bold mb-2 hover:text-primary transition-colors",children:e.title})}),(0,s.jsxs)("div",{className:"flex items-center text-sm text-text-secondary mb-3",children:[s.jsx("span",{className:"mr-3",children:(0,i.Z)(new Date(e.date),"yyyy年MM月dd日",{locale:c.zhCN})}),e.category&&s.jsx("span",{className:"bg-gray-100 px-2 py-1 rounded-md",children:e.category})]}),e.excerpt&&s.jsx("p",{className:"text-text-secondary line-clamp-3",children:e.excerpt}),s.jsx("div",{className:"mt-4",children:s.jsx(n(),{href:`/posts/${e.id}`,className:"text-primary hover:underline",children:"阅读全文 →"})})]})}},1473:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{AU:()=>h,CP:()=>f,Le:()=>p,ld:()=>u});var a=r(2048),n=r.n(a),i=r(5315),c=r.n(i),l=r(8076),d=r.n(l),o=r(1774),x=r(7740),m=e([o,x]);[o,x]=m.then?(await m)():m;let j=c().join(process.cwd(),"_posts");function u(){return n().readdirSync(j).map(e=>{let t=e.replace(/\.md$/,""),r=c().join(j,e),s=n().readFileSync(r,"utf8"),a=d()(s);return{id:t,...a.data}}).sort((e,t)=>e.date<t.date?1:-1)}function p(){return n().readdirSync(j).map(e=>({params:{id:e.replace(/\.md$/,"")}}))}async function h(e){let t=c().join(j,`${e}.md`),r=n().readFileSync(t,"utf8"),s=d()(r),a=(await (0,o.remark)().use(x.default).process(s.content)).toString();return{id:e,contentHtml:a,...s.data}}function f(){let e=u(),t=new Set;return e.forEach(e=>{e.category&&t.add(e.category)}),Array.from(t)}s()}catch(e){s(e)}})},4529:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(997);r(6764);var a=r(968),n=r.n(a),i=r(1664),c=r.n(i);function l(){let e=new Date().getFullYear();return s.jsx("footer",{className:"bg-white border-t py-6",children:s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[s.jsx("div",{className:"mb-4 md:mb-0",children:(0,s.jsxs)("p",{className:"text-text-secondary",children:["RHan \xa9 ",e]})}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[s.jsx("a",{href:"https://github.com/Ryan774",target:"_blank",rel:"noopener noreferrer",className:"text-text-secondary hover:text-primary",children:"GitHub"}),s.jsx("a",{href:"/rss.xml",target:"_blank",className:"text-text-secondary hover:text-primary",children:"RSS"})]})]})})})}function d(){return s.jsx("nav",{className:"bg-white shadow-sm",children:s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex justify-between h-16",children:[s.jsx("div",{className:"flex items-center",children:s.jsx(c(),{href:"/",className:"text-2xl font-bold text-primary",children:"RHan"})}),s.jsx("div",{className:"flex items-center",children:(0,s.jsxs)("div",{className:"hidden md:ml-6 md:flex md:space-x-4",children:[s.jsx(c(),{href:"/",className:"nav-link",children:"首页"}),s.jsx(c(),{href:"/posts",className:"nav-link",children:"文章"}),s.jsx(c(),{href:"/about",className:"nav-link",children:"关于"})]})})]})})})}function o({children:e}){return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,s.jsxs)(n(),{children:[s.jsx("title",{children:"RHan - 个人博客"}),s.jsx("meta",{name:"description",content:"RHan的个人博客网站"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),s.jsx(d,{}),s.jsx("main",{className:"container mx-auto px-4 flex-grow py-8",children:e}),s.jsx(l,{})]})}function x({Component:e,pageProps:t}){return s.jsx(o,{children:s.jsx(e,{...t})})}},1074:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d,getStaticProps:()=>o});var a=r(997),n=r(6689),i=r(5711),c=r(1473),l=e([c]);function d({allPostsData:e,categories:t}){let[r,s]=(0,n.useState)("全部"),c="全部"===r?e:e.filter(e=>e.category===r);return(0,a.jsxs)("div",{className:"max-w-4xl mx-auto",children:[a.jsx("h1",{className:"text-3xl font-bold mb-8",children:"文章列表"}),a.jsx("div",{className:"mb-8",children:(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[a.jsx("button",{className:`px-4 py-2 rounded-md ${"全部"===r?"bg-primary text-white":"bg-gray-100 hover:bg-gray-200"}`,onClick:()=>s("全部"),children:"全部"}),t.map(e=>a.jsx("button",{className:`px-4 py-2 rounded-md ${r===e?"bg-primary text-white":"bg-gray-100 hover:bg-gray-200"}`,onClick:()=>s(e),children:e},e))]})}),a.jsx("div",{className:"grid grid-cols-1 gap-8",children:c.map(e=>a.jsx(i.Z,{post:e},e.id))}),0===c.length&&a.jsx("div",{className:"text-center py-10",children:a.jsx("p",{className:"text-xl text-text-secondary",children:"该分类下暂无文章"})})]})}async function o(){let e=(0,c.ld)(),t=(0,c.CP)();return{props:{allPostsData:e,categories:t}}}c=(l.then?(await l)():l)[0],s()}catch(e){s(e)}})},6764:()=>{},5564:e=>{"use strict";e.exports=require("date-fns/locale")},8076:e=>{"use strict";e.exports=require("gray-matter")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2048:e=>{"use strict";e.exports=require("fs")},5315:e=>{"use strict";e.exports=require("path")},1774:e=>{"use strict";e.exports=import("remark")},7740:e=>{"use strict";e.exports=import("remark-html")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[117,899,664,272],()=>r(5466));module.exports=s})();