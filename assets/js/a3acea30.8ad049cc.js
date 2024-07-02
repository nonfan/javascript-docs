"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[4390],{17708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>j});var t=r(85893),s=r(11151),c=r(85162),o=r(74866),a=r(25175);const l={},i="Object",d={id:"api/basic-objects/object",title:"Object",description:"Object.create",source:"@site/docs/api/basic-objects/object.mdx",sourceDirName:"api/basic-objects",slug:"/api/basic-objects/object",permalink:"/javascript-docs/api/basic-objects/object",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/api/basic-objects/object.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"\u5168\u5c40\u5bf9\u8c61",permalink:"/javascript-docs/api/global-object"}},u={},j=[{value:"Object.create",id:"objectcreate",level:2},{value:"Object.assign",id:"objectassign",level:2},{value:"Object.keys",id:"objectkeys",level:2},{value:"Object.values",id:"objectvalues",level:2},{value:"Object.entries",id:"objectentries",level:2},{value:"Object.fromEntries",id:"objectfromentries",level:2},{value:"Object.freeze",id:"objectfreeze",level:2},{value:"Object.seal",id:"objectseal",level:2},{value:"Object.getOwnPropertyDescriptor",id:"objectgetownpropertydescriptor",level:2},{value:"Object.getOwnPropertyDescriptors",id:"objectgetownpropertydescriptors",level:2},{value:"Object.getPrototypeOf",id:"objectgetprototypeof",level:2},{value:"Object.defineProperty",id:"objectdefineproperty",level:2},{value:"Object.defineProperties()",id:"objectdefineproperties",level:2}];function p(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"object",children:"Object"}),"\n",(0,t.jsx)(n.h2,{id:"objectcreate",children:"Object.create"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.create()"})," \u9759\u6001\u65b9\u6cd5\u4ee5\u4e00\u4e2a\u73b0\u6709\u5bf9\u8c61\u4f5c\u4e3a\u539f\u578b\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(c.Z,{value:"\u8bed\u6cd5",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"proto"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u65b0\u521b\u5efa\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\u3002"}),"\n"]}),(0,t.jsx)("p",{className:"optional",children:(0,t.jsx)(n.code,{children:"propertiesObject"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u8be5\u53c2\u6570\u88ab\u6307\u5b9a\u4e14\u4e0d\u4e3a ",(0,t.jsx)(n.code,{children:"undefined"}),"\uff0c\u5219\u8be5\u4f20\u5165\u5bf9\u8c61\u53ef\u679a\u4e3e\u7684\u81ea\u6709\u5c5e\u6027\u5c06\u4e3a\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u6dfb\u52a0\u5177\u6709\u5bf9\u5e94\u5c5e\u6027\u540d\u79f0\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002\u8fd9\u4e9b\u5c5e\u6027\u5bf9\u5e94\u4e8e ",(0,t.jsx)(n.code,{children:"Object.defineProperties()"})," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"})}),(0,t.jsx)(n.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u539f\u578b\u5bf9\u8c61\u548c\u5c5e\u6027\u521b\u5efa\u7684\u65b0\u5bf9\u8c61\u3002"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5f02\u5e38"})}),(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"proto"})," \u65e2\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"null"}),"\uff0c\u4e5f\u4e0d\u662f Object\uff0c\u5219\u629b\u51fa TypeError\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"Object.create(proto);\nObject.create(proto, propertiesObject);\n"})}),(0,t.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Object.create()"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5229\u7528\u539f\u578b\u94fe\u7684\u7279\u6027\u6765\u5b9e\u73b0\u5bf9\u8c61\u4e4b\u95f4\u7684\u7ee7\u627f\u5173\u7cfb\uff0c\u975e\u5e38\u6709\u7528\u4e8e\u9762\u5411\u5bf9\u8c61\u7684 JavaScript \u7f16\u7a0b\u3002"]})]}),(0,t.jsxs)(c.Z,{value:"\u793a\u4f8b",children:[(0,t.jsx)(a.Z,{filePath:"/api/object/create.txt"}),(0,t.jsx)(a.Z,{filePath:"/api/object/create2.txt",title:"\u5efa\u7acb\u539f\u578b\u94fe\u7684\u7ee7\u627f\u5173\u7cfb"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"objectassign",children:"Object.assign"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u6e90\u5bf9\u8c61\u590d\u5236\u6240\u6709\u53ef\u679a\u4e3e\u7684\u81ea\u6709\u5c5e\u6027\u5230\u76ee\u6807\u5bf9\u8c61\uff0c\u5e76\u8fd4\u56de\u76ee\u6807\u5bf9\u8c61\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.assign()"})," \u6267\u884c\u7684\u662f\u6d45\u62f7\u8d1d\uff0c\u800c\u4e0d\u662f\u6df1\u62f7\u8d1d\u3002\u5982\u679c\u6e90\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u5bf9\u8c61\uff0c\u5219\u53ea\u4f1a\u590d\u5236\u5bf9\u8c61\u7684\u5f15\u7528\u3002"]})}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(c.Z,{value:"\u8bed\u6cd5",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"target"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u76ee\u6807\u5bf9\u8c61\uff0c\u5c06\u63a5\u6536\u6765\u81ea\u6e90\u5bf9\u8c61\u7684\u5c5e\u6027\u3002"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sources"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u6216\u591a\u4e2a\u6e90\u5bf9\u8c61\uff0c\u5305\u542b\u5c06\u88ab\u590d\u5236\u5230\u76ee\u6807\u5bf9\u8c61\u7684\u5c5e\u6027\u3002"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"})}),(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u76ee\u6807\u5bf9\u8c61 ",(0,t.jsx)(n.code,{children:"target"}),"\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u7528\u6cd5"',children:"Object.assign(target, source1, source2);\n"})})]}),(0,t.jsxs)(c.Z,{value:"\u793a\u4f8b",children:[(0,t.jsx)(a.Z,{filePath:"/api/object/assign.txt"}),(0,t.jsx)(a.Z,{filePath:"/api/object/assign2.txt",title:"\u514b\u9686\u5bf9\u8c61"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"objectkeys",children:"Object.keys"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.keys()"})," \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7531\u7ed9\u5b9a\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u7684\u5b57\u7b26\u4e32\u952e",(0,t.jsx)(n.em,{children:"\u5c5e\u6027\u540d\u7ec4\u6210\u7684\u6570\u7ec4"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nconsole.log(Object.keys(person)); // [ 'name', 'age', 'address' ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectvalues",children:"Object.values"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.values()"})," \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7ed9\u5b9a\u5bf9\u8c61\u7684\u81ea\u6709\u53ef\u679a\u4e3e\u5b57\u7b26\u4e32\u952e\u5c5e\u6027\u503c\u7ec4\u6210\u7684\u6570\u7ec4\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nconsole.log(Object.values(person)); // [ 'mofan', '23', 'China' ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectentries",children:"Object.entries"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.entries()"})," \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u7ed9\u5b9a\u5bf9\u8c61\u81ea\u6709\u7684\u53ef\u679a\u4e3e\u5b57\u7b26\u4e32\u952e\u5c5e\u6027\u7684\u952e\u503c\u5bf9\u7684\u6570\u503c\uff08\u4e8c\u7ef4\u6570\u7ec4\uff09\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nconsole.log(Object.entries(person)); // [ [ 'name', 'mofan' ], [ 'age', '23' ], [ 'address', 'China' ] ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectfromentries",children:"Object.fromEntries"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.fromEntries()"})," \u9759\u6001\u65b9\u6cd5\u5c06\u952e\u503c\u5bf9\u5217\u8868\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = [\n  ['name', 'mofan'],\n  ['age', '23'],\n  ['address', 'China'],\n];\n\nconsole.log(Object.fromEntries(person)); // { name: 'mofan', age: '23', address: 'China' }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectfreeze",children:"Object.freeze"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.freeze()"})," \u9759\u6001\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u4e00\u4e2a\u5bf9\u8c61\u88ab\u51bb\u7ed3\u3002\u51bb\u7ed3\u5bf9\u8c61\u53ef\u4ee5\u9632\u6b62\u6269\u5c55\uff0c\u5e76\u4f7f\u73b0\u6709\u7684\u5c5e\u6027\u4e0d\u53ef\u5199\u5165\u548c\u4e0d\u53ef\u914d\u7f6e\u3002\u88ab\u51bb\u7ed3\u7684\u5bf9\u8c61\u4e0d\u80fd\u518d\u88ab\u66f4\u6539\uff1a\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u4e0d\u80fd\u79fb\u9664\u73b0\u6709\u7684\u5c5e\u6027\uff0c\u4e0d\u80fd\u66f4\u6539\u5b83\u4eec\u7684\u53ef\u679a\u4e3e\u6027\u3001\u53ef\u914d\u7f6e\u6027\u3001\u53ef\u5199\u6027\u6216\u503c\uff0c\u5bf9\u8c61\u7684\u539f\u578b\u4e5f\u4e0d\u80fd\u88ab\u91cd\u65b0\u6307\u5b9a\u3002",(0,t.jsx)(n.code,{children:"freeze()"})," \u8fd4\u56de\u4e0e\u4f20\u5165\u7684\u5bf9\u8c61\u76f8\u540c\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u51bb\u7ed3\u4e00\u4e2a\u5bf9\u8c61\u662f JavaScript \u63d0\u4f9b\u7684\u6700\u9ad8\u5b8c\u6574\u6027\u7ea7\u522b\u4fdd\u62a4\u63aa\u65bd\u3002"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nconst freezePerson = Object.freeze(person);\n\nconsole.log(freezePerson === person); // true\n\n// \u4e25\u683c\u6a21\u5f0f\u4e0b\u629b\u51fa\u5f02\u5e38\uff0c\u975e\u4e25\u683c\u6a21\u5f0f\u9759\u9ed8\u5931\u8d25\n// error\nperson.age = 30;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectseal",children:"Object.seal"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.seal()"})," \u9759\u6001\u65b9\u6cd5\u5bc6\u5c01\u4e00\u4e2a\u5bf9\u8c61\u3002\u5bc6\u5c01\u4e00\u4e2a\u5bf9\u8c61\u4f1a\u963b\u6b62\u5176\u6269\u5c55\u5e76\u4e14\u4f7f\u5f97\u73b0\u6709\u5c5e\u6027\u4e0d\u53ef\u914d\u7f6e\u3002\u5bc6\u5c01\u5bf9\u8c61\u6709\u4e00\u7ec4\u56fa\u5b9a\u7684\u5c5e\u6027\uff1a\u4e0d\u80fd\u6dfb\u52a0\u65b0\u5c5e\u6027\u3001\u4e0d\u80fd\u5220\u9664\u73b0\u6709\u5c5e\u6027\u6216\u66f4\u6539\u5176\u53ef\u679a\u4e3e\u6027\u548c\u53ef\u914d\u7f6e\u6027\u3001\u4e0d\u80fd\u91cd\u65b0\u5206\u914d\u5176\u539f\u578b\u3002",(0,t.jsx)(n.em,{children:"\u53ea\u8981\u73b0\u6709\u5c5e\u6027\u7684\u503c\u662f\u53ef\u5199\u7684\uff0c\u5b83\u4eec\u4ecd\u7136\u53ef\u4ee5\u66f4\u6539"}),"\u3002",(0,t.jsx)(n.code,{children:"seal()"})," \u8fd4\u56de\u4f20\u5165\u7684\u540c\u4e00\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nconst sealPerson = Object.seal(person);\n\nconsole.log(sealPerson === person); // true\n\n// \u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u9759\u9ed8\u5931\u8d25\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b\u629b\u51fa\u5f02\u5e38\n// error\nperson.gender = '\u7537';\n\n// \u53ef\u4fee\u6539\u5c5e\u6027\n// success-start\nperson.name = 'coder_mofan';\nconsole.log(person); // { name: 'coder_mofan', age: '23', address: 'China' }\n// success-end\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:[(0,t.jsx)(n.code,{children:"Object.freeze"})," \u548c ",(0,t.jsx)(n.code,{children:"Object.seal"})," \u533a\u522b"]}),(0,t.jsx)(n.p,{children:"\u524d\u8005\u51bb\u7ed3\u5bf9\u8c61\uff0c\u9632\u6b62\u4fee\u6539\u5bf9\u8c61\u53ca\u5176\u5c5e\u6027\u3002\u5df2\u51bb\u7ed3\u7684\u5bf9\u8c61\u4e0d\u53ef\u6dfb\u52a0\u65b0\u5c5e\u6027\uff0c\u4e0d\u53ef\u5220\u9664\u73b0\u6709\u5c5e\u6027\uff0c\u4e5f\u4e0d\u53ef\u4fee\u6539\u5c5e\u6027\u7684\u503c\u3002\u540e\u8005\u5bc6\u5c01\u5bf9\u8c61\uff0c\u9632\u6b62\u6dfb\u52a0\u6216\u5220\u9664\u5c5e\u6027\uff0c\u4f46\u53ef\u4ee5\u4fee\u6539\u73b0\u6709\u5c5e\u6027\u3002"})]}),"\n",(0,t.jsx)(n.h2,{id:"objectgetownpropertydescriptor",children:"Object.getOwnPropertyDescriptor"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.getOwnPropertyDescriptor()"})," \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u63cf\u8ff0\u7ed9\u5b9a\u5bf9\u8c61\u4e0a\u7279\u5b9a\u5c5e\u6027\uff08\u5373\u76f4\u63a5\u5b58\u5728\u4e8e\u5bf9\u8c61\u4e0a\u800c\u4e0d\u5728\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e2d\u7684\u5c5e\u6027\uff09\u7684\u914d\u7f6e\u3002\u8fd4\u56de\u7684\u5bf9\u8c61\u662f\u53ef\u53d8\u7684\uff0c\u4f46\u5bf9\u5176\u8fdb\u884c\u66f4\u6539\u4e0d\u4f1a\u5f71\u54cd\u539f\u59cb\u5c5e\u6027\u7684\u914d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nlet descriptor = Object.getOwnPropertyDescriptor(person, 'name');\n\nconsole.log(descriptor.configurable); // true\nconsole.log(descriptor.value); // mofan\n\ndescriptor.value = 'wohu';\nconsole.log(descriptor.value); // wohu\n\n// \u4e0d\u4f1a\u5f71\u54cd\u539f\u59cb\u5c5e\u6027\u7684\u914d\u7f6e\nconsole.log(person.name); // mofan\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectgetownpropertydescriptors",children:"Object.getOwnPropertyDescriptors"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.getOwnPropertyDescriptors()"})," \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u7ed9\u5b9a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u6709\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {\n  name: 'mofan',\n  age: '23',\n  address: 'China',\n};\n\nlet descriptors = Object.getOwnPropertyDescriptors(person);\n\nconsole.log(descriptors);\n\n/**\n{\n  name: {\n    value: 'mofan',\n    writable: true,\n    enumerable: true,\n    configurable: true\n  },\n  age: { value: '23', writable: true, enumerable: true, configurable: true },\n  address: {\n    value: 'China',\n    writable: true,\n    enumerable: true,\n    configurable: true\n  }\n}\n */\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectgetprototypeof",children:"Object.getPrototypeOf"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.getPrototypeOf()"})," \u9759\u6001\u65b9\u6cd5\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\uff08\u5373\u5185\u90e8 ",(0,t.jsx)(n.code,{children:"[[Prototype]]"})," \u5c5e\u6027\u7684\u503c\uff09\u3002\u5b83\u8fd4\u56de\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\uff0c\u6216\u8005 ",(0,t.jsx)(n.code,{children:"null"})," \u5982\u679c\u8be5\u5bf9\u8c61\u6ca1\u6709\u7ee7\u627f\u5c5e\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"// \u521b\u5efa\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\nconst proto = {\n  greet() {\n    return 'Hello!';\n  },\n};\n\n// \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8bbe\u7f6e\u5176\u539f\u578b\u4e3a `proto`\nconst obj = Object.create(proto);\n\nconsole.log(Object.getPrototypeOf(obj) === proto); // true\n\n// \u9a8c\u8bc1\u7ee7\u627f\u6027\nconsole.log(obj.greet()); // \"Hello!\"\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectdefineproperty",children:"Object.defineProperty"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object. ()"})," \u9759\u6001\u65b9\u6cd5\u4f1a\u76f4\u63a5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u4fee\u6539\u5176\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u6b64\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {};\n\nObject.defineProperty(person, 'name', {\n  value: 'mofan',\n  writable: false,\n  enumerable: true,\n});\n\nconsole.log(person); // { name: 'mofan' }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"objectdefineproperties",children:"Object.defineProperties()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Object.defineProperties()"})," \u9759\u6001\u65b9\u6cd5\u76f4\u63a5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u65b0\u7684\u5c5e\u6027\u6216\u4fee\u6539\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u8be5\u5bf9\u8c61\u3002\u76f8\u6bd4\u8f83 ",(0,t.jsx)(n.code,{children:"defineProperty"})," \u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u5c5e\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u793a\u4f8b"',children:"const person = {};\n\nObject.defineProperties(person, {\n  name: {\n    value: 'mofan',\n    writable: false,\n    enumerable: true,\n  },\n  age: {\n    value: 23,\n    writable: true,\n    enumerable: true,\n  },\n  address: {\n    value: 'China',\n    writable: true,\n    enumerable: true,\n  },\n});\n\nconsole.log(person); // { name: 'mofan', age: 23, address: 'China' }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var c=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),s=r(36905),c=r(12466),o=r(16550),a=r(20469),l=r(91980),i=r(67392),d=r(20812);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.k6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(s.location.search);n.set(c,e),s.replace({...s.location,search:n.toString()})}),[c,s])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,c=j(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[i,u]=h({queryString:r,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,c]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:s}),m=(()=>{const e=i??b;return p({value:e,tabValues:c})?e:null})();(0,a.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,c]),tabValues:c}}var x=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function f(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,c.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=a[r].value;s!==t&&(i(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...c,className:(0,s.Z)("tabs__item",m.tabItem,c?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function O(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,x.Z)();return(0,g.jsx)(O,{...e,children:u(e.children)},String(n))}},25175:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(9286),s=r(44996),c=r(67294),o=r(85893);const a=e=>{let{filePath:n,language:r="javascript",title:a}=e;const[l,i]=(0,c.useState)(""),d=(0,s.ZP)(n);return(0,c.useEffect)((()=>{fetch(d).then((e=>{if(!e.ok)throw new Error(`\u83b7\u53d6\u6587\u4ef6\u5931\u8d25: ${e.status} ${e.statusText}`);const r=e.headers.get("content-type");if(!r||!r.includes("text/plain"))throw new Error(`\u5f15\u5165\u9759\u6001\u6587\u4ef6\u8def\u5f84\u51fa\u9519: ${n}`);return e.text()})).then((e=>{i(e)}))}),[n]),(0,o.jsx)(t.Z,{language:r,title:a,children:l})}}}]);