"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[5524],{52989:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=s(85893),l=s(11151);const i={},c="ECAMScript 12",a={id:"features/es12",title:"ECAMScript 12",description:"ECMAScript 2021\uff08\u4e5f\u79f0\u4e3a ES12\uff09\u662f JavaScript \u7684\u4e00\u4e2a\u91cd\u8981\u7248\u672c\uff0c\u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u7684\u8bed\u8a00\u7279\u6027\u548c\u6539\u8fdb\u3002\u4ee5\u4e0b\u662f ECMAScript 2021 \u7684\u4e3b\u8981\u5185\u5bb9\uff1a",source:"@site/docs/features/es12.mdx",sourceDirName:"features",slug:"/features/es12",permalink:"/javascript-docs/features/es12",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/features/es12.mdx",tags:[],version:"current",frontMatter:{},sidebar:"features",previous:{title:"ECAMScript 11",permalink:"/javascript-docs/features/es11"},next:{title:"ECAMScript 13",permalink:"/javascript-docs/features/es13"}},t={},o=[{value:"\u65b0\u589e\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26",id:"\u65b0\u589e\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26",level:2},{value:"\u903b\u8f91\u6216\u8d4b\u503c\u8fd0\u7b97\u7b26 <code>||=</code>",id:"\u903b\u8f91\u6216\u8d4b\u503c\u8fd0\u7b97\u7b26-",level:3},{value:"\u903b\u8f91\u4e0e\u8d4b\u503c\u8fd0\u7b97\u7b26 <code>&amp;&amp;=</code>",id:"\u903b\u8f91\u4e0e\u8d4b\u503c\u8fd0\u7b97\u7b26-",level:3},{value:"\u903b\u8f91\u7a7a\u8d4b\u503c\u8fd0\u7b97\u7b26 <code>??=</code>",id:"\u903b\u8f91\u7a7a\u8d4b\u503c\u8fd0\u7b97\u7b26-",level:3},{value:"\u6570\u5b57\u5206\u9694\u7b26",id:"\u6570\u5b57\u5206\u9694\u7b26",level:2},{value:"WeakRef \u548c FinalizationRegistry",id:"weakref-\u548c-finalizationregistry",level:2},{value:"Promise.any",id:"promiseany",level:2},{value:"\u79c1\u6709\u5b57\u6bb5\u548c\u65b9\u6cd5",id:"\u79c1\u6709\u5b57\u6bb5\u548c\u65b9\u6cd5",level:2},{value:"\u65b0\u589e API",id:"\u65b0\u589e-api",level:2},{value:"Object.hasOwn()",id:"objecthasown",level:3},{value:"String.prototype.replaceAll()",id:"stringprototypereplaceall",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ecamscript-12",children:"ECAMScript 12"}),"\n",(0,r.jsx)(n.p,{children:"ECMAScript 2021\uff08\u4e5f\u79f0\u4e3a ES12\uff09\u662f JavaScript \u7684\u4e00\u4e2a\u91cd\u8981\u7248\u672c\uff0c\u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u7684\u8bed\u8a00\u7279\u6027\u548c\u6539\u8fdb\u3002\u4ee5\u4e0b\u662f ECMAScript 2021 \u7684\u4e3b\u8981\u5185\u5bb9\uff1a"}),"\n",(0,r.jsx)(n.h2,{id:"\u65b0\u589e\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26",children:"\u65b0\u589e\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26"}),"\n",(0,r.jsxs)(n.h3,{id:"\u903b\u8f91\u6216\u8d4b\u503c\u8fd0\u7b97\u7b26-",children:["\u903b\u8f91\u6216\u8d4b\u503c\u8fd0\u7b97\u7b26 ",(0,r.jsx)(n.code,{children:"||="})]}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u8fd0\u7b97\u7b26\u4f1a\u5728\u5de6\u4fa7\u64cd\u4f5c\u6570\u4e3a falsy \u503c\uff08false\u30010\u3001''\u3001null\u3001undefined\u3001NaN\uff09\u65f6\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u8bed\u6cd5"',children:"x ||= y;\n\n// \u7b49\u4ef7\u4e8e\nx || (x = y);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"let a = 0;\na ||= 1;\nconsole.log(a); // \u8f93\u51fa: 1\uff0c\u56e0\u4e3a 0 \u662f falsy \u503c\n\nlet b = 2;\nb ||= 1;\nconsole.log(b); // \u8f93\u51fa: 2\uff0c\u56e0\u4e3a 2 \u662f truthy \u503c\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u903b\u8f91\u4e0e\u8d4b\u503c\u8fd0\u7b97\u7b26-",children:["\u903b\u8f91\u4e0e\u8d4b\u503c\u8fd0\u7b97\u7b26 ",(0,r.jsx)(n.code,{children:"&&="})]}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u8fd0\u7b97\u7b26\u4f1a\u5728\u5de6\u4fa7\u64cd\u4f5c\u6570\u4e3a truthy \u503c\u65f6\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u8bed\u6cd5"',children:"x &&= y;\n\n// \u7b49\u4ef7\u4e8e\nx && (x = y);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"let a = 2;\na &&= 3;\nconsole.log(a); // \u8f93\u51fa: 3\uff0c\u56e0\u4e3a 2 \u662f truthy \u503c\n\nlet b = 0;\nb &&= 3;\nconsole.log(b); // \u8f93\u51fa: 0\uff0c\u56e0\u4e3a 0 \u662f falsy \u503c\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u903b\u8f91\u7a7a\u8d4b\u503c\u8fd0\u7b97\u7b26-",children:["\u903b\u8f91\u7a7a\u8d4b\u503c\u8fd0\u7b97\u7b26 ",(0,r.jsx)(n.code,{children:"??="})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u8fd0\u7b97\u7b26\u4f1a\u5728\u5de6\u4fa7\u64cd\u4f5c\u6570\u4e3a ",(0,r.jsx)(n.code,{children:"null"})," \u6216 ",(0,r.jsx)(n.code,{children:"undefined"})," \u65f6\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u8bed\u6cd5"',children:"x ??= y;\n\n// \u7b49\u4ef7\u4e8e\nx ?? (x = y);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"let a = null;\na ??= 1;\nconsole.log(a); // \u8f93\u51fa: 1\uff0c\u56e0\u4e3a a \u662f null\n\nlet b = undefined;\nb ??= 2;\nconsole.log(b); // \u8f93\u51fa: 2\uff0c\u56e0\u4e3a b \u662f undefined\n\nlet c = 0;\nc ??= 3;\nconsole.log(c); // \u8f93\u51fa: 0\uff0c\u56e0\u4e3a 0 \u4e0d\u662f null \u6216 undefined\n\nlet d = false;\nd ??= 4;\nconsole.log(d); // \u8f93\u51fa: false\uff0c\u56e0\u4e3a false \u4e0d\u662f null \u6216 undefined\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u5b57\u5206\u9694\u7b26",children:"\u6570\u5b57\u5206\u9694\u7b26"}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u5b57\u5206\u9694\u7b26\u5141\u8bb8\u5728\u6570\u5b57\u5b57\u9762\u91cf\u4e2d\u4f7f\u7528\u4e0b\u5212\u7ebf ",(0,r.jsx)(n.code,{children:"_"})," \u8fdb\u884c\u5206\u9694\uff0c\u63d0\u9ad8\u53ef\u8bfb\u6027\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const largeNumber = 1_000_000_000;\nconst creditCardNumber = 1234_5678_9012_3456;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"weakref-\u548c-finalizationregistry",children:"WeakRef \u548c FinalizationRegistry"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WeakRef"}),"\uff1a\u5141\u8bb8\u521b\u5efa\u5bf9\u5bf9\u8c61\u7684\u5f31\u5f15\u7528\uff0c\u8fd9\u6837\u4e0d\u4f1a\u963b\u6b62\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let obj = { name: 'John' };\nlet weakRef = new WeakRef(obj);\nobj = null; // `obj` \u73b0\u5728\u53ef\u4ee5\u88ab\u5783\u573e\u56de\u6536\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"FinalizationRegistry"}),"\uff1a\u5141\u8bb8\u6ce8\u518c\u56de\u8c03\u51fd\u6570\uff0c\u5728\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\u65f6\u6267\u884c\u6e05\u7406\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const registry = new FinalizationRegistry(heldValue => {\n  console.log(`Cleaning up ${heldValue}`);\n});\n\nlet obj = { name: 'John' };\nregistry.register(obj, 'some resource');\nobj = null; // \u5f53 `obj` \u88ab\u5783\u573e\u56de\u6536\u65f6\uff0c\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u8c03\u7528\n"})}),"\n",(0,r.jsx)(n.h2,{id:"promiseany",children:"Promise.any"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise.any"})," \u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a Promise \u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u6700\u5148\u89e3\u51b3\uff08fulfilled\uff09\u7684 Promise \u7684\u503c\u3002\u5982\u679c\u6240\u6709 Promise \u90fd\u62d2\u7edd\uff08rejected\uff09\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a AggregateError\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const promises = [\n  Promise.reject(new Error('Error 1')),\n  Promise.resolve('Success 1'),\n  Promise.reject(new Error('Error 2')),\n];\n\nPromise.any(promises)\n  .then(result => {\n    console.log(result); // \u8f93\u51fa\uff1aSuccess 1\n  })\n  .catch(error => {\n    console.error(error); // \u6355\u83b7 AggregateError\n  });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u79c1\u6709\u5b57\u6bb5\u548c\u65b9\u6cd5",children:"\u79c1\u6709\u5b57\u6bb5\u548c\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"ES2021 \u8fdb\u4e00\u6b65\u589e\u5f3a\u4e86\u7c7b\u7684\u79c1\u6709\u6027\u652f\u6301\uff0c\u5f15\u5165\u4e86\u79c1\u6709\u5b57\u6bb5\u548c\u79c1\u6709\u65b9\u6cd5\u3002\u79c1\u6709\u5b57\u6bb5\u548c\u65b9\u6cd5\u4ee5 # \u4f5c\u4e3a\u524d\u7f00\uff0c\u53ea\u80fd\u5728\u7c7b\u5185\u90e8\u8bbf\u95ee\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class MyClass {\n  #privateField = 42;\n  #privateMethod() {\n    console.log(this.#privateField);\n  }\n\n  publicMethod() {\n    this.#privateMethod();\n  }\n}\n\nconst instance = new MyClass();\ninstance.publicMethod(); // \u8f93\u51fa\uff1a42\n// instance.#privateMethod(); // \u4f1a\u629b\u51fa SyntaxError\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u65b0\u589e-api",children:"\u65b0\u589e API"}),"\n",(0,r.jsx)(n.h3,{id:"objecthasown",children:(0,r.jsx)(n.a,{href:"/api/basic-objects/object#objecthasown",children:"Object.hasOwn()"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hasOwn"})," \u662f\u4e00\u4e2a\u65b0\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u7528\u4e8e\u68c0\u67e5\u5bf9\u8c61\u81ea\u8eab\u662f\u5426\u5177\u6709\u67d0\u4e2a\u5c5e\u6027\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"stringprototypereplaceall",children:"String.prototype.replaceAll()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"replaceAll"})," \u65b9\u6cd5\u7528\u4e8e\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6240\u6709\u5339\u914d\u7684\u5b50\u4e32\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var r=s(67294);const l={},i=r.createContext(l);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);