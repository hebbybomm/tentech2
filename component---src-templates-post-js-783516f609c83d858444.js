(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6qSS":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return I})),n.d(t,"Post",(function(){return J}));n("rzGZ"),n("m210"),n("4DPX"),n("q8oJ"),n("C9fy"),n("8npG"),n("ZiRl"),n("E5k/"),n("YbXK"),n("cFtU"),n("sC2a"),n("pJf4"),n("v9g0");var o=n("vOnD"),i=n("qhky"),r=n("52Oh"),a=n("i8R+"),d=n("q1tI"),l=n.n(d),c=n("LvDl"),m=n.n(c),u=n("OJSm"),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(e){return"IMG"===e.tagName},p=function(e){return e&&1===e.nodeType},h=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},g=function(e){try{return Array.isArray(e)?e.filter(f):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(f):p(e)?[e].filter(f):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(f):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},v=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},y=function(e){var t=e.getBoundingClientRect(),n=t.top,o=t.left,i=t.width,r=t.height,a=e.cloneNode(),d=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=n+d+"px",a.style.left=o+l+"px",a.style.width=i+"px",a.style.height=r+"px",a.style.transform="",a},b=function(e,t){var n=s({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,n);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var z=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=window.Promise||function(e){function t(){}e(t,t)},i=function(e){var t=e.target;t!==T?-1!==S.indexOf(t)&&x({target:t}):w()},r=function(){if(!O&&H.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(C-e)>k.scrollOffset&&setTimeout(w,150)}},a=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||w()},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(T.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=s({},k.container,e.container)),e.template){var n=p(e.template)?e.template:document.querySelector(e.template);t.template=n}return k=s({},k,t),S.forEach((function(e){e.dispatchEvent(b("medium-zoom:update",{detail:{zoom:j}}))})),j},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(s({},k,t))},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.reduce((function(e,t){return[].concat(e,g(t))}),[]);return o.filter((function(e){return-1===S.indexOf(e)})).forEach((function(e){S.push(e),e.classList.add("medium-zoom-image")})),M.forEach((function(e){var t=e.type,n=e.listener,i=e.options;o.forEach((function(e){e.addEventListener(t,n,i)}))})),j},m=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];H.zoomed&&w();var o=t.length>0?t.reduce((function(e,t){return[].concat(e,g(t))}),[]):S;return o.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(b("medium-zoom:detach",{detail:{zoom:j}}))})),S=S.filter((function(e){return-1===o.indexOf(e)})),j},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(o){o.addEventListener("medium-zoom:"+e,t,n)})),M.push({type:"medium-zoom:"+e,listener:t,options:n}),j},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(o){o.removeEventListener("medium-zoom:"+e,t,n)})),M=M.filter((function(n){return!(n.type==="medium-zoom:"+e&&n.listener.toString()===t.toString())})),j},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(k.container)if(k.container instanceof Object)t=(e=s({},e,k.container)).width-e.left-e.right-2*k.margin,n=e.height-e.top-e.bottom-2*k.margin;else{var o=(p(k.container)?k.container:document.querySelector(k.container)).getBoundingClientRect(),i=o.width,r=o.height,a=o.left,d=o.top;e=s({},e,{width:i,height:r,left:a,top:d})}t=t||e.width-2*k.margin,n=n||e.height-2*k.margin;var l=H.zoomedHd||H.original,c=h(l)?t:l.naturalWidth||t,m=h(l)?n:l.naturalHeight||n,u=l.getBoundingClientRect(),f=u.top,g=u.left,v=u.width,y=u.height,b=Math.min(c,t)/v,z=Math.min(m,n)/y,w=Math.min(b,z),x="scale("+w+") translate3d("+((t-v)/2-g+k.margin+e.left)/w+"px, "+((n-y)/2-f+k.margin+e.top)/w+"px, 0)";H.zoomed.style.transform=x,H.zoomedHd&&(H.zoomedHd.style.transform=x)};return new o((function(e){if(t&&-1===S.indexOf(t))e(j);else{if(H.zoomed)e(j);else{if(t)H.original=t;else{if(!(S.length>0))return void e(j);var o=S;H.original=o[0]}if(H.original.dispatchEvent(b("medium-zoom:open",{detail:{zoom:j}})),C=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,O=!0,H.zoomed=y(H.original),document.body.appendChild(T),k.template){var i=p(k.template)?k.template:document.querySelector(k.template);H.template=document.createElement("div"),H.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(H.template)}if(document.body.appendChild(H.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),H.original.classList.add("medium-zoom-image--hidden"),H.zoomed.classList.add("medium-zoom-image--opened"),H.zoomed.addEventListener("click",w),H.zoomed.addEventListener("transitionend",(function t(){O=!1,H.zoomed.removeEventListener("transitionend",t),H.original.dispatchEvent(b("medium-zoom:opened",{detail:{zoom:j}})),e(j)})),H.original.getAttribute("data-zoom-src")){H.zoomedHd=H.zoomed.cloneNode(),H.zoomedHd.removeAttribute("srcset"),H.zoomedHd.removeAttribute("sizes"),H.zoomedHd.src=H.zoomed.getAttribute("data-zoom-src"),H.zoomedHd.onerror=function(){clearInterval(r),console.warn("Unable to reach the zoom image target "+H.zoomedHd.src),H.zoomedHd=null,n()};var r=setInterval((function(){H.zoomedHd.complete&&(clearInterval(r),H.zoomedHd.classList.add("medium-zoom-image--opened"),H.zoomedHd.addEventListener("click",w),document.body.appendChild(H.zoomedHd),n())}),10)}else if(H.original.hasAttribute("srcset")){H.zoomedHd=H.zoomed.cloneNode(),H.zoomedHd.removeAttribute("sizes");var a=H.zoomedHd.addEventListener("load",(function(){H.zoomedHd.removeEventListener("load",a),H.zoomedHd.classList.add("medium-zoom-image--opened"),H.zoomedHd.addEventListener("click",w),document.body.appendChild(H.zoomedHd),n()}))}else n()}}}))},w=function(){return new o((function(e){if(!O&&H.original){O=!0,document.body.classList.remove("medium-zoom--opened"),H.zoomed.style.transform="",H.zoomedHd&&(H.zoomedHd.style.transform=""),H.template&&(H.template.style.transition="opacity 150ms",H.template.style.opacity=0),H.original.dispatchEvent(b("medium-zoom:close",{detail:{zoom:j}})),H.zoomed.addEventListener("transitionend",(function t(){H.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(H.zoomed),H.zoomedHd&&document.body.removeChild(H.zoomedHd),document.body.removeChild(T),H.zoomed.classList.remove("medium-zoom-image--opened"),H.template&&document.body.removeChild(H.template),O=!1,H.zoomed.removeEventListener("transitionend",t),H.original.dispatchEvent(b("medium-zoom:closed",{detail:{zoom:j}})),H.original=null,H.zoomed=null,H.zoomedHd=null,H.template=null,e(j)}))}else e(j)}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return H.original?w():z({target:t})},E=function(){return k},_=function(){return S},L=function(){return H.original},S=[],M=[],O=!1,C=0,k=n,H={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?k=t:(t||"string"==typeof t)&&c(t),k=s({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},k);var T=v(k.background);document.addEventListener("click",i),document.addEventListener("keyup",a),document.addEventListener("scroll",r),window.addEventListener("resize",w);var j={open:z,close:w,toggle:x,update:d,clone:l,attach:c,detach:m,on:u,off:f,getOptions:E,getImages:_,getZoomedImage:L};return j},w=n("753b"),x=n("mKrf"),E=n("tBDR"),_=n("MqaO"),L=n("Aw06"),S=n("Bpoh"),M=n("McE4"),O=function(e){var t,n,o=e.data,i=e.isFirst,r=e.isLast,a=o.value,d=o.label;return l.a.createElement(x.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",border:"1px solid",borderColor:"borderColor.3",borderRight:r?null:"none",minHeight:[0,"20x"],minWidth:[0,"60x"],flexShrink:i?0:1},l.a.createElement(x.a,{paddingX:["3x","6x"],paddingY:["2x","4x"]},d?l.a.createElement(S.a,{as:"div",markdown:!0,variant:"postInfoBoxLabel",html:null==d||null===(t=d.text)||void 0===t||null===(n=t.childMarkdownRemark)||void 0===n?void 0:n.html}):null,a?l.a.createElement(M.a,{as:"div",variant:"postInfoBoxValue"},i?l.a.createElement(x.a,{as:"span"},a):a):null))},C=n("wd/R"),k=n.n(C),H=(n("tGlX"),k.a),T=n("83Zx");function j(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var I="1741444451",D=Object(o.c)(x.a).withConfig({displayName:"post___StyledBox",componentId:"hdbts8-0"})({transition:"opacity 0.8s"}),B=Object(o.c)(x.a).withConfig({displayName:"post___StyledBox2",componentId:"hdbts8-1"})({transition:"width 0.8s"}),N=Object(o.c)(x.a).withConfig({displayName:"post___StyledBox3",componentId:"hdbts8-2"})(["",""],(function(e){return e._css})),Y=Object(o.c)(x.a).withConfig({displayName:"post___StyledBox4",componentId:"hdbts8-3"})({listStyle:"decimal"}),F=Object(o.c)(M.a).withConfig({displayName:"post___StyledText",componentId:"hdbts8-4"})({whiteSpace:"nowrap"}),J=function(e){var t,n,c,s=e.data,f=e.pageContext,p=f.layout,h=f.image,g=f.site_metadata.siteUrl,v=Object(o.d)().contentfulIds,y=Object(r.a)().locale,b=Object(d.useRef)(),S=Object(d.useState)([]),C=S[0],k=S[1],T=Object(d.useState)(""),A=T[0],I=T[1],J=Object(d.useState)(0),R=J[0],q=J[1],U=p.find((function(e){return e.contentful_id===v.others.id})),X=s.title,P=s.releaseDate,W=s.createdAt,G=s.content,Z=s.author,K=[{label:U.texts.find((function(e){return e.contentful_id===v.others.texts.releasedOn})),value:H(P||W).locale(y).format("ll")}];return(null==Z?void 0:Z.length)&&K.push({label:U.texts.find((function(e){return e.contentful_id===v.others.texts.authors})),value:Z.map((function(e){return e.name})).join(", ")}),Object(d.useEffect)((function(){for(var e,t,n,o=null===a.window||void 0===a.window||null===(e=a.window.location)||void 0===e?void 0:e.hash,i=1,r=[],d=j(null===(t=b.current)||void 0===t?void 0:t.querySelectorAll("h1, h2"));!(n=d()).done;){var l=n.value,c=l.innerText.replace(/^\d\./,"").trim();r.push(c),l.innerHTML='<span id="title-'+i+'" class="index">'+i+".</span>"+c,i++}k(r),o&&(a.window.location.hash="",a.window.location.hash=o.replace(/^#/,""))}),[]),Object(d.useEffect)((function(){var e=setTimeout((function(){return z(".medium-zoom img")}),2e3);return function(){return clearTimeout(e)}}),[]),Object(d.useEffect)((function(){var e=m.a.throttle((function(){var e,t=Array.from(null===(e=b.current)||void 0===e?void 0:e.querySelectorAll(".index"));t.length&&function(){var e;if((e=t.find((function(e){var t=e.getBoundingClientRect().top;return t>=-20&&t<400})))||(e=t.find((function(e){return e.getBoundingClientRect().top>-20}))),e||(e=t.reverse().find((function(e){return e.getBoundingClientRect().top<=-20}))),e||(e=t[0]),e.id!==A){for(var n,o=j(t.filter((function(t){return t.id!==e.id})));!(n=o()).done;){n.value.classList.remove("active")}e.classList.add("active"),I(e.id),q(Math.floor(parseInt(e.id.replace("title-",""))/t.length*100))}}()}),16);return a.window&&a.window.addEventListener("scroll",e,!1),e(),function(){return a.window&&a.window.removeEventListener("scroll",e)}}),[A]),l.a.createElement(_.a,null,(null==h||null===(t=h.localFile)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(c=n.fluid)||void 0===c?void 0:c.src)?l.a.createElement(i.a,null,l.a.createElement("meta",{property:"og:image",content:""+g+h.localFile.childImageSharp.fluid.src}),l.a.createElement("meta",{property:"twitter:image",content:""+g+h.localFile.childImageSharp.fluid.src})):null,l.a.createElement(x.a,{position:"relative",bg:"lightBackground.1",minHeight:"80vh",paddingY:["5x","35x"]},l.a.createElement(D,{display:["block","none"],position:"sticky",left:"0",top:"16x",bg:"lightBackground.1",zIndex:998,opacity:parseInt(A.replace("title-",""))>1?.25+R/100:0},l.a.createElement(B,{bg:"actionColor",height:"2x",width:R+"%"})),l.a.createElement(x.a,{paddingX:["5x","35x"],width:["auto","235x"]},X?l.a.createElement(M.a,{as:"h1",variant:"h2",marginBottom:["3x","6x"]},X):null,K.length?l.a.createElement(x.a,{width:"auto",display:"flex",flexWrap:"nowrap",alignItems:"stretch",justifyContent:["stretch","flex-start"],marginBottom:["5x","10x"]},K.map((function(e,t){return l.a.createElement(O,{key:"post-info-box-"+t,data:e,isFirst:0===t,isLast:t===K.length-1})}))):null),l.a.createElement(x.a,{display:"flex",flexDirection:["column","row"],alignItems:"flex-start"},l.a.createElement(x.a,{paddingX:["5x","35x"],width:["auto","235x"]},h?l.a.createElement(E.a,Object.assign({},h,{bg:"lightBackground.2",width:"100%",marginBottom:["5x","10x"],objectFit:"cover",border:"1px solid",borderColor:"borderColor.0"})):null,l.a.createElement(N,{ref:b,className:"medium-zoom",_css:Object(u.a)({".contentfulvideoplayerblock":{marginTop:["4x","6x"]},"h1, h2, h3, h4, h5, h6, p":{paddingX:"0 !important"},"h2 + *, p":{marginTop:["6x","10x"]},h1:{marginTop:["20x","30x"]},h2:{marginTop:["15x","20x"]},h3:{marginTop:["7x","10x"]}})},null==G?void 0:G.map((function(e,t){return l.a.createElement(w.a,{key:e.contentful_id+"-"+t,data:e,containerIndex:t,totalContainers:s.content.length,isSub:!0})})))),l.a.createElement(x.a,{display:["none","block"],position:"sticky",top:"40x",flex:1},l.a.createElement(Y,{as:"ul",paddingLeft:"10x"},C.map((function(e,t){return l.a.createElement(x.a,{as:"li",key:"title-"+t,variant:"postTitleNavWrapper",marginBottom:"6x",className:A==="title-"+(t+1)?"active":parseInt(A.replace("title-",""))>t?"done":""},l.a.createElement(L.a,{to:"#",variant:"postTitleNav",target:"_self",onClick:function(e){return a.window&&a.window.location.replace("#title-"+(t+1)),e.preventDefault(),!1}},l.a.createElement(x.a,{flex:1},l.a.createElement(M.a,{variant:"small"},e)),l.a.createElement(x.a,{paddingLeft:"6x"},l.a.createElement(F,{variant:"small",className:"dash",fontFamily:"monospace",color:"borderColor.4"},"―".repeat(8)))))})))))))};t.default=Object(T.a)(J)},tGlX:function(e,t,n){n("HQhv"),function(e){"use strict";function t(e,t,n,o){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n("wd/R"))}}]);
//# sourceMappingURL=component---src-templates-post-js-783516f609c83d858444.js.map