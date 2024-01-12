(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STD"}},5969:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=t.fixTimezone=void 0;const n=6e4*(540+(new Date).getTimezoneOffset());function r(e,t){return t=t||2,e.toString().padStart(t,"0")}t.fixTimezone=function(e){return new Date(e.valueOf()-n)},t.formatDate=function(e,t=":"){return e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+t+r(e.getMinutes())}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyClassName=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyShortName=t.getDifficultyName=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER","UTAGE"],r=["BAS","ADV","EXP","MAS","ReM","UTG"];function o(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.getDifficultyName=function(e){return n[e]},t.getDifficultyShortName=function(e){return r[e]},t.getDifficultyByName=o,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return o(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyClassName=function(e){return["basic","advanced","expert","master","remaster","utage"][e]||""},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff","#f540f3"][e]||"black"}},271:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const r=n(6358),o=[0,.85,.9,.93,.95,.97,.99,1];function i(e){for(let t=o.length-1;t>0;t--)if(e>=o[t])return t;return 0}t.determineDxStar=i,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[o,a]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),c=o/a,s=i(c),l=`✦${s} (${(0,r.roundFloat)(100*c,"floor",.1).toFixed(1)}%)`,u=document.createElement("div");return u.className="white p_r_5 f_15 f_l",u.append(l),t.prepend(u),s}},8608:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchFriendScoresFull=t.fetchFriendScores=t.FRIEND_SCORE_URLS=void 0;const o=n(9099),i=n(2347),a=n(9268),c=n(6991),s=n(472),l=n(6420);function u(e){const t=e.querySelector("td.w_120.f_b:last-child"),n=t&&t.innerText.trim();return"0"!==n&&"― %"!==n?n:null}function d(e,t,n,r){const c=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_3")&&e.classList.contains("f_0");if(c)r.genre=e.innerText;else if(s){const c=u(e);if(!c)return;const s=(0,i.getSongName)(e),l=(0,o.getChartType)(e),d=n.getSongProperties(s,r.genre,l);let f=d?d.lv[t]:0;const g=f>0;return f||(f=(0,a.getDefaultLevel)((0,i.getChartLevel)(e))),{songName:s,genre:r.genre,difficulty:t,chartType:l,level:f,levelIsPrecise:g,achievement:parseFloat(c)}}}function f(e,n,o=!1){return r(this,void 0,void 0,(function*(){let r=t.FRIEND_SCORE_URLS.get(n);if(r)return o&&(yield(0,l.sleep)(300),r=r.replace("scoreType=2","scoreType=1")),r+=e,(0,c.fetchPage)(r)}))}t.FRIEND_SCORE_URLS=new Map([[4,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=4&idx="],[3,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=3&idx="],[2,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=2&idx="],[1,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=1&idx="],[0,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=0&idx="]]),t.fetchFriendScores=function(e,t,n){return r(this,void 0,void 0,(function*(){const r=(yield f(e,t)).querySelectorAll(".main_wrapper.t_c .m_15"),o={genre:""};return Array.from(r).map((e=>d(e,t,n,o))).filter((e=>null!=e))}))},t.fetchFriendScoresFull=function(e,t,n,a=!1){return r(this,void 0,void 0,(function*(){const r=(yield f(e,t)).querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},l=Array.from(r).map((e=>function(e,t,n,r){const o=d(e,t,n,r);if(null==o)return null;const a=n.getSongProperties(o.songName,r.genre,o.chartType);return Object.assign(Object.assign({},o),{fcap:(0,i.getApFcStatus)(e,!0),sync:(0,i.getSyncStatus)(e,!0),version:a?a.debut:-1,dxscore:{max:0,player:0,ratio:0,star:0}})}(e,t,n,c)));if(a){const n=(yield f(e,t,!0)).querySelectorAll(".main_wrapper.t_c .m_15"),r=Array.from(n).map((e=>function(e,t,n){const r=e.classList.contains("screw_block"),a=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_3")&&e.classList.contains("f_0");if(r)n.genre=e.innerText;else if(a){if(!u(e))return;const r=(0,i.getSongName)(e),a=(0,o.getChartType)(e),c=(0,i.getFriendDxStar)(e);return{songName:r,genre:n.genre,difficulty:t,chartType:a,dxscore:{max:0,player:0,ratio:0,star:c}}}}(e,t,c)));!function(e,t){e.forEach(((e,n)=>{const r=t[n];if(e&&r)if(e.songName===r.songName&&e.difficulty===r.difficulty&&e.genre===r.genre&&e.chartType===r.chartType)e.dxscore.star=r.dxscore.star;else{const t=(0,s.getSongNicknameWithChartType)(e.songName,e.genre,e.chartType),n=(0,s.getSongNicknameWithChartType)(r.songName,r.genre,r.chartType);console.warn(`Achievement VS song order is different from DX Score VS song order. Expected ${t} got ${n}`)}}))}(l,r)}return l.filter((e=>null!=e))}))}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFriendDxStar=t.getSyncStatus=t.getApFcStatus=t.getAchievement=t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const r=n(8642),o=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,o.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,r.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null},t.getAchievement=function(e,t=!1){const n=t?e.querySelector("tr:first-child td:last-child"):e.querySelectorAll(".music_score_block")[0];return n instanceof HTMLElement?parseFloat(n.innerText):0},t.getApFcStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const r=n.src.replace(/\?ver=.*$/,""),o=r.lastIndexOf("_"),i=r.lastIndexOf("."),a=r.substring(o+1,i);return"back"===a?null:a.replace("ap","AP").replace("p","+").toUpperCase()},t.getSyncStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const r=n.src.replace(/\?ver=.*$/,""),o=r.lastIndexOf("_"),i=r.lastIndexOf("."),a=r.substring(o+1,i);return"back"===a?null:a.toUpperCase().replace("P","+").replace("FDX","FSD")},t.getFriendDxStar=function(e){const t=e.querySelector("tr:first-child td:last-child img");if(!t)return 0;const n=new URL(t.src).pathname,r=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf("."));try{const e=parseInt(r);return isNaN(e)||e<0?(console.warn("invalid dx star "+r),0):e}catch(e){console.warn("invalid dx star "+r)}return 0}},6510:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScoresFull=t.fetchScores=t.getMyDxScoreInfo=t.SELF_SCORE_URLS=void 0;const o=n(9099),i=n(271),a=n(2347),c=n(9268),s=n(6991);function l(e){const t=e.querySelectorAll(".music_score_block");if(2!==t.length)return null;const n=t[1].childNodes,r=n[n.length-1],o=r instanceof Text?r.wholeText.split("/").map((e=>e.replace(",","").trim())):[];if(2!==o.length)return null;try{const e=parseInt(o[0]),t=parseInt(o[1]);if(isNaN(e)||isNaN(t))throw new Error(`failed to parse DX score. Input was ${JSON.stringify(o)}`);const n=e/t;return{max:t,player:e,ratio:n,star:(0,i.determineDxStar)(n)}}catch(e){console.warn(e)}return{max:0,player:0,ratio:0,star:0}}function u(e,t,n,r){const i=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)return r.genre=e.innerText,null;if(s){const i=(0,a.getAchievement)(e);if(!i)return;const s=(0,a.getSongName)(e),l=(0,o.getChartType)(e),u=n.getSongProperties(s,r.genre,l);let d=u?u.lv[t]:0;const f=d>0;return d||(d=(0,c.getDefaultLevel)((0,a.getChartLevel)(e))),{songName:s,genre:r.genre,difficulty:t,level:d,levelIsPrecise:f,chartType:l,achievement:i}}}t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.getMyDxScoreInfo=l,t.fetchScores=function(e,n,o){return r(this,void 0,void 0,(function*(){let r=n.get(e);if(!r){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;r=yield(0,s.fetchPage)(o),n.set(e,r)}const i=r.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:""};return Array.from(i).map((t=>u(t,e,o,a))).filter((e=>null!=e))}))},t.fetchScoresFull=function(e,n,o){return r(this,void 0,void 0,(function*(){let r=n.get(e);if(!r){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;r=yield(0,s.fetchPage)(o),n.set(e,r)}const i=r.querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},d=Array.from(i).map((t=>function(e,t,n,r){const o=u(e,t,n,r);if(null==o)return null;const i=n.getSongProperties(o.songName,r.genre,o.chartType);return Object.assign(Object.assign({},o),{fcap:(0,a.getApFcStatus)(e),sync:(0,a.getSyncStatus)(e),dxscore:l(e),version:i?i.debut:-1})}(t,e,o,c)));return d.filter((e=>null!=e))}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromShortString=t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0;const n={jp:"https://maimaidx.jp",intl:"https://maimaidx-eng.com"},r=["jp","intl"];t.MAIMAI_NET_ORIGINS=r.map((e=>n[e])),t.isMaimaiNetOrigin=function(e){return t.MAIMAI_NET_ORIGINS.includes(e)},t.getGameRegionFromOrigin=function(e){return r.find((t=>n[t]===e))||"jp"},t.getGameRegionFromShortString=function(e){return"jp"===(e=(e||"").toLowerCase())?"jp":"intl"}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS","BUDDiES"];t.LATEST_VERSION=21,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20,21],t.validateGameVersion=function(e,n,r=t.LATEST_VERSION){const o="string"==typeof e?parseInt(e):e;return!e||isNaN(o)?r:o>=n&&o<=r?o:r},t.getVersionName=function(e){return n[e]}},8080:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const r=n(5990);t.SUPPORTED_LANGUAGES=["en-US","zh-TW","ko-KR"],t.saveLanguage=function(e){(0,r.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh-TW":e.startsWith("ko")?"ko-KR":"en-US";return function(){switch((0,r.loadUserPreference)("MaiToolsLang")){case"en-US":return"en-US";case"zh-TW":return"zh-TW";case"ko-KR":return"ko-KR"}return null}()||(navigator.language.startsWith("zh")?"zh-TW":navigator.language.startsWith("ko")?"ko-KR":"en-US")}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return Math.floor(10*e)%10>6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e,t=!1){return(t=t||e<0)?Math.abs(e).toFixed(1)+"~":e.toFixed(1)}},6685:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadMagic=void 0;const o=n(8642),i=n(134),a=n(472),c="magicExpire",s=["dxLv15","dxLv16","dxLv17","dxLv18","dxLv19","dxLv20"],l={12:null,13:null,18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vMDg1NWM4OTQ3YjU0N2Q3YjliODg4MTU4NTEyZGRlNjkvcmF3LzFlZWIwNzRkMzkzNjc3NDhhZjQwZmIxYTlkZDRhMTZiNDJmOTliNmIvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vYWQyNjg1ODcyZmQ3ZjVjZDdhNDdlY2IzNDA1MTRlNmIvcmF3Lzk5NjE3NDhkM2M0ODFlZjQ5NWNmZTNkMDgwMzkyYWI4NjI5NWNlOWMvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz",21:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfYnVkZGllcy5qcw=="},u=/\bdx\s*:\s*([0-9]+)/,d=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,g=/\bn\s*:\s*["'`](.+?)["'`]\s*[,\}]/,m=/\bnn\s*:\s*["'`](.+?)["'`]\s*[,\}]/,p=/\bico\s*:\s*["`]([0-9a-z]+)["`]/;function h(e){const t=e.match(u),n=e.match(d),r=e.match(f),i=e.match(g),c=e.match(m),s=e.match(p);if(t&&n&&r&&i){let e=JSON.parse(n[1]);if(e.length>o.DIFFICULTIES.length){const t=e.pop();e[o.DIFFICULTIES.length-1]=t}const l={dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(r[1])),name:(0,a.normalizeSongName)(i[1])};return c&&(l.nickname=c[1]),s&&(l.ico=s[1]),l}}function S(e){return"magicVer"+e}t.loadMagic=function(e){return r(this,void 0,void 0,(function*(){const t=function(e){const t=parseInt(window.localStorage.getItem(c));if(isNaN(t)||Date.now()>t){for(const e of s)window.localStorage.removeItem(e);for(const e of i.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(S(e));return null}const n=S(e),r=window.localStorage.getItem(n);return console.log(`Found cache: ${n}=${r}`),JSON.parse(r)}(e);if(t)return t;console.log("Magic happening...");const n=yield function(e){return r(this,void 0,void 0,(function*(){const t=l[e]||l[18],n=yield fetch(atob(t));return n.ok?(yield n.text()).split("\n").map(h).filter((e=>null!=e)):[]}))}(e);return n.length&&function(e,t){const n=S(e);window.localStorage.setItem(n,JSON.stringify(t)),window.localStorage.setItem(c,String(Date.now()+864e5)),console.log(`Updated cache for ${n}`)}(e,n),n}))}},6991:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addLvToSongTitle=t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const o=n(5969),i=n(8642),a="MaiToolsGameVer",c="MaiToolsGameVerExpire",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";function l(e){return r(this,void 0,void 0,(function*(){const t=yield fetch(e,{redirect:"error"}),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=l,t.fetchGameVersion=function e(t){return r(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(c));if(!isNaN(n)&&n>=Date.now()){const e=parseInt(window.localStorage.getItem(a));if(!isNaN(e))return e}const r=t.querySelector("select[name=version] option:last-of-type");if(r instanceof HTMLOptionElement){const e=parseInt(r.value);return window.localStorage.setItem(a,String(e)),window.localStorage.setItem(c,String(Date.now()+864e5)),e}return e(t=yield l("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),n=new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5]));return(0,o.fixTimezone)(n).getTime()},t.removeScrollControl=function(e){for(const t of["#page-top","#page-bottom"]){const n=e.querySelector(t);n instanceof HTMLImageElement&&(n.src=s,n.style.pointerEvents="none")}const t=e.querySelector(".spmenu_toggle");t instanceof HTMLElement&&(t.style.backgroundImage=`url(${s})`)},t.addLvToSongTitle=function(e,t,n){return r(this,void 0,void 0,(function*(){const r=e.querySelector(".basic_block.break"),o=r.querySelector("img");o&&o.remove();const a=document.createElement("div");a.className="f_r",a.append("Lv "+n),a.style.color=(0,i.getDifficultyTextColor)(t),r.append(a)}))}},6358:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatFloat=t.roundFloat=t.sum=t.compareNumber=void 0,t.compareNumber=function(e,t){return e>t?1:e<t?-1:0},t.sum=function(e){let t=0;for(const n of e)t+=n;return t},t.roundFloat=function(e,t,n){return Math[t](e/n)*n},t.formatFloat=function(e,t){return e?e.toFixed(t):"0"}},7991:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcRecommendedLevels=t.getFinaleRankTitle=t.getRankTitle=t.getRankByAchievement=t.getRankIndexByAchievement=t.getRankDefinitions=t.RANK_SSS_PLUS=t.RANK_S=t.SSSPLUS_MIN_ACHIEVEMENT=void 0;const r=n(9268),o=n(6358);t.SSSPLUS_MIN_ACHIEVEMENT=100.5,t.RANK_S={minAchv:97,factor:20,title:"S"},t.RANK_SSS_PLUS={minAchv:100.5,factor:22.4,title:"SSS+"};const i=[t.RANK_SSS_PLUS,{minAchv:100,factor:21.6,title:"SSS"},{minAchv:99.5,factor:21.1,title:"SS+"},{minAchv:99,factor:20.8,title:"SS"},{minAchv:98,factor:20.3,title:"S+"},t.RANK_S,{minAchv:94,factor:16.8,title:"AAA"},{minAchv:90,factor:15.2,title:"AA"},{minAchv:80,factor:13.6,title:"A"},{minAchv:75,factor:12,title:"BBB"},{minAchv:70,factor:11.2,title:"BB"},{minAchv:60,factor:9.6,title:"B"},{minAchv:50,factor:8,title:"C"},{minAchv:0,factor:1,title:"D"}];function a(){return i}function c(e){return i.findIndex((t=>e>=t.minAchv))}function s(e){const t=c(e);return t<0?"D":i[t].title}t.getRankDefinitions=a,t.getRankIndexByAchievement=c,t.getRankByAchievement=function(e){const t=c(e);return t<0?null:a()[t]},t.getRankTitle=s,t.getFinaleRankTitle=function(e){return s(e).replace("SSS+","SSS")},t.calcRecommendedLevels=function(e,t){e=Math.floor(e);const n=t.slice();n.sort(((e,t)=>e.minAchv<t.minAchv?-1:1));const i={};for(let t=0;t<n.length;t++){const a=n[t];i[a.title]=[];const c=i[a.title],s=t+1<n.length?n[t+1].minAchv-1e-4:a.minAchv;let l=(0,o.roundFloat)(100*e/a.factor/a.minAchv,"ceil",.1);if(!(l>r.MAX_LEVEL)){for(;Math.floor(l*a.factor*s/100)>=e;){const t=Math.max((0,o.roundFloat)(100*e/a.factor/l,"ceil",1e-4),a.minAchv);c.push({lv:l,minAchv:t,rating:Math.floor(l*a.factor*t/100)}),l-=.1}c.reverse()}}return i}},6689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"jp"===e?["全世界共通リズム感テスト"]:"intl"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={"zh-TW":{bscStart:"讀取綠譜成績中…",bscDone:"✔",advStart:"讀取黃譜成績中…",advDone:"✔",expStart:"讀取紅譜成績中…",expDone:"✔",masStart:"讀取紫譜成績中…",masDone:"✔",remStart:"讀取白譜成績中…",remDone:"✔"},"en-US":{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},"ko-KR":{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,r){const o=n[e];switch(t){case 4:return r?o.remDone+"\n":o.remStart;case 3:return r?o.masDone+"\n":o.masStart;case 2:return r?o.expDone+"\n":o.expStart;case 1:return r?o.advDone+"\n":o.advStart;case 0:return r?o.bscDone+"\n":o.bscStart}return""}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=t.FALLBACK_MAI_TOOLS_BASE_URL=void 0;const r=n(6162);t.FALLBACK_MAI_TOOLS_BASE_URL="https://myjian.github.io/mai-tools",t.getScriptHost=function(e){const n=Array.from(document.querySelectorAll("script"));for(;n.length;){const t=n.pop();if(t.src.includes(e)||t.src.includes("all-in-one")){const e=new URL(t.src),n=e.pathname;return e.origin+n.substring(0,n.lastIndexOf("/scripts"))}}return t.FALLBACK_MAI_TOOLS_BASE_URL},t.getMaiToolsBaseUrl=function(){return"https://hackin7.github.io"==window.location.origin&&window.location.origin,(0,r.isMaimaiNetOrigin)(window.location.origin)?t.FALLBACK_MAI_TOOLS_BASE_URL:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.pathname.startsWith("/build")?window.location.origin+"/build":window.location.origin}},472:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNiconicoLink=t.getSongNicknameWithChartType=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=void 0;const o=n(9099),i=n(6420);function a(e,t){return"Link"===e&&(e=t.includes("niconico")?"Link (nico)":"Link (org)"),e}t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=a,t.getSongNicknameWithChartType=function(e,t,n){return a(e,t)+" ["+(0,o.getChartTypeName)(n)+"]"};let c={};t.isNiconicoLink=function(e){return r(this,void 0,void 0,(function*(){if(c.nico===e)return!0;if(c.original===e)return!1;const t=(yield(0,i.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?c.nico=e:c.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadSongDatabase=t.SongDatabase=void 0;const o=n(134),i=n(6685),a=n(6689),c=n(4313),s=n(472);class l{constructor(e=null,t=null,n=!0){this.dxMap=new Map,this.standardMap=new Map,this.nameByIco=new Map,this.verbose=!0,this.gameVer=e,this.region=t,this.verbose=n}insertOrUpdateSong(e,t){const n=1===e.dx?this.dxMap:this.standardMap;if(this.updateSong(e))return;e.debut||0===e.debut||(e.debut=t);const r="Link"===e.name?e.nickname:e.name;if(e.ico&&this.nameByIco.set(e.ico,r),n.has(r))return console.warn(`Found existing song properties for ${r} ${e.dx}: ${JSON.stringify(n.get(r))}`),void console.warn(`Will ignore ${e}`);n.set(r,e)}updateSong(e){if(console.log(e),!e)return!0;const t=1===e.dx?this.dxMap:this.standardMap,n=t.has(e.name)?e.name:e.nickname,r=t.get(n);if(!r)return!1;let o=r.lv;return e.lv instanceof Array&&(o=r.lv.map(((t,n)=>{const r=e.lv[n];return!isNaN(r)&&r>0?r:t}))),e.ico&&this.nameByIco.set(e.ico,n),t.set(n,Object.assign(Object.assign(Object.assign({},r),e),{lv:o})),!0}deleteSong(e){this.dxMap.delete(e),this.standardMap.delete(e)}validate(){for(const e of[this.dxMap,this.standardMap])e.forEach((e=>{console.assert(null!=e.debut),console.assert(e.debut>=0&&e.debut<=o.LATEST_VERSION),console.assert(e.lv.length>=4)}))}hasDualCharts(e,t){if("Link"===e)return!0;if(this.dxMap.has(e)&&this.standardMap.has(e))return!0;const n=(0,s.getSongNickname)(e,t);return!!n&&this.dxMap.has(n)&&this.standardMap.has(n)}getSongPropsByIco(e,t){const n=this.nameByIco.get(e);return this.getSongProperties(n,"",t)}getSongProperties(e,t,n=0){if(null==e)return;const r=1===n?this.dxMap:this.standardMap;let o=r.get(e);if(o)return o;const i=(0,s.getSongNickname)(e,t);if(o=r.get(i),o)return o;this.verbose&&console.warn(`Could not find song properties for ${e} ${n}`)}getAllProps(){return Array.from(this.dxMap.values()).concat(Array.from(this.standardMap.values()))}getPropsForSongs(e){return e.map((e=>{const t=this.getSongProperties(e.nickname,"",e.dx)||this.getSongProperties(e.name,"",e.dx);return t||console.warn("Could not find song properties for",e),t})).filter((e=>!!e))}toString(){return String({dxMap:this.dxMap,standardMap:this.standardMap})}}function u(e){return r(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}t.SongDatabase=l,t.loadSongDatabase=function(e,t){return r(this,void 0,void 0,(function*(){const n=yield(0,i.loadMagic)(e),o=new l(e,t);for(const t of n)o.insertOrUpdateSong(t,e);const s=yield function(e){return r(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield u(t),r=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const o of Object.keys(n[e]))r.push({name:o,dx:t,lv:n[e][o]})})),r}))}(e);console.log("chartLevelOverrides",s);for(const t of s)o.insertOrUpdateSong(t,e);const d=yield function(e){return r(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/song-info/${e}.json`,n=yield u(t);return["standard","dx"].flatMap(((e,t)=>{const r=n[e];if(!r)return;const o=n[e+"Ico"]||{};return Object.keys(r).flatMap((e=>{const n=r[e],i=o[e]||[],a=parseInt(e);return n.map(((e,n)=>n<i.length?{name:e,dx:t,debut:a,ico:i[n]}:{name:e,dx:t,debut:a}))}))}))}))}(t);console.log("regionOverrides",d);for(const e of d)o.updateSong(e);const f=(0,a.getRemovedSongs)(t);for(const e of f)o.deleteSong(e);return o.validate(),o}))}},5990:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},6420:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const o=n(9099),i=n(2347),a=n(6510),c=n(6991),s=n(472);t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return r(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(0);e=yield(0,c.fetchPage)(t)}return yield function(e){return r(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),r=(0,i.getSongName)(e),a=(0,o.getChartType)(e);let c;"Link"===r&&(c=(yield(0,s.isNiconicoLink)(t))?"Link (nico)":"Link (org)"),n.push({dx:a,name:r,nickname:c})}return n}))}(e)}))},t.fetchSongDetailPage=function(e){return r(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,r)=>{const o={action:n,payload:r};e.postMessage(o,t)}},t.sleep=function(e){return new Promise((t=>setTimeout(t,e)))}},7913:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(9099),i=n(8642),a=n(8608),c=n(6510),s=n(6162),l=n(134),u=n(8080),d=n(9268),f=n(6991),g=n(7991),m=n(4468),p=n(87);!function(e){var t;const n=(0,u.getInitialLanguage)(),h={"zh-TW":{achievement:"達成率",chartConstant:"定數",chartType:"譜面",copied:"已複製到剪貼簿",copy:"複製成績",difficulty:"難度",dxScore:"DX 分數",exclude:"不包含",fetch:"下載所有成績",genre:"分類",include:"包含",level:"等級",rank:"Rank",songName:"歌曲",version:"版本",allDone:"✅ 已載入全部成績到文字框，請按「複製成績」把資料複製到剪貼簿。複製後可於 Excel 或 Google 試算表內貼上。",pleaseFavoriteFriend:"無法讀取分數。請先將好友加入最愛"},"en-US":{achievement:"Achv",chartConstant:"Chart Constant",chartType:"Chart",copied:"Copied to clipboard",copy:"Copy",difficulty:"Difficulty",dxScore:"DX Score",exclude:"Exclude",fetch:"Load all scores",genre:"Genre",include:"Include",level:"Level",rank:"Rank",songName:"Song",version:"Version",allDone:'✅ All scores are loaded into text box. Click "Copy" to copy scores to clipboard. You can paste it in Excel or Google Sheets.',pleaseFavoriteFriend:"Failed to load scores. Please add friend to favorite."},"ko-KR":{achievement:"정확도",chartConstant:"상수",chartType:"유형",copied:"클립보드에 복사되었습니다",copy:"복사",difficulty:"난이도",dxScore:"DX 점수",exclude:"제외",fetch:"모든 기록 불러오기",genre:"장르",include:"포함",level:"레벨",rank:"등급",songName:"노래",version:"버전",allDone:'✅ 모든 기록이 로드되었습니다. "복사"를 눌러 클립보드로 복사하고 엑셀이나 구글 시트에 붙여 넣으세요.',pleaseFavoriteFriend:"Failed to load scores. Please add friend to favorite."}}[n],S=location.pathname.includes("/friend/friendDetail/")?new URLSearchParams(location.search).get("idx"):"",v={div:null,scores:null},y={SongName:h.songName,Genre:h.genre,Version:h.version,ChartType:h.chartType,Difficulty:h.difficulty,Level:h.level,InternalLevel:h.chartConstant,Achievement:h.achievement,Rank:h.rank,FcAp:"FC/AP",Sync:"Sync",DxStar:"DX ✦"},_=Object.assign(Object.assign({},y),{DxScore:h.dxScore,DxRatio:"DX %"}),x={SongName:e=>e.songName,Genre:e=>e.genre,Version:e=>e.version<0?"?":(0,l.getVersionName)(e.version),ChartType:e=>(0,o.getChartTypeName)(e.chartType),Difficulty:e=>(0,i.getDifficultyName)(e.difficulty),Level:e=>(0,d.getOfficialLevel)(Math.abs(e.level)),InternalLevel:e=>e.level>0?e.level.toFixed(1):"?",Achievement:e=>e.achievement.toFixed(4)+"%",Rank:e=>(0,g.getRankByAchievement)(e.achievement).title,FcAp:e=>e.fcap||"-",Sync:e=>e.sync||"-",DxScore:e=>`${e.dxscore.player}/${e.dxscore.max}`,DxRatio:e=>(100*e.dxscore.ratio).toFixed(1)+"%",DxStar:e=>e.dxscore.star.toFixed(0)},N=S?["InternalLevel"]:["DxScore","InternalLevel"],A=Object.keys(S?y:_).filter((e=>!N.includes(e)));function L(t){const n=e.createElement("label");n.className="f_14 d_ib p_r p_5 m_5",n.style.borderRadius="4px",n.style.border="1px solid #333";const r=e.createElement("input");return r.name=t,r.type="checkbox",r.addEventListener("change",(()=>{n.parentElement.classList.contains("excluded")?v.div.querySelector(".included").append(n):n.parentElement.classList.contains("included")&&v.div.querySelector(".excluded").append(n)})),n.append(r,_[t]),n}function b(t){return r(this,void 0,void 0,(function*(){t.preventDefault();const r=yield(0,f.fetchGameVersion)(e.body),o=(0,s.getGameRegionFromOrigin)(e.location.origin),l=yield(0,p.loadSongDatabase)(r,o),u=document.getElementById("outputText");if(null==v.scores){u.value="",v.scores=[];try{for(const e of i.DIFFICULTIES)u.value+=(0,m.statusText)(n,e,!1)+"\n",v.scores=v.scores.concat(yield S?(0,a.fetchFriendScoresFull)(S,e,l,!0):(0,c.fetchScoresFull)(e,new Map,l))}catch(e){return console.warn(e),void(u.value+=S?h.pleaseFavoriteFriend:e)}}const d=function(){const e=v.div.querySelectorAll(".included input");return Array.from(e).map((e=>e instanceof HTMLInputElement?e.name:null)).filter((e=>null!=e))}();u.value=function(e){return e.map((e=>_[e])).join("\t")}(d)+"\n"+v.scores.map((e=>function(e,t){return t.map((t=>x[t](e))).join("\t")}(e,d))).join("\n"),document.querySelector(".fetchStatus").innerText=h.allDone}))}(0,s.isMaimaiNetOrigin)(e.location.origin)&&(null===(t=e.getElementById("outputArea"))||void 0===t||t.remove(),function(t){const n=e.createElement("div");n.id="outputArea",n.style.position="relative",n.style.marginBottom="16px",v.div=n;const r=e.createElement("button");r.className="m_r_5",r.style.color="#1477e6",r.append(h.fetch),r.addEventListener("click",b),n.append(r);const o=e.createElement("div");o.className="included p_10 m_10",o.append(h.include),o.style.textAlign="left",o.style.backgroundColor="#ffdd00",o.style.borderRadius="5px";for(const e of A)o.append(L(e));n.append(o);const i=e.createElement("div");i.className="excluded p_10 m_10",i.append(h.exclude),i.style.textAlign="left",i.style.backgroundColor="gray",i.style.borderRadius="5px";for(const e of N)i.append(L(e));n.append(i);const a=e.createElement("textarea");a.className="f_12",a.id="outputText",a.style.whiteSpace="pre",n.append(a);const c=e.createElement("button");c.innerText=h.copy;for(let e of[r,c])e.style.backgroundColor="#9f51dc",e.style.border="2px solid black",e.style.borderRadius="5px",e.style.color="white",e.style.fontWeight="700",e.style.padding="8px 12px";n.append(c),c.addEventListener("click",(()=>{a.select(),c.disabled=!0,c.style.cursor="default",c.style.filter="grayscale(1.0)",document.execCommand("copy"),c.innerText=h.copied,setTimeout((()=>{c.disabled=!1,c.style.cursor="",c.style.filter="",c.innerText=h.copy}),3e3)}));const s=document.createElement("div");s.className="fetchStatus f_16 m_t_10",s.style.fontWeight="700",s.style.color="white",s.style.textShadow="1px 1px 2px black",n.append(s),t.insertAdjacentElement("afterend",n)}(e.querySelector(".see_through_block")))}(document)}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(7913)})();