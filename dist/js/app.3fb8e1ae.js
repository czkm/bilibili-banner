(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return s.p+"js/"+({"animated-banner-particle":"animated-banner-particle"}[e]||e)+"."+{"animated-banner-particle":"e1e9b12a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"045b":function(e,t,n){e.exports=n.p+"img/04.317ffd18.png"},"06a6":function(e,t,n){},"1a4e":function(e,t,n){e.exports=n.p+"img/05.a4c95165.png"},"28d1":function(e,t,n){e.exports=n.p+"img/09.f532c51b.png"},"30f6":function(e,t,n){e.exports=n.p+"img/07.92974324.png"},"33e9":function(e,t,n){e.exports=n.p+"img/14.b0f50e02.png"},"55f2":function(e,t,n){e.exports=n.p+"img/13.51e92ca2.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.animatedBannerEnabled?n("animatedBanner",{class:e.animatedBannerShow?"":"staticImg",style:e.animatedBannerShow?"":"background-image: url("+e.bannerImg+")",attrs:{config:e.position},on:{change:function(t){return e.animatedBannerShow=t}}}):e._e()],1)},i=[],o=n("1da1"),s=(n("96cf"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"animated-banner"})}),c=[],l=n("5530"),u=n("2909"),f=(n("d81d"),n("3ca3"),n("ddb0"),n("159b"),n("99af"),n("4de4"),n("b0c0"),n("cfc3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),4),d=.001,p=1e-7,m=10,v=11,b=1/(v-1),h="function"===typeof Float32Array;function g(e,t){return 1-3*t+3*e}function y(e,t){return 3*t-6*e}function w(e){return 3*e}function x(e,t,n){return((g(t,n)*e+y(t,n))*e+w(t))*e}function _(e,t,n){return 3*g(t,n)*e*e+2*y(t,n)*e+w(t)}function S(e,t,n,r,a){var i,o,s=0;do{o=t+(n-t)/2,i=x(o,r,a)-e,i>0?n=o:t=o}while(Math.abs(i)>p&&++s<m);return o}function C(e,t,n,r){for(var a=0;a<f;++a){var i=_(t,n,r);if(0===i)return t;var o=x(t,n,r)-e;t-=o/i}return t}function E(e){return e}function M(e,t,n,r){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===r)return E;for(var a=h?new Float32Array(v):new Array(v),i=0;i<v;++i)a[i]=x(i*b,e,n);function o(t){for(var r=0,i=1,o=v-1;i!==o&&a[i]<=t;++i)r+=b;--i;var s=(t-a[i])/(a[i+1]-a[i]),c=r+s*b,l=_(c,e,n);return l>=d?C(t,c,e,n):0===l?c:S(t,r,r+b,e,n)}return function(e){return 0===e||1===e?e:x(o(e),t,r)}}var j={props:{config:{required:!0,default:{}}},data:function(){return{entered:!1,layerConfig:{},imgList:{"01":n("a24b"),"02":n("ec36"),"03":n("b7e6"),"04":n("045b"),"05":n("1a4e"),"06":n("c812"),"07":n("30f6"),"08":n("6c58"),"09":n("28d1"),10:n("7e50"),11:n("92af"),12:n("cbb7"),13:n("55f2"),14:n("33e9"),15:n("608c")}}},watch:{entered:function(e){var t;null===(t=this.extensions)||void 0===t||t.map((function(t){var n;return null===(n=t.handleHoverChange)||void 0===n?void 0:n.call(t,e)}))}},computed:{locs:function(){return this.locsData||this.bannerData[0]&&this.mapBannerData(this.bannerData[0])||{}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,i,s,c,l,f,d,p,m,v,b,h,g,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.animatedBannerSupport="undefined"!==typeof CSS&&CSS.supports&&CSS.supports("filter: blur(1px)")&&!/^((?!chrome|android).)*safari/i.test(navigator.userAgent),e.animatedBannerSupport){t.next=3;break}return t.abrupt("return");case 3:if(e.layerConfig=e.config.layers,"complete"===document.readyState){t.next=7;break}return t.next=7,new Promise((function(e){return window.addEventListener("load",e)}));case 7:return t.prev=7,t.next=10,Promise.all(e.layerConfig.map(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(n.resources.map(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!/\.(webm|mp4)$/.test(r.src)){t.next=3;break}t.next=8;break;case 3:return i=document.createElement("img"),i.src=e.imgList[r.src],t.next=7,new Promise((function(e){return i.onload=e}));case 7:n.resources[a].el=i;case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t["catch"](7),console.log("load animated banner images error",t.t0),t.abrupt("return");case 16:if(a=e.layerConfig,a.length||e.config.extensions){t.next=19;break}return t.abrupt("return");case 19:if(i=e.$refs["container"],s=i.clientHeight,c=i.clientWidth,l=s/155,a.forEach((function(e){var t,n,r,a;e._initState={scale:1,rotate:(null===(t=e.rotate)||void 0===t?void 0:t.initial)||0,translate:(null===(n=e.translate)||void 0===n?void 0:n.initial)||[0,0],blur:(null===(r=e.blur)||void 0===r?void 0:r.initial)||0,opacity:void 0===(null===(a=e.opacity)||void 0===a?void 0:a.initial)?1:e.opacity.initial},e.resources.forEach((function(t,n){var r,a,i=e.resources[n].el;i.dataset.height=i.naturalHeight,i.dataset.width=i.naturalWidth;var o=void 0===(null===(r=e.scale)||void 0===r?void 0:r.initial)?1:null===(a=e.scale)||void 0===a?void 0:a.initial;i.height=i.dataset.height*l*o,i.width=i.dataset.width*l*o}))})),f=a.map((function(e){var t=document.createElement("div");return t.classList.add("layer"),i.appendChild(t),t})),d=0,p=0,m=0,v=NaN,e.entered=!1,e.extensions=[],b=function(e){var t=M.apply(void 0,Object(u["a"])(e));return function(e){return e>0?t(e):-t(-e)}},h=function(t){try{if(v===d)return;v=d,f.map((function(e,t){var n=a[t],r=e.firstChild;if(r){var i={scale:n._initState.scale,rotate:n._initState.rotate,translate:n._initState.translate};if(n.scale){var o=n.scale.offset||0,s=function(e){return e};n.scale.offsetCurve&&b(n.scale.offsetCurve);var c=o*s(d);i.scale=n._initState.scale+c}if(n.rotate){var u=n.rotate.offset||0,f=u*d;i.rotate=n._initState.rotate+f}if(n.translate){var p=n.translate.offset||[0,0],m=p.map((function(e){return d*e})),v=n._initState.translate.map((function(e,t){var r;return(e+m[t])*l*((null===(r=n.scale)||void 0===r?void 0:r.initial)||1)}));i.translate=v}if(r.style.transform="scale(".concat(i.scale,")")+"translate(".concat(i.translate[0],"px, ").concat(i.translate[1],"px)")+"rotate(".concat(i.rotate,"deg)"),n.blur){var h=n.blur.offset||0,g=h*d,y=0;n.blur.wrap&&"clamp"!==n.blur.wrap?"alternate"===n.blur.wrap&&(y=Math.abs(n._initState.blur+g)):y=Math.max(0,n._initState.blur+g),r.style.filter=y<1e-4?"":"blur(".concat(y,"px)")}if(n.opacity){var w=n.opacity.offset||0,x=w*d,_=n._initState.opacity;if(n.opacity.wrap&&"clamp"!==n.opacity.wrap){if("alternate"===n.opacity.wrap){var S=_+x,C=Math.abs(S%1);Math.abs(S%2)>=1&&(C=1-C),r.style.opacity=C}}else r.style.opacity=Math.max(0,Math.min(1,_+x))}}}))}catch(n){console.error(n),e.$emit("change",!1)}},a.map((function(e,t){var n=e.resources[0].el;f[t].appendChild(n),requestAnimationFrame(h)})),e.$emit("change",!0),g=function(){var e=performance.now(),t=200,n=d;cancelAnimationFrame(m);var r=function r(a){a-e<t?(d=n*(1-(a-e)/200),h(a),requestAnimationFrame(r)):(d=0,h(a))};m=requestAnimationFrame(r)},e.handleMouseLeave=function(t){e.entered=!1,g()},e.handleMouseMove=function(t){var n=document.documentElement.scrollTop+t.clientY;n<s?(e.entered||(e.entered=!0,p=t.clientX),d=(t.clientX-p)/c,cancelAnimationFrame(m),m=requestAnimationFrame(h)):e.entered&&(e.entered=!1,g()),e.extensions.map((function(e){var n;return null===(n=e.handleMouseMove)||void 0===n?void 0:n.call(e,{e:t,displace:d})}))},e.handleResize=function(t){s=i.clientHeight,c=i.clientWidth,l=s/155,a.forEach((function(e){e.resources.forEach((function(t){var n,r,a=t.el;a.height=a.dataset.height*l*((null===(n=e.scale)||void 0===n?void 0:n.initial)||1),a.width=a.dataset.width*l*((null===(r=e.scale)||void 0===r?void 0:r.initial)||1)}))})),cancelAnimationFrame(m),m=requestAnimationFrame((function(e){h(e)})),e.extensions.map((function(e){var n;return null===(n=e.handleResize)||void 0===n?void 0:n.call(e,t)}))},document.addEventListener("mouseleave",e.handleMouseLeave),window.addEventListener("mousemove",e.handleMouseMove),window.addEventListener("resize",e.handleResize),null===(r=e.config.extensions)||void 0===r||!r.petals){t.next=57;break}return t.prev=43,t.next=46,n.e("animated-banner-particle").then(n.bind(null,"792f"));case 46:return y=t.sent.default,t.t1=e.extensions,t.next=50,y(e.$refs["container"]);case 50:t.t2=t.sent,t.t1.push.call(t.t1,t.t2),t.next=57;break;case 54:t.prev=54,t.t3=t["catch"](43),console.error(t.t3);case 57:case"end":return t.stop()}}),t,null,[[7,12],[43,54]])})))()},beforeDestroy:function(){document.removeEventListener("mouseleave",this.handleMouseLeave),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("resize",this.handleResize),this.extensions&&(this.extensions.map((function(e){var t;return null===(t=e.destory)||void 0===t?void 0:t.call(e)})),this.extensions=[])},methods:{mapBannerData:function(e){return{logo:e.litpic,litpic:e.pic,title:e.name,jump_url:e.jump_url,request_id:e.request_id,is_split_layer:e.is_split_layer,split_layer:e.split_layer}},compatOldConfig:function(e){if(console.log(e),e instanceof Array)return{version:"1",layers:e.map((function(e,t){var n,r,a,i,o,s,c,u,f,d,p,m;return{id:t,resources:e.images.map((function(e,t){return Object(l["a"])({id:t},e)})),scale:{initial:null===(n=e.initial)||void 0===n?void 0:n.scale,offset:null===(r=e.offset)||void 0===r?void 0:r.scale,offsetCurve:null===(a=e.offsetCurve)||void 0===a?void 0:a.scale},rotate:{initial:null===(i=e.initial)||void 0===i?void 0:i.rotate,offset:null===(o=e.offset)||void 0===o?void 0:o.rotate,offsetCurve:null===(s=e.offsetCurve)||void 0===s?void 0:s.rotate},translate:{initial:null===(c=e.initial)||void 0===c?void 0:c.translate,offset:null===(u=e.offset)||void 0===u?void 0:u.translate,offsetCurve:null===(f=e.offsetCurve)||void 0===f?void 0:f.translate},blur:{initial:null===(d=e.initial)||void 0===d?void 0:d.blur,offset:null===(p=e.offset)||void 0===p?void 0:p.blur,offsetCurve:null===(m=e.offsetCurve)||void 0===m?void 0:m.blur}}}))};e.version}}},O=j,k=(n("71b5"),n("d082"),n("2877")),A=Object(k["a"])(O,s,c,!1,null,"9cff9264",null),B=A.exports,L={version:"1",layers:[{resources:[{src:"01",id:0}],scale:{initial:.5},rotate:{},translate:{initial:[0,-30],offset:[-200,0]},blur:{},opacity:{},id:16,name:"15_天空"},{resources:[{src:"02",id:0}],scale:{initial:.5},rotate:{},translate:{initial:[2200,0],offset:[-200,0]},blur:{},opacity:{},id:15,name:"14_远景亭子"},{resources:[{src:"03",id:0}],scale:{initial:.45},rotate:{},translate:{initial:[1500,0],offset:[-300,0]},blur:{},opacity:{},id:17,name:"13_右侧船坞"},{resources:[{src:"04",id:0}],scale:{initial:.49},rotate:{},translate:{initial:[-1300,0],offset:[-900,0]},blur:{},opacity:{},id:14,name:"12_远景桥"},{resources:[{src:"05",id:0}],scale:{initial:.45},rotate:{},translate:{initial:[1350,100],offset:[-250,0]},blur:{},opacity:{},id:23,name:"11_近船"},{resources:[{src:"06",id:0}],scale:{initial:.28},rotate:{},translate:{initial:[900,130],offset:[-200,0]},blur:{},opacity:{initial:0,offset:2,offsetCurve:[.4065,.5925,1,1]},id:18,name:"10_2233坐船"},{resources:[{src:"07",id:0}],scale:{initial:.7},rotate:{},translate:{initial:[160,20],offset:[-1e3,0]},blur:{},opacity:{},id:24,name:"09_右侧远处草坪"},{resources:[{src:"08",id:0}],scale:{initial:.7},rotate:{},translate:{initial:[-500,70],offset:[-1200,0]},blur:{},opacity:{},id:13,name:"08_远草坪"},{resources:[{src:"09",id:0}],scale:{initial:.4},rotate:{},translate:{initial:[-600,40],offset:[-1e3,0]},blur:{},opacity:{initial:0,offset:-2},id:20,name:"07_22放风筝"},{resources:[{src:"10",id:0}],scale:{initial:.4},rotate:{},translate:{initial:[-850,80],offset:[-1450,0]},blur:{},opacity:{initial:0,offset:-2},id:21,name:"06_33放风筝"},{resources:[{src:"11",id:0}],scale:{initial:.45},rotate:{},translate:{initial:[-200,30],offset:[-2500,0]},blur:{},opacity:{},id:10,name:"05_樱花远景"},{resources:[{src:"12",id:0}],scale:{initial:.5},rotate:{},translate:{initial:[200,0],offset:[-3e3,0]},blur:{},opacity:{},id:11,name:"04_樱花草坪"},{resources:[{src:"13",id:0}],scale:{initial:.45},rotate:{},translate:{initial:[480,30],offset:[-3300,0]},blur:{},opacity:{offset:1.2,wrap:"alternate",offsetCurve:[.09300000000000001,-.2709999999999999,1,1]},id:7,name:"03_2233野餐"},{resources:[{src:"14",id:0}],scale:{initial:.6},rotate:{},translate:{initial:[3500,0],offset:[-3500,0]},blur:{initial:2},opacity:{},id:19,name:"02_柳树近景"},{resources:[{src:"15",id:0}],scale:{initial:.5},rotate:{},translate:{initial:[-2e3,0],offset:[-6e3,0]},blur:{initial:1},opacity:{},id:12,name:"01_樱花近景"}],extensions:{petals:{}}},P={name:"App",data:function(){return{position:L,animatedBannerShow:!1,animatedBannerEnabled:!1}},components:{animatedBanner:B},computed:{bannerImg:function(){return n("7bb8")}},methods:{animatedBanner:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.createElement("img"),n.src=e.bannerImg,t.next=4,new Promise((function(e){return n.onload=e()}));case 4:e.animatedBannerEnabled=!0;case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.animatedBanner()}},R=P,F=(n("034f"),Object(k["a"])(R,a,i,!1,null,null,null)),q=F.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(q)}}).$mount("#app")},"608c":function(e,t,n){e.exports=n.p+"img/15.6feadd2c.png"},"6c58":function(e,t,n){e.exports=n.p+"img/08.9d9bd24e.png"},"71b5":function(e,t,n){"use strict";n("06a6")},"7bb8":function(e,t,n){e.exports=n.p+"img/static.8b9e48fb.png"},"7e50":function(e,t,n){e.exports=n.p+"img/10.a84ee17e.png"},"85ec":function(e,t,n){},"92af":function(e,t,n){e.exports=n.p+"img/11.430cf0e6.png"},"92e1":function(e,t,n){},a24b:function(e,t,n){e.exports=n.p+"img/01.39916ee4.png"},b7e6:function(e,t,n){e.exports=n.p+"img/03.ed2b9a25.png"},c812:function(e,t,n){e.exports=n.p+"img/06.c78a3fe7.png"},cbb7:function(e,t,n){e.exports=n.p+"img/12.62a6da5e.png"},d082:function(e,t,n){"use strict";n("92e1")},ec36:function(e,t,n){e.exports=n.p+"img/02.acb1fc44.png"}});
//# sourceMappingURL=app.3fb8e1ae.js.map