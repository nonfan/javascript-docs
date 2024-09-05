"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[190],{24835:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var l=r(85893),s=r(11151);const c={},i="\u4e25\u683c\u6a21\u5f0f",d={id:"strict-mode",title:"\u4e25\u683c\u6a21\u5f0f",description:"ECMAScript 5 \u9996\u6b21\u5f15\u5165\u4e25\u683c\u6a21\u5f0f\u7684\u6982\u5ff5\u3002\u4e25\u683c\u6a21\u5f0f\u7528\u4e8e\u9009\u62e9\u4ee5\u66f4\u4e25\u683c\u7684\u6761\u4ef6\u68c0\u67e5 JavaScript \u4ee3\u7801\u9519\u8bef\uff0c\u53ef\u4ee5\u5e94\u7528\u5230\u5168\u5c40\uff0c\u4e5f\u53ef\u4ee5\u5e94\u7528\u5230\u51fd\u6570\u5185\u90e8\u3002\u4e25\u683c\u6a21\u5f0f\u7684\u597d\u5904\u662f\u53ef\u4ee5\u63d0\u65e9\u53d1\u73b0\u9519\u8bef\uff0c\u56e0\u6b64\u53ef\u4ee5\u6355\u83b7\u67d0\u4e9b ECMAScript \u95ee\u9898\u5bfc\u81f4\u7684\u7f16\u7a0b\u9519\u8bef\u3002",source:"@site/docs/strict-mode.mdx",sourceDirName:".",slug:"/strict-mode",permalink:"/javascript-docs/strict-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/strict-mode.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5de5\u4f5c\u8005\u7ebf\u7a0b",permalink:"/javascript-docs/worker-thread"}},t={},a=[{value:"\u9009\u62e9\u4f7f\u7528",id:"\u9009\u62e9\u4f7f\u7528",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u51fd\u6570\u53c2\u6570",id:"\u51fd\u6570\u53c2\u6570",level:3},{value:"eval()",id:"eval",level:3},{value:"eval \u4e0e arguments",id:"eval-\u4e0e-arguments",level:3},{value:"this\u5f3a\u5236\u8f6c\u578b",id:"this\u5f3a\u5236\u8f6c\u578b",level:2},{value:"\u7c7b\u4e0e\u6a21\u5757",id:"\u7c7b\u4e0e\u6a21\u5757",level:2},{value:"\u5176\u4ed6\u53d8\u5316",id:"\u5176\u4ed6\u53d8\u5316",level:2}];function o(n){const e={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u4e25\u683c\u6a21\u5f0f",children:"\u4e25\u683c\u6a21\u5f0f"}),"\n",(0,l.jsx)(e.p,{children:"ECMAScript 5 \u9996\u6b21\u5f15\u5165\u4e25\u683c\u6a21\u5f0f\u7684\u6982\u5ff5\u3002\u4e25\u683c\u6a21\u5f0f\u7528\u4e8e\u9009\u62e9\u4ee5\u66f4\u4e25\u683c\u7684\u6761\u4ef6\u68c0\u67e5 JavaScript \u4ee3\u7801\u9519\u8bef\uff0c\u53ef\u4ee5\u5e94\u7528\u5230\u5168\u5c40\uff0c\u4e5f\u53ef\u4ee5\u5e94\u7528\u5230\u51fd\u6570\u5185\u90e8\u3002\u4e25\u683c\u6a21\u5f0f\u7684\u597d\u5904\u662f\u53ef\u4ee5\u63d0\u65e9\u53d1\u73b0\u9519\u8bef\uff0c\u56e0\u6b64\u53ef\u4ee5\u6355\u83b7\u67d0\u4e9b ECMAScript \u95ee\u9898\u5bfc\u81f4\u7684\u7f16\u7a0b\u9519\u8bef\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u7406\u89e3\u4e25\u683c\u6a21\u5f0f\u7684\u89c4\u5219\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u672a\u6765\u7684 ECMAScript \u4f1a\u9010\u6b65\u5f3a\u5236\u5168\u5c40\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\u3002\u4e25\u683c\u6a21\u5f0f\u5df2\u5f97\u5230\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u652f\u6301\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u9009\u62e9\u4f7f\u7528",children:"\u9009\u62e9\u4f7f\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u8981\u9009\u62e9\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u9700\u8981\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\u7f16\u8bd1\u6307\u793a(pragma)\uff0c\u5373\u4e00\u4e2a\u4e0d\u8d4b\u503c\u7ed9\u4efb\u4f55\u53d8\u91cf\u7684\u5b57\u7b26\u4e32:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"'use strict';\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u6837\u4e00\u4e2a\u5373\u4f7f\u5728 ECMAScript 3 \u4e2d\u4e5f\u6709\u6548\u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u517c\u5bb9\u4e0d\u652f\u6301\u4e25\u683c\u6a21\u5f0f\u7684 JavaScript \u5f15\u64ce\u3002\u652f\u6301\u4e25\u683c\u6a21\u5f0f\u7684\u5f15\u64ce\u4f1a\u542f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u800c\u4e0d\u652f\u6301\u7684\u5f15\u64ce\u5219\u4f1a\u5c06\u8fd9\u4e2a\u7f16\u8bd1\u6307\u793a\u5f53\u6210\u4e00\u4e2a\u672a\u8d4b\u503c\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u628a\u8fd9\u4e2a\u7f16\u8bd1\u6307\u793a\u5e94\u7528\u5230\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u5373\u51fd\u6570\u5916\u90e8\uff0c\u5219\u6574\u4e2a\u811a\u672c\u90fd\u4f1a\u6309\u7167\u4e25\u683c\u6a21\u5f0f\u6765\u89e3\u6790\u3002\u8fd9\u610f\u5473\u7740\u5728\u6700\u7ec8\u4f1a\u4e0e\u5176\u4ed6\u811a\u672c\u62fc\u63a5\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7684\u811a\u672c\u4e2d\u6dfb\u52a0\u4e86\u7f16\u8bd1\u6307\u793a\uff0c\u4f1a\u5c06\u8be5\u6587\u4ef6\u4e2d\u7684\u6240\u6709 JavaScript \u7f6e\u4e8e\u4e25\u683c\u6a21\u5f0f\u4e4b\u4e0b\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u50cf\u53ea\u5728\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u5f00\u542f\u4e25\u683c\u6a21\u5f0f:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"function doSomething() {\n  'use strict';\n  // \u5176\u4ed6\u4ee3\u7801\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4e0d\u80fd\u63a7\u5236\u9875\u9762\u4e2d\u7684\u6240\u6709\u811a\u672c\uff0c\u90a3\u4e48\u5efa\u8bae\u53ea\u5728\u7ecf\u8fc7\u6d4b\u8bd5\u7684\u7279\u5b9a\u51fd\u6570\u4e2d\u542f\u7528\u4e25\u683c\u6a21\u5f0f\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,l.jsx)(e.p,{children:"\u4e25\u683c\u6a21\u5f0f\u4e0b\u5982\u4f55\u521b\u5efa\u53d8\u91cf\u53ca\u4f55\u65f6\u4f1a\u521b\u5efa\u53d8\u91cf\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u7b2c\u4e00\u4e2a\u53d8\u5316\u662f\u4e0d\u5141\u8bb8\u610f\u5916\u521b\u5efa\u5168\u5c40\u53d8\u91cf\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u4ee5\u4e0b\u4ee3\u7801\u53ef\u4ee5\u521b\u5efa\u5168\u5c40\u53d8\u91cf:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u53d8\u91cf\u672a\u58f0\u660e\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u521b\u5efa\u5168\u5c40\u53d8\u91cf\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faReferenceError\nmessage = 'Hello world!';\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u867d\u7136\u8fd9\u91cc\u7684 message \u6ca1\u6709\u524d\u7f6e let \u5173\u952e\u5b57\uff0c\u4e5f\u6ca1\u6709\u660e\u786e\u5b9a\u4e49\u4e3a\u5168\u5c40\u5bf9\u8c61\u7684\u5c5e\u6027 \uff0c\u4f46\u4ecd\u7136\u4f1a\u81ea\u52a8\u521b\u5efa\u4e3a\u5168\u5c40\u53d8\u91cf\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u7ed9\u672a\u58f0\u660e\u7684\u53d8\u91cf\u8d4b\u503c\u4f1a\u5728\u6267\u884c\u4ee3\u7801\u65f6\u629b\u51fa ReferenceError\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76f8\u5173\u7684\u53e6\u4e00\u4e2a\u53d8\u5316\u662f\u65e0\u6cd5\u5728\u53d8\u91cf\u4e0a\u8c03\u7528 delete\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u5141\u8bb8\u8fd9\u6837\uff0c\u4f46\u53ef\u80fd\u4f1a\u9759\u9ed8\u5931\u8d25(\u8fd4\u56de false)\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5c1d\u8bd5\u5220\u9664\u53d8\u91cf\u4f1a\u5bfc\u81f4\u9519\u8bef:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u5220\u9664\u53d8\u91cf\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u9759\u9ed8\u5931\u8d25\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faReferenceError\nlet color = 'red';\ndelete color;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e25\u683c\u6a21\u5f0f\u4e5f\u5bf9\u53d8\u91cf\u540d\u589e\u52a0\u4e86\u9650\u5236\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u4e0d\u5141\u8bb8\u53d8\u91cf\u540d\u4e3a implements\u3001interface\u3001let\u3001 package\u3001private\u3001protected\u3001public\u3001static \u548c yield\u3002\u8fd9\u4e9b\u662f\u76ee\u524d\u7684\u4fdd\u7559\u5b57\uff0c\u53ef\u80fd\u5728\u5c06\u6765\u7684 ECMAScript \u7248\u672c\u4e2d\u7528\u5230\u3002\u5982\u679c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f7f\u7528\u8fd9\u4e9b\u540d\u79f0\u4f5c\u4e3a\u53d8\u91cf\u540d\uff0c\u5219\u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5bf9\u8c61",children:"\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u64cd\u4f5c\u5bf9\u8c61\u6bd4\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u66f4\u5bb9\u6613\u629b\u51fa\u9519\u8bef\u3002\u4e25\u683c\u6a21\u5f0f\u503e\u5411\u4e8e\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f1a\u9759\u9ed8\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u629b\u51fa\u9519\u8bef\uff0c\u589e\u52a0\u4e86\u5f00\u53d1\u4e2d\u63d0\u524d\u53d1\u73b0\u9519\u8bef\u7684\u53ef\u80fd\u6027\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\uff0c\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\u4e0b\u8bd5\u56fe\u64cd\u7eb5\u5bf9\u8c61\u5c5e\u6027\u4f1a\u5f15\u53d1\u9519\u8bef:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7ed9\u53ea\u8bfb\u5c5e\u6027\u8d4b\u503c\u4f1a\u629b\u51fa TypeError\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u4e0d\u53ef\u914d\u7f6e\u5c5e\u6027\u4e0a\u4f7f\u7528 delete \u4f1a\u629b\u51fa TypeError\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u7ed9\u4e0d\u5b58\u5728\u7684\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u4f1a\u629b\u51fa TypeError\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u4e0e\u5bf9\u8c61\u76f8\u5173\u7684\u9650\u5236\u4e5f\u6d89\u53ca\u901a\u8fc7\u5bf9\u8c61\u5b57\u9762\u91cf\u58f0\u660e\u5b83\u4eec\u3002\u5728\u4f7f\u7528\u5bf9\u8c61\u5b57\u9762\u91cf\u65f6\uff0c\u5c5e\u6027\u540d\u5fc5\u987b\u552f\u4e00\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u4e24\u4e2a\u5c5e\u6027\u91cd\u540d\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u6ca1\u6709\u9519\u8bef\uff0c\u7b2c\u4e8c\u4e2a\u5c5e\u6027\u751f\u6548\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faSyntaxError\nlet person = {\n  name: 'Nicholas',\n  name: 'Greg',\n};\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u91cc\u7684\u5bf9\u8c61\u5b57\u9762\u91cf person \u6709\u4e24\u4e2a\u53eb\u4f5c name \u7684\u5c5e\u6027\u3002\u7b2c\u4e8c\u4e2a\u5c5e\u6027\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u662f\u6700\u7ec8\u7684\u5c5e\u6027\u3002 \u4f46\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8fd9\u6837\u5199\u662f\u8bed\u6cd5\u9519\u8bef\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"ECMAScript 6 \u5220\u9664\u4e86\u5bf9\u91cd\u540d\u5c5e\u6027\u7684\u8fd9\u4e2a\u9650\u5236\uff0c\u5373\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u91cd\u590d\u7684\u5bf9\u8c61\u5b57\u9762\u91cf\u5c5e\u6027\u952e\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\uff0c\u4e25\u683c\u6a21\u5f0f\u8981\u6c42\u547d\u540d\u51fd\u6570\u53c2\u6570\u5fc5\u987b\u552f\u4e00\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u547d\u540d\u53c2\u6570\u91cd\u540d\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u6ca1\u6709\u9519\u8bef\uff0c\u53ea\u6709\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6709\u6548\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faSyntaxError\nfunction sum(num, num) {\n  // \u51fd\u6570\u4ee3\u7801\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8fd9\u4e2a\u51fd\u6570\u58f0\u660e\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\u3002\u8fd9\u6837\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u8bbf\u95ee\u7b2c\u4e8c\u4e2a num\uff0c\u4f46\u53ea\u80fd\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"arguments"})," \u8bbf\u95ee\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"arguments"})," \u5bf9\u8c61\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4e5f\u6709\u4e00\u4e9b\u53d8\u5316\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u4fee\u6539\u547d\u540d\u53c2\u6570\u4e5f\u4f1a\u4fee\u6539 ",(0,l.jsx)(e.code,{children:"arguments"})," \u5bf9\u8c61\u4e2d\u7684\u503c\u3002\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u547d\u540d\u53c2\u6570\u548c ",(0,l.jsx)(e.code,{children:"arguments"})," \u662f\u76f8\u4e92\u72ec\u7acb\u7684\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u4fee\u6539\u547d\u540d\u53c2\u6570\u7684\u503c\nfunction showValue(value) {\n  value = 'Foo';\n  console.log(value); // \"Foo\"\n  console.log(arguments[0]); // \"Foo\"\n}\nshowValue('Hi');\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",metastring:'title="\u4e25\u683c\u6a21\u5f0f"',children:"'use strict';\nfunction showValue(value) {\n  value = 'Foo';\n  console.log(value); // \"Foo\"\n  console.log(arguments[0]); // \"Hi\"\n}\nshowValue('Hi');\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u53e6\u4e00\u4e2a\u53d8\u5316\u662f\u53bb\u6389\u4e86 ",(0,l.jsx)(e.code,{children:"arguments.callee"})," \u548c ",(0,l.jsx)(e.code,{children:"arguments.caller"}),"\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5b83\u4eec\u5206\u522b\u5f15\u7528\u51fd\u6570\u672c\u8eab\u548c\u8c03\u7528\u51fd\u6570\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8bbf\u95ee\u8fd9\u4e24\u4e2a\u5c5e\u6027\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u90fd\u4f1a\u629b\u51fa TypeError\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u7c7b\u4f3c\u5730\uff0c\u8bfb\u6216\u5199\u51fd\u6570\u7684 caller \u6216 callee \u5c5e\u6027\u4e5f\u4f1a\u629b\u51fa TypeError\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"'use strict';\n\n(function strictFoo() {\n  console.log(arguments.callee); // \u629b\u51fa TypeError\n})();\n\n(function strictBar() {\n  console.log(arguments.caller); // \u629b\u51fa TypeError\n})();\n\n(function strictBaz() {\n  strictBar(); // \u8c03\u7528 strictBar \u4f1a\u5bfc\u81f4\u4e25\u683c\u6a21\u5f0f\u4e0b\u629b\u51fa TypeError\n})();\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u4e0e\u53d8\u91cf\u4e00\u6837\uff0c\u4e25\u683c\u6a21\u5f0f\u4e5f\u9650\u5236\u4e86\u51fd\u6570\u7684\u547d\u540d\uff0c\u4e0d\u5141\u8bb8\u51fd\u6570\u540d\u4e3a implements\u3001interface\u3001 let\u3001package\u3001private\u3001protected\u3001public\u3001static \u548c yield\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5173\u4e8e\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u53d8\u5316\u662f\u4e0d\u5141\u8bb8\u51fd\u6570\u58f0\u660e\uff0c\u9664\u975e\u5b83\u4eec\u4f4d\u4e8e\u811a\u672c\u6216\u51fd\u6570\u7684\u9876\u7ea7\u3002\u8fd9\u610f\u5473\u7740\u5728 if \u8bed\u53e5\u4e2d\u58f0\u660e\u7684\u51fd\u6570\u73b0\u5728\u662f\u4e2a\u8bed\u6cd5\u9519\u8bef:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u5728 if \u8bed\u53e5\u4e2d\u58f0\u660e\u51fd\u6570\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u51fd\u6570\u63d0\u5347\u81f3 if \u8bed\u53e5\u5916\u90e8\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faSyntaxError\nif (true) {\n  function doSomething() {\n    // ...\n  }\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u6709\u6d4f\u89c8\u5668\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u90fd\u652f\u6301\u8fd9\u4e2a\u8bed\u6cd5\uff0c\u4f46\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u5219\u4f1a\u629b\u51fa\u8bed\u6cd5\u9519\u8bef\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u51fd\u6570\u53c2\u6570",children:"\u51fd\u6570\u53c2\u6570"}),"\n",(0,l.jsxs)(e.p,{children:["ES6 \u589e\u52a0\u4e86\u5269\u4f59\u64cd\u4f5c\u7b26\u3001\u89e3\u6784\u64cd\u4f5c\u7b26\u548c\u9ed8\u8ba4\u53c2\u6570\uff0c\u4e3a\u51fd\u6570\u7ec4\u7ec7\u3001\u7ed3\u6784\u548c\u5b9a\u4e49\u53c2\u6570\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u652f\u6301\u3002ECMAScript 7 \u589e\u52a0\u4e86\u4e00\u6761\u9650\u5236\uff0c",(0,l.jsx)(e.em,{children:"\u8981\u6c42\u4f7f\u7528\u4efb\u4f55\u4e0a\u8ff0\u5148\u8fdb\u53c2\u6570\u7279\u6027\u7684\u51fd\u6570\u5185\u90e8\u90fd\u4e0d\u80fd\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f"}),"\uff0c\u5426\u5219\u4f1a\u629b\u51fa\u9519\u8bef\u3002\u4e0d\u8fc7\uff0c\u5168\u5c40\u4e25\u683c\u6a21\u5f0f\u8fd8\u662f\u5141\u8bb8\u7684\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'// \u53ef\u4ee5\nfunction foo(a, b, c) {\n    "use strict";\n}\n// \u4e0d\u53ef\u4ee5\nfunction bar(a, b, c = "d") {\n    "use strict";\n}\n// \u4e0d\u53ef\u4ee5\nfunction baz({ a, b, c }) {\n    "use strict";\n}\n// \u4e0d\u53ef\u4ee5\nfunction qux(a, b, ...c) {\n    "use strict";\n}\n\n// error\n// SyntaxError: Illegal \'use strict\' directive in function with non-simple parameter list\n'})}),"\n",(0,l.jsx)(e.p,{children:'ES6 \u589e\u52a0\u7684\u8fd9\u4e9b\u65b0\u7279\u6027\u671f\u5f85\u53c2\u6570\u4e0e\u51fd\u6570\u4f53\u5728\u76f8\u540c\u6a21\u5f0f\u4e0b\u8fdb\u884c\u89e3\u6790\u3002\u5982\u679c\u5141\u8bb8\u7f16\u8bd1\u6307\u793a"use strict"\u51fa\u73b0\u5728\u51fd\u6570\u4f53\u5185\uff0cJavaScript \u89e3\u6790\u5668\u5c31\u9700\u8981\u5728\u89e3\u6790\u51fd\u6570\u53c2\u6570\u4e4b\u524d\u5148\u68c0\u67e5\u51fd\u6570\u4f53\u5185\u662f\u5426\u5b58\u5728\u8fd9\u4e2a\u7f16\u8bd1\u6307\u793a\uff0c\u800c\u8fd9\u4f1a\u5e26\u6765\u5f88\u591a\u95ee\u9898\u3002\u4e3a\u6b64\uff0cES7 \u89c4\u8303\u589e\u52a0\u4e86\u8fd9\u4e2a\u7ea6\u5b9a\uff0c\u76ee\u7684\u662f\u8ba9\u89e3\u6790\u5668\u5728\u89e3\u6790\u51fd\u6570\u4e4b\u524d\u5c31\u786e\u5207\u77e5\u9053\u8be5\u4f7f\u7528\u4ec0\u4e48\u6a21\u5f0f\u3002'}),"\n",(0,l.jsx)(e.h3,{id:"eval",children:"eval()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"eval()"})," \u51fd\u6570\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4e5f\u6709\u53d8\u5316\u3002\u6700\u5927\u7684\u53d8\u5316\u662f ",(0,l.jsx)(e.code,{children:"eval()"})," \u4e0d\u4f1a\u518d\u5728\u5305\u542b\u4e0a\u4e0b\u6587\u4e2d\u521b\u5efa\u53d8\u91cf\u6216\u51fd\u6570\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u4f7f\u7528eval()\u521b\u5efa\u53d8\u91cf\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u8b66\u544a\u6846\u663e\u793a10\nfunction doSomething() {\n  eval('let x = 10');\n  // \u4e25\u683c\u6a21\u5f0f:\u8c03\u7528 console.log(x) \u65f6\u629b\u51fa ReferenceError\n  console.log(x);\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u53d8\u91cf\u548c\u51fd\u6570\u53ef\u4ee5\u5728 ",(0,l.jsx)(e.code,{children:"eval()"})," \u4e2d\u58f0\u660e\uff0c\u4f46\u5b83\u4eec\u4f1a\u4f4d\u4e8e\u4ee3\u7801\u6267\u884c\u671f\u95f4\u7684\u4e00\u4e2a\u7279\u6b8a\u7684\u4f5c\u7528\u57df\u91cc\uff0c\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u5c31\u4f1a\u9500\u6bc1\u3002\u56e0\u6b64\uff0c\u4ee5\u4e0b\u4ee3\u7801\u5c31\u4e0d\u4f1a\u51fa\u9519:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"'use strict';\nlet result = eval('let x = 10, y = 11; x + y');\nconsole.log(result); // 21\n"})}),"\n",(0,l.jsx)(e.h3,{id:"eval-\u4e0e-arguments",children:"eval \u4e0e arguments"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e25\u683c\u6a21\u5f0f\u660e\u786e\u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"eval"})," \u548c ",(0,l.jsx)(e.code,{children:"arguments"})," \u4f5c\u4e3a\u6807\u8bc6\u7b26\u548c\u64cd\u4f5c\u5b83\u4eec\u7684\u503c\u3002\u4f8b\u5982:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u5c06 eval \u548c arguments \u91cd\u65b0\u5b9a\u4e49\u4e3a\u53d8\u91cf\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u53ef\u4ee5\uff0c\u6ca1\u6709\u9519\u8bef\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faSyntaxError\nlet eval = 10;\nlet arguments = 'Hello world!';\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u91cd\u5199 ",(0,l.jsx)(e.code,{children:"eval"})," \u548c ",(0,l.jsx)(e.code,{children:"arguments"}),"\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef\u3002\u4e0d\u80fd\u7528\u5b83\u4eec\u4f5c\u4e3a\u6807\u8bc6\u7b26\uff0c\u8fd9\u610f\u5473\u7740\u4e0b\u9762\u8fd9\u4e9b\u60c5\u51b5\u90fd\u4f1a\u629b\u51fa\u8bed\u6cd5\u9519\u8bef:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528let\u58f0\u660e;"}),"\n",(0,l.jsx)(e.li,{children:"\u8d4b\u4e88\u5176\u4ed6\u503c;"}),"\n",(0,l.jsxs)(e.li,{children:["\u4fee\u6539\u5176\u5305\u542b\u7684\u503c\uff0c\u5982\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"++"}),";"]}),"\n",(0,l.jsx)(e.li,{children:"\u7528\u4f5c\u51fd\u6570\u540d;"}),"\n",(0,l.jsx)(e.li,{children:"\u7528\u4f5c\u51fd\u6570\u53c2\u6570\u540d;"}),"\n",(0,l.jsxs)(e.li,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"try/catch"})," \u8bed\u53e5\u4e2d\u7528\u4f5c\u5f02\u5e38\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"this\u5f3a\u5236\u8f6c\u578b",children:"this\u5f3a\u5236\u8f6c\u578b"}),"\n",(0,l.jsxs)(e.p,{children:["JavaScript \u4e2d\u6700\u5927\u7684\u4e00\u4e2a\u5b89\u5168\u95ee\u9898\uff0c\u4e5f\u662f\u6700\u4ee4\u4eba\u56f0\u60d1\u7684\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b ",(0,l.jsx)(e.code,{children:"this"})," \u7684\u503c\u662f\u5982\u4f55\u786e\u5b9a\u7684\u3002\u4f7f\u7528\u51fd\u6570\u7684 ",(0,l.jsx)(e.code,{children:"apply()"})," \u6216 ",(0,l.jsx)(e.code,{children:"call()"})," \u65b9\u6cd5\u65f6\uff0c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b ",(0,l.jsx)(e.code,{children:"null"})," \u6216 ",(0,l.jsx)(e.code,{children:"undefined"})," \u503c\u4f1a\u88ab\u5f3a\u5236\u8f6c\u578b\u4e3a\u5168\u5c40\u5bf9\u8c61\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5219\u59cb\u7ec8\u4ee5\u6307\u5b9a\u503c\u4f5c\u4e3a\u51fd\u6570 this \u7684\u503c\uff0c\u65e0\u8bba\u6307\u5b9a\u7684\u662f\u4ec0\u4e48\u503c\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u8bbf\u95ee\u5c5e\u6027\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u8bbf\u95ee\u5168\u5c40\u5c5e\u6027\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51fa\u9519\u8bef\uff0c\u56e0\u4e3athis\u503c\u4e3anull\nlet color = 'red';\nfunction displayColor() {\n  console.log(this.color);\n}\n// error\ndisplayColor.call(null);\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u8be5\u51fd\u6570\u7684 ",(0,l.jsx)(e.code,{children:"this"}),' \u503c\u662f\u5168\u5c40\u5bf9\u8c61\u3002\u7ed3\u679c\u4f1a\u663e\u793a"red"\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8be5\u51fd\u6570\u7684 ',(0,l.jsx)(e.code,{children:"this"})," \u503c\u662f ",(0,l.jsx)(e.code,{children:"null"}),"\uff0c\u56e0\u6b64\u5728\u8bbf\u95ee ",(0,l.jsx)(e.code,{children:"null"})," \u7684\u5c5e\u6027\u65f6\u4f1a\u629b\u51fa\u9519\u8bef\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u5e38\uff0c\u51fd\u6570\u4f1a\u5c06\u5176 ",(0,l.jsx)(e.code,{children:"this"})," \u7684\u503c\u8f6c\u578b\u4e3a\u4e00\u79cd\u5bf9\u8c61\u7c7b\u578b\uff0c\u8fd9\u79cd\u884c\u4e3a\u7ecf\u5e38\u88ab\u79f0\u4e3a\u201c\u88c5\u7bb1\u201d(boxing)\u3002\u8fd9\u610f\u5473\u7740\u539f\u59cb\u503c\u4f1a\u8f6c\u578b\u4e3a\u5b83\u4eec\u7684\u5305\u88c5\u5bf9\u8c61\u7c7b\u578b\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"function foo() {\n  console.log(this);\n}\n\nfoo.call(); // Window {}\nfoo.call(2); // Number {2}\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",metastring:'title="\u4e25\u683c\u6a21\u5f0f"',children:"'use strict';\n\nfunction foo() {\n  console.log(this);\n}\n\nfoo.call(); // undefined\nfoo.call(2); // 2\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u7c7b\u4e0e\u6a21\u5757",children:"\u7c7b\u4e0e\u6a21\u5757"}),"\n",(0,l.jsx)(e.p,{children:"\u7c7b\u548c\u6a21\u5757\u90fd\u662f ECMAScript 6 \u65b0\u589e\u7684\u4ee3\u7801\u5bb9\u5668\u7279\u6027\u3002\u5728\u4e4b\u524d\u7684 ECMAScript \u7248\u672c\u4e2d\u6ca1\u6709\u7c7b\u548c\u6a21\u5757\u8fd9\u4e24\u4e2a\u6982\u5ff5\uff0c\u56e0\u6b64\u4e0d\u7528\u8003\u8651\u4ece\u8bed\u6cd5\u4e0a\u517c\u5bb9\u4e4b\u524d\u7684 ECMAScript \u7248\u672c\u3002\u4e3a\u6b64\uff0cTC39 \u59d4\u5458\u4f1a\u51b3\u5b9a\u5728 ES6 \u7c7b\u548c\u6a21\u5757\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u4ee3\u7801\u9ed8\u8ba4\u90fd\u5904\u4e8e\u4e25\u683c\u6a21\u5f0f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u4e8e\u7c7b\uff0c\u8fd9\u5305\u62ec\u7c7b\u58f0\u660e\u548c\u7c7b\u8868\u8fbe\u5f0f\uff0c\u6784\u9020\u51fd\u6570\u3001\u5b9e\u4f8b\u65b9\u6cd5\u3001\u9759\u6001\u65b9\u6cd5\u3001\u83b7\u53d6\u65b9\u6cd5\u548c\u8bbe\u7f6e\u65b9\u6cd5\u90fd\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u3002\u5bf9\u4e8e\u6a21\u5757\uff0c\u6240\u6709\u5728\u5176\u5185\u90e8\u5b9a\u4e49\u7684\u4ee3\u7801\u90fd\u5904\u4e8e\u4e25\u683c\u6a21\u5f0f\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5176\u4ed6\u53d8\u5316",children:"\u5176\u4ed6\u53d8\u5316"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e25\u683c\u6a21\u5f0f\u4e0b\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u9700\u8981\u6ce8\u610f\u7684\u53d8\u5316\u3002\u9996\u5148\u662f\u6d88\u9664 ",(0,l.jsx)(e.code,{children:"with"})," \u8bed\u53e5\u3002",(0,l.jsx)(e.code,{children:"with"})," \u8bed\u53e5\u6539\u53d8\u4e86\u6807\u8bc6\u7b26\u89e3\u6790\u65f6\u7684\u65b9\u5f0f\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b\u4e3a\u7b80\u5355\u8d77\u89c1\u5df2\u53bb\u6389\u4e86\u8fd9\u4e2a\u8bed\u6cd5\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"with"})," \u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u4f7f\u7528 with \u8bed\u53e5\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u5141\u8bb8\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faSyntaxError\nwith (location) {\n  console.log(href);\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e25\u683c\u6a21\u5f0f\u4e5f\u4ece JavaScript \u4e2d\u53bb\u6389\u4e86\u516b\u8fdb\u5236\u5b57\u9762\u91cf\u3002\u516b\u8fdb\u5236\u5b57\u9762\u91cf\u4ee5\u524d\u5bfc 0 \u5f00\u59cb\uff0c\u4e00\u76f4\u4ee5\u6765\u662f\u5f88\u591a\u9519\u8bef\u7684\u6e90\u5934\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f7f\u7528\u516b\u8fdb\u5236\u5b57\u9762\u91cf\u88ab\u8ba4\u4e3a\u662f\u65e0\u6548\u8bed\u6cd5:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u4f7f\u7528\u516b\u8fdb\u5236\u5b57\u9762\u91cf\n// \u975e\u4e25\u683c\u6a21\u5f0f:\u503c\u4e3a8\n// \u4e25\u683c\u6a21\u5f0f:\u629b\u51faSyntaxError\n// error\nlet value = 010;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["ECMAScript 5 \u4fee\u6539\u4e86\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u7684 ",(0,l.jsx)(e.code,{children:"parseInt()"}),"\uff0c\u5c06\u516b\u8fdb\u5236\u5b57\u9762\u91cf\u5f53\u4f5c\u5e26\u524d\u5bfc 0 \u7684\u5341\u8fdb\u5236\u5b57\u9762\u91cf\u3002 \u4f8b\u5982:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u5728 parseInt() \u4e2d\u4f7f\u7528\u516b\u8fdb\u5236\u5b57\u9762\u91cf\n// \u975e\u4e25\u683c\u6a21\u5f0f: \u503c\u4e3a8\n// \u4e25\u683c\u6a21\u5f0f: \u503c\u4e3a10\nlet value = parseInt('010');\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>i});var l=r(67294);const s={},c=l.createContext(s);function i(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);