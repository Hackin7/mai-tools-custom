(()=>{var e={9306:function(e){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n,r;return(n="application/font-woff",r="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:r,jpeg:r,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[t(e).toLowerCase()]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),a=0;a<r;a++)o[a]=n.charCodeAt(a);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){return c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(t){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var o=new FileReader;o.onloadend=function(){var e=o.result.split(/,/)[1];t(e)},o.readAsDataURL(r.response)}else n?t(n):a("cannot fetch resource: "+e+", status: "+r.status)},r.ontimeout=function(){n?t(n):a("timeout of 30000ms occured while fetching resource: "+e)},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send(),c.impl.options.imagePlaceholder){var o=c.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}function a(e){console.error(e),t("")}}))},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,a){return t(e)?Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,a)}))})),r})):Promise.resolve(e)},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),a=function(){return{inlineAll:function t(o){return o instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o)},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),i={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:s,toPng:function(e,t){return l(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return l(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return l(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return l(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:o,images:a,util:n,inliner:r,options:{}}};function s(e,t){return function(e){void 0===e.imagePlaceholder?c.impl.options.imagePlaceholder=i.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?c.impl.options.cacheBust=i.cacheBust:c.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return u(e,t.filter,!0)})).then(d).then(f).then((function(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function l(e,t){return s(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function u(e,t,r){return r||!t||t(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return u(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}(t,n.asArray(o),r).then((function(){return t}))}(e,r,t)})).then((function(t){return function(e,t){return t instanceof Element?Promise.resolve().then((function(){r=window.getComputedStyle(e),o=t.style,r.cssText?o.cssText=r.cssText:function(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}(r,o);var r,o})).then((function(){[":before",":after"].forEach((function(r){!function(r){var o=window.getComputedStyle(e,r),a=o.getPropertyValue("content");if(""!==a&&"none"!==a){var i=n.uid();t.className=t.className+" "+i;var c=document.createElement("style");c.appendChild(function(e,t,r){var o="."+e+":"+t,a=r.cssText?i(r):c(r);return document.createTextNode(o+"{"+a+"}");function i(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}(i,r,o)),t.appendChild(c)}}(r)}))})).then((function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)})).then((function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))})).then((function(){return t})):t}(e,t)})):Promise.resolve()}function d(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function f(e){return a.inlineAll(e).then((function(){return e}))}e.exports=c}()},8642:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],t.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),t.getDifficultyName=function(e){return t.DIFFICULTIES[e]},t.getDifficultyForRecord=function(e){const n=e.querySelector(".playlog_top_container img.playlog_diff").src,r=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf(".")),o=t.DIFFICULTIES.indexOf(r.toUpperCase());return o<0?4:o},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},271:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const n=[0,.85,.9,.93,.95,.97,.99,1];function r(e){for(let t=n.length-1;t>0;t--)if(e>=n[t])return t;return 0}t.determineDxStar=r,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[o,a]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),i=o/a,c=r(i),s=`✦${c} (${(100*i).toFixed(1)}%)`,l=document.createElement("div");return l.className="white p_r_5 f_15 f_l",l.append(s),t.prepend(l),c}},8080:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0,t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"];const n="MaiToolsLang";t.saveLanguage=function(e){window.localStorage.setItem(n,e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch(window.localStorage.getItem(n)){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},6991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeScrollControl=void 0,t.removeScrollControl=function(e){let t=e.getElementById("page-top");t&&t.remove(),t=e.getElementById("page-bottom"),t&&t.remove()}},4313:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScriptHost=void 0,t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return"https://myjian.github.io/mai-tools"}},396:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(8642),i=n(271),c=n(8080),s=n(6991),l=n(4313),u=o(n(9306));!function(e){const t={zh_TW:{date:"日期",songName:"歌曲",difficulty:"難度",achievement:"達成率",stamps:"成就",playDate:"遊玩日期：",newRecordToggleHeading:"顯示：",sortBy:"排序方式：",newRecordsOnly:"只顯示新高分紀錄",allRecords:"全部",olderFirst:"由舊到新",newerFirst:"由新到舊",copy:"複製",copied:"已複製到剪貼簿",downloadAsImage:"存成圖片"},en_US:{date:"Date",songName:"Song",difficulty:"Difficulty",achievement:"Achv",stamps:"Grade",playDate:"Play date:",newRecordToggleHeading:"Display:",sortBy:"Sort by:",newRecordsOnly:"New records only",allRecords:"All",olderFirst:"Older first",newerFirst:"Newer first",copy:"Copy",copied:"Copied to clipboard",downloadAsImage:"Save as image"},ko_KR:{date:"날짜",songName:"노래",difficulty:"난이도",achievement:"정확도",stamps:"등급",playDate:"플레이 일:",newRecordToggleHeading:"표시:",sortBy:"정렬 순서:",newRecordsOnly:"새 기록만",allRecords:"전부",olderFirst:"옛날 기록부터",newerFirst:"최근 기록부터",copy:"복사",copied:"클립보드에 복사되었습니다",downloadAsImage:"이미지로 저장하기"}}[(0,c.getInitialLanguage)()],n=new Map([["fc","FC"],["fcplus","FC+"],["ap","AP"],["applus","AP+"]]),o=new Map([["fs","FS"],["fsplus","FS+"],["fsd","FSD"],["fsdplus","FSD+"]]),d="dateCheckbox",f="newRecordRadio",p="sortByRadio",m="recordRow",g="recordCell",h=["dateCell","songTitleCell","difficultyCell","achievementCell","stampsCell"],y=(0,l.getScriptHost)("recent-play-downloader"),v=e.createElement.bind(e),w=6e4*(540+(new Date).getTimezoneOffset());function _(e,t){return t=t||2,e.toString().padStart(t,"0")}function S(e){const t=e.querySelector(".sub_title").children[1].innerText.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),n=new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5]));return new Date(n.valueOf()-w)}function b(e){try{return e.querySelector(".m_5.p_5.f_13").textContent}catch(t){return console.log(t),console.log(e),""}}function E(e){const t=e.querySelector(".music_img");return t?t.src:""}function x(e){const t=e.children[1].className;let n=t.substring(t.indexOf("_")+1,t.lastIndexOf("_"));return n="remaster"===n?"Re:MASTER":n.toUpperCase(),e.querySelector(".playlog_music_kind_icon").src.endsWith("music_dx.png")?"DX "+n:n}function P(e){return parseFloat(e.querySelector(".playlog_achievement_txt").innerText)}function A(e){const t=e.querySelector("img.playlog_scorerank").src.replace(/\?ver=.*$/,"");let r=t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")).replace("plus","+").toUpperCase();const a=e.querySelectorAll(".playlog_result_innerblock > img"),c=a[0].src.replace(/\?ver=.*$/,""),s=c.substring(c.lastIndexOf("/")+1,c.lastIndexOf("."));n.has(s)&&(r+=" / "+n.get(s));const l=a[1].src.replace(/\?ver=.*$/,""),u=l.substring(l.lastIndexOf("/")+1,l.lastIndexOf("."));o.has(u)&&(r+=" / "+o.get(u));const d=function(e){const t=(0,i.calculateDetailedDxStar)(e);return(0,i.getDxStarText)(t)}(e);return d&&(r+=" / "+d),r}function T(e){return!!e.querySelector(".playlog_achievement_label_block + img.playlog_achievement_newrecord")}function C(e){return e.getFullYear()+"-"+_(e.getMonth()+1)+"-"+_(e.getDate())+" "+_(e.getHours())+":"+_(e.getMinutes())}function R(e,t,n){const r=v("tr");for(const e of t)r.classList.add(e);return e.forEach(((e,t)=>{const o=v(n?"th":"td");"string"==typeof e?o.append(e):(e[1]&&(o.classList.add("songImg"),o.style.backgroundImage=`url("${e[1]}")`),o.append(e[0])),o.classList.add(g),o.classList.add(h[t]),r.append(o)})),r}function I(e,n,r,o){r.innerHTML="",o.innerHTML="",r.append(R([t.date,t.songName,t.difficulty,t.achievement,t.stamps],[m],!0)),e.forEach((e=>{o.append(function(e){const t=e.difficulty.split(" ").pop();return R([C(e.date),[e.songName,e.songImgSrc],e.difficulty,e.achievement.toFixed(4)+"%",e.stamps],[m,a.DIFFICULTY_CLASSNAME_MAP.get(t)],!1)}(e))})),n.style.paddingBottom=Math.floor(e.length/2)+2+"px"}function D(){const t=e.querySelectorAll("input."+d),n=new Set;return t.forEach((e=>{e.checked&&n.add(e.value)})),n}function N(e,t){let n=[].concat(e);if(console.log(t),t.dates&&(n=n.filter((e=>t.dates.has(C(e.date).split(" ")[0])))),!t.showAll){const e=new Map;n.forEach((t=>{if(t.isNewRecord){const n=t.difficulty+" "+t.songName;e.delete(n),e.set(n,t)}})),n=[],e.forEach((e=>{n.push(e)}))}return t.olderFirst||n.reverse(),n}function L(n,r){const o=n.reduce(((e,t)=>(e.add(C(t.date).split(" ")[0]),e)),new Set);let a=e.getElementById("recordSummary");a?a.innerHTML="":(a=v("div"),a.id="recordSummary");const i=v("div");i.className="playRecordContainer";const c=v("table"),s=v("thead"),l=v("tbody");c.className="playRecordTable",c.append(s,l),i.append(c);const m=()=>{I(N(n,function(){const t=D();let n=!1;e.getElementsByName(f).forEach((e=>{e.checked&&(n="allRecords"===e.value)}));let r=!0;return e.getElementsByName(p).forEach((e=>{e.checked&&(r="olderFirst"===e.value)})),{dates:t,showAll:n,olderFirst:r}}()),i,s,l)};a.append(function(e,n){const r=v("div");r.className="m_b_10 dateOptionsContainer";const o=v("div");return o.className="t_c m_5",o.append(t.playDate),r.append(o),e.forEach((e=>{const t=v("label");t.className="f_14 dateOptionLabel";const o=v("input");o.type="checkbox",o.className=d,o.value=e,o.checked=!0,o.addEventListener("change",n),t.append(o,e),r.append(t)})),r}(o,m)),a.append(function(e){const n=v("div");n.className="m_b_10 newRecordToggleContainer";const r=v("div");return r.className="t_c m_5",r.append(t.newRecordToggleHeading),n.append(r),["newRecordsOnly","allRecords"].forEach(((r,o)=>{const a=v("label");a.className="f_14 newRecordLabel";const i=v("input");i.type="radio",i.name=f,i.className=f,i.value=r,i.checked=0===o,i.addEventListener("change",e),a.append(i,t[r]),n.append(a)})),n}(m)),a.append(function(e){const n=v("div");n.className="m_b_10 sortByRadioContainer";const r=v("div");return r.className="t_c m_5",r.append(t.sortBy),n.append(r),["newerFirst","olderFirst"].forEach(((r,o)=>{const a=v("label");a.className="f_14 sortByLabel";const i=v("input");i.type="radio",i.name=p,i.className=p,i.value=r,i.checked=0===o,i.addEventListener("change",e),a.append(i,t[r]),n.append(a)})),n}(m));const g=function(n){const r=v("div");r.className="copyBtnContainer";const o=v("button");o.className="copyBtn",o.append(t.copy),r.append(o);let a=e.querySelector(".snackbarContainer"),i=e.querySelector(".snackbar");a||(a=v("div"),a.className="snackbarContainer",a.style.display="none",e.body.append(a)),i||(i=v("div"),i.className="wrapper snackbar",i.innerText=t.copied,a.append(i)),o.addEventListener("click",(t=>{(()=>{const t=window.getSelection(),n=e.createRange();n.selectNodeContents(l),t.removeAllRanges(),t.addRange(n)})(),e.execCommand("copy"),a.style.display="block",i.style.opacity="1",setTimeout((()=>{i.style.opacity="0",setTimeout((()=>{a.style.display="none"}),500)}),4e3)}));const c=v("button");return c.className="downloadImgBtn",c.append(t.downloadAsImage),c.addEventListener("click",(()=>{const t=e.querySelector(".playRecordContainer");u.default.toPng(t).then((e=>{const t="record_"+Array.from(D()).join(",")+".png",n=v("a");n.href=e,n.download=t,n.click()}))})),r.append(c),r}();a.append(g),I(N(n,{olderFirst:!1}),i,s,l),a.append(i),r.insertAdjacentElement("beforebegin",a)}const F=e.querySelector(".main_wrapper > img.title");if(F){const t="recentPlayStyles";if(!e.getElementById(t)){const n=v("link");n.id=t,n.rel="stylesheet",n.href=y+"/scripts/recent-play-downloader.css",n.addEventListener("load",(()=>{(0,s.removeScrollControl)(e),function(){return r(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".main_wrapper .p_10.t_l.f_0.v_b")),n=[];for(const e of t)n.push({date:S(e),songName:b(e),songImgSrc:E(e),difficulty:x(e),achievement:P(e),stamps:A(e),isNewRecord:T(e)});return n.reverse(),n}))}().then((e=>{L(e,F)})).catch((t=>{const n=e.getElementsByTagName("footer")[0],r=v("textarea");n.append(r),r.value=t.message+"\n"+t.stack}))})),e.head.append(n)}}}(document)}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(396)})();