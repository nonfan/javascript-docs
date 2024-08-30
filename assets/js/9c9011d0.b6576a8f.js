"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[9634],{33711:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var s=n(85893),r=n(11151);const i={},c="\u5a92\u4f53\u5143\u7d20",t={id:"javascript-api/media-element",title:"\u5a92\u4f53\u5143\u7d20",description:"\u968f\u7740\u5d4c\u5165\u97f3\u9891\u548c\u89c6\u9891\u5143\u7d20\u5728 Web \u5e94\u7528\u4e0a\u7684\u6d41\u884c\uff0cHTML5 \u65b0\u589e\u4e86\u4e24\u4e2a\u4e0e\u5a92\u4f53\u76f8\u5173\u7684\u5143\u7d20\uff0c\u5373 ` \u548c `\uff0c\u4ece\u800c\u4e3a\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5d4c\u5165\u97f3\u9891\u548c\u89c6\u9891\u7684\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/javascript-api/media-element.mdx",sourceDirName:"javascript-api",slug:"/javascript-api/media-element",permalink:"/javascript-docs/javascript-api/media-element",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/javascript-api/media-element.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u539f\u751f\u62d6\u653e",permalink:"/javascript-docs/javascript-api/native-drag-and-drop"},next:{title:"Notifications API",permalink:"/javascript-docs/javascript-api/notifications-api"}},l={},h=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"\u81ea\u5b9a\u4e49\u5a92\u4f53\u64ad\u653e\u5668",id:"\u81ea\u5b9a\u4e49\u5a92\u4f53\u64ad\u653e\u5668",level:2},{value:"\u68c0\u6d4b\u7f16\u89e3\u7801\u5668",id:"\u68c0\u6d4b\u7f16\u89e3\u7801\u5668",level:2},{value:"\u97f3\u9891\u7c7b\u578b",id:"\u97f3\u9891\u7c7b\u578b",level:2}];function j(e){const d={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"\u5a92\u4f53\u5143\u7d20",children:"\u5a92\u4f53\u5143\u7d20"}),"\n",(0,s.jsxs)(d.p,{children:["\u968f\u7740\u5d4c\u5165\u97f3\u9891\u548c\u89c6\u9891\u5143\u7d20\u5728 Web \u5e94\u7528\u4e0a\u7684\u6d41\u884c\uff0cHTML5 \u65b0\u589e\u4e86\u4e24\u4e2a\u4e0e\u5a92\u4f53\u76f8\u5173\u7684\u5143\u7d20\uff0c\u5373 ",(0,s.jsx)(d.code,{children:"<audio>"})," \u548c ",(0,s.jsx)(d.code,{children:"<video>"}),"\uff0c\u4ece\u800c\u4e3a\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5d4c\u5165\u97f3\u9891\u548c\u89c6\u9891\u7684\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"\u8fd9\u4e24\u4e2a\u5143\u7d20\u65e2\u652f\u6301 Web \u5f00\u53d1\u8005\u5728\u9875\u9762\u4e2d\u5d4c\u5165\u5a92\u4f53\u6587\u4ef6\uff0c\u4e5f\u652f\u6301 JavaScript \u5b9e\u73b0\u5bf9\u5a92\u4f53\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u3002\u4ee5\u4e0b\u662f\u5b83\u4eec\u7684\u7528\u6cd5:"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-html",children:'\x3c!--\u5d4c\u5165\u89c6\u9891--\x3e\n<video src="test.mp4" id="myVideo">Video player not available.</video>\n\x3c!--\u5d4c\u5165\u97f3\u9891--\x3e\n<audio src="song.mp3" id="myAudio">Audio player not available.</audio>\n'})}),"\n",(0,s.jsxs)(d.p,{children:["\u6bcf\u4e2a\u5143\u7d20\u81f3\u5c11\u8981\u6c42\u6709\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"src"})," \u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8981\u52a0\u8f7d\u7684\u5a92\u4f53\u6587\u4ef6\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u6307\u5b9a\u8868\u793a\u89c6\u9891\u64ad\u653e\u5668\u5927\u5c0f\u7684 ",(0,s.jsx)(d.code,{children:"width"})," \u548c ",(0,s.jsx)(d.code,{children:"height"})," \u5c5e\u6027\uff0c\u4ee5\u53ca\u5728\u89c6\u9891\u52a0\u8f7d\u671f\u95f4\u663e\u793a\u56fe\u7247 URI \u7684 ",(0,s.jsx)(d.code,{children:"poster"})," \u5c5e\u6027\u3002\u53e6\u5916\uff0c",(0,s.jsx)(d.code,{children:"controls"})," \u5c5e\u6027\u5982\u679c\u5b58\u5728\uff0c\u5219\u8868\u793a\u6d4f\u89c8\u5668\u5e94\u8be5\u663e\u793a\u64ad\u653e\u754c\u9762\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u63a7\u5236\u5a92\u4f53\u3002\u5f00\u59cb\u548c\u7ed3\u675f\u6807\u7b7e\u4e4b\u95f4\u7684\u5185\u5bb9\u662f\u5728\u5a92\u4f53\u64ad\u653e\u5668\u4e0d\u53ef\u7528\u65f6\u663e\u793a\u7684\u66ff\u4ee3\u5185\u5bb9\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u7531\u4e8e\u6d4f\u89c8\u5668\u652f\u6301\u7684\u5a92\u4f53\u683c\u5f0f\u4e0d\u540c\uff0c\u56e0\u6b64\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u4e0d\u540c\u7684\u5a92\u4f53\u6e90\u3002\u4e3a\u6b64\uff0c\u9700\u8981\u4ece\u5143\u7d20\u4e2d\u5220\u9664 ",(0,s.jsx)(d.code,{children:"src"})," \u5c5e\u6027\uff0c\u4f7f\u7528\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,s.jsx)(d.code,{children:"<source>"})," \u5143\u7d20\u4ee3\u66ff\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u6240\u793a:"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-html",children:'\x3c!-- \u5d4c\u5165\u89c6\u9891 --\x3e\n<video id="myVideo">\n  <source src="conference.webm" type="video/webm; codecs=\'vp8, vorbis\'" />\n  <source src="conference.ogv" type="video/ogg; codecs=\'theora, vorbis\'" />\n  <source src="conference.mpg" />\n  Video player not available.\n</video>\n\x3c!-- \u5d4c\u5165\u97f3\u9891 --\x3e\n<audio id="myAudio">\n  <source src="song.ogg" type="audio/ogg" />\n  <source src="song.mp3" type="audio/mpeg" />\n  Audio player not available.\n</audio>\n'})}),"\n",(0,s.jsx)(d.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"<video>"})," \u548c ",(0,s.jsx)(d.code,{children:"<audio>"})," \u5143\u7d20\u63d0\u4f9b\u4e86\u7a33\u5065\u7684 JavaScript \u63a5\u53e3\u3002\u8fd9\u4e24\u4e2a\u5143\u7d20\u6709\u5f88\u591a\u5171\u6709\u5c5e\u6027\uff0c\u53ef\u4ee5\u7528\u4e8e\u786e\u5b9a\u5a92\u4f53\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5982\u4e0b\u8868\u6240\u793a\u3002"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u5c5e\u6027"}),(0,s.jsx)(d.th,{children:"\u6027"}),(0,s.jsx)(d.th,{children:"\u6570\u636e\u7c7b\u578b"}),(0,s.jsx)(d.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"autoplay"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e autoplay \u6807\u7b7e"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"buffered"})}),(0,s.jsx)(d.td,{children:"TimeRanges"}),(0,s.jsx)(d.td,{children:"\u5bf9\u8c61\uff0c\u8868\u793a\u5df2\u4e0b\u8f7d\u7f13\u51b2\u7684\u65f6\u95f4\u8303\u56f4"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bufferedBytes"})}),(0,s.jsx)(d.td,{children:"ByteRanges"}),(0,s.jsx)(d.td,{children:"\u5bf9\u8c61\uff0c\u8868\u793a\u5df2\u4e0b\u8f7d\u7f13\u51b2\u7684\u5b57\u8282\u8303\u56f4"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bufferingRate"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsx)(d.td,{children:"\u5e73\u5747\u6bcf\u79d2\u4e0b\u8f7d\u7684\u4f4d\u6570"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bufferingThrottled"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u7f13\u51b2\u662f\u5426\u88ab\u6d4f\u89c8\u5668\u622a\u6d41"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"controls"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e controls \u5c5e\u6027\uff0c\u7528\u4e8e\u663e\u793a\u6216\u9690\u85cf\u6d4f\u89c8\u5668\u5185\u7f6e\u63a7\u4ef6"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"currentLoop"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u5df2\u7ed3\u675f\u7684\u5faa\u73af\u6b21\u6570"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"currentSrc"})}),(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{children:"\u5f53\u524d\u64ad\u653e\u5a92\u4f53\u7684 URL"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"currentTime"})}),(0,s.jsx)(d.td,{children:"Float"}),(0,s.jsx)(d.td,{children:"\u5df2\u7ecf\u64ad\u653e\u7684\u79d2\u6570"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"defaultPlaybackRate"})}),(0,s.jsx)(d.td,{children:"Float"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u9ed8\u8ba4\u56de\u653e\u901f\u7387\u3002\u9ed8\u8ba4\u503c\u4e3a 1.0"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"duration"})}),(0,s.jsx)(d.td,{children:"Float"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u7684\u603b\u79d2\u6570"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ended"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5a92\u4f53\u662f\u5426\u64ad\u653e\u5b8c\u6210"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"loop"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5a92\u4f53\u662f\u5426\u5e94\u8be5\u5728\u64ad\u653e\u5b8c\u540e\u91cd\u65b0\u5f00\u59cb"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"muted"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5a92\u4f53\u662f\u5426\u9759\u97f3"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"networkState"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5a92\u4f53\u5f53\u524d\u7f51\u7edc\u8fde\u63a5\u72b6\u6001\u30020 \u8868\u793a\u6ca1\u6709\uff0c1 \u8868\u793a\u52a0\u8f7d\u4e2d\uff0c2 \u8868\u793a\u52a0\u8f7d\u5b8c\u6210"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"paused"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u64ad\u653e\u662f\u5426\u6682\u505c"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"playbackRate"})}),(0,s.jsx)(d.td,{children:"Float"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5f53\u524d\u64ad\u653e\u901f\u7387\u3002\u4e0e defaultPlaybackRate \u4e0d\u540c\uff0c\u8be5\u5c5e\u6027\u4f1a\u4fdd\u6301\u4e0d\u53d8"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"played"})}),(0,s.jsx)(d.td,{children:"TimeRanges"}),(0,s.jsx)(d.td,{children:"\u5230\u76ee\u524d\u4e3a\u6b62\u5df2\u7ecf\u64ad\u653e\u7684\u65f6\u95f4\u8303\u56f4"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"readyState"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u5a92\u4f53\u662f\u5426\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\u30020 \u8868\u793a\u4e0d\u53ef\u7528\uff0c1 \u8868\u793a\u53ef\u4ee5\u663e\u793a\u5f53\u524d\u5e27\uff0c2 \u8868\u793a\u5a92\u4f53\u53ef\u4ee5\u5f00\u59cb\u64ad\u653e"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"seekable"})}),(0,s.jsx)(d.td,{children:"TimeRanges"}),(0,s.jsx)(d.td,{children:"\u53ef\u4ee5\u8df3\u8f6c\u7684\u65f6\u95f4\u8303\u56f4"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"seeking"})}),(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"\u8868\u793a\u64ad\u653e\u662f\u5426\u6b63\u5728\u79fb\u52a8\u5230\u5a92\u4f53\u6587\u4ef6\u7684\u65b0\u4f4d\u7f6e"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"src"})}),(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u6587\u4ef6\u6e90\u3002\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u66f4\u6539"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"start"})}),(0,s.jsx)(d.td,{children:"Float"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5a92\u4f53\u6587\u4ef6\u4e2d\u7684\u4f4d\u7f6e\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff0c\u4ece\u8be5\u5904\u5f00\u59cb\u64ad\u653e"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"totalBytes"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsx)(d.td,{children:"\u8d44\u6e90\u9700\u8981\u7684\u5b57\u8282\u603b\u6570\uff08\u5982\u679c\u662f\u7f51\u7edc\u8d44\u6e90\u7684\u8bdd\uff09"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"videoHeight"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsxs)(d.td,{children:["\u8fd4\u56de\u89c6\u9891\uff08\u4e0d\u4e00\u5b9a\u662f\u5143\u7d20\uff09\u7684\u9ad8\u5ea6\u3002\u53ea\u9002\u7528\u4e8e ",(0,s.jsx)(d.code,{children:"<video>"})]}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"videoWidth"})}),(0,s.jsx)(d.td,{children:"Integer"}),(0,s.jsxs)(d.td,{children:["\u8fd4\u56de\u89c6\u9891\uff08\u4e0d\u4e00\u5b9a\u662f\u5143\u7d20\uff09\u7684\u5bbd\u5ea6\u3002\u53ea\u9002\u7528\u4e8e ",(0,s.jsx)(d.code,{children:"<video> "})]}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"volume"})}),(0,s.jsx)(d.td,{children:"Float"}),(0,s.jsx)(d.td,{children:"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5f53\u524d\u97f3\u91cf\uff0c\u503c\u4e3a 0.0 \u5230 1.0"}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,s.jsx)(d.p,{children:"\u9664\u4e86\u6709\u5f88\u591a\u5c5e\u6027\uff0c\u5a92\u4f53\u5143\u7d20\u8fd8\u6709\u5f88\u591a\u4e8b\u4ef6\u3002\u8fd9\u4e9b\u4e8b\u4ef6\u4f1a\u76d1\u63a7\u7531\u4e8e\u5a92\u4f53\u56de\u653e\u6216\u7528\u6237\u4ea4\u4e92\u5bfc\u81f4\u7684\u4e0d\u540c\u5c5e\u6027\u7684\u53d8\u5316\u3002\u4e0b\u8868\u5217\u51fa\u4e86\u8fd9\u4e9b\u4e8b\u4ef6\u3002"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u4e8b\u4ef6"}),(0,s.jsx)(d.th,{children:"\u4f55\u65f6\u89e6\u53d1"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dataunavailable"}),(0,s.jsx)(d.td,{children:"\u4e0d\u80fd\u56de\u653e\uff0c\u56e0\u4e3a\u6ca1\u6709\u6570\u636e\uff0creadyState \u4e3a 0"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"durationchange"}),(0,s.jsx)(d.td,{children:"duration \u5c5e\u6027\u7684\u503c\u53d1\u751f\u53d8\u5316"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"emptied"}),(0,s.jsx)(d.td,{children:"\u7f51\u7edc\u8fde\u63a5\u5173\u95ed\u4e86"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"empty"}),(0,s.jsx)(d.td,{children:"\u53d1\u751f\u4e86\u9519\u8bef\uff0c\u963b\u6b62\u5a92\u4f53\u4e0b\u8f7d"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ended"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u5df2\u7ecf\u64ad\u653e\u5b8c\u4e00\u904d\uff0c\u4e14\u505c\u6b62\u4e86"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"error"}),(0,s.jsx)(d.td,{children:"\u4e0b\u8f7d\u671f\u95f4\u53d1\u751f\u4e86\u7f51\u7edc\u9519\u8bef"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"load"}),(0,s.jsx)(d.td,{children:"\u6240\u6709\u5a92\u4f53\u5df2\u7ecf\u4e0b\u8f7d\u5b8c\u6bd5\u3002\u8fd9\u4e2a\u4e8b\u4ef6\u5df2\u88ab\u5e9f\u5f03\uff0c\u4f7f\u7528 canplaythrough \u4ee3\u66ff"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"loadeddata"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u7684\u7b2c\u4e00\u5e27\u5df2\u7ecf\u4e0b\u8f7d"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"loadedmetadata"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u7684\u5143\u6570\u636e\u5df2\u7ecf\u4e0b\u8f7d"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"loadstart"}),(0,s.jsx)(d.td,{children:"\u4e0b\u8f7d\u5df2\u7ecf\u5f00\u59cb"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"pause"}),(0,s.jsx)(d.td,{children:"\u56de\u653e\u5df2\u7ecf\u6682\u505c"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"play"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u5df2\u7ecf\u6536\u5230\u5f00\u59cb\u64ad\u653e\u7684\u8bf7\u6c42"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"playing"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u5df2\u7ecf\u5b9e\u9645\u5f00\u59cb\u64ad\u653e\u4e86"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"progress"}),(0,s.jsx)(d.td,{children:"\u4e0b\u8f7d\u4e2d"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ratechange"}),(0,s.jsx)(d.td,{children:"\u5a92\u4f53\u64ad\u653e\u901f\u7387\u53d1\u751f\u53d8\u5316"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"seeked"}),(0,s.jsx)(d.td,{children:"\u8df3\u8f6c\u7ed3\u675f"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"seeking"}),(0,s.jsx)(d.td,{children:"\u56de\u653e\u5df2\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"stalled"}),(0,s.jsx)(d.td,{children:"\u6d4f\u89c8\u5668\u5c1d\u8bd5\u4e0b\u8f7d\uff0c\u4f46\u5c1a\u672a\u6536\u5230\u6570\u636e"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timeupdate"}),(0,s.jsx)(d.td,{children:"currentTime \u88ab\u975e\u5e38\u89c4\u6216\u610f\u5916\u5730\u66f4\u6539\u4e86"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"volumechange"}),(0,s.jsx)(d.td,{children:"volume \u6216 muted \u5c5e\u6027\u503c\u53d1\u751f\u4e86\u53d8\u5316"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"waiting"}),(0,s.jsx)(d.td,{children:"\u56de\u653e\u6682\u505c\uff0c\u4ee5\u4e0b\u8f7d\u66f4\u591a\u6570\u636e"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"abort"}),(0,s.jsx)(d.td,{children:"\u4e0b\u8f7d\u88ab\u4e2d\u65ad"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"canplay"}),(0,s.jsx)(d.td,{children:"\u56de\u653e\u53ef\u4ee5\u5f00\u59cb\uff0creadyState \u4e3a 2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"canplaythrough"}),(0,s.jsx)(d.td,{children:"\u56de\u653e\u53ef\u4ee5\u7ee7\u7eed\uff0c\u4e0d\u5e94\u8be5\u4e2d\u65ad\uff0creadyState \u4e3a 3"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"canshowcurrentframe"}),(0,s.jsx)(d.td,{children:"\u5df2\u7ecf\u4e0b\u8f7d\u5f53\u524d\u5e27\uff0creadyState \u4e3a 1"})]})]})]}),"\n",(0,s.jsx)(d.p,{children:"\u8fd9\u4e9b\u4e8b\u4ef6\u88ab\u8bbe\u8ba1\u5f97\u5c3d\u53ef\u80fd\u5177\u4f53\uff0c\u4ee5\u4fbf Web \u5f00\u53d1\u8005\u80fd\u591f\u4f7f\u7528\u8f83\u5c11\u7684 HTML \u548c JavaScript \u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u97f3\u9891/\u89c6\u9891\u64ad\u653e\u5668"}),"\n",(0,s.jsx)(d.h2,{id:"\u81ea\u5b9a\u4e49\u5a92\u4f53\u64ad\u653e\u5668",children:"\u81ea\u5b9a\u4e49\u5a92\u4f53\u64ad\u653e\u5668"}),"\n",(0,s.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"<audio>"})," \u548c ",(0,s.jsx)(d.code,{children:"<video>"})," \u7684 ",(0,s.jsx)(d.code,{children:"play()"})," \u548c ",(0,s.jsx)(d.code,{children:"pause()"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u624b\u52a8\u63a7\u5236\u5a92\u4f53\u6587\u4ef6\u7684\u64ad\u653e\u3002\u7efc\u5408\u4f7f\u7528\u5c5e\u6027\u3001\u4e8b\u4ef6\u548c\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u5a92\u4f53\u64ad\u653e\u5668\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u6240\u793a:"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-html",children:'<div class="mediaplayer">\n  <div class="video">\n    <video\n      id="player"\n      src="movie.mov"\n      poster="mymovie.jpg"\n      width="300"\n      height="200"\n    >\n      Video player not available.\n    </video>\n  </div>\n  <div class="controls">\n    <input type="button" value="Play" id="video-btn" />\n    <span id="curtime">0</span>/<span id="duration">0</span>\n  </div>\n</div>\n'})}),"\n",(0,s.jsx)(d.p,{children:"\u901a\u8fc7\u4f7f\u7528 JavaScript \u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u89c6\u9891\u64ad\u653e\u5668\uff0c\u4e0a\u9762\u8fd9\u4e2a\u57fa\u672c\u7684 HTML \u5c31\u53ef\u4ee5\u88ab\u6fc0\u6d3b\u4e86\uff0c\u5982\u4e0b\u6240\u793a:"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-js",children:"// \u53d6\u5f97\u5143\u7d20\u7684\u5f15\u7528\nlet player = document.getElementById('player'),\n  btn = document.getElementById('video-btn'),\n  curtime = document.getElementById('curtime'),\n  duration = document.getElementById('duration');\n\n// \u66f4\u65b0\u65f6\u957f\nduration.innerHTML = player.duration;\n\n// \u4e3a\u6309\u94ae\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\nbtn.addEventListener('click', event => {\n  if (player.paused) {\n    player.play();\n    btn.value = 'Pause';\n  } else {\n    player.pause();\n    btn.value = 'Play';\n  }\n});\n\n// \u5468\u671f\u6027\u66f4\u65b0\u5f53\u524d\u65f6\u95f4\nsetInterval(() => {\n  curtime.innerHTML = player.currentTime;\n}, 250);\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u8fd9\u91cc\u7684 JavaScript \u4ee3\u7801\u7b80\u5355\u5730\u4e3a\u6309\u94ae\u6dfb\u52a0\u4e86\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u72b6\u6001\u64ad\u653e\u548c\u6682\u505c\u89c6\u9891\u3002\u6b64\u5916\uff0c\u8fd8\u7ed9 ",(0,s.jsx)(d.code,{children:"<video>"})," \u5143\u7d20\u7684 ",(0,s.jsx)(d.code,{children:"load"})," \u4e8b\u4ef6\u6dfb\u52a0\u4e86\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u4ee5\u4fbf\u663e\u793a\u89c6\u9891\u7684\u65f6\u957f\u3002\u6700\u540e\uff0c\u91cd\u590d\u7684\u8ba1\u65f6\u5668\u7528\u4e8e\u66f4\u65b0\u5f53\u524d\u65f6\u95f4\u3002\u901a\u8fc7\u76d1\u542c\u66f4\u591a\u4e8b\u4ef6\u4ee5\u53ca\u4f7f\u7528\u66f4\u591a\u5c5e\u6027\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6269\u5c55\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7684\u89c6\u9891\u64ad\u653e\u5668\u3002 \u540c\u6837\u7684\u4ee3\u7801\u4e5f\u53ef\u4ee5\u7528\u4e8e ",(0,s.jsx)(d.code,{children:"<audio>"})," \u5143\u7d20\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u97f3\u9891\u64ad\u653e\u5668\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u68c0\u6d4b\u7f16\u89e3\u7801\u5668",children:"\u68c0\u6d4b\u7f16\u89e3\u7801\u5668"}),"\n",(0,s.jsxs)(d.p,{children:["\u5982\u524d\u6240\u8ff0\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u652f\u6301 ",(0,s.jsx)(d.code,{children:"<video>"})," \u548c ",(0,s.jsx)(d.code,{children:"<audio>"})," \u7684\u6240\u6709\u7f16\u89e3\u7801\u5668\uff0c\u8fd9\u901a\u5e38\u610f\u5473\u7740\u5fc5\u987b\u63d0\u4f9b\u591a\u4e2a\u5a92\u4f53\u6e90\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u4e3a\u6b64\uff0c\u4e5f\u6709 JavaScript API \u53ef\u4ee5\u7528\u6765\u68c0\u6d4b\u6d4f\u89c8\u5668\u662f\u5426\u652f\u6301\u7ed9\u5b9a\u683c\u5f0f\u548c\u7f16\u89e3\u7801\u5668\u3002\u8fd9\u4e24\u4e2a\u5a92\u4f53\u5143\u7d20\u90fd\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(d.code,{children:"canPlayType()"}),' \u7684\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u683c\u5f0f/\u7f16\u89e3\u7801\u5668\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u503c: "probably"\u3001"maybe"\u6216""(\u7a7a\u5b57\u7b26\u4e32)\uff0c\u5176\u4e2d\u7a7a\u5b57\u7b26\u4e32\u5c31\u662f\u5047\u503c\uff0c\u610f\u5473\u7740\u53ef\u4ee5\u5728 if \u8bed\u53e5\u4e2d\u50cf\u8fd9\u6837\u4f7f\u7528 ',(0,s.jsx)(d.code,{children:"canPlayType()"}),":"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-js",children:"if (audio.canPlayType('audio/mpeg')) {\n  // \u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n}\n"})}),"\n",(0,s.jsx)(d.p,{children:'"probably"\u548c"maybe"\u90fd\u662f\u771f\u503c\uff0c\u5728 if \u8bed\u53e5\u7684\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u8f6c\u578b\u4e3a true\u3002'}),"\n",(0,s.jsxs)(d.p,{children:["\u5728\u53ea\u7ed9 ",(0,s.jsx)(d.code,{children:"canPlayType()"}),' \u63d0\u4f9b\u4e00\u4e2a MIME \u7c7b\u578b\u7684\u60c5\u51b5\u4e0b\uff0c\u6700\u53ef\u80fd\u8fd4\u56de\u7684\u503c\u662f"maybe"\u548c\u7a7a\u5b57\u7b26\u4e32\u3002 \u8fd9\u662f\u56e0\u4e3a\u6587\u4ef6\u5b9e\u9645\u4e0a\u53ea\u662f\u4e00\u4e2a\u5305\u88c5\u97f3\u9891\u548c\u89c6\u9891\u6570\u636e\u7684\u5bb9\u5668\uff0c\u800c\u771f\u6b63\u51b3\u5b9a\u6587\u4ef6\u662f\u5426\u53ef\u4ee5\u64ad\u653e\u7684\u662f\u7f16\u7801\u3002\u5728\u540c\u65f6\u63d0\u4f9b MIME \u7c7b\u578b\u548c\u7f16\u89e3\u7801\u5668\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u503c\u7684\u53ef\u80fd\u6027\u4f1a\u63d0\u9ad8\u5230"probably"\u3002']}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-js",children:"let audio = document.getElementById('audio-player');\n\n// \u5f88\u53ef\u80fd\u662f\"maybe\"\nif (audio.canPlayType('audio/mpeg')) {\n  // \u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n}\n\n// \u53ef\u80fd\u662f\"probably\"\nif (audio.canPlayType('audio/ogg; codecs=\"vorbis\"')) {\n  // \u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n}\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u6ce8\u610f\uff0c\u7f16\u89e3\u7801\u5668\u5fc5\u987b\u653e\u5230\u5f15\u53f7\u4e2d\u3002\u540c\u6837\uff0c\u4e5f\u53ef\u4ee5\u5728\u89c6\u9891\u5143\u7d20\u4e0a\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"canPlayType()"})," \u68c0\u6d4b\u89c6\u9891\u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u97f3\u9891\u7c7b\u578b",children:"\u97f3\u9891\u7c7b\u578b"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"<audio>"})," \u5143\u7d20\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3a Audio \u7684\u539f\u751f JavaScript \u6784\u9020\u51fd\u6570\uff0c\u652f\u6301\u5728\u4efb\u4f55\u65f6\u5019\u64ad\u653e\u97f3\u9891\u3002Audio \u7c7b\u578b\u4e0e Image \u7c7b\u4f3c\uff0c\u90fd\u662f DOM \u5143\u7d20\u7684\u5bf9\u7b49\u4f53\uff0c\u53ea\u662f\u4e0d\u9700\u63d2\u5165\u6587\u6863\u5373\u53ef\u5de5\u4f5c\u3002\u8981\u901a\u8fc7 Audio \u64ad\u653e\u97f3\u9891\uff0c\u53ea\u9700\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u5e76\u4f20\u5165\u97f3\u9891\u6e90\u6587\u4ef6:"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-js",children:"let audio = new Audio('sound.mp3');\nEventUtil.addHandler(audio, 'canplaythrough', function (event) {\n  audio.play();\n});\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u521b\u5efa Audio \u7684\u65b0\u5b9e\u4f8b\u5c31\u4f1a\u5f00\u59cb\u4e0b\u8f7d\u6307\u5b9a\u7684\u6587\u4ef6\u3002\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u53ef\u4ee5\u8c03\u7528 ",(0,s.jsx)(d.code,{children:"play()"})," \u6765\u64ad\u653e\u97f3\u9891\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5728 iOS \u4e2d\u8c03\u7528 ",(0,s.jsx)(d.code,{children:"play()"})," \u65b9\u6cd5\u4f1a\u5f39\u51fa\u4e00\u4e2a\u5bf9\u8bdd\u6846\uff0c\u8bf7\u6c42\u7528\u6237\u6388\u6743\u64ad\u653e\u58f0\u97f3\u3002\u4e3a\u4e86\u8fde\u7eed\u64ad\u653e\uff0c\u5fc5\u987b\u5728 ",(0,s.jsx)(d.code,{children:"onfinish"})," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u7acb\u5373\u8c03\u7528 ",(0,s.jsx)(d.code,{children:"play()"}),"\u3002"]})]})}function x(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},11151:(e,d,n)=>{n.d(d,{Z:()=>t,a:()=>c});var s=n(67294);const r={},i=s.createContext(r);function c(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);