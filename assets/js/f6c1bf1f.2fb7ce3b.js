"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[9036],{2661:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(5893),c=s(1151);const r={},o="Beacon API",a={id:"network-requests-and-remote-resources/beacon-api",title:"Beacon API",description:"\u4e3a\u4e86\u628a\u5c3d\u91cf\u591a\u7684\u9875\u9762\u4fe1\u606f\u4f20\u5230\u670d\u52a1\u5668\uff0c\u5f88\u591a\u5206\u6790\u5de5\u5177\u9700\u8981\u5728\u9875\u9762\u751f\u547d\u5468\u671f\u4e2d\u5c3d\u91cf\u665a\u7684\u65f6\u5019\u5411\u670d\u52a1\u5668",source:"@site/docs/network-requests-and-remote-resources/beacon-api.mdx",sourceDirName:"network-requests-and-remote-resources",slug:"/network-requests-and-remote-resources/beacon-api",permalink:"/javascript/network-requests-and-remote-resources/beacon-api",draft:!1,unlisted:!1,editUrl:"https://github.com/agoodbook/javascript/tree/main/docs/network-requests-and-remote-resources/beacon-api.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Fetch API",permalink:"/javascript/network-requests-and-remote-resources/fetch-api"},next:{title:"Web Socket",permalink:"/javascript/network-requests-and-remote-resources/websocket"}},i={},d=[];function l(e){const n={code:"code",h1:"h1",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"beacon-api",children:"Beacon API"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u628a\u5c3d\u91cf\u591a\u7684\u9875\u9762\u4fe1\u606f\u4f20\u5230\u670d\u52a1\u5668\uff0c\u5f88\u591a\u5206\u6790\u5de5\u5177\u9700\u8981\u5728\u9875\u9762\u751f\u547d\u5468\u671f\u4e2d\u5c3d\u91cf\u665a\u7684\u65f6\u5019\u5411\u670d\u52a1\u5668\n\u53d1\u9001\u9065\u6d4b\u6216\u5206\u6790\u6570\u636e\u3002\u56e0\u6b64\uff0c\u7406\u60f3\u7684\u60c5\u51b5\u4e0b\u662f\u901a\u8fc7\u6d4f\u89c8\u5668\u7684 ",(0,t.jsx)(n.code,{children:"unload"})," \u4e8b\u4ef6\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u3002\u8fd9\u4e2a\u4e8b\u4ef6\u8868\u793a\n\u7528\u6237\u8981\u79bb\u5f00\u5f53\u524d\u9875\u9762\uff0c\u4e0d\u4f1a\u518d\u751f\u6210\u522b\u7684\u6709\u7528\u4fe1\u606f\u4e86\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"unload"})," \u4e8b\u4ef6\u89e6\u53d1\u65f6\uff0c\u5206\u6790\u5de5\u5177\u8981\u505c\u6b62\u6536\u96c6\u4fe1\u606f\u5e76\u628a\u6536\u96c6\u5230\u7684\u6570\u636e\u53d1\u7ed9\u670d\u52a1\u5668\u3002\u8fd9\u65f6\u5019\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\n\u56e0\u4e3a ",(0,t.jsx)(n.code,{children:"unload"})," \u4e8b\u4ef6\u5bf9\u6d4f\u89c8\u5668\u610f\u5473\u7740\u6ca1\u6709\u7406\u7531\u518d\u53d1\u9001\u4efb\u4f55\u7ed3\u679c\u672a\u77e5\u7684\u7f51\u7edc\u8bf7\u6c42\uff08\u56e0\u4e3a\u9875\u9762\u90fd\u8981\u88ab\u9500\u6bc1\u4e86\uff09\u3002\n\u4f8b\u5982\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"unload"})," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u521b\u5efa\u7684\u4efb\u4f55\u5f02\u6b65\u8bf7\u6c42\u90fd\u4f1a\u88ab\u6d4f\u89c8\u5668\u53d6\u6d88\u3002\u4e3a\u6b64\uff0c\u5f02\u6b65 XMLHttpRequest\n\u6216 ",(0,t.jsx)(n.code,{children:"fetch()"})," \u4e0d\u9002\u5408\u8fd9\u4e2a\u4efb\u52a1\u3002\u5206\u6790\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\u540c\u6b65 XMLHttpRequest \u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\uff0c\u4f46\u8fd9\u6837\u505a\u4f1a\u5bfc\n\u81f4\u7528\u6237\u4f53\u9a8c\u95ee\u9898\u3002\u6d4f\u89c8\u5668\u4f1a\u56e0\u4e3a\u8981\u7b49\u5f85 ",(0,t.jsx)(n.code,{children:"unload"})," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5b8c\u6210\u800c\u5ef6\u8fdf\u5bfc\u822a\u5230\u4e0b\u4e00\u4e2a\u9875\u9762\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cW3C \u5f15\u5165\u4e86\u8865\u5145\u6027\u7684 Beacon API\u3002\u8fd9\u4e2a API \u7ed9 navigator \u5bf9\u8c61\u589e\u52a0\u4e86\u4e00\u4e2a\n",(0,t.jsx)(n.code,{children:"sendBeacon()"})," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a URL \u548c\u4e00\u4e2a\u6570\u636e\u6709\u6548\u8f7d\u8377\u53c2\u6570\uff0c\u5e76\u4f1a\u53d1\u9001\u4e00\u4e2a POST\n\u8bf7\u6c42\u3002\u53ef\u9009\u7684\u6570\u636e\u6709\u6548\u8f7d\u8377\u53c2\u6570\u6709 ",(0,t.jsx)(n.code,{children:"ArrayBufferView"}),"\u3001",(0,t.jsx)(n.code,{children:"Blob"}),"\u3001",(0,t.jsx)(n.code,{children:"DOMString"}),"\u3001",(0,t.jsx)(n.code,{children:"FormData"})," \u5b9e\u4f8b\u3002\u5982\u679c\u8bf7\n\u6c42\u6210\u529f\u8fdb\u5165\u4e86\u6700\u7ec8\u8981\u53d1\u9001\u7684\u4efb\u52a1\u961f\u5217\uff0c\u5219\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u53d1\u9001 POST \u8bf7\u6c42\n// URL: 'https://example.com/analytics-reporting-url'\n// \u8bf7\u6c42\u8d1f\u8f7d\uff1a'{foo: \"bar\"}'\n\nnavigator.sendBeacon(\n  'https://example.com/analytics-reporting-url',\n  '{foo: \"bar\"}',\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u65b9\u6cd5\u867d\u7136\u770b\u8d77\u6765\u53ea\u4e0d\u8fc7\u662f POST \u8bf7\u6c42\u7684\u4e00\u4e2a\u8bed\u6cd5\u7cd6\uff0c\u4f46\u5b83\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u7279\u6027\u3002"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"sendBeacon()"})," \u5e76\u4e0d\u662f\u53ea\u80fd\u5728\u9875\u9762\u751f\u547d\u5468\u671f\u672b\u5c3e\u4f7f\u7528\uff0c\u800c\u662f\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"sendBeacon()"})," \u540e\uff0c\u6d4f\u89c8\u5668\u4f1a\u628a\u8bf7\u6c42\u6dfb\u52a0\u5230\u4e00\u4e2a\u5185\u90e8\u7684\u8bf7\u6c42\u961f\u5217\u3002\u6d4f\u89c8\u5668\u4f1a\u4e3b\u52a8\u5730\u53d1\u9001\u961f\u5217\u4e2d\u7684\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u6d4f\u89c8\u5668\u4fdd\u8bc1\u5728\u539f\u59cb\u9875\u9762\u5df2\u7ecf\u5173\u95ed\u7684\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u72b6\u6001\u7801\u3001\u8d85\u65f6\u548c\u5176\u4ed6\u7f51\u7edc\u539f\u56e0\u9020\u6210\u7684\u5931\u8d25\u5b8c\u5168\u662f\u4e0d\u900f\u660e\u7684\uff0c\u4e0d\u80fd\u901a\u8fc7\u7f16\u7a0b\u65b9\u5f0f\u5904\u7406\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u4fe1\u6807\uff08beacon\uff09\u8bf7\u6c42\u4f1a\u643a\u5e26\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"sendBeacon()"})," \u65f6\u6240\u6709\u76f8\u5173\u7684 cookie\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const c={},r=t.createContext(c);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);