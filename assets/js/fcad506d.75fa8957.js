"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[2231],{33709:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var c=n(85893),t=n(11151);const i={},a="\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f",o={id:"javascript-api/cross-context-messaging",title:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f",description:"\u8de8\u6587\u6863\u6d88\u606f\uff0c\u6709\u65f6\u5019\u4e5f\u7b80\u79f0\u4e3a XDM(cross-document messaging)\uff0c\u662f\u4e00\u79cd\u5728\u4e0d\u540c\u6267\u884c\u4e0a\u4e0b\u6587(\u5982\u4e0d\u540c\u5de5\u4f5c\u7ebf\u7a0b\u6216\u4e0d\u540c\u6e90\u7684\u9875\u9762)\u95f4\u4f20\u9012\u4fe1\u606f\u7684\u80fd\u529b\u3002\u4f8b\u5982\uff0cwww.example.com \u4e0a\u7684\u9875\u9762\u60f3\u8981\u4e0e\u5305\u542b\u5728\u5185\u5d4c\u7a97\u683c\u4e2d\u7684 p2p.example.com \u4e0a\u9762\u7684\u9875\u9762\u901a\u4fe1\u3002\u5728 XDM \u4e4b\u524d\uff0c\u8981\u4ee5\u5b89\u5168\u65b9\u5f0f\u5b9e\u73b0\u8fd9\u79cd\u901a\u4fe1\u9700\u8981\u5f88\u591a\u5de5\u4f5c\u3002XDM \u4ee5\u5b89\u5168\u6613\u7528\u7684\u65b9\u5f0f\u89c4\u8303\u5316\u4e86\u8fd9\u4e2a\u529f\u80fd\u3002",source:"@site/docs/javascript-api/cross-context-messaging.mdx",sourceDirName:"javascript-api",slug:"/javascript-api/cross-context-messaging",permalink:"/javascript-docs/javascript-api/cross-context-messaging",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/javascript-api/cross-context-messaging.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Atomics \u4e0e SharedArrayBuffer",permalink:"/javascript-docs/javascript-api/atomics-and-shared-array-buffer"},next:{title:"Encoding API",permalink:"/javascript-docs/javascript-api/encoding-api"}},r={},d=[];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f",children:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f"}),"\n",(0,c.jsxs)(s.p,{children:["\u8de8\u6587\u6863\u6d88\u606f\uff0c\u6709\u65f6\u5019\u4e5f\u7b80\u79f0\u4e3a XDM(cross-document messaging)\uff0c\u662f\u4e00\u79cd\u5728\u4e0d\u540c\u6267\u884c\u4e0a\u4e0b\u6587(\u5982\u4e0d\u540c\u5de5\u4f5c\u7ebf\u7a0b\u6216\u4e0d\u540c\u6e90\u7684\u9875\u9762)\u95f4\u4f20\u9012\u4fe1\u606f\u7684\u80fd\u529b\u3002\u4f8b\u5982\uff0c",(0,c.jsx)(s.code,{children:"www.example.com"})," \u4e0a\u7684\u9875\u9762\u60f3\u8981\u4e0e\u5305\u542b\u5728\u5185\u5d4c\u7a97\u683c\u4e2d\u7684 ",(0,c.jsx)(s.code,{children:"p2p.example.com"})," \u4e0a\u9762\u7684\u9875\u9762\u901a\u4fe1\u3002\u5728 XDM \u4e4b\u524d\uff0c\u8981\u4ee5\u5b89\u5168\u65b9\u5f0f\u5b9e\u73b0\u8fd9\u79cd\u901a\u4fe1\u9700\u8981\u5f88\u591a\u5de5\u4f5c\u3002XDM \u4ee5\u5b89\u5168\u6613\u7528\u7684\u65b9\u5f0f\u89c4\u8303\u5316\u4e86\u8fd9\u4e2a\u529f\u80fd\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f\u7528\u4e8e\u7a97\u53e3\u4e4b\u95f4\u901a\u4fe1\u6216\u5de5\u4f5c\u7ebf\u7a0b\u4e4b\u95f4\u901a\u4fe1\u3002\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"postMessage()"})," \u4e0e\u5176\u4ed6\u7a97\u53e3\u901a\u4fe1 \u3002\u5173\u4e8e\u5de5\u4f5c\u7ebf\u7a0b\u4e4b\u95f4\u901a\u4fe1\u3001",(0,c.jsx)(s.code,{children:"MessageChannel"})," \u548c ",(0,c.jsx)(s.code,{children:"BroadcastChannel"})," \u53ef\u4ee5\u9605\u8bfb",(0,c.jsx)(s.a,{href:"/worker-thread#%E5%B7%A5%E4%BD%9C%E8%80%85%E7%BA%BF%E7%A8%8B",children:"\u5de5\u4f5c\u8005\u7ebf\u7a0b"}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["XDM \u7684\u6838\u5fc3\u662f ",(0,c.jsx)(s.code,{children:"postMessage()"})," \u65b9\u6cd5\u3002\u9664\u4e86 XDM\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u540d\u8fd8\u5728 HTML5 \u4e2d\u5f88\u591a\u5730\u65b9\u7528\u5230\u8fc7\uff0c\u4f46\u76ee\u7684\u90fd\u4e00\u6837\uff0c\u90fd\u662f\u628a\u6570\u636e\u4f20\u9001\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"postMessage()"})," \u65b9\u6cd5\u63a5\u6536 3 \u4e2a\u53c2\u6570: \u6d88\u606f\u3001\u8868\u793a\u76ee\u6807\u63a5\u6536\u6e90\u7684\u5b57\u7b26\u4e32\u548c\u53ef\u9009\u7684\u53ef\u4f20\u8f93\u5bf9\u8c61\u7684\u6570\u7ec4(\u53ea\u4e0e\u5de5\u4f5c\u7ebf\u7a0b\u76f8\u5173)\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5bf9\u4e8e\u5b89\u5168\u975e\u5e38\u91cd\u8981\uff0c\u5176\u53ef\u4ee5\u9650\u5236\u6d4f\u89c8\u5668\u4ea4\u4ed8\u6570\u636e\u7684\u76ee\u6807\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",metastring:'title="postMessage() \u793a\u4f8b"',children:"// \u7b2c\u4e8c\u53c2\u6570\u53ef\u4ee5\u4fdd\u62a4\u4fe1\u606f\u4e0d\u4f1a\u56e0\u5730\u5740\u6539\u53d8\u800c\u6cc4\u9732\u3002\u5982\u679c\u4e0d\u60f3\u9650\u5236\u63a5\u6536\u76ee\u6807\uff0c\u5219\u53ef\u4ee5\u7ed9 postMessage()\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\"*\"\uff0c \u4f46\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\u3002\nlet iframeWindow = document.getElementById('myframe').contentWindow;\niframeWindow.postMessage('a secret message', 'http://www.example.com');\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u63a5\u6536\u5230 XDM \u6d88\u606f\u540e\uff0c",(0,c.jsx)(s.code,{children:"window"})," \u5bf9\u8c61\u4e0a\u4f1a\u89e6\u53d1 ",(0,c.jsx)(s.code,{children:"message"})," \u4e8b\u4ef6\u3002\u8fd9\u4e2a\u4e8b\u4ef6\u662f\u5f02\u6b65\u89e6\u53d1\u7684\uff0c\u56e0\u6b64\u4ece\u6d88\u606f\u53d1\u51fa\u5230\u63a5\u6536\u5230\u6d88\u606f(\u63a5\u6536\u7a97\u53e3\u89e6\u53d1 ",(0,c.jsx)(s.code,{children:"message"})," \u4e8b\u4ef6)\u53ef\u80fd\u6709\u5ef6\u8fdf\u3002\u4f20\u7ed9 ",(0,c.jsx)(s.code,{children:"onmessage"})," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u7684 event \u5bf9\u8c61\u5305\u542b\u4ee5\u4e0b 3 \u65b9\u9762\u91cd\u8981\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,c.jsxs)(s.li,{className:"task-list-item",children:[(0,c.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,c.jsx)(s.code,{children:"data"}),": \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,c.jsx)(s.code,{children:"postMessage()"})," \u7684\u5b57\u7b26\u4e32\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(s.li,{className:"task-list-item",children:[(0,c.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,c.jsx)(s.code,{children:"origin"}),": \u53d1\u9001\u6d88\u606f\u7684\u6587\u6863\u6e90\uff0c\u4f8b\u5982 ",(0,c.jsx)(s.code,{children:"http://www.example.com"}),"\u3002"]}),"\n",(0,c.jsxs)(s.li,{className:"task-list-item",children:[(0,c.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,c.jsx)(s.code,{children:"source"}),": \u53d1\u9001\u6d88\u606f\u7684\u6587\u6863\u4e2d ",(0,c.jsx)(s.code,{children:"window"})," \u5bf9\u8c61\u7684\u4ee3\u7406\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"source"})," \u4ee3\u7406\u5bf9\u8c61\u4e3b\u8981\u7528\u4e8e\u5728\u53d1\u9001\u4e0a\u4e00\u6761\u6d88\u606f\u7684\u7a97\u53e3\u4e2d\u6267\u884c ",(0,c.jsx)(s.code,{children:"postMessage()"})," \u65b9\u6cd5\u3002\u5982\u679c\u53d1\u9001\u7a97\u53e3\u6709\u76f8\u540c\u7684\u6e90\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5bf9\u8c61\u5e94\u8be5\u5c31\u662f ",(0,c.jsx)(s.code,{children:"window"})," \u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",metastring:'title="message \u4e8b\u4ef6\u793a\u4f8b"',children:"window.addEventListener('message', event => {\n  // \u786e\u4fdd\u6765\u81ea\u9884\u671f\u53d1\u9001\u8005\n  if (event.origin == 'http://www.example.com') {\n    // \u5bf9\u6570\u636e\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\n    processMessage(event.data);\n    // \u53ef\u9009:\u5411\u6765\u6e90\u7a97\u53e3\u53d1\u9001\u4e00\u6761\u6d88\u606f\n    event.source.postMessage('Received!', 'http://p2p.example.com');\n  }\n});\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(s.code,{children:"event.source"})," \u662f\u67d0\u4e2a ",(0,c.jsx)(s.code,{children:"window"})," \u5bf9\u8c61\u7684\u4ee3\u7406\uff0c\u800c\u975e\u5b9e\u9645\u7684 ",(0,c.jsx)(s.code,{children:"window"})," \u5bf9\u8c61\u3002\u56e0\u6b64\u4e0d\u80fd\u901a\u8fc7\u5b83\u8bbf\u95ee\u6240\u6709\u7a97\u53e3\u4e0b\u7684\u4fe1\u606f\u3002\u6700\u597d\u53ea\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"postMessage()"}),"\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u6c38\u8fdc\u5b58\u5728\u800c\u4e14\u53ef\u4ee5\u8c03\u7528\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["XDM \u6709\u4e00\u4e9b\u602a\u5f02\u4e4b\u5904\u3002\u9996\u5148\uff0c",(0,c.jsx)(s.code,{children:"postMessage()"})," \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u6700\u521d\u5b9e\u73b0\u59cb\u7ec8\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u540e\u6765\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u6539\u4e3a\u5141\u8bb8\u4efb\u4f55\u7ed3\u6784\u7684\u6570\u636e\u4f20\u5165\uff0c\u4e0d\u8fc7\u5e76\u975e\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u6539\u53d8\u3002\u4e3a\u6b64\uff0c\u6700\u597d\u5c31\u662f\u53ea\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"postMessage()"})," \u53d1\u9001\u5b57\u7b26\u4e32\u3002\u5982\u679c\u9700\u8981\u4f20\u9012\u7ed3\u6784\u5316\u6570\u636e\uff0c\u90a3\u4e48\u6700\u597d\u5148\u5bf9\u8be5\u6570\u636e\u8c03\u7528 ",(0,c.jsx)(s.code,{children:"JSON.stringify()"}),"\uff0c\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"postMessage()"})," \u4f20\u8fc7\u53bb\u4e4b\u540e\uff0c\u518d\u5728 ",(0,c.jsx)(s.code,{children:"onmessage"})," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u8c03\u7528 ",(0,c.jsx)(s.code,{children:"JSON.parse()"}),"\u3002"]}),"\n",(0,c.jsx)(s.admonition,{title:"\u5e94\u7528",type:"info",children:(0,c.jsx)(s.p,{children:"\u5728\u901a\u8fc7\u5185\u5d4c\u7a97\u683c\u52a0\u8f7d\u4e0d\u540c\u57df\u65f6\uff0c\u4f7f\u7528 XDM \u662f\u975e\u5e38\u65b9\u4fbf\u7684\u3002\u8fd9\u79cd\u65b9\u6cd5\u5728\u6df7\u642d(mashup)\u548c\u793e\u4ea4\u5e94\u7528\u4e2d\u975e\u5e38\u5e38\u7528\u3002\u901a\u8fc7\u4f7f\u7528 XDM \u4e0e\u5185\u5d4c\u7a97\u683c\u4e2d\u7684\u7f51\u9875\u901a\u4fe1\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u5305\u542b\u9875\u9762\u7684\u5b89\u5168\u3002XDM \u4e5f\u53ef\u4ee5\u7528\u4e8e\u540c\u6e90\u9875\u9762\u4e4b\u95f4\u901a\u4fe1\u3002"})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var c=n(67294);const t={},i=c.createContext(t);function a(e){const s=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(i.Provider,{value:s},e.children)}}}]);