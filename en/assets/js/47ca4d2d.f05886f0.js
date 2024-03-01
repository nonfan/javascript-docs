"use strict";(self.webpackChunkagoodbook=self.webpackChunkagoodbook||[]).push([[3752],{9102:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var a=s(5893),c=s(1151);const l={},o="\u5f02\u6b65\u51fd\u6570",i={id:"promise-and-async-function/async-function",title:"\u5f02\u6b65\u51fd\u6570",description:"\u5f02\u6b65\u51fd\u6570\uff0c\u4e5f\u79f0\u4e3a \u201casync/await\u201d (\u8bed\u6cd5\u5173\u952e\u5b57\uff0c\u5373 Promise \u8bed\u6cd5\u7cd6)\uff0c\u662f ES6 \u671f\u7ea6\u6a21\u5f0f\u5728 ECMAScript \u51fd\u6570\u4e2d\u7684\u5e94\u7528\u3002async/await \u662f ES8 \u89c4\u8303\u65b0\u589e\u7684\u3002\u8fd9\u4e2a\u7279\u6027\u4ece\u884c\u4e3a\u548c\u8bed\u6cd5\u4e0a\u90fd\u589e\u5f3a\u4e86 JavaScript\uff0c\u8ba9\u4ee5\u540c\u6b65\u65b9\u5f0f\u5199\u7684\u4ee3\u7801\u80fd\u591f\u5f02\u6b65\u6267\u884c\u3002",source:"@site/docs/promise-and-async-function/async-function.mdx",sourceDirName:"promise-and-async-function",slug:"/promise-and-async-function/async-function",permalink:"/javascript/en/promise-and-async-function/async-function",draft:!1,unlisted:!1,editUrl:"https://github.com/agoodbook/javascript/tree/main/docs/promise-and-async-function/async-function.mdx",tags:[],version:"current",lastUpdatedAt:1709335647,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"docs",previous:{title:"\u671f\u7ea6 Promise",permalink:"/javascript/en/promise-and-async-function/promise"},next:{title:"window \u5bf9\u8c61",permalink:"/javascript/en/bom/window"}},r={},t=[{value:"\u5f02\u6b65\u51fd\u6570",id:"\u5f02\u6b65\u51fd\u6570-1",level:2},{value:"async",id:"async",level:3},{value:"await",id:"await",level:3},{value:"await \u7684\u9650\u5236",id:"await-\u7684\u9650\u5236",level:3},{value:"\u505c\u6b62\u548c\u6062\u590d\u6267\u884c",id:"\u505c\u6b62\u548c\u6062\u590d\u6267\u884c",level:2},{value:"\u5f02\u6b65\u51fd\u6570\u7b56\u7565",id:"\u5f02\u6b65\u51fd\u6570\u7b56\u7565",level:2},{value:"\u5b9e\u73b0 sleep()",id:"\u5b9e\u73b0-sleep",level:3},{value:"\u5229\u7528\u5e73\u884c\u6267\u884c",id:"\u5229\u7528\u5e73\u884c\u6267\u884c",level:3},{value:"\u4e32\u884c\u6267\u884c\u671f\u7ea6",id:"\u4e32\u884c\u6267\u884c\u671f\u7ea6",level:3},{value:"\u6808\u8ffd\u8e2a\u4e0e\u5185\u5b58\u7ba1\u7406",id:"\u6808\u8ffd\u8e2a\u4e0e\u5185\u5b58\u7ba1\u7406",level:3}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u5f02\u6b65\u51fd\u6570",children:"\u5f02\u6b65\u51fd\u6570"}),"\n",(0,a.jsx)(e.p,{children:"\u5f02\u6b65\u51fd\u6570\uff0c\u4e5f\u79f0\u4e3a \u201casync/await\u201d (\u8bed\u6cd5\u5173\u952e\u5b57\uff0c\u5373 Promise \u8bed\u6cd5\u7cd6)\uff0c\u662f ES6 \u671f\u7ea6\u6a21\u5f0f\u5728 ECMAScript \u51fd\u6570\u4e2d\u7684\u5e94\u7528\u3002async/await \u662f ES8 \u89c4\u8303\u65b0\u589e\u7684\u3002\u8fd9\u4e2a\u7279\u6027\u4ece\u884c\u4e3a\u548c\u8bed\u6cd5\u4e0a\u90fd\u589e\u5f3a\u4e86 JavaScript\uff0c\u8ba9\u4ee5\u540c\u6b65\u65b9\u5f0f\u5199\u7684\u4ee3\u7801\u80fd\u591f\u5f02\u6b65\u6267\u884c\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"/**\n * Promise ES6\u8bed\u6cd5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u662f\u590d\u6742\u7684\uff0c\u5982\u679c\u9700\u8981\u83b7\u53d6\u89e3\u51b3\u503c\uff0c\u5219\u5fc5\u987b\u5199\u5165\u5904\u7406\u7a0b\u5e8f\n * \u5982\u4e0b\u4ee3\u7801\u6f14\u793a\uff1a\n */\n\nconst p = new Promise((resolve, reject) => {\n  setTimeout(resolve, 1000, 'success');\n});\n\np.then(value => console.log(value));\n// 1s\u540e\u6253\u5370 success\n\n/**\n * \u6539\u8fdb\u4e00\u4e0b\uff0c\u63d0\u524d\u5b9a\u4e49\u5904\u7406\u7a0b\u5e8f\n */\n\nfunction resolveHandler(value) {\n  console.log(value);\n}\n\np.then(resolveHandler);\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u4e2a\u6539\u8fdb\u5176\u5b9e\u4e5f\u4e0d\u5927\u3002\u8fd9\u662f\u56e0\u4e3a\u4efb\u4f55\u9700\u8981\u8bbf\u95ee\u8fd9\u4e2a\u671f\u7ea6\u6240\u4ea7\u751f\u503c\u7684\u4ee3\u7801\uff0c\u90fd\u9700\u8981\u4ee5\u5904\u7406\u7a0b\u5e8f\u7684\u5f62\u5f0f\u6765\u63a5\u6536\u8fd9\u4e2a\u503c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ee3\u7801\u7167\u6837\u8fd8\u662f\u8981\u653e\u5230\u5904\u7406\u7a0b\u5e8f\u91cc\u3002ES8 \u4e3a\u6b64\u63d0\u4f9b\u4e86 async/await \u5173\u952e\u5b57\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u5f02\u6b65\u51fd\u6570-1",children:"\u5f02\u6b65\u51fd\u6570"}),"\n",(0,a.jsxs)(e.p,{children:["ES8 \u7684 async/await \u65e8\u5728\u89e3\u51b3\u5229\u7528\u5f02\u6b65\u7ed3\u6784\u7ec4\u7ec7\u4ee3\u7801\u7684\u95ee\u9898\u3002\u4e3a\u6b64\uff0cECMAScript \u5bf9\u51fd\u6570\u8fdb\u884c\u4e86\u6269\u5c55\uff0c\u4e3a\u5176\u589e\u52a0\u4e86\u4e24\u4e2a\u65b0\u5173\u952e\u5b57\uff1a",(0,a.jsx)(e.code,{children:"async"})," \u548c ",(0,a.jsx)(e.code,{children:"await"}),"\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"async",children:"async"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"async"})," \u5173\u952e\u5b57\u7528\u4e8e\u58f0\u660e\u5f02\u6b65\u51fd\u6570\u3002\u8fd9\u4e2a\u5173\u952e\u5b57\u53ef\u4ee5\u7528\u5728\u51fd\u6570\u58f0\u660e\u3001\u51fd\u6570\u8868\u8fbe\u5f0f\u3001\u7bad\u5934\u51fd\u6570\u548c\u7c7b\u65b9\u6cd5\u4e0a\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function name() {}\n\nlet name2 = async function () {};\n\nlet name3 = async () => {};\n\nclass People {\n  async getName() {}\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5f02\u6b65\u51fd\u6570\u5982\u679c\u4f7f\u7528 return \u5173\u952e\u5b57\u8fd4\u56de\u4e86\u503c\uff08\u5982\u679c\u6ca1\u6709 return \u5219\u4f1a\u8fd4\u56de undefined\uff09\uff0c\u8fd9\u4e2a\u503c\u4f1a\u88ab Promise.resolve()\u5305\u88c5\u6210\u4e00\u4e2a\u671f\u7ea6\u5bf9\u8c61\u3002\u5f02\u6b65\u51fd\u6570\u59cb\u7ec8\u8fd4\u56de\u671f\u7ea6\u5bf9\u8c61\u3002\u5728\u51fd\u6570\u5916\u90e8\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u5f97\u5230\u5b83\u8fd4\u56de\u7684\u671f\u7ea6\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function foo() {\n  return 'success';\n\n  /**\n   * \u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u671f\u7ea6\u5bf9\u8c61\u4e5f\u662f\u4e00\u6837\u7684\n   * return Promise.resolve(\"success\")\n   */\n}\n\n// \u7ed9\u8fd4\u56de\u7684\u671f\u7ea6\u6dfb\u52a0\u4e00\u4e2a\u89e3\u51b3\u5904\u7406\u7a0b\u5e8f\nfoo().then(console.log); // success\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"\u5f02\u6b65\u51fd\u6570\u7684\u8fd4\u56de\u503c\u671f\u5f85"}),"\uff08\u4f46\u5b9e\u9645\u4e0a\u5e76\u4e0d\u8981\u6c42\uff09\u4e00\u4e2a\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61\uff0c\u4f46\u5e38\u89c4\u7684\u503c\u4e5f\u53ef\u4ee5\u3002\u5982\u679c\u8fd4\u56de\u7684\u662f\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u7531\u63d0\u4f9b\u7ed9 then()\u7684\u5904\u7406\u7a0b\u5e8f\u201c\u89e3\u5305\u201d\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8fd4\u56de\u503c\u5c31\u88ab\u5f53\u4f5c\u5df2\u7ecf\u89e3\u51b3\u7684\u671f\u7ea6\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u6f14\u793a\u4e86\u8fd9\u4e9b\u60c5\u51b5\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"/*\u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u503c*/\nasync function fn1() {\n  return 'fn1';\n}\nfn1().then(console.log); // fn1\n\n/*\u8fd4\u56de\u4e00\u4e2a\u6ca1\u6709\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61*/\nasync function fn2() {\n  return ['fn2'];\n}\nfn2().then(console.log); // ['fn2']\n\n/*\u8fd4\u56de\u4e00\u4e2a\u6ca1\u6709\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61*/\nasync function fn3() {\n  const thenable = {\n    then(callback) {\n      callback('fn3');\n    },\n  };\n  return thenable;\n}\nfn3().then(console.log); // fn3\n\n/*\u8fd4\u56de\u4e00\u4e2a\u671f\u7ea6*/\nasync function fn4() {\n  return Promise.resolve('fn4');\n}\nfn4().then(console.log); // fn4\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e0e\u5728\u671f\u7ea6\u5904\u7406\u7a0b\u5e8f\u4e2d\u4e00\u6837\uff0c\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u629b\u51fa\u9519\u8bef\u4f1a\u8fd4\u56de\u62d2\u7edd\u7684\u671f\u7ea6\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function fn() {\n  throw 'fn error';\n}\n\n// \u7ed9\u8fd4\u56de\u7684\u671f\u7ea6\u6dfb\u52a0\u4e00\u4e2a\u62d2\u7edd\u5904\u7406\u7a0b\u5e8f\nfn1().catch(console.log); // fn error\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e0d\u8fc7\uff0c\u62d2\u7edd\u671f\u7ea6\u7684\u9519\u8bef\u4e0d\u4f1a\u88ab\u5f02\u6b65\u51fd\u6570\u6355\u83b7\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function fn() {\n  Promise.reject('error');\n}\n\nfn().catch(console.log);\n// Uncaught (in promise) error\n"})}),"\n",(0,a.jsx)(e.h3,{id:"await",children:"await"}),"\n",(0,a.jsxs)(e.p,{children:["\u56e0\u4e3a\u5f02\u6b65\u51fd\u6570\u4e3b\u8981\u9488\u5bf9\u4e0d\u4f1a\u9a6c\u4e0a\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u6240\u4ee5\u81ea\u7136\u9700\u8981\u4e00\u79cd\u6682\u505c\u548c\u6062\u590d\u6267\u884c\u7684\u80fd\u529b\u3002\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"await"})," \u5173\u952e\u5b57\u53ef\u4ee5\u6682\u505c\u5f02\u6b65\u51fd\u6570\u4ee3\u7801\u7684\u6267\u884c\uff0c\u7b49\u5f85\u671f\u7ea6\u89e3\u51b3\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function fn() {\n  console.log(2);\n  const p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 4));\n\n  console.log(await p);\n  console.log(5);\n}\n\nconsole.log(1);\nfn();\nconsole.log(3);\n// \u6253\u5370\u987a\u5e8f\uff1a1 2 3 4 5\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6ce8\u610f\uff0cawait \u5173\u952e\u5b57\u4f1a\u6682\u505c\u6267\u884c\u5f02\u6b65\u51fd\u6570\u540e\u9762\u7684\u4ee3\u7801\uff0c\u8ba9\u51fa JavaScript \u8fd0\u884c\u65f6\u7684\u6267\u884c\u7ebf\u7a0b\u3002\u8fd9\u4e2a\u884c\u4e3a\u4e0e\u751f\u6210\u5668\u51fd\u6570\u4e2d\u7684 yield \u5173\u952e\u5b57\u662f\u4e00\u6837\u7684\u3002await \u5173\u952e\u5b57\u540c\u6837\u662f\u5c1d\u8bd5\u201c\u89e3\u5305\u201d\u5bf9\u8c61\u7684\u503c\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u503c\u4f20\u7ed9\u8868\u8fbe\u5f0f\uff0c\u518d\u5f02\u6b65\u6062\u590d\u5f02\u6b65\u51fd\u6570\u7684\u6267\u884c\u3002"}),"\n",(0,a.jsx)(e.p,{children:"await \u5173\u952e\u5b57\u7684\u7528\u6cd5\u4e0e JavaScript \u7684\u4e00\u5143\u64cd\u4f5c\u4e00\u6837\u3002\u5b83\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5728\u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u6240\u793a\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"(async () => {\n  console.log(await Promise.resolve('01'));\n\n  // await \u89e3\u5305\u83b7\u53d6\u89e3\u51b3\u503c\uff0c\u8d4b\u503c\u7ed9value\u53d8\u91cf\n  const value1 = await Promise.resolve('02');\n\n  const value2 = await new Promise((resolve, reject) =>\n    setTimeout(resolve, 1000, 03),\n  );\n})();\n"})}),"\n",(0,a.jsx)(e.p,{children:"await \u5173\u952e\u5b57\u671f\u5f85\uff08\u4f46\u5b9e\u9645\u4e0a\u5e76\u4e0d\u8981\u6c42\uff09\u4e00\u4e2a\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61\uff0c\u4f46\u5e38\u89c4\u7684\u503c\u4e5f\u53ef\u4ee5\u3002\u5982\u679c\u662f\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u7531 await \u6765\u201c\u89e3\u5305\u201d\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8fd9\u4e2a\u503c\u5c31\u88ab\u5f53\u4f5c\u5df2\u7ecf\u89e3\u51b3\u7684\u671f\u7ea6\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u6f14\u793a\u4e86\u8fd9\u4e9b\u60c5\u51b5\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"(async () => {\n  // \u7b49\u5f85\u4e00\u4e2a\u539f\u59cb\u503c\n  console.log(await '01');\n\n  // \u7b49\u5f85\u4e00\u4e2a\u6ca1\u6709\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61\n  console.log(await ['02']);\n\n  // \u7b49\u5f85\u4e00\u4e2a\u6ca1\u6709\u5b9e\u73b0 thenable \u63a5\u53e3\u7684\u5bf9\u8c61\n  const thenable = {\n    then(callback) {\n      callback('03');\n    },\n  };\n  console.log(await thenable);\n\n  // \u7b49\u5f85\u4e00\u4e2a\u671f\u7ea6\n  console.log(await Promise.resolve('04'));\n\n  // '01' '02' ['03'] '04'\n})();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"await-\u7684\u9650\u5236",children:"await \u7684\u9650\u5236"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"await"})," \u5173\u952e\u5b57\u5fc5\u987b\u5728\u901a\u8fc7 ",(0,a.jsx)(e.code,{children:"async"})," \u58f0\u660e\u7684\u5f02\u6b65\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u4e0d\u80fd\u5728\u9876\u7ea7\u4e0a\u4e0b\u6587\u5982 ",(0,a.jsx)(e.code,{children:"script"})," \u6807\u7b7e\u6216\u6a21\u5757\u4e2d\u4f7f\u7528\u3002\u4e0d\u8fc7\uff0c\u5b9a\u4e49\u5e76\u7acb\u5373\u8c03\u7528\u5f02\u6b65\u51fd\u6570\u662f\u6ca1\u95ee\u9898\u7684\u3002\u4e0b\u9762\u4e24\u6bb5\u4ee3\u7801\u5b9e\u9645\u662f\u76f8\u540c\u7684\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function fn() {\n  console.log(await Promise.resolve('success'));\n}\n\n// \u7acb\u5373\u8c03\u7528\u7684\u5f02\u6b65\u51fd\u6570\n(async () => {\n  console.log(await Promise.resolve('success'));\n})();\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u505c\u6b62\u548c\u6062\u590d\u6267\u884c",children:"\u505c\u6b62\u548c\u6062\u590d\u6267\u884c"}),"\n",(0,a.jsx)(e.h2,{id:"\u5f02\u6b65\u51fd\u6570\u7b56\u7565",children:"\u5f02\u6b65\u51fd\u6570\u7b56\u7565"}),"\n",(0,a.jsx)(e.h3,{id:"\u5b9e\u73b0-sleep",children:"\u5b9e\u73b0 sleep()"}),"\n",(0,a.jsx)(e.h3,{id:"\u5229\u7528\u5e73\u884c\u6267\u884c",children:"\u5229\u7528\u5e73\u884c\u6267\u884c"}),"\n",(0,a.jsx)(e.h3,{id:"\u4e32\u884c\u6267\u884c\u671f\u7ea6",children:"\u4e32\u884c\u6267\u884c\u671f\u7ea6"}),"\n",(0,a.jsx)(e.h3,{id:"\u6808\u8ffd\u8e2a\u4e0e\u5185\u5b58\u7ba1\u7406",children:"\u6808\u8ffd\u8e2a\u4e0e\u5185\u5b58\u7ba1\u7406"})]})}function h(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}}}]);