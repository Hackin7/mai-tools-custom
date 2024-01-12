(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STD"}},5969:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=t.fixTimezone=void 0;const n=6e4*(540+(new Date).getTimezoneOffset());function o(e,t){return t=t||2,e.toString().padStart(t,"0")}t.fixTimezone=function(e){return new Date(e.valueOf()-n)},t.formatDate=function(e,t=":"){return e.getFullYear()+"-"+o(e.getMonth()+1)+"-"+o(e.getDate())+" "+o(e.getHours())+t+o(e.getMinutes())}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyClassName=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyShortName=t.getDifficultyName=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER","UTAGE"],o=["BAS","ADV","EXP","MAS","ReM","UTG"];function r(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.getDifficultyName=function(e){return n[e]},t.getDifficultyShortName=function(e){return o[e]},t.getDifficultyByName=r,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return r(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyClassName=function(e){return["basic","advanced","expert","master","remaster","utage"][e]||""},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff","#f540f3"][e]||"black"}},271:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const o=n(6358),r=[0,.85,.9,.93,.95,.97,.99,1];function a(e){for(let t=r.length-1;t>0;t--)if(e>=r[t])return t;return 0}t.determineDxStar=a,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[r,i]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),c=r/i,s=a(c),l=`✦${s} (${(0,o.roundFloat)(100*c,"floor",.1).toFixed(1)}%)`,u=document.createElement("div");return u.className="white p_r_5 f_15 f_l",u.append(l),t.prepend(u),s}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFriendDxStar=t.getSyncStatus=t.getApFcStatus=t.getAchievement=t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const o=n(8642),r=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,r.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,o.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null},t.getAchievement=function(e,t=!1){const n=t?e.querySelector("tr:first-child td:last-child"):e.querySelectorAll(".music_score_block")[0];return n instanceof HTMLElement?parseFloat(n.innerText):0},t.getApFcStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const o=n.src.replace(/\?ver=.*$/,""),r=o.lastIndexOf("_"),a=o.lastIndexOf("."),i=o.substring(r+1,a);return"back"===i?null:i.replace("ap","AP").replace("p","+").toUpperCase()},t.getSyncStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const o=n.src.replace(/\?ver=.*$/,""),r=o.lastIndexOf("_"),a=o.lastIndexOf("."),i=o.substring(r+1,a);return"back"===i?null:i.toUpperCase().replace("P","+").replace("FDX","FSD")},t.getFriendDxStar=function(e){const t=e.querySelector("tr:first-child td:last-child img");if(!t)return 0;const n=new URL(t.src).pathname,o=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf("."));try{const e=parseInt(o);return isNaN(e)||e<0?(console.warn("invalid dx star "+o),0):e}catch(e){console.warn("invalid dx star "+o)}return 0}},6510:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScoresFull=t.fetchScores=t.getMyDxScoreInfo=t.SELF_SCORE_URLS=void 0;const r=n(9099),a=n(271),i=n(2347),c=n(9268),s=n(6991);function l(e){const t=e.querySelectorAll(".music_score_block");if(2!==t.length)return null;const n=t[1].childNodes,o=n[n.length-1],r=o instanceof Text?o.wholeText.split("/").map((e=>e.replace(",","").trim())):[];if(2!==r.length)return null;try{const e=parseInt(r[0]),t=parseInt(r[1]);if(isNaN(e)||isNaN(t))throw new Error(`failed to parse DX score. Input was ${JSON.stringify(r)}`);const n=e/t;return{max:t,player:e,ratio:n,star:(0,a.determineDxStar)(n)}}catch(e){console.warn(e)}return{max:0,player:0,ratio:0,star:0}}function u(e,t,n,o){const a=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(a)return o.genre=e.innerText,null;if(s){const a=(0,i.getAchievement)(e);if(!a)return;const s=(0,i.getSongName)(e),l=(0,r.getChartType)(e),u=n.getSongProperties(s,o.genre,l);let d=u?u.lv[t]:0;const f=d>0;return d||(d=(0,c.getDefaultLevel)((0,i.getChartLevel)(e))),{songName:s,genre:o.genre,difficulty:t,level:d,levelIsPrecise:f,chartType:l,achievement:a}}}t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.getMyDxScoreInfo=l,t.fetchScores=function(e,n,r){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;o=yield(0,s.fetchPage)(r),n.set(e,o)}const a=o.querySelectorAll(".main_wrapper.t_c .m_15"),i={genre:""};return Array.from(a).map((t=>u(t,e,r,i))).filter((e=>null!=e))}))},t.fetchScoresFull=function(e,n,r){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;o=yield(0,s.fetchPage)(r),n.set(e,o)}const a=o.querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},d=Array.from(a).map((t=>function(e,t,n,o){const r=u(e,t,n,o);if(null==r)return null;const a=n.getSongProperties(r.songName,o.genre,r.chartType);return Object.assign(Object.assign({},r),{fcap:(0,i.getApFcStatus)(e),sync:(0,i.getSyncStatus)(e),dxscore:l(e),version:a?a.debut:-1})}(t,e,r,c)));return d.filter((e=>null!=e))}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromShortString=t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0;const n={jp:"https://maimaidx.jp",intl:"https://maimaidx-eng.com"},o=["jp","intl"];t.MAIMAI_NET_ORIGINS=o.map((e=>n[e])),t.isMaimaiNetOrigin=function(e){return t.MAIMAI_NET_ORIGINS.includes(e)},t.getGameRegionFromOrigin=function(e){return o.find((t=>n[t]===e))||"jp"},t.getGameRegionFromShortString=function(e){return"jp"===(e=(e||"").toLowerCase())?"jp":"intl"}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS","BUDDiES"];t.LATEST_VERSION=21,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20,21],t.validateGameVersion=function(e,n,o=t.LATEST_VERSION){const r="string"==typeof e?parseInt(e):e;return!e||isNaN(r)?o:r>=n&&r<=o?r:o},t.getVersionName=function(e){return n[e]}},8080:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const o=n(5990);t.SUPPORTED_LANGUAGES=["en-US","zh-TW","ko-KR"],t.saveLanguage=function(e){(0,o.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh-TW":e.startsWith("ko")?"ko-KR":"en-US";return function(){switch((0,o.loadUserPreference)("MaiToolsLang")){case"en-US":return"en-US";case"zh-TW":return"zh-TW";case"ko-KR":return"ko-KR"}return null}()||(navigator.language.startsWith("zh")?"zh-TW":navigator.language.startsWith("ko")?"ko-KR":"en-US")}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return Math.floor(10*e)%10>6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e,t=!1){return(t=t||e<0)?Math.abs(e).toFixed(1)+"~":e.toFixed(1)}},6685:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadMagic=void 0;const r=n(8642),a=n(134),i=n(472),c="magicExpire",s=["dxLv15","dxLv16","dxLv17","dxLv18","dxLv19","dxLv20"],l={12:null,13:null,18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vMDg1NWM4OTQ3YjU0N2Q3YjliODg4MTU4NTEyZGRlNjkvcmF3LzFlZWIwNzRkMzkzNjc3NDhhZjQwZmIxYTlkZDRhMTZiNDJmOTliNmIvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vYWQyNjg1ODcyZmQ3ZjVjZDdhNDdlY2IzNDA1MTRlNmIvcmF3Lzk5NjE3NDhkM2M0ODFlZjQ5NWNmZTNkMDgwMzkyYWI4NjI5NWNlOWMvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz",21:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfYnVkZGllcy5qcw=="},u=/\bdx\s*:\s*([0-9]+)/,d=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,g=/\bn\s*:\s*["'`](.+?)["'`]\s*[,\}]/,m=/\bnn\s*:\s*["'`](.+?)["'`]\s*[,\}]/,p=/\bico\s*:\s*["`]([0-9a-z]+)["`]/;function h(e){const t=e.match(u),n=e.match(d),o=e.match(f),a=e.match(g),c=e.match(m),s=e.match(p);if(t&&n&&o&&a){let e=JSON.parse(n[1]);if(e.length>r.DIFFICULTIES.length){const t=e.pop();e[r.DIFFICULTIES.length-1]=t}const l={dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(o[1])),name:(0,i.normalizeSongName)(a[1])};return c&&(l.nickname=c[1]),s&&(l.ico=s[1]),l}}function S(e){return"magicVer"+e}t.loadMagic=function(e){return o(this,void 0,void 0,(function*(){const t=function(e){const t=parseInt(window.localStorage.getItem(c));if(isNaN(t)||Date.now()>t){for(const e of s)window.localStorage.removeItem(e);for(const e of a.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(S(e));return null}const n=S(e),o=window.localStorage.getItem(n);return console.log(`Found cache: ${n}=${o}`),JSON.parse(o)}(e);if(t)return t;console.log("Magic happening...");const n=yield function(e){return o(this,void 0,void 0,(function*(){const t=l[e]||l[18],n=yield fetch(atob(t));return n.ok?(yield n.text()).split("\n").map(h).filter((e=>null!=e)):[]}))}(e);return n.length&&function(e,t){const n=S(e);window.localStorage.setItem(n,JSON.stringify(t)),window.localStorage.setItem(c,String(Date.now()+864e5)),console.log(`Updated cache for ${n}`)}(e,n),n}))}},6991:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addLvToSongTitle=t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const r=n(5969),a=n(8642),i="MaiToolsGameVer",c="MaiToolsGameVerExpire",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";function l(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e,{redirect:"error"}),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=l,t.fetchGameVersion=function e(t){return o(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(c));if(!isNaN(n)&&n>=Date.now()){const e=parseInt(window.localStorage.getItem(i));if(!isNaN(e))return e}const o=t.querySelector("select[name=version] option:last-of-type");if(o instanceof HTMLOptionElement){const e=parseInt(o.value);return window.localStorage.setItem(i,String(e)),window.localStorage.setItem(c,String(Date.now()+864e5)),e}return e(t=yield l("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),n=new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5]));return(0,r.fixTimezone)(n).getTime()},t.removeScrollControl=function(e){for(const t of["#page-top","#page-bottom"]){const n=e.querySelector(t);n instanceof HTMLImageElement&&(n.src=s,n.style.pointerEvents="none")}const t=e.querySelector(".spmenu_toggle");t instanceof HTMLElement&&(t.style.backgroundImage=`url(${s})`)},t.addLvToSongTitle=function(e,t,n){return o(this,void 0,void 0,(function*(){const o=e.querySelector(".basic_block.break"),r=o.querySelector("img");r&&r.remove();const i=document.createElement("div");i.className="f_r",i.append("Lv "+n),i.style.color=(0,a.getDifficultyTextColor)(t),o.append(i)}))}},6358:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatFloat=t.roundFloat=t.sum=t.compareNumber=void 0,t.compareNumber=function(e,t){return e>t?1:e<t?-1:0},t.sum=function(e){let t=0;for(const n of e)t+=n;return t},t.roundFloat=function(e,t,n){return Math[t](e/n)*n},t.formatFloat=function(e,t){return e?e.toFixed(t):"0"}},6689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"jp"===e?["全世界共通リズム感テスト"]:"intl"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={"zh-TW":{bscStart:"讀取綠譜成績中…",bscDone:"✔",advStart:"讀取黃譜成績中…",advDone:"✔",expStart:"讀取紅譜成績中…",expDone:"✔",masStart:"讀取紫譜成績中…",masDone:"✔",remStart:"讀取白譜成績中…",remDone:"✔"},"en-US":{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},"ko-KR":{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,o){const r=n[e];switch(t){case 4:return o?r.remDone+"\n":r.remStart;case 3:return o?r.masDone+"\n":r.masStart;case 2:return o?r.expDone+"\n":r.expStart;case 1:return o?r.advDone+"\n":r.advStart;case 0:return o?r.bscDone+"\n":r.bscStart}return""}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=t.FALLBACK_MAI_TOOLS_BASE_URL=void 0;const o=n(6162);t.FALLBACK_MAI_TOOLS_BASE_URL="https://myjian.github.io/mai-tools",t.getScriptHost=function(e){const n=Array.from(document.querySelectorAll("script"));for(;n.length;){const t=n.pop();if(t.src.includes(e)||t.src.includes("all-in-one")){const e=new URL(t.src),n=e.pathname;return e.origin+n.substring(0,n.lastIndexOf("/scripts"))}}return t.FALLBACK_MAI_TOOLS_BASE_URL},t.getMaiToolsBaseUrl=function(){return(0,o.isMaimaiNetOrigin)(window.location.origin)?t.FALLBACK_MAI_TOOLS_BASE_URL:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNiconicoLink=t.getSongNicknameWithChartType=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=void 0;const r=n(9099),a=n(6420);function i(e,t){return"Link"===e&&(e=t.includes("niconico")?"Link (nico)":"Link (org)"),e}t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=i,t.getSongNicknameWithChartType=function(e,t,n){return i(e,t)+" ["+(0,r.getChartTypeName)(n)+"]"};let c={};t.isNiconicoLink=function(e){return o(this,void 0,void 0,(function*(){if(c.nico===e)return!0;if(c.original===e)return!1;const t=(yield(0,a.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?c.nico=e:c.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadSongDatabase=t.SongDatabase=void 0;const r=n(134),a=n(6685),i=n(6689),c=n(4313),s=n(472);class l{constructor(e=null,t=null,n=!0){this.dxMap=new Map,this.standardMap=new Map,this.nameByIco=new Map,this.verbose=!0,this.gameVer=e,this.region=t,this.verbose=n}insertOrUpdateSong(e,t){const n=1===e.dx?this.dxMap:this.standardMap;if(this.updateSong(e))return;e.debut||0===e.debut||(e.debut=t);const o="Link"===e.name?e.nickname:e.name;if(e.ico&&this.nameByIco.set(e.ico,o),n.has(o))return console.warn(`Found existing song properties for ${o} ${e.dx}: ${JSON.stringify(n.get(o))}`),void console.warn(`Will ignore ${e}`);n.set(o,e)}updateSong(e){if(console.log(e),!e)return!0;const t=1===e.dx?this.dxMap:this.standardMap,n=t.has(e.name)?e.name:e.nickname,o=t.get(n);if(!o)return!1;let r=o.lv;return e.lv instanceof Array&&(r=o.lv.map(((t,n)=>{const o=e.lv[n];return!isNaN(o)&&o>0?o:t}))),e.ico&&this.nameByIco.set(e.ico,n),t.set(n,Object.assign(Object.assign(Object.assign({},o),e),{lv:r})),!0}deleteSong(e){this.dxMap.delete(e),this.standardMap.delete(e)}validate(){for(const e of[this.dxMap,this.standardMap])e.forEach((e=>{console.assert(null!=e.debut),console.assert(e.debut>=0&&e.debut<=r.LATEST_VERSION),console.assert(e.lv.length>=4)}))}hasDualCharts(e,t){if("Link"===e)return!0;if(this.dxMap.has(e)&&this.standardMap.has(e))return!0;const n=(0,s.getSongNickname)(e,t);return!!n&&this.dxMap.has(n)&&this.standardMap.has(n)}getSongPropsByIco(e,t){const n=this.nameByIco.get(e);return this.getSongProperties(n,"",t)}getSongProperties(e,t,n=0){if(null==e)return;const o=1===n?this.dxMap:this.standardMap;let r=o.get(e);if(r)return r;const a=(0,s.getSongNickname)(e,t);if(r=o.get(a),r)return r;this.verbose&&console.warn(`Could not find song properties for ${e} ${n}`)}getAllProps(){return Array.from(this.dxMap.values()).concat(Array.from(this.standardMap.values()))}getPropsForSongs(e){return e.map((e=>{const t=this.getSongProperties(e.nickname,"",e.dx)||this.getSongProperties(e.name,"",e.dx);return t||console.warn("Could not find song properties for",e),t})).filter((e=>!!e))}toString(){return String({dxMap:this.dxMap,standardMap:this.standardMap})}}function u(e){return o(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}t.SongDatabase=l,t.loadSongDatabase=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield(0,a.loadMagic)(e),r=new l(e,t);for(const t of n)r.insertOrUpdateSong(t,e);const s=yield function(e){return o(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield u(t),o=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const r of Object.keys(n[e]))o.push({name:r,dx:t,lv:n[e][r]})})),o}))}(e);console.log("chartLevelOverrides",s);for(const t of s)r.insertOrUpdateSong(t,e);const d=yield function(e){return o(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/song-info/${e}.json`,n=yield u(t);return["standard","dx"].flatMap(((e,t)=>{const o=n[e];if(!o)return;const r=n[e+"Ico"]||{};return Object.keys(o).flatMap((e=>{const n=o[e],a=r[e]||[],i=parseInt(e);return n.map(((e,n)=>n<a.length?{name:e,dx:t,debut:i,ico:a[n]}:{name:e,dx:t,debut:i}))}))}))}))}(t);console.log("regionOverrides",d);for(const e of d)r.updateSong(e);const f=(0,i.getRemovedSongs)(t);for(const e of f)r.deleteSong(e);return r.validate(),r}))}},5990:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},6420:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const r=n(9099),a=n(2347),i=n(6510),c=n(6991),s=n(472);t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=i.SELF_SCORE_URLS.get(0);e=yield(0,c.fetchPage)(t)}return yield function(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),o=(0,a.getSongName)(e),i=(0,r.getChartType)(e);let c;"Link"===o&&(c=(yield(0,s.isNiconicoLink)(t))?"Link (nico)":"Link (org)"),n.push({dx:i,name:o,nickname:c})}return n}))}(e)}))},t.fetchSongDetailPage=function(e){return o(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const r={action:n,payload:o};e.postMessage(r,t)}},t.sleep=function(e){return new Promise((t=>setTimeout(t,e)))}},7552:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(2347),a=n(6510),i=n(6162),c=n(8080),s=n(6991),l=n(4468),u=n(4313),d=n(87),f=n(6420),g=n(7520);!function(){const e=(0,u.getScriptHost)("analyze-rating-in-newtab");let t=(0,c.getInitialLanguage)();const n={"zh-TW":{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating",plateProgress:"名牌板"},"en-US":{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating",plateProgress:"Plates"},"ko-KR":{pleaseLogIn:"maimai DX NET에 로그인 해 주세요.",analyze:"레이팅 분석하기",plateProgress:"Plates"}},m=location.pathname.includes("friend");function p(e,n=!1){return o(this,void 0,void 0,(function*(){let o;const i=m?null:(0,r.getPlayerGrade)(document.body);i&&e("playerGrade",i);const c=new Map;let s=[];for(const o of a.SELF_SCORE_URLS.keys())e("showProgress",(0,l.statusText)(t,o,!1)),s=s.concat(yield(n?a.fetchScoresFull:a.fetchScores)(o,c,new d.SongDatabase(null,null,!1)));return o=c.get(0),e("showProgress",""),e("setPlayerScore",s),o}))}!function(){if(!(0,i.isMaimaiNetOrigin)(document.location.origin))return void(0,f.handleError)(n[t].pleaseLogIn);(0,g.addIframe)(),function(o){const r=(0,i.getGameRegionFromOrigin)(window.location.origin),a=new URLSearchParams({region:r});o&&a.set("playerName",o);const c=document.body.querySelector(".basic_block.p_10.f_0");if(!c)return;let s=document.querySelector(".analyzeLinks");s&&s.remove(),s=document.createElement("span"),s.className="analyzeLinks";const l=document.createElement("a");l.className="f_14",l.style.color="#1477e6",l.target=g.IFRAME_ID,l.append(n[t].analyze),l.href=e+"/rating-calculator/?"+a,(0,g.addFocusIframeListener)(l);const u=document.createElement("a");u.className="f_14",u.style.color="#1477e6",u.target=g.IFRAME_ID,u.append(n[t].plateProgress),u.href=e+"/plate-progress/?"+a,(0,g.addFocusIframeListener)(u),s.append(l," / ",u,document.createElement("br")),location.pathname.indexOf("/maimai-mobile/playerData/")>=0?(s.className+=" f_l",document.querySelector(".m_5.t_r.f_12").insertAdjacentElement("afterbegin",s)):location.pathname.indexOf("/maimai-mobile/home/")>=0?document.querySelector(".comment_block.f_l.f_12").insertAdjacentElement("afterbegin",s):c.querySelector(".name_block").parentElement.append(s)}(m?null:(0,r.getPlayerName)(document.body));const a=(0,s.fetchGameVersion)(document.body);let l;window.ratingCalcMsgListener&&window.removeEventListener("message",window.ratingCalcMsgListener),window.ratingCalcMsgListener=e=>o(this,void 0,void 0,(function*(){console.log(e.origin,e.data);{const n=(0,f.getPostMessageFunc)(document.getElementById("bookmarkletView").contentWindow,e.origin);"object"==typeof e.data&&("ready"===e.data.action?(n("gameVersion",yield a),"string"==typeof e.data.payload&&(t=e.data.payload),l=p(n),l.then(f.fetchAllSongs).then((e=>n("allSongs",e)))):"fetchScoresFull"===e.data.action?("string"==typeof e.data.payload&&(t=e.data.payload),l=p(n,!0)):"saveLanguage"===e.data.action&&(t=e.data.payload,(0,c.saveLanguage)(t)))}})),window.addEventListener("message",window.ratingCalcMsgListener)}()}()},7520:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addFocusIframeListener=t.addIframe=t.IFRAME_ID=void 0,t.IFRAME_ID="bookmarkletView",t.addIframe=function(){let e=document.createElement("iframe");e.name=t.IFRAME_ID,e.id=t.IFRAME_ID,e.style.width="100%",e.style.height="70%",e.style.resize="vertical",document.body.innerHTML=e.outerHTML+document.body.innerHTML},t.addFocusIframeListener=function(e){e.addEventListener("click",(()=>{window.location.href="#"+t.IFRAME_ID}))}}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}(7552)})();