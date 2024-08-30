"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[5596],{12882:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),o=n(11151);const a={},i="Atomics \u4e0e SharedArrayBuffer",c={id:"javascript-api/atomics-and-shared-array-buffer",title:"Atomics \u4e0e SharedArrayBuffer",description:"\u591a\u4e2a\u4e0a\u4e0b\u6587\u8bbf\u95ee SharedArrayBuffer \u65f6\uff0c\u5982\u679c\u540c\u65f6\u5bf9\u7f13\u51b2\u533a\u6267\u884c\u64cd\u4f5c\uff0c\u5c31\u53ef\u80fd\u51fa\u73b0\u8d44\u6e90\u4e89\u7528\u95ee\u9898\u3002Atomics API \u901a\u8fc7\u5f3a\u5236\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u5bf9\u7f13\u51b2\u533a\u6267\u884c\u4e00\u4e2a\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8ba9\u591a\u4e2a\u4e0a\u4e0b\u6587\u5b89\u5168\u5730\u8bfb\u5199\u4e00\u4e2a SharedArrayBuffer\u3002Atomics API \u662f ES2017 \u4e2d\u5b9a\u4e49\u7684\u3002",source:"@site/docs/javascript-api/atomics-and-shared-array-buffer.mdx",sourceDirName:"javascript-api",slug:"/javascript-api/atomics-and-shared-array-buffer",permalink:"/javascript-docs/javascript-api/atomics-and-shared-array-buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/javascript-api/atomics-and-shared-array-buffer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JavaScript API",permalink:"/javascript-docs/javascript-api/"},next:{title:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f",permalink:"/javascript-docs/javascript-api/cross-context-messaging"}},t={},l=[{value:"SharedArrayBuffer",id:"sharedarraybuffer",level:2},{value:"\u539f\u5b50\u64cd\u4f5c\u57fa\u7840",id:"\u539f\u5b50\u64cd\u4f5c\u57fa\u7840",level:2},{value:"\u7b97\u672f\u53ca\u4f4d\u64cd\u4f5c\u65b9\u6cd5",id:"\u7b97\u672f\u53ca\u4f4d\u64cd\u4f5c\u65b9\u6cd5",level:3},{value:"\u539f\u5b50\u8bfb\u548c\u5199",id:"\u539f\u5b50\u8bfb\u548c\u5199",level:3},{value:"\u539f\u5b50\u4ea4\u6362",id:"\u539f\u5b50\u4ea4\u6362",level:3},{value:"\u539f\u5b50 Futex \u64cd\u4f5c\u4e0e\u52a0\u9501",id:"\u539f\u5b50-futex-\u64cd\u4f5c\u4e0e\u52a0\u9501",level:3}];function d(e){const r={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"atomics-\u4e0e-sharedarraybuffer",children:"Atomics \u4e0e SharedArrayBuffer"}),"\n",(0,s.jsx)(r.p,{children:"\u591a\u4e2a\u4e0a\u4e0b\u6587\u8bbf\u95ee SharedArrayBuffer \u65f6\uff0c\u5982\u679c\u540c\u65f6\u5bf9\u7f13\u51b2\u533a\u6267\u884c\u64cd\u4f5c\uff0c\u5c31\u53ef\u80fd\u51fa\u73b0\u8d44\u6e90\u4e89\u7528\u95ee\u9898\u3002Atomics API \u901a\u8fc7\u5f3a\u5236\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u5bf9\u7f13\u51b2\u533a\u6267\u884c\u4e00\u4e2a\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8ba9\u591a\u4e2a\u4e0a\u4e0b\u6587\u5b89\u5168\u5730\u8bfb\u5199\u4e00\u4e2a SharedArrayBuffer\u3002Atomics API \u662f ES2017 \u4e2d\u5b9a\u4e49\u7684\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u4ed4\u7ec6\u7814\u7a76\u4f1a\u53d1\u73b0 Atomics API \u975e\u5e38\u50cf\u4e00\u4e2a\u7b80\u5316\u7248\u7684\u6307\u4ee4\u96c6\u67b6\u6784(ISA)\uff0c\u8fd9\u5e76\u975e\u610f\u5916\u3002\u539f\u5b50\u64cd\u4f5c\u7684\u672c\u8d28\u4f1a\u6392\u65a5\u64cd\u4f5c\u7cfb\u7edf\u6216\u8ba1\u7b97\u673a\u786c\u4ef6\u901a\u5e38\u4f1a\u81ea\u52a8\u6267\u884c\u7684\u4f18\u5316(\u6bd4\u5982\u6307\u4ee4\u91cd\u65b0\u6392\u5e8f)\u3002\u539f\u5b50\u64cd\u4f5c\u4e5f\u8ba9\u5e76\u53d1\u8bbf\u95ee\u5185\u5b58\u53d8\u5f97\u4e0d\u53ef\u80fd\uff0c\u5982\u679c\u5e94\u7528\u4e0d\u5f53\u5c31\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u6267\u884c\u53d8\u6162\u3002\u4e3a\u6b64\uff0cAtomics API \u7684\u8bbe\u8ba1\u521d\u8877\u662f\u5728\u6700\u5c11\u4f46\u5f88\u7a33\u5b9a\u7684\u539f\u5b50\u884c\u4e3a\u57fa\u7840\u4e4b\u4e0a\uff0c\u6784\u5efa\u590d\u6742\u7684\u591a\u7ebf\u7a0b JavaScript \u7a0b\u5e8f\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"sharedarraybuffer",children:"SharedArrayBuffer"}),"\n",(0,s.jsx)(r.p,{children:"SharedArrayBuffer \u4e0e ArrayBuffer \u5177\u6709\u540c\u6837\u7684 API\u3002\u4e8c\u8005\u7684\u4e3b\u8981\u533a\u522b\u662f ArrayBuffer \u5fc5\u987b\u5728\u4e0d\u540c\u6267\u884c\u4e0a\u4e0b\u6587\u95f4\u5207\u6362\uff0cSharedArrayBuffer \u5219\u53ef\u4ee5\u88ab\u4efb\u610f\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u540c\u65f6\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u95f4\u5171\u4eab\u5185\u5b58\u610f\u5473\u7740\u5e76\u53d1\u7ebf\u7a0b\u64cd\u4f5c\u6210\u4e3a\u4e86\u53ef\u80fd\u3002\u4f20\u7edf JavaScript \u64cd\u4f5c\u5bf9\u4e8e\u5e76\u53d1\u5185\u5b58\u8bbf\u95ee\u5bfc\u81f4\u7684\u8d44\u6e90\u4e89\u7528\u6ca1\u6709\u63d0\u4f9b\u4fdd\u62a4\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86 4 \u4e2a\u4e13\u7528\u5de5\u4f5c\u7ebf\u7a0b\u8bbf\u95ee\u540c\u4e00\u4e2a SharedArrayBuffer \u5bfc\u81f4\u7684\u8d44\u6e90\u4e89\u7528\u95ee\u9898:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const workerScript = `\n  self.onmessage = ({data}) => {\n    const view = new Uint32Array(data);\n    // \u6267\u884c1000000\u6b21\u52a0\u64cd\u4f5c\n    for (let i = 0; i < 1E6; ++i) {\n      // \u7ebf\u7a0b\u4e0d\u5b89\u5168\u52a0\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u8d44\u6e90\u4e89\u7528\n      view[0] += 1;\n    }\n    self.postMessage(null);\n  };\n`;\n\nconst workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]));\n\n// \u521b\u5efa\u5bb9\u91cf\u4e3a 4 \u7684\u5de5\u4f5c\u7ebf\u7a0b\u6c60\nconst workers = [];\nfor (let i = 0; i < 4; ++i) {\n  workers.push(new Worker(workerScriptBlobUrl));\n}\n\n// \u5728\u6700\u540e\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u5b8c\u6210\u540e\u6253\u5370\u51fa\u6700\u7ec8\u503c let responseCount = 0;\nfor (const worker of workers) {\n  worker.onmessage = () => {\n    if (++responseCount == workers.length) {\n      console.log(`Final buffer value: ${view[0]}`);\n    }\n  };\n}\n\n// \u521d\u59cb\u5316SharedArrayBuffer\nconst sharedArrayBuffer = new SharedArrayBuffer(4);\nconst view = new Uint32Array(sharedArrayBuffer);\nview[0] = 1;\n\n// \u628a SharedArrayBuffer \u53d1\u9001\u5230\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\nfor (const worker of workers) {\n  worker.postMessage(sharedArrayBuffer);\n}\n\n//(\u671f\u5f85\u7ed3\u679c\u4e3a 4000001\u3002\u5b9e\u9645\u8f93\u51fa\u53ef\u80fd\u7c7b\u4f3c\u8fd9\u6837:) // Final buffer value: 2145106\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cAtomics API \u5e94\u8fd0\u800c\u751f\u3002Atomics API \u53ef\u4ee5\u4fdd\u8bc1 SharedArrayBuffer \u4e0a\u7684 JavaScript \u64cd\u4f5c\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u539f\u5b50\u64cd\u4f5c\u57fa\u7840",children:"\u539f\u5b50\u64cd\u4f5c\u57fa\u7840"}),"\n",(0,s.jsx)(r.p,{children:"\u4efb\u4f55\u5168\u5c40\u4e0a\u4e0b\u6587\u4e2d\u90fd\u6709 Atomics \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u4e0a\u66b4\u9732\u4e86\u7528\u4e8e\u6267\u884c\u7ebf\u7a0b\u5b89\u5168\u64cd\u4f5c\u7684\u4e00\u5957\u9759\u6001\u65b9\u6cd5\uff0c\u5176\u4e2d\u591a\u6570\u65b9\u6cd5\u4ee5\u4e00\u4e2a TypedArray \u5b9e\u4f8b(\u4e00\u4e2a SharedArrayBuffer \u7684\u5f15\u7528)\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u4ee5\u76f8\u5173\u64cd\u4f5c\u6570\u4f5c\u4e3a\u540e\u7eed\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u7b97\u672f\u53ca\u4f4d\u64cd\u4f5c\u65b9\u6cd5",children:"\u7b97\u672f\u53ca\u4f4d\u64cd\u4f5c\u65b9\u6cd5"}),"\n",(0,s.jsx)(r.p,{children:"Atomics API \u63d0\u4f9b\u4e86\u4e00\u5957\u7b80\u5355\u7684\u65b9\u6cd5\u7528\u4ee5\u6267\u884c\u5c31\u5730\u4fee\u6539\u64cd\u4f5c\u3002\u5728 ECMA \u89c4\u8303\u4e2d\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u88ab\u5b9a\u4e49\u4e3a AtomicReadModifyWrite \u64cd\u4f5c\u3002\u5728\u5e95\u5c42\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u4f1a\u4ece SharedArrayBuffer \u4e2d\u67d0\u4e2a\u4f4d\u7f6e\u8bfb\u53d6\u503c\uff0c\u7136\u540e\u6267\u884c\u7b97\u672f\u6216\u4f4d\u64cd\u4f5c\uff0c\u6700\u540e\u518d\u628a\u8ba1\u7b97\u7ed3\u679c\u5199\u56de\u76f8\u540c\u7684\u4f4d\u7f6e\u3002\u8fd9\u4e9b\u64cd\u4f5c\u7684\u539f\u5b50\u672c\u8d28\u610f\u5473\u7740\u4e0a\u8ff0\u8bfb\u53d6\u3001\u4fee\u6539\u3001\u5199\u56de\u64cd\u4f5c\u4f1a\u6309\u7167\u987a\u5e8f\u6267\u884c\uff0c\u4e0d\u4f1a\u88ab\u5176\u4ed6\u7ebf\u7a0b\u4e2d\u65ad\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:'title="\u7b97\u672f\u793a\u4f8b"',children:"// \u521b\u5efa\u5927\u5c0f\u4e3a 1 \u7684\u7f13\u51b2\u533a\nlet sharedArrayBuffer = new SharedArrayBuffer(1);\n\n// \u57fa\u4e8e\u7f13\u51b2\u521b\u5efaUint8Array\nlet typedArray = new Uint8Array(sharedArrayBuffer);\n\n// \u6240\u6709ArrayBuffer\u5168\u90e8\u521d\u59cb\u5316\u4e3a0\nconsole.log(typedArray); // Uint8Array[0]\n\nconst index = 0;\nconst increment = 5;\n\n// \u5bf9\u7d22\u5f150\u5904\u7684\u503c\u6267\u884c\u539f\u5b50\u52a05\nAtomics.add(typedArray, index, increment);\n\nconsole.log(typedArray); // Uint8Array[0]\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:'title="\u6f14\u793a\u6240\u6709\u4f4d\u65b9\u6cd5"',children:"// \u521b\u5efa\u5927\u5c0f\u4e3a 1 \u7684\u7f13\u51b2\u533a\nlet sharedArrayBuffer = new SharedArrayBuffer(1);\n\n// \u57fa\u4e8e\u7f13\u51b2\u521b\u5efaUint8Array\nlet typedArray = new Uint8Array(sharedArrayBuffer);\n\n// \u6240\u6709ArrayBuffer\u5168\u90e8\u521d\u59cb\u5316\u4e3a0\nconsole.log(typedArray); // Uint8Array[0]\n\nconst index = 0;\n\n// \u5bf9\u7d22\u5f150\u5904\u7684\u503c\u6267\u884c\u539f\u5b50\u62160b1111\nAtomics.or(typedArray, index, 0b1111);\n\nconsole.log(typedArray); // Uint8Array[15]\n\n// \u5bf9\u7d22\u5f150\u5904\u7684\u503c\u6267\u884c\u539f\u5b50\u4e0e0b1111\nAtomics.and(typedArray, index, 0b1100);\n\nconsole.log(typedArray); // Uint8Array[12]\n\n// \u5bf9\u7d22\u5f150\u5904\u7684\u503c\u6267\u884c\u539f\u5b50\u5f02\u62160b1111\nAtomics.xor(typedArray, index, 0b1111);\n\nconsole.log(typedArray); // Uint8Array[3]\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:'title="\u6539\u5199\u524d\u9762\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u4f8b\u5b50\u793a\u4f8b"',children:"const workerScript = `\n  self.onmessage = ({data}) => {\n  const view = new Uint32Array(data);\n  // \u6267\u884c1000000\u6b21\u52a0\u64cd\u4f5c\n  for (let i = 0; i < 1E6; ++i) {\n      // \u7ebf\u7a0b\u5b89\u5168\u7684\u52a0\u64cd\u4f5c\n      Atomics.add(view, 0, 1);\n    }\n    self.postMessage(null);\n  };\n`;\n\nconst workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]));\n\n// \u521b\u5efa\u5bb9\u91cf\u4e3a 4 \u7684\u5de5\u4f5c\u7ebf\u7a0b\u6c60\nconst workers = [];\nfor (let i = 0; i < 4; ++i) {\n  workers.push(new Worker(workerScriptBlobUrl));\n}\n\n// \u5728\u6700\u540e\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u5b8c\u6210\u540e\u6253\u5370\u51fa\u6700\u7ec8\u503c\nlet responseCount = 0;\nfor (const worker of workers) {\n  worker.onmessage = () => {\n    if (++responseCount == workers.length) {\n      console.log(`Final buffer value: ${view[0]}`);\n    }\n  };\n}\n\n// \u521d\u59cb\u5316SharedArrayBuffer\nconst sharedArrayBuffer = new SharedArrayBuffer(4);\nconst view = new Uint32Array(sharedArrayBuffer);\nview[0] = 1;\n\n// \u628a SharedArrayBuffer \u53d1\u9001\u5230\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\nfor (const worker of workers) {\n  worker.postMessage(sharedArrayBuffer);\n}\n//(\u671f\u5f85\u7ed3\u679c\u4e3a 4000001)\n// Final buffer value: 4000001\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u539f\u5b50\u8bfb\u548c\u5199",children:"\u539f\u5b50\u8bfb\u548c\u5199"}),"\n",(0,s.jsx)(r.p,{children:"\u6d4f\u89c8\u5668\u7684 JavaScript \u7f16\u8bd1\u5668\u548c CPU \u67b6\u6784\u672c\u8eab\u90fd\u6709\u6743\u9650\u91cd\u6392\u6307\u4ee4\u4ee5\u63d0\u5347\u7a0b\u5e8f\u6267\u884c\u6548\u7387\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c JavaScript \u7684\u5355\u7ebf\u7a0b\u73af\u5883\u662f\u53ef\u4ee5\u968f\u65f6\u8fdb\u884c\u8fd9\u79cd\u4f18\u5316\u7684\u3002\u4f46\u591a\u7ebf\u7a0b\u4e0b\u7684\u6307\u4ee4\u91cd\u6392\u53ef\u80fd\u5bfc\u81f4\u8d44\u6e90\u4e89\u7528\uff0c\u800c\u4e14\u6781\u96be\u6392\u9519\u3002"}),"\n",(0,s.jsx)(r.p,{children:"Atomics API \u901a\u8fc7\u4e24\u79cd\u4e3b\u8981\u65b9\u5f0f\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u6240\u6709\u539f\u5b50\u6307\u4ee4\u76f8\u4e92\u4e4b\u95f4\u7684\u987a\u5e8f\u6c38\u8fdc\u4e0d\u4f1a\u91cd\u6392\u3002"}),"\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528\u539f\u5b50\u8bfb\u6216\u539f\u5b50\u5199\u4fdd\u8bc1\u6240\u6709\u6307\u4ee4(\u5305\u62ec\u539f\u5b50\u548c\u975e\u539f\u5b50\u6307\u4ee4)\u90fd\u4e0d\u4f1a\u76f8\u5bf9\u539f\u5b50\u8bfb/\u5199\u91cd\u65b0\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u610f\u5473\u7740\u4f4d\u4e8e\u539f\u5b50\u8bfb/\u5199\u4e4b\u524d\u7684\u6240\u6709\u6307\u4ee4\u4f1a\u5728\u539f\u5b50\u8bfb/\u5199\u53d1\u751f\u524d\u5b8c\u6210\uff0c\u800c\u4f4d\u4e8e\u539f\u5b50\u8bfb/\u5199\u4e4b\u540e\u7684\u6240\u6709\u6307\u4ee4\u4f1a\u5728\u539f\u5b50\u8bfb/\u5199\u5b8c\u6210\u540e\u624d\u4f1a\u5f00\u59cb\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u9664\u4e86\u8bfb\u5199\u7f13\u51b2\u533a\u7684\u503c\uff0c",(0,s.jsx)(r.code,{children:"Atomics.load()"})," \u548c ",(0,s.jsx)(r.code,{children:"Atomics.store()"})," \u8fd8\u53ef\u4ee5\u6784\u5efa\u201c\u4ee3\u7801\u56f4\u680f\u201d\u3002JavaScript \u5f15\u64ce\u4fdd\u8bc1\u975e\u539f\u5b50\u6307\u4ee4\u53ef\u4ee5\u76f8\u5bf9\u4e8e ",(0,s.jsx)(r.code,{children:"load()"})," \u6216 ",(0,s.jsx)(r.code,{children:"store()"})," \u672c\u5730\u91cd\u6392\uff0c\u4f46\u8fd9\u4e2a\u91cd\u6392\u4e0d\u4f1a\u4fb5\u72af\u539f\u5b50\u8bfb/\u5199\u7684\u8fb9\u754c\u3002\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u8fd9\u79cd\u884c\u4e3a:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const sharedArrayBuffer = new SharedArrayBuffer(4);\nconst view = new Uint32Array(sharedArrayBuffer);\n\n// \u6267\u884c\u975e\u539f\u5b50\u5199\nview[0] = 1;\n\n// \u975e\u539f\u5b50\u5199\u53ef\u4ee5\u4fdd\u8bc1\u5728\u8fd9\u4e2a\u8bfb\u64cd\u4f5c\u4e4b\u524d\u5b8c\u6210\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e00\u5b9a\u4f1a\u8bfb\u52301\nconsole.log(Atomics.load(view, 0)); // 1\n\n// \u6267\u884c\u539f\u5b50\u5199\nAtomics.store(view, 0, 2);\n\n// \u975e\u539f\u5b50\u8bfb\u53ef\u4ee5\u4fdd\u8bc1\u5728\u539f\u5b50\u5199\u5b8c\u6210\u540e\u53d1\u751f\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e00\u5b9a\u4f1a\u8bfb\u52302\nconsole.log(view[0]); // 2\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u539f\u5b50\u4ea4\u6362",children:"\u539f\u5b50\u4ea4\u6362"}),"\n",(0,s.jsxs)(r.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u8fde\u7eed\u3001\u4e0d\u95f4\u65ad\u7684\u5148\u8bfb\u540e\u5199\uff0cAtomics API \u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5: ",(0,s.jsx)(r.code,{children:"exchange()"})," \u548c ",(0,s.jsx)(r.code,{children:"compareExchange()"}),"\u3002",(0,s.jsx)(r.code,{children:"Atomics.exchange()"})," \u6267\u884c\u7b80\u5355\u7684\u4ea4\u6362\uff0c\u4ee5\u4fdd\u8bc1\u5176\u4ed6\u7ebf\u7a0b\u4e0d\u4f1a\u4e2d\u65ad\u503c\u7684\u4ea4\u6362:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const sharedArrayBuffer = new SharedArrayBuffer(4);\nconst view = new Uint32Array(sharedArrayBuffer);\n\n// \u5728\u7d22\u5f150\u5904\u5199\u51653\nAtomics.store(view, 0, 3);\n\n// \u4ece\u7d22\u5f150\u5904\u8bfb\u53d6\u503c\uff0c\u7136\u540e\u5728\u7d22\u5f150\u5904\u5199\u51654\nconsole.log(Atomics.exchange(view, 0, 4)); // 3\n\n// \u4ece\u7d22\u5f15 0 \u5904\u8bfb\u53d6\u503c\nconsole.log(Atomics.load(view, 0)); // 4\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u4e2d\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u80fd\u53ea\u5e0c\u671b\u5728\u4e0a\u6b21\u8bfb\u53d6\u67d0\u4e2a\u503c\u4e4b\u540e\u6ca1\u6709\u5176\u4ed6\u7ebf\u7a0b\u4fee\u6539\u8be5\u503c\u7684\u60c5\u51b5\u4e0b\u624d\u5bf9\u5171\u4eab\u7f13\u51b2\u533a\u6267\u884c\u5199\u64cd\u4f5c\u3002\u5982\u679c\u8fd9\u4e2a\u503c\u6ca1\u6709\u88ab\u4fee\u6539\uff0c\u8fd9\u4e2a\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u5b89\u5168\u5730\u5199\u88ab\u4fee\u6539\u4e86\uff0c\u90a3\u4e48\u6267\u884c\u5199\u64cd\u4f5c\u5c06\u4f1a\u7834\u574f\u5176\u4ed6\u7ebf\u7a0b\u8ba1\u7b97\u7684\u503c\u3002\u5bf9\u4e8e\u8fd9\u79cd\u4efb\u52a1\uff0cAtomicsAPI \u63d0\u4f9b\u4e86 ",(0,s.jsx)(r.code,{children:"compareExchange()"})," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u53ea\u5728\u76ee\u6807\u7d22\u5f15\u5904\u7684\u503c\u4e0e\u9884\u671f\u503c\u5339\u914d\u65f6\u624d\u4f1a\u6267\u884c\u5199\u64cd\u4f5c\u3002\u6765\u770b\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const sharedArrayBuffer = new SharedArrayBuffer(4);\nconst view = new Uint32Array(sharedArrayBuffer);\n\n// \u5728\u7d22\u5f150\u5904\u5199\u51655\nAtomics.store(view, 0, 5);\n\n// \u4ece\u7f13\u51b2\u533a\u8bfb\u53d6\u503c\nlet initial = Atomics.load(view, 0);\n\n// \u5bf9\u8fd9\u4e2a\u503c\u6267\u884c\u975e\u539f\u5b50\u64cd\u4f5c\nlet result = initial ** 2;\n\n// \u53ea\u5728\u7f13\u51b2\u533a\u672a\u88ab\u4fee\u6539\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u5411\u7f13\u51b2\u533a\u5199\u5165\u65b0\u503c\nAtomics.compareExchange(view, 0, initial, result);\n\n// \u68c0\u67e5\u5199\u5165\u6210\u529f\nconsole.log(Atomics.load(view, 0)); // 25\n\n// \u5982\u679c\u503c\u4e0d\u5339\u914d\uff0ccompareExchange()\u8c03\u7528\u5219\u4ec0\u4e48\u4e5f\u4e0d\u505a:\nconst sharedArrayBuffer2 = new SharedArrayBuffer(4);\nconst view2 = new Uint32Array(sharedArrayBuffer2);\n\n// \u5728\u7d22\u5f150\u5904\u5199\u51655\nAtomics.store(view2, 0, 5);\n\n// \u4ece\u7f13\u51b2\u533a\u8bfb\u53d6\u503c\nlet initial2 = Atomics.load(view2, 0);\n\n// \u5bf9\u8fd9\u4e2a\u503c\u6267\u884c\u975e\u539f\u5b50\u64cd\u4f5c\nlet result2 = initial2 ** 2;\n\n// \u53ea\u5728\u7f13\u51b2\u533a\u672a\u88ab\u4fee\u6539\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u5411\u7f13\u51b2\u533a\u5199\u5165\u65b0\u503c\nAtomics.compareExchange(view2, 0, -1, result2);\n\n// \u68c0\u67e5\u5199\u5165\u5931\u8d25\nconsole.log(Atomics.load(view2, 0)); // 5\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u539f\u5b50-futex-\u64cd\u4f5c\u4e0e\u52a0\u9501",children:"\u539f\u5b50 Futex \u64cd\u4f5c\u4e0e\u52a0\u9501"}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679c\u6ca1\u6709\u67d0\u79cd\u9501\u673a\u5236\uff0c\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u5c31\u65e0\u6cd5\u652f\u6301\u590d\u6742\u9700\u6c42\u3002\u4e3a\u6b64\uff0cAtomics API \u63d0\u4f9b\u4e86\u6a21\u4eff Linux Futex (\u5feb\u901f\u7528\u6237\u7a7a\u95f4\u4e92\u65a5\u91cf\uff0cfast user-space mutex)\u7684\u65b9\u6cd5\u3002\u8fd9\u4e9b\u65b9\u6cd5\u672c\u8eab\u867d\u7136\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u53ef\u4ee5\u4f5c\u4e3a\u66f4\u590d\u6742\u9501\u673a\u5236\u7684\u57fa\u672c\u7ec4\u4ef6\u3002"}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"\u6240\u6709\u539f\u5b50 Futex \u64cd\u4f5c\u53ea\u80fd\u7528\u4e8e Int32Array \u89c6\u56fe\u3002\u800c\u4e14\uff0c\u4e5f\u53ea\u80fd\u7528\u5728\u5de5\u4f5c\u7ebf\u7a0b\u5185\u90e8\u3002"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Atomics.wait()"})," \u548c ",(0,s.jsx)(r.code,{children:"Atomics.notify()"})," \u901a\u8fc7\u793a\u4f8b\u5f88\u5bb9\u6613\u7406\u89e3\u3002\u4e0b\u9762\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u521b\u5efa\u4e86 4 \u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u7528\u4e8e\u5bf9\u957f\u5ea6\u4e3a 1 \u7684 Int32Array \u8fdb\u884c\u64cd\u4f5c\u3002\u8fd9\u4e9b\u5de5\u4f5c\u7ebf\u7a0b\u4f1a\u4f9d\u6b21\u53d6\u5f97\u9501\u5e76\u6267\u884c\u81ea\u5df1\u7684\u52a0\u64cd\u4f5c:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const workerScript = `\nself.onmessage = ({data}) => {\n  const view = new Int32Array(data);\n  console.log('Waiting to obtain lock');\n  // \u9047\u5230\u521d\u59cb\u503c\u5219\u505c\u6b62\uff0c10000\u6beb\u79d2\u8d85\u65f6\n  Atomics.wait(view, 0, 0, 1E5);\n  console.log('Obtained lock');\n  // \u5728\u7d22\u5f150\u5904\u52a01\n  Atomics.add(view, 0, 1);\n  console.log('Releasing lock');\n  // \u53ea\u5141\u8bb8 1 \u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u7ee7\u7eed\u6267\u884c\n  Atomics.notify(view, 0, 1);\n  self.postMessage(null);\n};\n`;\n\nconst workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]));\nconst workers = [];\nfor (let i = 0; i < 4; ++i) {\n  workers.push(new Worker(workerScriptBlobUrl));\n}\n\n// \u5728\u6700\u540e\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u5b8c\u6210\u540e\u6253\u5370\u51fa\u6700\u7ec8\u503c\nlet responseCount = 0;\nfor (const worker of workers) {\n  worker.onmessage = () => {\n    if (++responseCount === workers.length) {\n      console.log(`Final buffer value: ${view[0]}`);\n    }\n  };\n}\n\n// \u521d\u59cb\u5316SharedArrayBuffer\nconst sharedArrayBuffer = new SharedArrayBuffer(8);\nconst view = new Int32Array(sharedArrayBuffer);\n\n// \u628a SharedArrayBuffer \u53d1\u9001\u5230\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\nfor (const worker of workers) {\n  worker.postMessage(sharedArrayBuffer);\n}\n\n// 1000 \u6beb\u79d2\u540e\u91ca\u653e\u7b2c\u4e00\u4e2a\u9501\nsetTimeout(() => Atomics.notify(view, 0, 1), 1000);\n\n// Waiting to obtain lock\n// Waiting to obtain lock\n// Waiting to obtain lock\n// Waiting to obtain lock\n// Obtained lock\n// Releasing lock\n// Obtained lock\n// Releasing lock\n// Obtained lock\n// Releasing lock\n// Obtained lock\n// Releasing lock\n// Final buffer value: 4\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u56e0\u4e3a\u662f\u4f7f\u7528 0 \u6765\u521d\u59cb\u5316 SharedArrayBuffer\uff0c\u6240\u4ee5\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u4f1a\u5230\u8fbe ",(0,s.jsx)(r.code,{children:"Atomics.wait()"})," \u5e76\u505c\u6b62\u6267\u884c\u3002\u5728\u505c\u6b62\u72b6\u6001\u4e0b\uff0c\u6267\u884c\u7ebf\u7a0b\u5b58\u5728\u4e8e\u4e00\u4e2a\u7b49\u5f85\u961f\u5217\u4e2d\uff0c\u5728\u7ecf\u8fc7\u6307\u5b9a\u65f6\u95f4\u6216\u5728\u76f8\u5e94\u7d22\u5f15\u4e0a\u8c03\u7528 ",(0,s.jsx)(r.code,{children:"Atomics.notify()"})," \u4e4b\u524d\uff0c\u4e00\u76f4\u4fdd\u6301\u6682\u505c\u72b6\u6001\u30021000 \u6beb\u79d2\u4e4b\u540e\uff0c\u9876\u90e8\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u8c03\u7528 ",(0,s.jsx)(r.code,{children:"Atomics.notify()"})," \u91ca\u653e\u5176\u4e2d\u4e00\u4e2a\u7b49\u5f85\u7684\u7ebf\u7a0b\u3002\u8fd9\u4e2a\u7ebf\u7a0b\u6267\u884c\u5b8c\u6bd5\u540e\u4f1a\u518d\u6b21\u8c03\u7528 ",(0,s.jsx)(r.code,{children:"Atomics.notify()"})," \u91ca\u653e\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u6301\u7eed\u5230\u6240\u6709\u7ebf\u7a0b\u90fd\u6267\u884c\u5b8c\u6bd5\u5e76\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"postMessage()"})," \u4f20\u51fa\u6700\u7ec8\u7684\u503c\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["Atomics API \u8fd8\u63d0\u4f9b\u4e86 ",(0,s.jsx)(r.code,{children:"Atomics.isLockFree()"})," \u65b9\u6cd5\u3002\u4e0d\u8fc7\u6211\u4eec\u57fa\u672c\u4e0a\u5e94\u8be5\u4e0d\u4f1a\u7528\u5230\u3002\u8fd9\u4e2a\u65b9\u6cd5\u5728\u9ad8\u6027\u80fd\u7b97\u6cd5\u4e2d\u53ef\u4ee5\u7528\u6765\u786e\u5b9a\u662f\u5426\u6709\u5fc5\u8981\u83b7\u53d6\u9501\u3002\u89c4\u8303\u4e2d\u7684\u4ecb\u7ecd\u5982\u4e0b:"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Atomics.isLockFree()"})," \u662f\u4e00\u4e2a\u4f18\u5316\u539f\u8bed\u3002\u57fa\u672c\u4e0a\uff0c\u5982\u679c\u4e00\u4e2a\u539f\u5b50\u539f\u8bed(",(0,s.jsx)(r.code,{children:"compareExchange"}),"\u3001 ",(0,s.jsx)(r.code,{children:"load"}),"\u3001",(0,s.jsx)(r.code,{children:"store"}),"\u3001",(0,s.jsx)(r.code,{children:"add"}),"\u3001",(0,s.jsx)(r.code,{children:"sub"}),"\u3001",(0,s.jsx)(r.code,{children:"and"}),"\u3001",(0,s.jsx)(r.code,{children:"or"}),"\u3001",(0,s.jsx)(r.code,{children:"xor"})," \u6216 ",(0,s.jsx)(r.code,{children:"exchange"}),")\u5728 n \u5b57\u8282\u5927\u5c0f\u7684\u6570\u636e\u4e0a\u7684\u539f\u5b50\u6b65\u9aa4\u5728\u4e0d\u8c03\u7528\u4ee3\u7406\u5728\u7ec4\u6210\u6570\u636e\u7684 n \u5b57\u8282\u4e4b\u5916\u83b7\u5f97\u9501\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u6267\u884c\uff0c\u5219 ",(0,s.jsx)(r.code,{children:"Atomics.isLockFree(n)"})," \u4f1a\u8fd4\u56de true\u3002\u9ad8\u6027\u80fd\u7b97\u6cd5\u4f1a\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"Atomics.isLockFree"})," \u786e\u5b9a\u662f\u5426\u5728\u5173\u952e\u90e8\u5206\u4f7f\u7528\u9501\u6216\u539f\u5b50\u64cd\u4f5c\u3002\u5982\u679c\u539f\u5b50\u539f\u8bed\u9700\u8981\u52a0\u9501\uff0c\u5219\u7b97\u6cd5\u63d0\u4f9b\u81ea\u5df1\u7684\u9501\u4f1a\u66f4\u9ad8\u6548\u3002",(0,s.jsx)(r.code,{children:"Atomics.isLockFree(4)"})," \u59cb\u7ec8\u8fd4\u56de true\uff0c\u56e0\u4e3a\u5728\u6240\u6709\u5df2\u77e5\u7684\u76f8\u5173\u786c\u4ef6\u4e0a\u90fd\u662f\u652f\u6301\u7684\u3002\u80fd\u591f\u5982\u6b64\u5047\u8bbe\u901a\u5e38\u53ef\u4ee5\u7b80\u5316\u7a0b\u5e8f\u3002"]}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var s=n(67294);const o={},a=s.createContext(o);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);