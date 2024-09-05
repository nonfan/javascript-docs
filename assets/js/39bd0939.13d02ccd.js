"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[7304],{54158:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=t(85893),n=t(11151);t(74866),t(85162),t(25175);const s={},l="\u9879\u76ee\u5b9e\u6218",i={id:"javascript-libraries-and-frameworks/frameworks/react/project-in-action",title:"\u9879\u76ee\u5b9e\u6218",description:"\u9879\u76ee\u89c4\u5212\u4e0e\u8bbe\u8ba1",source:"@site/docs/javascript-libraries-and-frameworks/frameworks/react/project-in-action.mdx",sourceDirName:"javascript-libraries-and-frameworks/frameworks/react",slug:"/javascript-libraries-and-frameworks/frameworks/react/project-in-action",permalink:"/javascript-docs/javascript-libraries-and-frameworks/frameworks/react/project-in-action",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/javascript-libraries-and-frameworks/frameworks/react/project-in-action.mdx",tags:[],version:"current",frontMatter:{},sidebar:"javascript-libraries-and-frameworks",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/javascript-docs/javascript-libraries-and-frameworks/frameworks/react/performance-optimization"},next:{title:"Next.js",permalink:"/javascript-docs/javascript-libraries-and-frameworks/frameworks/nextjs"}},o={},u=[{value:"\u9879\u76ee\u89c4\u5212\u4e0e\u8bbe\u8ba1",id:"\u9879\u76ee\u89c4\u5212\u4e0e\u8bbe\u8ba1",level:2},{value:"\u9879\u76ee\u5f00\u53d1",id:"\u9879\u76ee\u5f00\u53d1",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2}];function c(e){const r={h1:"h1",h2:"h2",header:"header",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"\u9879\u76ee\u5b9e\u6218",children:"\u9879\u76ee\u5b9e\u6218"})}),"\n",(0,a.jsx)(r.h2,{id:"\u9879\u76ee\u89c4\u5212\u4e0e\u8bbe\u8ba1",children:"\u9879\u76ee\u89c4\u5212\u4e0e\u8bbe\u8ba1"}),"\n",(0,a.jsx)(r.h2,{id:"\u9879\u76ee\u5f00\u53d1",children:"\u9879\u76ee\u5f00\u53d1"}),"\n",(0,a.jsx)(r.h2,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,a.jsx)(r.h2,{id:"\u90e8\u7f72",children:"\u90e8\u7f72"})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>l});t(67294);var a=t(36905);const n={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,l),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>x});var a=t(67294),n=t(36905),s=t(12466),l=t(16550),i=t(20469),o=t(91980),u=t(67392),c=t(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,u.lx)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=f(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[u,d]=h({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),v=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function w(e){let{className:r,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),n=i[t].value;n!==a&&(u(r),l(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=m(e);return(0,j.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(w,{...r,...e}),(0,j.jsx)(k,{...r,...e})]})}function x(e){const r=(0,b.Z)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(r))}},25175:(e,r,t)=>{t.d(r,{Z:()=>i});var a=t(9286),n=t(44996),s=t(67294),l=t(85893);const i=e=>{let{filePath:r,language:t="javascript",title:i}=e;const[o,u]=(0,s.useState)(""),c=(0,n.ZP)(r);return(0,s.useEffect)((()=>{fetch(c).then((e=>{if(!e.ok)throw new Error(`\u83b7\u53d6\u6587\u4ef6\u5931\u8d25: ${e.status} ${e.statusText}`);const t=e.headers.get("content-type");if(!t||!t.includes("text/plain"))throw new Error(`\u5f15\u5165\u9759\u6001\u6587\u4ef6\u8def\u5f84\u51fa\u9519: ${r}`);return e.text()})).then((e=>{u(e)}))}),[r]),(0,l.jsx)(a.Z,{language:t,title:i,children:o})}}}]);