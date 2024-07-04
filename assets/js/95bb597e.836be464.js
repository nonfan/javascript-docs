"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[6853],{45147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var r=t(85893),s=t(11151),l=t(85162),a=t(74866),c=t(25175);const i={},o="Function",u={id:"api/basic-objects/function",title:"Function",description:"Function.prototype.apply",source:"@site/docs/api/basic-objects/function.mdx",sourceDirName:"api/basic-objects",slug:"/api/basic-objects/function",permalink:"/javascript-docs/api/basic-objects/function",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/api/basic-objects/function.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Object",permalink:"/javascript-docs/api/basic-objects/object"},next:{title:"Boolean",permalink:"/javascript-docs/api/basic-objects/boolean"}},d={},h=[{value:"Function.prototype.apply",id:"functionprototypeapply",level:2},{value:"Function.prototype.bind",id:"functionprototypebind",level:2},{value:"Function.prototype.call",id:"functionprototypecall",level:2},{value:"Function.prototype.toString",id:"functionprototypetostring",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}];function p(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"function",children:"Function"}),"\n",(0,r.jsx)(n.h2,{id:"functionprototypeapply",children:"Function.prototype.apply"}),"\n",(0,r.jsxs)(n.p,{children:["Function \u5b9e\u4f8b\u7684 ",(0,r.jsx)(n.code,{children:"apply()"})," \u65b9\u6cd5\u4f1a\u4ee5\u7ed9\u5b9a\u7684 ",(0,r.jsx)(n.code,{children:"this"})," \u503c\u548c\u4f5c\u4e3a\u6570\u7ec4\uff08\u6216\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff09\u63d0\u4f9b\u7684 ",(0,r.jsx)(n.code,{children:"arguments"})," \u8c03\u7528\u8be5\u51fd\u6570\u3002"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(l.Z,{value:"\u8bed\u6cd5",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"thisArg"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528 func \u65f6\u63d0\u4f9b\u7684 ",(0,r.jsx)(n.code,{children:"this"})," \u503c\u3002\u5982\u679c\u51fd\u6570\u4e0d\u5904\u4e8e\u4e25\u683c\u6a21\u5f0f\uff0c\u5219 ",(0,r.jsx)(n.code,{children:"null"})," \u548c ",(0,r.jsx)(n.code,{children:"undefined"})," \u4f1a\u88ab\u66ff\u6362\u4e3a\u5168\u5c40\u5bf9\u8c61\uff0c\u539f\u59cb\u503c\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5bf9\u8c61\u3002"]}),"\n"]}),(0,r.jsx)("p",{className:"optional",children:(0,r.jsx)(n.code,{children:"argsArray"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u7528\u4e8e\u6307\u5b9a\u8c03\u7528 func \u65f6\u7684\u53c2\u6570\uff0c\u6216\u8005\u5982\u679c\u4e0d\u9700\u8981\u5411\u51fd\u6570\u63d0\u4f9b\u53c2\u6570\uff0c\u5219\u4e3a ",(0,r.jsx)(n.code,{children:"null"})," \u6216 ",(0,r.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"func.apply(thisArg);\nfunc.apply(thisArg, argsArray);\n"})})]}),(0,r.jsx)(l.Z,{value:"\u793a\u4f8b",children:(0,r.jsx)(c.Z,{filePath:"/api/function/apply.txt"})})]}),"\n",(0,r.jsx)(n.h2,{id:"functionprototypebind",children:"Function.prototype.bind"}),"\n",(0,r.jsxs)(n.p,{children:["Function \u5b9e\u4f8b\u7684 ",(0,r.jsx)(n.code,{children:"bind()"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u51fd\u6570\uff0c\u5f53\u8c03\u7528\u8be5\u65b0\u51fd\u6570\u65f6\uff0c\u5b83\u4f1a\u8c03\u7528\u539f\u59cb\u51fd\u6570\u5e76\u5c06\u5176 this \u5173\u952e\u5b57\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u7684\u503c\uff0c\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u4f20\u5165\u4e00\u7cfb\u5217\u6307\u5b9a\u7684\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u63d2\u5165\u5230\u8c03\u7528\u65b0\u51fd\u6570\u65f6\u4f20\u5165\u7684\u53c2\u6570\u7684\u524d\u9762\u3002"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(l.Z,{value:"\u8bed\u6cd5",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"thisArg"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528 func \u65f6\u63d0\u4f9b\u7684 ",(0,r.jsx)(n.code,{children:"this"})," \u503c\u3002\u5982\u679c\u51fd\u6570\u4e0d\u5904\u4e8e\u4e25\u683c\u6a21\u5f0f\uff0c\u5219 ",(0,r.jsx)(n.code,{children:"null"})," \u548c ",(0,r.jsx)(n.code,{children:"undefined"})," \u4f1a\u88ab\u66ff\u6362\u4e3a\u5168\u5c40\u5bf9\u8c61\uff0c\u539f\u59cb\u503c\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5bf9\u8c61\u3002\u5982\u679c\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"new"})," \u8fd0\u7b97\u7b26\u6784\u9020\u7ed1\u5b9a\u51fd\u6570\uff0c\u5219\u5ffd\u7565\u8be5\u503c\u3002"]}),"\n"]}),(0,r.jsx)("p",{className:"optional",children:(0,r.jsx)(n.code,{children:"arg1, \u2026, argN"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u8c03\u7528 func \u65f6\uff0c\u63d2\u5165\u5230\u4f20\u5165\u7ed1\u5b9a\u51fd\u6570\u7684\u53c2\u6570\u524d\u7684\u53c2\u6570\u3002"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"func.bind(thisArg);\nfunc.bind(thisArg, arg1);\nfunc.bind(thisArg, arg1, arg2);\nfunc.bind(thisArg, arg1, arg2, /* \u2026, */ argN);\n"})})]}),(0,r.jsxs)(l.Z,{value:"\u793a\u4f8b",children:[(0,r.jsx)(c.Z,{filePath:"/api/function/bind.txt"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bind()"})," \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7ed1\u5b9a\u51fd\u6570\u3002\u8c03\u7528\u7ed1\u5b9a\u51fd\u6570\u901a\u5e38\u4f1a\u6267\u884c\u5176\u6240\u5305\u88c5\u7684\u51fd\u6570\uff0c\u4e5f\u79f0\u4e3a\u76ee\u6807\u51fd\u6570\u3002\u7ed1\u5b9a\u51fd\u6570\u5c06\u7ed1\u5b9a\u65f6\u4f20\u5165\u7684\u53c2\u6570\uff08\u5305\u62ec ",(0,r.jsx)(n.code,{children:"this"})," \u7684\u503c\u548c\u524d\u51e0\u4e2a\u53c2\u6570\uff09\u63d0\u524d\u5b58\u50a8\u4e3a\u5176\u5185\u90e8\u72b6\u6001\u3002\u800c\u4e0d\u662f\u5728\u5b9e\u9645\u8c03\u7528\u65f6\u4f20\u5165\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5c06\u4e0b\u9762\u89c6\u4e3a\u7b49\u6548\uff1a"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const boundFn = fn.bind(thisArg, arg1, arg2);\nconst boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs);\n"})}),(0,r.jsx)(n.p,{children:"\u6784\u5efa\u7684\u7ed1\u5b9a\u51fd\u6570\u7684\u8c03\u7528\u6548\u679c\u89c6\u4e3a\u7b49\u6548\uff08\u4f46\u5c31\u6784\u5efa boundFn \u7684\u8fc7\u7a0b\u800c\u8a00\uff0c\u4e0d\u662f\u4e8c\u8005\u7b49\u6548\u7684\uff09\u3002"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"functionprototypecall",children:"Function.prototype.call"}),"\n",(0,r.jsxs)(n.p,{children:["Function \u5b9e\u4f8b\u7684 ",(0,r.jsx)(n.code,{children:"call()"})," \u65b9\u6cd5\u4f1a\u4ee5\u7ed9\u5b9a\u7684 ",(0,r.jsx)(n.code,{children:"this"})," \u503c\u548c\u9010\u4e2a\u63d0\u4f9b\u7684\u53c2\u6570\u8c03\u7528\u8be5\u51fd\u6570\u3002"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(l.Z,{value:"\u8bed\u6cd5",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"thisArg"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528 func \u65f6\u63d0\u4f9b\u7684 ",(0,r.jsx)(n.code,{children:"this"})," \u503c\u3002\u5982\u679c\u51fd\u6570\u4e0d\u5904\u4e8e\u4e25\u683c\u6a21\u5f0f\uff0c\u5219 ",(0,r.jsx)(n.code,{children:"null"})," \u548c ",(0,r.jsx)(n.code,{children:"undefined"})," \u4f1a\u88ab\u66ff\u6362\u4e3a\u5168\u5c40\u5bf9\u8c61\uff0c\u539f\u59cb\u503c\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5bf9\u8c61\u3002"]}),"\n"]}),(0,r.jsx)("p",{className:"optional",children:(0,r.jsx)(n.code,{children:"arg1, \u2026, argN"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u51fd\u6570\u7684\u53c2\u6570\u3002"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"func.call(thisArg);\nfunc.call(thisArg, arg1);\nfunc.call(thisArg, arg1, arg2);\nfunc.call(thisArg, arg1, arg2, /* \u2026, */ argN);\n"})})]}),(0,r.jsx)(l.Z,{value:"\u793a\u4f8b",children:(0,r.jsx)(c.Z,{filePath:"/api/function/call.txt"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u51fd\u6570\u51e0\u4e4e\u4e0e ",(0,r.jsx)(n.code,{children:"apply()"})," \u76f8\u540c\uff0c\u53ea\u662f\u51fd\u6570\u7684\u53c2\u6570\u4ee5\u5217\u8868\u7684\u5f62\u5f0f\u9010\u4e2a\u4f20\u9012\u7ed9 ",(0,r.jsx)(n.code,{children:"call()"}),"\uff0c\u800c\u5728 ",(0,r.jsx)(n.code,{children:"apply()"})," \u4e2d\u5b83\u4eec\u88ab\u7ec4\u5408\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u901a\u5e38\u662f\u4e00\u4e2a\u6570\u7ec4\u2014\u2014\u4f8b\u5982\uff1a",(0,r.jsx)(n.code,{children:'func.call(this, "eat", "bananas")'})," \u4e0e ",(0,r.jsx)(n.code,{children:'func.apply(this, ["eat", "bananas"])'}),"\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"functionprototypetostring",children:"Function.prototype.toString"}),"\n",(0,r.jsxs)(n.p,{children:["Function \u5b9e\u4f8b\u7684 ",(0,r.jsx)(n.code,{children:"toString()"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u51fd\u6570\u6e90\u7801\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:'function sum(a, b) {\n  return a + b;\n}\n\nconsole.log(sum.toString());\n// Expected output: "function sum(a, b) {\n//                     return a + b;\n//                   }"\n\nconsole.log(Math.abs.toString());\n// Expected output: "function abs() { [native code] }"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"length"})}),"\n",(0,r.jsx)(n.p,{children:"\u8868\u793a\u51fd\u6570\u7684\u5f62\u53c2\u4e2a\u6570\uff08\u4e0d\u5305\u62ec\u5269\u4f59\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function example(a, b) {}\nconsole.log(example.length); // 2\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u51fd\u6570\u7684 ",(0,r.jsx)(n.code,{children:"length"})," \u5c5e\u6027\u53ea\u8ba1\u7b97\u4ece\u7b2c\u4e00\u4e2a\u53c2\u6570\u5230\u7b2c\u4e00\u4e2a\u9ed8\u8ba4\u53c2\u6570\u6216\u5269\u4f59\u53c2\u6570\u4e4b\u524d\u7684\u53c2\u6570\u4e2a\u6570\u3002\u5bf9\u4e8e\u90a3\u4e9b\u5728\u7b2c\u4e00\u4e2a\u9ed8\u8ba4\u53c2\u6570\u6216\u5269\u4f59\u53c2\u6570\u4e4b\u540e\u5b9a\u4e49\u7684\u53c2\u6570\uff0c\u5b83\u4eec\u4e0d\u4f1a\u5305\u542b\u5728 ",(0,r.jsx)(n.code,{children:"length"})," \u5c5e\u6027\u7684\u8ba1\u6570\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function example(a, b = 1, c) {}\nconsole.log(example.length); // \u8f93\u51fa: 1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"name"})}),"\n",(0,r.jsx)(n.p,{children:"\u8868\u793a\u51fd\u6570\u7684\u540d\u79f0\u3002\u5982\u679c\u662f\u533f\u540d\u51fd\u6570\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function example() {}\nconsole.log(example.name); // "example"\n\nconst anon = function () {};\nconsole.log(anon.name); // ""\n'})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var l=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),s=t(36905),l=t(12466),a=t(16550),c=t(20469),i=t(91980),o=t(67392),u=t(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,d]=j({queryString:t,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),b=(()=>{const e=o??x;return p({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function m(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=c[t].value;s!==r&&(o(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(m,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function k(e){const n=(0,f.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},25175:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(9286),s=t(44996),l=t(67294),a=t(85893);const c=e=>{let{filePath:n,language:t="javascript",title:c}=e;const[i,o]=(0,l.useState)(""),u=(0,s.ZP)(n);return(0,l.useEffect)((()=>{fetch(u).then((e=>{if(!e.ok)throw new Error(`\u83b7\u53d6\u6587\u4ef6\u5931\u8d25: ${e.status} ${e.statusText}`);const t=e.headers.get("content-type");if(!t||!t.includes("text/plain"))throw new Error(`\u5f15\u5165\u9759\u6001\u6587\u4ef6\u8def\u5f84\u51fa\u9519: ${n}`);return e.text()})).then((e=>{o(e)}))}),[n]),(0,a.jsx)(r.Z,{language:t,title:c,children:i})}}}]);