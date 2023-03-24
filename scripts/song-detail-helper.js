(()=>{"use strict";var e={8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],t.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),t.getDifficultyName=function(e){return t.DIFFICULTIES[e]}},271:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const n=[0,.85,.9,.93,.95,.97,.99,1];function o(e){for(let t=n.length-1;t>0;t--)if(e>=n[t])return t;return 0}t.determineDxStar=o,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[i,r]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),c=i/r,a=o(c),s=`✦${a} (${(100*c).toFixed(1)}%)`,l=document.createElement("div");return l.className="white p_r_5 f_15 f_l",l.append(s),t.prepend(l),a}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerGrade=t.getPlayerName=t.getChartType=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const o=n(472);t.getSongName=function(e){return(0,o.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getChartType=function(e){return e.id?e.id.includes("sta_")?0:1:e.querySelector("img:nth-child(2)").src.includes("_standard")?0:1},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},6510:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const i=n(8642),r=n(2347),c=n(6420);t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.fetchScores=function(e,n){return o(this,void 0,void 0,(function*(){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;const a=yield(0,c.fetchPage)(o),s=a.querySelectorAll(".main_wrapper.t_c .m_15"),l={genre:"",scoreList:n};return s.forEach((t=>function(e,t,n){const o=e.classList.contains("screw_block"),c=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(o)n.genre=e.innerText;else if(c){const o=(0,r.getSongName)(e),c=(0,r.getChartLevel)(e),a=1===(0,r.getChartType)(e)?"DX":"STANDARD",s=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!s)return;n.scoreList.push([o,n.genre,(0,i.getDifficultyName)(t),c,a,s].join("\t"))}}(t,e,l))),a}))}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[17,18,19,20],t.validateGameVersion=function(e,t,n=20){const o="string"==typeof e?parseInt(e):e;return!e||isNaN(o)?n:o>=t&&o<=n?o:n},t.getVersionName=function(e){return n[e]}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultLevel=t.getOfficialLevel=void 0,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t}},6685:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.writeMagicToCache=t.readMagicFromCache=t.fetchMagic=void 0;const i=n(134),r={13:null,17:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfdW5pdmVyc2UuanM=",18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz"};function c(e){return"dxLv"+e}t.fetchMagic=function(e){return o(this,void 0,void 0,(function*(){const t=r[e]||r[18],n=yield fetch(atob(t));return yield n.text()}))},t.readMagicFromCache=function(e){const t=c(e),n=window.localStorage.getItem(t);if(console.log('Reading cache for "'+t+'" =>',n),!n)return null;const o=JSON.parse(n),r=new Date(o.date);if((new Date).valueOf()-r.valueOf()>864e5){console.warn('Cache for "'+t+'" is expired.');for(const e of i.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(c(e));return null}return o.content},t.writeMagicToCache=function(e,t){const n=c(e);console.log('Updating cache for "'+n+'"');const o={date:new Date,content:t};window.localStorage.setItem(n,JSON.stringify(o))}},472:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const i=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,o){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===o?e+t.DX_SONG_NAME_SUFFIX:e};let r={};t.isNicoNicoLink=function(e){return o(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const t=(yield(0,i.fetchPage)("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?r.nico=e:r.original=e,t}))}},87:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSongsByVersion=t.filterSongsByVersion=t.getSongProperties=t.buildSongPropsMap=void 0;const o=n(8642),i=n(472),r=/\bdx\s*:\s*([0-9]+)/,c=/\blv\s*:\s*(\[.+?\])/,a=/\bv\s*:\s*(-?[0-9]+)/,s=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,l=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/,u=[{name:"BREaK! BREaK! BREaK!",dx:1,debut:15,lv:[-5,-8,12.8,14.7,0]},{name:"宿星審判",dx:1,debut:16,lv:[-4,-8,-12,14.4,0]}],f=[{name:"自傷無色",dx:1,debut:19},{name:"劣等上等",dx:1,debut:19}],d=new Map([[19,[{name:"39",dx:1,lv:[NaN,NaN,NaN,12.8]},{name:"ヒステリックナイトガール",dx:1,lv:[NaN,NaN,NaN,12.8]},{name:"MOBILYS",dx:1,lv:[NaN,NaN,NaN,13.1]},{name:"マトリョシカ",dx:0,lv:[NaN,NaN,NaN,NaN,13.2]},{name:"宿星審判",dx:1,lv:[NaN,NaN,NaN,14.3]}]]]);function m(e){const t=e.match(r),n=e.match(c),u=e.match(a),f=e.match(s),d=e.match(l);if(t&&n&&u&&f){let e=JSON.parse(n[1]);if(e.length>o.DIFFICULTIES.length){const t=e.pop();e[o.DIFFICULTIES.length-1]=t}return{dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(u[1])),name:(0,i.normalizeSongName)(f[1]),nickname:d&&d[1]}}}function g(e,t){if(!e.has(t.name))return!1;const n=e.get(t.name),o=n.findIndex((e=>t.dx===e.dx));return!(o<0||(n[o]=function(e,t){let n=e.lv;return t.lv instanceof Array&&(n=e.lv.map(((e,n)=>isNaN(t.lv[n])?e:t.lv[n]))),Object.assign(Object.assign(Object.assign({},e),t),{lv:n})}(n[o],t),0))}function h(e,t){g(e,t)||(e.has(t.name)||e.set(t.name,[]),e.get(t.name).push(t))}t.buildSongPropsMap=function(e,t,n){const o=n.split("\n"),i=new Map;for(const e of o){const t=m(e);t&&h(i,t)}if(0===t){for(const e of u)h(i,e);for(const e of f)g(i,e)}const r=d.get(e);if(r)for(const e of r)g(i,e);return i},t.getSongProperties=function(e,t,n,o){let r=e.get(t);if(r&&r.length>0){if(r.length>1&&(r=r.filter((e=>e.dx===o)),r.length>1)){const e=(0,i.getSongNickname)(t,n,o);r=r.filter((t=>t.nickname===e))}if(r.length)return r.length>1&&(console.warn(`Found multiple song properties for ${t} ${o}`),console.warn(r)),r[0]}console.warn(`Could not find song properties for ${t} ${o}`)},t.filterSongsByVersion=function(e,t,n,o){const i=[];for(const r of e){const{dx:e,name:c,nickname:a}=r;let s=t.get(c);s&&s.length>0&&(s.length>1&&(s=s.filter((t=>t.dx===e)),s.length>1&&(s=s.filter((e=>e.nickname===a)))),s.length)?(s.length>1&&(console.warn(`Found multiple song properties for ${c} ${e?"[DX]":""}`),console.warn(s)),(0===o&&s[0].debut===n||1===o&&s[0].debut<n)&&i.push(s[0])):console.warn(`Could not find song properties for ${c} ${e?"[DX]":""}`)}return i},t.getSongsByVersion=function(e,t){const n=[];return e.forEach((e=>e.forEach((e=>{e.debut===t&&n.push(e)})))),n}},6420:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchNewSongs=t.fetchAllSongs=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0;const i=n(2347),r=n(6510),c=n(472);function a(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}function s(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,c.getSongIdx)(e),o=(0,i.getSongName)(e),r=(0,i.getChartType)(e);let a;"Link"===o&&(a=(yield(0,c.isNicoNicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:r,name:o,nickname:a})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchPage=a,t.fetchGameVersion=function e(t){return o(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?parseInt(n.value):e(t=yield a("/maimai-mobile/record/musicVersion/"))}))},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=r.SELF_SCORE_URLS.get(1);e=yield a(t)}return yield s(e)}))},t.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const t=yield a(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield s(t)}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const i={action:n,payload:o};e.postMessage(i,t)}}},8383:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(271),r=n(6420),c=n(87),a=n(6685),s=n(472),l=n(9268);!function(e){const t={};function n(e,t){if(!e.dataset.inlv){const n=function(e){const t=e-Math.floor(e);return t>.95?1:t>.65&&t<.69?.7:0}(t);e.dataset.inlv=t.toFixed(2),e.innerText=(n?"*":"")+t.toFixed(1)}}function u(e,t,n){let o=0;return n&&(o=n.lv[t],"number"!=typeof o?o=0:o<0&&(o=Math.abs(o)-.02)),o||(0,l.getDefaultLevel)(function(e,t="lv"){return e.dataset[t]}(e))-.02}function f(e){return e.querySelector(".music_lv_back")}e.querySelectorAll(".music_score_block.w_310").forEach((function(t){const n=t.querySelector("img.f_l");if(!n)return;n.remove();const[o,r]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),c=o/r,a=(0,i.getDxStarText)((0,i.determineDxStar)(c),!0)+` (${(100*c).toFixed(1)}%)`,s=e.createElement("div");s.className="f_l",s.append(a),t.prepend(s)})),function(){o(this,void 0,void 0,(function*(){const o=yield(0,r.fetchGameVersion)(e.body),i="maimaidx.jp"===window.location.host?1:0,l=(0,c.buildSongPropsMap)(o,i,yield(0,a.fetchMagic)(o)),d=(0,s.normalizeSongName)(document.querySelector(".m_5.f_15.break").textContent),m=e.querySelector(".f_l.h_20").src.includes("_standard")?0:1,g=(0,c.getSongProperties)(l,d,"",m);t.songProp=g,Array.from(e.querySelectorAll(".music_detail_table tr"),((e,t)=>{const o=f(e);o&&n(o,u(o,t,g))})),["basic","advanced","expert","master","remaster"].forEach(((t,o)=>{const i=e.querySelector(`#${t}`);if(!i)return;const r=f(i);n(r,u(r,o,g))}))}))}()}(document)}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(8383)})();