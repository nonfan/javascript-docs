"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[4734],{25146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var l=i(85893),s=i(11151);const t={},r="File API \u4e0e Blob API",d={id:"javascript-api/file-api-and-blob-api",title:"File API \u4e0e Blob API",description:"Web \u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u4e2a\u4e3b\u8981\u7684\u75db\u70b9\u662f\u65e0\u6cd5\u64cd\u4f5c\u7528\u6237\u8ba1\u7b97\u673a\u4e0a\u7684\u6587\u4ef6\u30022000 \u5e74\u4e4b\u524d\uff0c\u5904\u7406\u6587\u4ef6\u7684\u552f\u4e00\u65b9\u5f0f\u662f\u628a `` \u653e\u5230\u4e00\u4e2a\u8868\u5355\u91cc\uff0c\u4ec5\u6b64\u800c\u5df2\u3002File API \u4e0e Blob API \u662f\u4e3a\u4e86\u8ba9 Web \u5f00\u53d1\u8005\u80fd\u4ee5\u5b89\u5168\u7684\u65b9\u5f0f\u8bbf\u95ee\u5ba2\u6237\u7aef\u673a\u5668\u4e0a\u7684\u6587\u4ef6\uff0c\u4ece\u800c\u66f4\u597d\u5730\u4e0e\u8fd9\u4e9b\u6587\u4ef6\u4ea4\u4e92\u800c\u8bbe\u8ba1\u7684\u3002",source:"@site/docs/javascript-api/file-api-and-blob-api.mdx",sourceDirName:"javascript-api",slug:"/javascript-api/file-api-and-blob-api",permalink:"/javascript-docs/javascript-api/file-api-and-blob-api",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/javascript-api/file-api-and-blob-api.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Encoding API",permalink:"/javascript-docs/javascript-api/encoding-api"},next:{title:"\u539f\u751f\u62d6\u653e",permalink:"/javascript-docs/javascript-api/native-drag-and-drop"}},a={},c=[{value:"File \u7c7b\u578b",id:"file-\u7c7b\u578b",level:2},{value:"FileReader \u7c7b\u578b",id:"filereader-\u7c7b\u578b",level:2},{value:"FileReaderSync \u7c7b\u578b",id:"filereadersync-\u7c7b\u578b",level:2},{value:"Blob \u4e0e\u90e8\u5206\u8bfb\u53d6",id:"blob-\u4e0e\u90e8\u5206\u8bfb\u53d6",level:2},{value:"\u5bf9\u8c61 URL \u4e0e Blob",id:"\u5bf9\u8c61-url-\u4e0e-blob",level:2},{value:"\u8bfb\u53d6\u62d6\u653e\u6587\u4ef6",id:"\u8bfb\u53d6\u62d6\u653e\u6587\u4ef6",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"file-api-\u4e0e-blob-api",children:"File API \u4e0e Blob API"}),"\n",(0,l.jsxs)(n.p,{children:["Web \u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u4e2a\u4e3b\u8981\u7684\u75db\u70b9\u662f\u65e0\u6cd5\u64cd\u4f5c\u7528\u6237\u8ba1\u7b97\u673a\u4e0a\u7684\u6587\u4ef6\u30022000 \u5e74\u4e4b\u524d\uff0c\u5904\u7406\u6587\u4ef6\u7684\u552f\u4e00\u65b9\u5f0f\u662f\u628a ",(0,l.jsx)(n.code,{children:'<input type="file">'})," \u653e\u5230\u4e00\u4e2a\u8868\u5355\u91cc\uff0c\u4ec5\u6b64\u800c\u5df2\u3002File API \u4e0e Blob API \u662f\u4e3a\u4e86\u8ba9 Web \u5f00\u53d1\u8005\u80fd\u4ee5\u5b89\u5168\u7684\u65b9\u5f0f\u8bbf\u95ee\u5ba2\u6237\u7aef\u673a\u5668\u4e0a\u7684\u6587\u4ef6\uff0c\u4ece\u800c\u66f4\u597d\u5730\u4e0e\u8fd9\u4e9b\u6587\u4ef6\u4ea4\u4e92\u800c\u8bbe\u8ba1\u7684\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"file-\u7c7b\u578b",children:"File \u7c7b\u578b"}),"\n",(0,l.jsx)(n.p,{children:"File API \u4ecd\u7136\u4ee5\u8868\u5355\u4e2d\u7684\u6587\u4ef6\u8f93\u5165\u5b57\u6bb5\u4e3a\u57fa\u7840\uff0c\u4f46\u662f\u589e\u52a0\u4e86\u76f4\u63a5\u8bbf\u95ee\u6587\u4ef6\u4fe1\u606f\u7684\u80fd\u529b\u3002HTML5 \u5728 DOM \u4e0a\u4e3a\u6587\u4ef6\u8f93\u5165\u5143\u7d20\u6dfb\u52a0\u4e86 files \u96c6\u5408\u3002\u5f53\u7528\u6237\u5728\u6587\u4ef6\u5b57\u6bb5\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u65f6\uff0c\u8fd9\u4e2a files \u96c6\u5408\u4e2d\u4f1a\u5305\u542b\u4e00\u7ec4 File \u5bf9\u8c61\uff0c\u8868\u793a\u88ab\u9009\u4e2d\u7684\u6587\u4ef6\u3002\u6bcf\u4e2a File \u5bf9\u8c61\u90fd\u6709\u4e00\u4e9b\u53ea\u8bfb\u5c5e\u6027\u3002"}),"\n",(0,l.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"name"}),": \u672c\u5730\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u540d\u3002"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"size"}),": \u4ee5\u5b57\u8282\u8ba1\u7684\u6587\u4ef6\u5927\u5c0f\u3002"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"type"}),": \u5305\u542b\u6587\u4ef6 MIME \u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"lastModifiedDate"}),": \u8868\u793a\u6587\u4ef6\u6700\u540e\u4fee\u6539\u65f6\u95f4\u7684\u5b57\u7b26\u4e32\u3002\u8fd9\u4e2a\u5c5e\u6027\u53ea\u6709 Chrome \u5b9e\u73b0\u4e86\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="\u9009\u53d6\u6587\u4ef6\u793a\u4f8b"',children:"\x3c!--multiple: \u6587\u4ef6\u591a\u9009--\x3e\n<input type=\"file\" id=\"files-list\" multiple />\n<script>\n  // \u901a\u8fc7\u76d1\u542c change \u4e8b\u4ef6\u7136\u540e\u904d\u5386 files \u96c6\u5408\u53ef\u4ee5\u53d6\u5f97\u6bcf\u4e2a\u9009\u4e2d\u6587\u4ef6\u7684\u4fe1\u606f:\n\n  let filesList = document.getElementById('files-list');\n  filesList.addEventListener('change', event => {\n    let files = event.target.files,\n      i = 0,\n      len = files.length;\n    while (i < len) {\n      const f = files[i];\n      console.log(`${f.name} (${f.type}, ${f.size} bytes)`);\n      i++;\n    }\n  });\n<\/script>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"filereader-\u7c7b\u578b",children:"FileReader \u7c7b\u578b"}),"\n",(0,l.jsx)(n.p,{children:"FileReader \u7c7b\u578b\u8868\u793a\u4e00\u79cd\u5f02\u6b65\u6587\u4ef6\u8bfb\u53d6\u673a\u5236\u3002\u53ef\u4ee5\u628a FileReader \u60f3\u8c61\u6210\u7c7b\u4f3c\u4e8e XMLHttpRequest\uff0c \u53ea\u4e0d\u8fc7\u662f\u7528\u4e8e\u4ece\u6587\u4ef6\u7cfb\u7edf\u8bfb\u53d6\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4ece\u670d\u52a1\u5668\u8bfb\u53d6\u6570\u636e\u3002FileReader \u7c7b\u578b\u63d0\u4f9b\u4e86\u51e0\u4e2a\u8bfb\u53d6\u6587\u4ef6\u6570\u636e\u7684\u65b9\u6cd5\u3002"}),"\n",(0,l.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"readAsText(file, encoding)"}),": \u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u7eaf\u6587\u672c\u5185\u5bb9\u5e76\u4fdd\u5b58\u5728 result \u5c5e\u6027\u4e2d\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8868\u793a\u7f16\u7801\uff0c\u662f\u53ef\u9009\u7684\u3002"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"readAsDataURL(file)"}),": \u8bfb\u53d6\u6587\u4ef6\u5e76\u5c06\u5185\u5bb9\u7684\u6570\u636e URI \u4fdd\u5b58\u5728 result \u5c5e\u6027\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"readAsBinaryString(file)"}),": \u8bfb\u53d6\u6587\u4ef6\u5e76\u5c06\u6bcf\u4e2a\u5b57\u7b26\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u4fdd\u5b58\u5728 result \u5c5e\u6027\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,l.jsx)(n.code,{children:"readAsArrayBuffer(file)"}),": \u8bfb\u53d6\u6587\u4ef6\u5e76\u5c06\u6587\u4ef6\u5185\u5bb9\u4ee5 ArrayBuffer \u5f62\u5f0f\u4fdd\u5b58\u5728 result \u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title=\u7528\u6cd5"',children:"const reader = new FileReader();\n\nreader.readAsText(file);\nreader.readAsDataURL(file);\nreader.readAsBinaryString(file);\nreader.readAsArrayBuffer(file);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u4e9b\u8bfb\u53d6\u6570\u636e\u7684\u65b9\u6cd5\u4e3a\u5904\u7406\u6587\u4ef6\u6570\u636e\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u7075\u6d3b\u6027\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u4e3a\u8fd9\u4e9b\u8bfb\u53d6\u65b9\u6cd5\u662f\u5f02\u6b65\u7684\uff0c\u6240\u4ee5\u6bcf\u4e2a FileReader \u4f1a\u53d1\u5e03\u51e0\u4e2a\u4e8b\u4ef6\uff0c\u5176\u4e2d 3 \u4e2a\u6700\u6709\u7528\u7684\u4e8b\u4ef6\u662f ",(0,l.jsx)(n.code,{children:"progress"}),"\u3001",(0,l.jsx)(n.code,{children:"error"})," \u548c ",(0,l.jsx)(n.code,{children:"load"}),"\uff0c\u5206\u522b\u8868\u793a\u8fd8\u6709\u66f4\u591a\u6570\u636e\u3001\u53d1\u751f\u4e86\u9519\u8bef\u548c\u8bfb\u53d6\u5b8c\u6210\u3002\u5176\u4ed6\u4e8b\u4ef6\u6709 ",(0,l.jsx)(n.code,{children:"loadstart"}),"\u3001",(0,l.jsx)(n.code,{children:"loadend"})," \u548c ",(0,l.jsx)(n.code,{children:"abort"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"progress"})," \u4e8b\u4ef6\u6bcf 50 \u6beb\u79d2\u5c31\u4f1a\u89e6\u53d1\u4e00\u6b21\uff0c\u5176\u4e0e XHR \u7684 ",(0,l.jsx)(n.code,{children:"progress"})," \u4e8b\u4ef6\u5177\u6709\u76f8\u540c\u7684\u4fe1\u606f: ",(0,l.jsx)(n.code,{children:"lengthComputable"}),"\u3001",(0,l.jsx)(n.code,{children:"loaded"})," \u548c ",(0,l.jsx)(n.code,{children:"total"}),"\u3002\u6b64\u5916\uff0c\u5728 ",(0,l.jsx)(n.code,{children:"progress"})," \u4e8b\u4ef6\u4e2d\u53ef\u4ee5\u8bfb\u53d6 FileReader \u7684 ",(0,l.jsx)(n.code,{children:"result"})," \u5c5e\u6027\uff0c\u5373\u4f7f\u5176\u4e2d\u5c1a\u672a\u5305\u542b\u5168\u90e8\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"error"})," \u4e8b\u4ef6\u4f1a\u5728\u7531\u4e8e\u67d0\u79cd\u539f\u56e0\u65e0\u6cd5\u8bfb\u53d6\u6587\u4ef6\u65f6\u89e6\u53d1\u3002\u89e6\u53d1 ",(0,l.jsx)(n.code,{children:"error"})," \u4e8b\u4ef6\u65f6\uff0cFileReader \u7684 ",(0,l.jsx)(n.code,{children:"error"})," \u5c5e\u6027\u4f1a\u5305\u542b\u9519\u8bef\u4fe1\u606f\u3002\u8fd9\u4e2a\u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ea\u5305\u542b\u4e00\u4e2a\u5c5e\u6027: ",(0,l.jsx)(n.code,{children:"code"}),"\u3002\u8fd9\u4e2a\u9519\u8bef\u7801\u7684\u503c\u53ef\u80fd\u662f 1(\u672a\u627e\u5230\u6587\u4ef6)\u30012(\u5b89\u5168\u9519\u8bef)\u30013(\u8bfb\u53d6\u88ab\u4e2d\u65ad)\u30014(\u6587\u4ef6\u4e0d\u53ef\u8bfb)\u6216 5(\u7f16\u7801\u9519\u8bef)\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"load"})," \u4e8b\u4ef6\u4f1a\u5728\u6587\u4ef6\u6210\u529f\u52a0\u8f7d\u540e\u89e6\u53d1\u3002\u5982\u679c ",(0,l.jsx)(n.code,{children:"error"})," \u4e8b\u4ef6\u88ab\u89e6\u53d1\uff0c\u5219\u4e0d\u4f1a\u518d\u89e6\u53d1 ",(0,l.jsx)(n.code,{children:"load"})," \u4e8b\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"loadstart"})," \u4e8b\u4ef6\u4f1a\u5728\u8bfb\u53d6\u64cd\u4f5c\u5f00\u59cb\u65f6\u89e6\u53d1\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"loadend"})," \u4e8b\u4ef6\u4f1a\u5728\u8bfb\u53d6\u64cd\u4f5c\u5b8c\u6210\uff08\u65e0\u8bba\u6210\u529f\u6216\u5931\u8d25\uff09\u65f6\u89e6\u53d1\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"abort"})," \u4e8b\u4ef6\u4f1a\u5728\u8bfb\u53d6\u64cd\u4f5c\u88ab\u4e2d\u6b62\u65f6\u89e6\u53d1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="\u4e8b\u4ef6\u7528\u6cd5"',children:"let filesList = document.getElementById('files-list');\n\nfilesList.addEventListener('change', event => {\n  let info = '',\n    output = document.getElementById('output'),\n    progress = document.getElementById('progress'),\n    files = event.target.files,\n    type = 'default',\n    reader = new FileReader();\n\n  // \u6839\u636e\u6587\u4ef6\u7c7b\u578b\u9009\u62e9\u5b9e\u4f8b\u65b9\u6cd5\n  if (/image/.test(files[0].type)) {\n    reader.readAsDataURL(files[0]);\n    type = 'image';\n  } else {\n    reader.readAsText(files[0]);\n    type = 'text';\n  }\n\n  // default\n  reader.onerror = function () {\n    output.innerHTML = '\u4e0d\u80fd\u8bfb\u53d6\u6587\u4ef6, \u9519\u8befcode' + reader.error.code;\n  };\n\n  // default\n  reader.onprogress = function (event) {\n    if (event.lengthComputable) {\n      progress.innerHTML = `${event.loaded}/${event.total}`;\n    }\n  };\n\n  // default\n  reader.onload = function () {\n    let html = '';\n    switch (type) {\n      case 'image':\n        html = `<img src=\"${reader.result}\">`;\n        break;\n      case 'text':\n        html = reader.result;\n        break;\n    }\n    output.innerHTML = html;\n  };\n});\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u63d0\u524d\u7ed3\u675f\u6587\u4ef6\u8bfb\u53d6\uff0c\u5219\u53ef\u4ee5\u5728\u8fc7\u7a0b\u4e2d\u8c03\u7528",(0,l.jsx)(n.code,{children:" abort()"})," \u65b9\u6cd5\uff0c\u4ece\u800c\u89e6\u53d1 ",(0,l.jsx)(n.code,{children:"abort"})," \u4e8b\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"filereadersync-\u7c7b\u578b",children:"FileReaderSync \u7c7b\u578b"}),"\n",(0,l.jsx)(n.p,{children:"\u987e\u540d\u601d\u4e49\uff0cFileReaderSync \u7c7b\u578b\u5c31\u662f FileReader \u7684\u540c\u6b65\u7248\u672c\u3002\u8fd9\u4e2a\u7c7b\u578b\u62e5\u6709\u4e0e FileReader \u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u53ea\u6709\u5728\u6574\u4e2a\u6587\u4ef6\u90fd\u52a0\u8f7d\u5230\u5185\u5b58\u4e4b\u540e\u624d\u4f1a\u7ee7\u7eed\u6267\u884c\u3002FileReaderSync \u53ea\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e2d\u53ef\u7528\uff0c\u56e0\u4e3a\u5982\u679c\u8bfb\u53d6\u6574\u4e2a\u6587\u4ef6\u8017\u65f6\u592a\u957f\u5219\u4f1a\u5f71\u54cd\u5168\u5c40\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5047\u8bbe\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"postMessage()"})," \u5411\u5de5\u4f5c\u7ebf\u7a0b\u53d1\u9001\u4e86\u4e00\u4e2a File \u5bf9\u8c61\u3002\u4ee5\u4e0b\u4ee3\u7801\u4f1a\u8ba9\u5de5\u4f5c\u7ebf\u7a0b\u540c\u6b65\u5c06\u6587\u4ef6\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\uff0c\u7136\u540e\u5c06\u6587\u4ef6\u7684\u6570\u636e URL \u53d1\u56de\u6765:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="worker.js"',children:"self.onmessage = messageEvent => {\n  const syncReader = new FileReaderSync();\n  console.log(syncReader); // FileReaderSync {}\n\n  // \u8bfb\u53d6\u6587\u4ef6\u65f6\u963b\u585e\u5de5\u4f5c\u7ebf\u7a0b\n  const result = syncReader.readAsDataUrl(messageEvent.data);\n\n  // PDF \u6587\u4ef6\u7684\u793a\u4f8b\u54cd\u5e94\n  console.log(result); // data:application/pdf;base64,JVBERi0xLjQK...\n\n  // \u628aURL\u53d1\u56de\u53bb\n  self.postMessage(result);\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"blob-\u4e0e\u90e8\u5206\u8bfb\u53d6",children:"Blob \u4e0e\u90e8\u5206\u8bfb\u53d6"}),"\n",(0,l.jsxs)(n.p,{children:["\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u8bfb\u53d6\u90e8\u5206\u6587\u4ef6\u800c\u4e0d\u662f\u6574\u4e2a\u6587\u4ef6\u3002\u4e3a\u6b64\uff0cFile \u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"slice()"})," \u7684\u65b9\u6cd5\u3002",(0,l.jsx)(n.code,{children:"slice()"})," \u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570:\u8d77\u59cb\u5b57\u8282\u548c\u8981\u8bfb\u53d6\u7684\u5b57\u8282\u6570\u3002\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a Blob \u7684\u5b9e\u4f8b\uff0c\u800c Blob \u5b9e\u9645\u4e0a\u662f File \u7684\u8d85\u7c7b\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"blob \u8868\u793a\u4e8c\u8fdb\u5236\u5927\u5bf9\u8c61(binary larget object)\uff0c\u662f JavaScript \u5bf9\u4e0d\u53ef\u4fee\u6539\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u5c01\u88c5\u7c7b\u578b\u3002\u5305\u542b\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\u3001ArrayBuffers\u3001ArrayBufferViews\uff0c\u751a\u81f3\u5176\u4ed6 Blob \u90fd\u53ef\u4ee5\u7528\u6765\u521b\u5efa blob\u3002Blob \u6784\u9020\u51fd\u6570\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a options \u53c2\u6570\uff0c\u5e76\u5728\u5176\u4e2d\u6307\u5b9a MIME \u7c7b\u578b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.log(new Blob(['foo']));\n// Blob {size: 3, type: \"\"}\n\nconsole.log(new Blob(['{\"a\": \"b\"}'], { type: 'application/json' }));\n// {size: 10, type: \"application/json\"}\n\nconsole.log(new Blob(['<p>Foo</p>', '<p>Bar</p>'], { type: 'text/html' }));\n// {size: 20, type: \"text/html\"}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Blob \u5bf9\u8c61\u6709\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"size"})," \u5c5e\u6027\u548c\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"type"})," \u5c5e\u6027\uff0c\u8fd8\u6709\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"slice()"})," \u65b9\u6cd5\u7528\u4e8e\u8fdb\u4e00\u6b65\u5207\u5206\u6570\u636e\u3002\u53e6\u5916\u4e5f\u53ef\u4ee5\u4f7f\u7528 FileReader \u4ece Blob \u4e2d\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="\u8bfb\u53d6\u6587\u4ef6\u7684\u524d 32 \u5b57\u8282"',children:"<input type=\"file\" id=\"fileInput\" />\n<pre id=\"output\"></pre>\n\n<script>\n  document\n    .getElementById('fileInput')\n    .addEventListener('change', function (event) {\n      const file = event.target.files[0];\n      if (file) {\n        // \u4f7f\u7528 slice \u65b9\u6cd5\u83b7\u53d6\u524d 32 \u5b57\u8282\n        // default\n        const blob = file.slice(0, 32);\n\n        // \u4f7f\u7528 FileReader \u8bfb\u53d6 blob\n        const reader = new FileReader();\n\n        reader.onload = function (e) {\n          const result = e.target.result;\n          // \u5c06\u7ed3\u679c\u663e\u793a\u5728\u9875\u9762\u4e0a\n          document.getElementById('output').textContent = result;\n        };\n\n        reader.onerror = function () {\n          console.error('File could not be read! Code ' + reader.error.code);\n        };\n\n        // \u8bfb\u53d6 Blob \u4e2d\u7684\u6570\u636e\u4e3a\u6587\u672c\n        // default\n        reader.readAsText(blob);\n      }\n    });\n<\/script>\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ea\u8bfb\u53d6\u90e8\u5206\u6587\u4ef6\u53ef\u4ee5\u8282\u7701\u65f6\u95f4\uff0c\u7279\u522b\u662f\u5728\u53ea\u9700\u8981\u6570\u636e\u7279\u5b9a\u90e8\u5206\u6bd4\u5982\u6587\u4ef6\u5934\u7684\u65f6\u5019\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5bf9\u8c61-url-\u4e0e-blob",children:"\u5bf9\u8c61 URL \u4e0e Blob"}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u8c61 URL \u6709\u65f6\u5019\u4e5f\u79f0\u4f5c Blob URL\uff0c\u662f\u6307\u5f15\u7528\u5b58\u50a8\u5728 File \u6216 Blob \u4e2d\u6570\u636e\u7684 URL\u3002\u5bf9\u8c61 URL \u7684\u4f18\u70b9\u662f\u4e0d\u7528\u628a\u6587\u4ef6\u5185\u5bb9\u8bfb\u53d6\u5230 JavaScript \u4e5f\u53ef\u4ee5\u4f7f\u7528\u6587\u4ef6\u3002\u53ea\u8981\u5728\u9002\u5f53\u4f4d\u7f6e\u63d0\u4f9b\u5bf9\u8c61 URL \u5373\u53ef\u3002\u8981\u521b\u5efa\u5bf9\u8c61 URL\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"URL.createObjectURL()"})," \u65b9\u6cd5\u5e76\u4f20\u5165 File \u6216 Blob \u5bf9\u8c61\u3002\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u503c\u662f\u4e00\u4e2a\u6307\u5411\u5185\u5b58\u4e2d\u5730\u5740\u7684\u5b57\u7b26\u4e32\u3002\u56e0\u4e3a\u8fd9\u4e2a\u5b57\u7b26\u4e32\u662f URL\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728 DOM \u4e2d\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:'title="\u4f7f\u7528\u5bf9\u8c61 URL \u5728\u9875\u9762\u4e2d\u663e\u793a\u4e86\u4e00\u5f20\u56fe\u7247"',children:'<input type="file" id="fileInput" accept="image/*" />\n<img id="image" style="display:none;" alt="Selected Image" />\n<script>\n  document\n    .getElementById(\'fileInput\')\n    .addEventListener(\'change\', function (event) {\n      const file = event.target.files[0];\n      if (file) {\n        // \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61 URL\n        // default\n        const objectURL = URL.createObjectURL(file);\n\n        // \u83b7\u53d6 img \u5143\u7d20\u5e76\u8bbe\u7f6e\u5176 src \u5c5e\u6027\u4e3a\u5bf9\u8c61 URL\n        const img = document.getElementById(\'image\');\n        img.src = objectURL;\n        img.style.display = \'block\'; // \u663e\u793a\u56fe\u7247\n\n        // \u5728\u6587\u4ef6\u88ab\u52a0\u8f7d\u5b8c\u540e\u91ca\u653e URL \u5bf9\u8c61\n        img.onload = function () {\n          URL.revokeObjectURL(objectURL);\n        };\n      }\n    });\n<\/script>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"img.onload"})," \u4e8b\u4ef6\u76d1\u542c\u5668\u5728\u56fe\u7247\u52a0\u8f7d\u5b8c\u6bd5\u540e\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"URL.revokeObjectURL(objectURL)"})," \u65b9\u6cd5\u91ca\u653e\u5bf9\u8c61 URL\uff0c\u4ee5\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bfb\u53d6\u62d6\u653e\u6587\u4ef6",children:"\u8bfb\u53d6\u62d6\u653e\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u7ec4\u5408\u4f7f\u7528 HTML5 \u62d6\u653e API \u4e0e File API \u53ef\u4ee5\u521b\u5efa\u8bfb\u53d6\u6587\u4ef6\u4fe1\u606f\u7684\u6709\u8da3\u529f\u80fd\u3002\u5728\u9875\u9762\u4e0a\u521b\u5efa\u653e\u7f6e\u76ee\u6807\u540e\uff0c\u53ef\u4ee5\u4ece\u684c\u9762\u4e0a\u628a\u6587\u4ef6\u62d6\u52a8\u5e76\u653e\u5230\u653e\u7f6e\u76ee\u6807\u3002\u8fd9\u6837\u4f1a\u50cf\u62d6\u653e\u56fe\u7247\u6216\u94fe\u63a5\u4e00\u6837\u89e6\u53d1 ",(0,l.jsx)(n.code,{children:"drop"})," \u4e8b\u4ef6\u3002\u88ab\u653e\u7f6e\u7684\u6587\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4e8b\u4ef6\u7684 ",(0,l.jsx)(n.code,{children:"event.dataTransfer.files"})," \u5c5e\u6027\u8bfb\u5230\uff0c\u8fd9\u4e2a\u5c5e\u6027\u4fdd\u5b58\u7740\u4e00\u7ec4 File \u5bf9\u8c61\uff0c\u5c31\u50cf\u6587\u672c\u8f93\u5165\u5b57\u6bb5\u4e00\u6837\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<div id="dropZone">Drag files here</div>\n<div id="fileInfo"></div>\n<img id="image" alt="Dropped Image" style="display:none;" />\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"#dropZone {\n  width: 300px;\n  height: 200px;\n  border: 2px dashed #ccc;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 200px;\n  font-size: 18px;\n  color: #999;\n  margin: 20px;\n}\n#dropZone.dragover {\n  border-color: #000;\n  color: #000;\n}\nimg {\n  max-width: 100%;\n  margin-top: 20px;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const dropZone = document.getElementById('dropZone');\nconst fileInfo = document.getElementById('fileInfo');\nconst image = document.getElementById('image');\n\ndropZone.addEventListener('dragenter', event => {\n  dropZone.classList.add('dragover');\n});\n\ndropZone.addEventListener('dragover', event => {\n  event.preventDefault();\n  dropZone.classList.add('dragover');\n});\n\ndropZone.addEventListener('drop', event => {\n  event.preventDefault();\n  dropZone.classList.remove('dragover');\n\n  const files = event.dataTransfer.files;\n  if (files.length > 0) {\n    const file = files[0];\n    displayFileInfo(file);\n    if (file.type.startsWith('image/')) {\n      displayImage(file);\n    }\n  }\n});\n\nfunction displayFileInfo(file) {\n  // \u6253\u5370\u6587\u4ef6\u4fe1\u606f\n  fileInfo.textContent = `File name: ${file.name}\\nFile size: ${file.size} bytes\\nFile type: ${file.type}`;\n}\n\nfunction displayImage(file) {\n  const objectURL = URL.createObjectURL(file);\n  image.src = objectURL;\n  image.style.display = 'block';\n  // \u91ca\u653e\u5185\u5b58\n  image.onload = () => {\n    URL.revokeObjectURL(objectURL);\n  };\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"dragenter"})," \u4e8b\u4ef6\u5728\u62d6\u52a8\u5143\u7d20\u8fdb\u5165\u653e\u7f6e\u76ee\u6807\u65f6\u89e6\u53d1\uff08\u53ea\u89e6\u53d1\u4e00\u6b21\uff09\u3002 ",(0,l.jsx)(n.code,{children:"dragover"})," \u4e8b\u4ef6\u5728\u6587\u4ef6\u62d6\u52a8\u5230\u653e\u7f6e\u76ee\u6807\u533a\u57df\u4e0a\u65b9\u89e6\u53d1\uff08\u6301\u7eed\u89e6\u53d1\uff09\uff1b",(0,l.jsx)(n.code,{children:"drop"})," \u4e8b\u4ef6\u5728\u6587\u4ef6\u88ab\u653e\u7f6e\u5230\u653e\u7f6e\u76ee\u6807\u533a\u57df\u65f6\u89e6\u53d1\uff1b"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5fc5\u987b\u53d6\u6d88 ",(0,l.jsx)(n.code,{children:"dragenter"}),"\u3001",(0,l.jsx)(n.code,{children:"dragover"})," \u548c ",(0,l.jsx)(n.code,{children:"drop"})," \u7684\u9ed8\u8ba4\u884c\u4e3a\u3002\u8fd9\u6837\u53ef\u4ee5\u9632\u6b62\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u884c\u4e3a\uff08\u4f8b\u5982\u6253\u5f00\u6587\u4ef6\u3001\u5bfc\u822a\u7b49\uff09\uff0c\u4ece\u800c\u5141\u8bb8\u81ea\u5b9a\u4e49\u5904\u7406\u8fd9\u4e9b\u4e8b\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"drop"})," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"event.dataTransfer.files"})," \u8bfb\u5230\u6587\u4ef6\uff0c\u6b64\u65f6\u53ef\u4ee5\u83b7\u53d6\u6587\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"dragover"})," \u4e8b\u4ef6\u5fc5\u987b\u4f7f\u7528\uff0c\u5728\u62d6\u52a8\u5143\u7d20\u60ac\u505c\u5728\u653e\u7f6e\u76ee\u6807\u4e0a\u65f6\u6301\u7eed\u89e6\u53d1\u3002\u9700\u8981\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"event.preventDefault()"})," \u4ee5\u5141\u8bb8\u653e\u7f6e\u64cd\u4f5c\u3002"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var l=i(67294);const s={},t=l.createContext(s);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);