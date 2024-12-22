(()=>{"use strict";var e={3302:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};function r(e,t,n,r=Date.now()){window.localStorage.setItem(e,JSON.stringify({value:t,expiration:r+n}))}Object.defineProperty(t,"__esModule",{value:!0}),t.expireCache=t.addToCache=t.cached=void 0,t.cached=function(e,t,o,i,a=Date.now()){return n(this,void 0,void 0,(function*(){const n=window.localStorage.getItem(e);if(n){const{value:e,expiration:t}=JSON.parse(n);return t&&t>a?e:o(e)}const c=yield i();return r(e,c,t),c}))},t.addToCache=r,t.expireCache=function(e){window.localStorage.removeItem(e)}},3745:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeNameForDxRatingNet=t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;if(e.querySelector(".playlog_music_kind_icon_utage"))return 2;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){switch(e){case 1:return"DX";case 0:return"STD";default:return"UTAGE"}},t.getChartTypeNameForDxRatingNet=function(e){switch(e){case 1:return"dx";case 0:return"std";default:return"utage"}}},9467:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=t.fixTimezone=void 0;const n=6e4*(540+(new Date).getTimezoneOffset());function r(e,t){return t=t||2,e.toString().padStart(t,"0")}t.fixTimezone=function(e){return new Date(e.valueOf()-n)},t.formatDate=function(e,t=":"){return e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+t+r(e.getMinutes())}},2819:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyClassName=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyShortName=t.getDifficultyNameForDxRatingNet=t.getDifficultyName=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER","UTAGE"],r=["BAS","ADV","EXP","MAS","ReM","UTG"];function o(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.getDifficultyName=function(e){return n[e]},t.getDifficultyNameForDxRatingNet=function(e){switch(e){case 0:return"basic";case 1:return"advanced";case 2:return"expert";case 3:return"master";case 4:return"remaster";case 5:return"utage";default:return"unknown"}},t.getDifficultyShortName=function(e){return r[e]},t.getDifficultyByName=o,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return o(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyClassName=function(e){return["basic","advanced","expert","master","remaster","utage"][e]||""},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff","#f540f3"][e]||"black"}},4399:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const r=n(4452),o=[0,.85,.9,.93,.95,.97,.99,1];function i(e){for(let t=o.length-1;t>0;t--)if(e>=o[t])return t;return 0}t.determineDxStar=i,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[o,a]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),c=o/a,s=i(c),l=`✦${s} (${(0,r.roundFloat)(100*c,"floor",.1).toFixed(1)}%)`,u=document.createElement("div");return u.className="white p_r_5 f_15 f_l",u.append(l),t.prepend(u),s}},8850:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchFriendScoresFull=t.fetchFriendScores=t.FRIEND_SCORE_URLS=void 0;const o=n(3745),i=n(6624),a=n(9327),c=n(423),s=n(7168),l=n(790);function u(e){const t=e.querySelector("td.w_120.f_b:last-child"),n=t&&t.innerText.trim();return"0"!==n&&"― %"!==n?n:null}function d(e,t,n,r){const c=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_3")&&e.classList.contains("f_0");if(c)r.genre=e.innerText;else if(s){const c=u(e);if(!c)return;const s=(0,i.getSongName)(e),l=(0,o.getChartType)(e),d=n.getSongProperties(s,r.genre,l);let f=d?d.lv[t]:0;const g=f>0;return f||(f=(0,a.getMinConstant)(n.gameVer,(0,i.getChartLevel)(e))),{songName:s,genre:r.genre,difficulty:t,chartType:l,level:f,levelIsPrecise:g,achievement:parseFloat(c)}}}function f(e,n,o=!1){return r(this,void 0,void 0,(function*(){let r=t.FRIEND_SCORE_URLS.get(n);if(r)return o&&(yield(0,l.sleep)(300),r=r.replace("scoreType=2","scoreType=1")),r+=e,(0,c.fetchPage)(r)}))}t.FRIEND_SCORE_URLS=new Map([[4,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=4&idx="],[3,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=3&idx="],[2,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=2&idx="],[1,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=1&idx="],[0,"/maimai-mobile/friend/friendGenreVs/battleStart/?scoreType=2&genre=99&diff=0&idx="]]),t.fetchFriendScores=function(e,t,n){return r(this,void 0,void 0,(function*(){const r=(yield f(e,t)).querySelectorAll(".main_wrapper.t_c .m_15"),o={genre:""};return Array.from(r).map((e=>d(e,t,n,o))).filter((e=>null!=e))}))},t.fetchFriendScoresFull=function(e,t,n,a=!1){return r(this,void 0,void 0,(function*(){const r=(yield f(e,t)).querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},l=Array.from(r).map((e=>function(e,t,n,r){const o=d(e,t,n,r);if(null==o)return null;const a=n.getSongProperties(o.songName,r.genre,o.chartType);return Object.assign(Object.assign({},o),{fcap:(0,i.getApFcStatus)(e,!0),sync:(0,i.getSyncStatus)(e,!0),version:a?a.debut:-1,dxscore:{max:0,player:0,ratio:0,star:0}})}(e,t,n,c)));if(a){const n=(yield f(e,t,!0)).querySelectorAll(".main_wrapper.t_c .m_15"),r=Array.from(n).map((e=>function(e,t,n){const r=e.classList.contains("screw_block"),a=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_3")&&e.classList.contains("f_0");if(r)n.genre=e.innerText;else if(a){if(!u(e))return;const r=(0,i.getSongName)(e),a=(0,o.getChartType)(e),c=(0,i.getFriendDxStar)(e);return{songName:r,genre:n.genre,difficulty:t,chartType:a,dxscore:{max:0,player:0,ratio:0,star:c}}}}(e,t,c)));!function(e,t){e.forEach(((e,n)=>{const r=t[n];if(e&&r)if(e.songName===r.songName&&e.difficulty===r.difficulty&&e.genre===r.genre&&e.chartType===r.chartType)e.dxscore.star=r.dxscore.star;else{const t=(0,s.getSongNicknameWithChartType)(e.songName,e.genre,e.chartType),n=(0,s.getSongNicknameWithChartType)(r.songName,r.genre,r.chartType);console.warn(`Achievement VS song order is different from DX Score VS song order. Expected ${t} got ${n}`)}}))}(l,r)}return l.filter((e=>null!=e))}))}},6624:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFriendDxStar=t.getSyncStatus=t.getApFcStatus=t.getAchievement=t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const r=n(2819),o=n(7168);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,o.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,r.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null},t.getAchievement=function(e,t=!1){const n=t?e.querySelector("tr:first-child td:last-child"):e.querySelectorAll(".music_score_block")[0];return n instanceof HTMLElement?parseFloat(n.innerText):0},t.getApFcStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const r=n.src.replace(/\?ver=.*$/,""),o=r.lastIndexOf("_"),i=r.lastIndexOf("."),a=r.substring(o+1,i);return"back"===a?null:a.replace("ap","AP").replace("p","+").toUpperCase()},t.getSyncStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const r=n.src.replace(/\?ver=.*$/,""),o=r.lastIndexOf("_"),i=r.lastIndexOf("."),a=r.substring(o+1,i);return"back"===a?null:a.toUpperCase().replace("P","+").replace("FDX","FSD")},t.getFriendDxStar=function(e){const t=e.querySelector("tr:first-child td:last-child img");if(!t)return 0;const n=new URL(t.src).pathname,r=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf("."));try{const e=parseInt(r);return isNaN(e)||e<0?(console.warn("invalid dx star "+r),0):e}catch(e){console.warn("invalid dx star "+r)}return 0}},9732:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScoresFull=t.fetchScores=t.getMyDxScoreInfo=t.SELF_SCORE_URLS=void 0;const o=n(3745),i=n(4399),a=n(6624),c=n(9327),s=n(423);function l(e){const t=e.querySelectorAll(".music_score_block");if(2!==t.length)return null;const n=t[1].childNodes,r=n[n.length-1],o=r instanceof Text?r.wholeText.split("/").map((e=>e.replace(",","").trim())):[];if(2!==o.length)return null;try{const e=parseInt(o[0]),t=parseInt(o[1]);if(isNaN(e)||isNaN(t))throw new Error(`failed to parse DX score. Input was ${JSON.stringify(o)}`);const n=e/t;return{max:t,player:e,ratio:n,star:(0,i.determineDxStar)(n)}}catch(e){console.warn(e)}return{max:0,player:0,ratio:0,star:0}}function u(e,t,n,r){const i=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)return r.genre=e.innerText,null;if(s){const i=(0,a.getAchievement)(e);if(!i)return;const s=(0,a.getSongName)(e),l=(0,o.getChartType)(e),u=n.getSongProperties(s,r.genre,l);let d=u?u.lv[t]:0;const f=d>0;return d||(d=(0,c.getMinConstant)(n.gameVer,(0,a.getChartLevel)(e))),{songName:s,genre:r.genre,difficulty:t,level:d,levelIsPrecise:f,chartType:l,achievement:i}}}t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.getMyDxScoreInfo=l,t.fetchScores=function(e,n,o){return r(this,void 0,void 0,(function*(){let r=n.get(e);if(!r){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;r=yield(0,s.fetchPage)(o),n.set(e,r)}const i=r.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:""};return Array.from(i).map((t=>u(t,e,o,a))).filter((e=>null!=e))}))},t.fetchScoresFull=function(e,n,o){return r(this,void 0,void 0,(function*(){let r=n.get(e);if(!r){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;r=yield(0,s.fetchPage)(o),n.set(e,r)}const i=r.querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},d=Array.from(i).map((t=>function(e,t,n,r){const o=u(e,t,n,r);if(null==o)return null;const i=n.getSongProperties(o.songName,r.genre,o.chartType);return Object.assign(Object.assign({},o),{fcap:(0,a.getApFcStatus)(e),sync:(0,a.getSyncStatus)(e),dxscore:l(e),version:i?i.debut:-1})}(t,e,o,c)));return d.filter((e=>null!=e))}))}},4225:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromShortString=t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0;const n={jp:"https://maimaidx.jp",intl:"https://maimaidx-eng.com"},r=["jp","intl"];t.MAIMAI_NET_ORIGINS=r.map((e=>n[e])),t.isMaimaiNetOrigin=function(e){return t.MAIMAI_NET_ORIGINS.includes(e)},t.getGameRegionFromOrigin=function(e){return r.find((t=>n[t]===e))||"jp"},t.getGameRegionFromShortString=function(e){return"jp"===(e=(e||"").toLowerCase())?"jp":"intl"}},4273:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS","BUDDiES","BUDDiES PLUS","PRiSM (beta)"];t.LATEST_VERSION=23,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20,21,22,23],t.validateGameVersion=function(e,n,r=t.LATEST_VERSION){const o="string"==typeof e?parseInt(e):e;return!e||isNaN(o)?r:o>=n&&o<=r?o:r},t.getVersionName=function(e){return n[e]}},739:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.clearMagicCache=t.MagicApi=void 0;const o=n(3302),i=n(4273),a=n(7168),c=864e5,s="magicVer",l=["dxLv15","dxLv16","dxLv17","dxLv18","dxLv19","dxLv20","magicExpire"],u={12:null,13:null,18:{format:0,sauce:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3L21haWR4X2x2X3VuaXZlcnNlcGx1cy5qc29u"},19:{format:0,sauce:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vMDg1NWM4OTQ3YjU0N2Q3YjliODg4MTU4NTEyZGRlNjkvcmF3L21haWR4X2x2X2Zlc3RpdmFsLmpzb24="},20:{format:0,sauce:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vYWQyNjg1ODcyZmQ3ZjVjZDdhNDdlY2IzNDA1MTRlNmIvcmF3L21haWR4X2x2X2Zlc3RpdmFscGx1cy5qc29u"},21:{format:0,sauce:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZThkOGJiMjcyZjMyYzJjOGE2ODU0MTQzZGUxY2FhZDEvcmF3Lw=="},22:{format:0,sauce:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZjA1OTMzMWViOWRhZWZlYjBkYzU3Y2UxNWU2ZjczZTkvcmF3Lw=="},23:{format:1,sauce:"aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21haS10b29scy5hcHBzcG90LmNvbS9wcmlzbS5qc29u"}};t.MagicApi=class{constructor(){this.ALLOWED_CHART_TYPES=["std","dx"]}parseArcadeSong(e,t){const n=t.indexOf(e.version);if(n<0)return console.warn(`Cannot find debut version for ${e.title}.`,e),[];const r=[];return this.ALLOWED_CHART_TYPES.forEach((t=>{const o=e.sheets.filter((e=>e.type==t));if(0===o.length)return;if(o.length<4)return void console.warn(`Sheet data for ${e.title} (${t}) is incomplete.`,o);console.assert("basic"===o[0].difficulty&&"advanced"===o[1].difficulty&&"expert"===o[2].difficulty&&"master"===o[3].difficulty,"Sheets are not ordered by difficulty");const i={name:(0,a.normalizeSongName)(e.title),dx:"dx"===t?1:0,debut:n,lv:o.map((e=>e.internalLevel?e.internalLevelValue:-e.levelValue))},c=(0,a.getSongNickname)(e.title,e.category);c!==e.title&&(i.nickname=c),r.push(i)})),r}fetchMagic(e){return r(this,void 0,void 0,(function*(){const t=u[e];if(!t)return this.fetchMagic(22);const n=yield fetch(atob(t.sauce));if(!n.ok){const t=new Error(`Failed to load magic ${e}`);return console.warn(t.message),Promise.reject(t)}if(1===t.format){const e=yield n.json(),t=e.versions.map((e=>e.version));return e.songs.reduce(((e,n)=>e.concat(this.parseArcadeSong(n,t))),[])}return yield n.json()}))}loadMagic(e){return r(this,void 0,void 0,(function*(){const t=yield(0,o.cached)(s+e,c,(t=>r(this,void 0,void 0,(function*(){try{const t=yield this.fetchMagic(e);return(0,o.addToCache)(s+e,t,c),t}catch(n){return console.warn(`Use expired cached magic ${e}`),t}}))),(()=>this.fetchMagic(e).catch((()=>[]))));return t.length||(0,o.expireCache)(s+e),l.map(o.expireCache),t}))}},t.clearMagicCache=function(){i.RATING_CALCULATOR_SUPPORTED_VERSIONS.forEach((e=>{const t=`${s}${e}`;console.log(`Removing ${t} from cache`),(0,o.expireCache)(t)}))}},4863:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};function r(e){return n(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.MaiToolsApi=void 0,t.MaiToolsApi=class{constructor(e){this.maiToolsBaseUrl=e}fetchChartLevelOverrides(e){return n(this,void 0,void 0,(function*(){const t=yield r(`${this.maiToolsBaseUrl}/data/chart-levels/version${e}.json`),n=[];return["standard","dx"].forEach(((r,o)=>{if(t[r])for(const i of Object.keys(t[r]))n.push({name:i,dx:o,debut:e,lv:t[r][i]})})),n}))}fetchRegionOverrides(e){return n(this,void 0,void 0,(function*(){const t=yield r(`${this.maiToolsBaseUrl}/data/song-info/${e}.json`);return["standard","dx"].flatMap(((e,n)=>{const r=t[e];if(!r)return;const o=t[e+"Ico"]||{};return Object.keys(r).flatMap((e=>{const t=r[e],i=o[e]||[],a=parseInt(e);return t.map(((e,t)=>({name:e,dx:n,debut:a,ico:i.at(t)})))}))}))}))}}},3383:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SongDatabaseFactory=void 0;const o=n(4273),i=n(1059),a=n(4608);t.SongDatabaseFactory=class{constructor(e,t){this.maiToolsApi=e,this.magicApi=t}create(e,t){return r(this,void 0,void 0,(function*(){const n=new Map,r=new Map,o=new Map,c=yield this.magicApi.loadMagic(e);for(const e of c)this.insertOrUpdateSong(n,r,o,e);const s=yield this.maiToolsApi.fetchChartLevelOverrides(e);for(const e of s)this.insertOrUpdateSong(n,r,o,e);const l=yield this.maiToolsApi.fetchRegionOverrides(t);for(const e of l)this.updateSong(n,r,o,e);const u=(0,i.getRemovedSongs)(t,e);for(const e of u)this.deleteSong(n,r,e);return this.validate(n,r),new a.SongDatabase(e,t,!0,n,r,o)}))}insertOrUpdateSong(e,t,n,r){const o=1===r.dx?e:t;if(this.updateSong(e,t,n,r))return;const i="Link"===r.name?r.nickname:r.name;if(r.ico&&n.set(r.ico,i),o.has(i))return console.warn(`Found existing song properties for ${i} ${r.dx}: ${JSON.stringify(o.get(i))}`),void console.warn(`Will ignore ${r}`);o.set(i,r)}updateSong(e,t,n,r){const o=1===r.dx?e:t,i=o.has(r.name)?r.name:r.nickname,a=o.get(i);if(!a)return!1;let c=a.lv;return r.lv instanceof Array&&(c=a.lv.map(((e,t)=>{const n=r.lv[t];return!isNaN(n)&&n>0?n:e}))),r.ico&&n.set(r.ico,i),o.set(i,Object.assign(Object.assign(Object.assign({},a),r),{lv:c})),!0}deleteSong(e,t,n){e.delete(n),t.delete(n)}validate(e,t){for(const n of[e,t])n.forEach((e=>{console.assert(null!=e.debut),console.assert(e.debut>=0&&e.debut<=o.LATEST_VERSION),console.assert(e.lv.length>=4)}))}}},1850:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const r=n(5371);t.SUPPORTED_LANGUAGES=["en-US","zh-TW","ko-KR"],t.saveLanguage=function(e){(0,r.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh-TW":e.startsWith("ko")?"ko-KR":"en-US";return function(){switch((0,r.loadUserPreference)("MaiToolsLang")){case"en-US":return"en-US";case"zh-TW":return"zh-TW";case"ko-KR":return"ko-KR"}return null}()||(navigator.language.startsWith("zh")?"zh-TW":navigator.language.startsWith("ko")?"ko-KR":"en-US")}},9327:(e,t)=>{function n(e){return e>21?.5:.6}function r(e){return e>21?.6:.7}Object.defineProperty(t,"__esModule",{value:!0}),t.compareLevels=t.getDisplayLv=t.getMaxConstant=t.getMinConstant=t.getOfficialLevel=t.getMinMinorOfPlus=t.getMaxMinorBeforePlus=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getMaxMinorBeforePlus=n,t.getMinMinorOfPlus=r,t.getOfficialLevel=function(e,t){const r=Math.floor(t);return t-r>n(e)?r+"+":r.toString()},t.getMinConstant=function(e,t){if(!t)return 1;const n=parseInt(t);return t.endsWith("+")?n+r(e):n},t.getMaxConstant=function(e,t){if(!t)return 1;const r=parseInt(t);return t.endsWith("+")?r+.9:r+n(e)},t.getDisplayLv=function(e,t=!1){return(t=t||e<0)?Math.abs(e).toFixed(1)+"~":e.toFixed(1)},t.compareLevels=function(e,t){if(Math.abs(e)===Math.abs(t))return e<0?-1:t<0?1:0;const n=Math.abs(e),r=Math.abs(t);return n<r?-1:r<n?1:0}},423:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addLvToSongTitle=t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const o=n(9467),i=n(2819),a="MaiToolsGameVer",c="MaiToolsGameVerExpire",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";function l(e){return r(this,void 0,void 0,(function*(){const t=yield fetch(e,{redirect:"error"}),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=l,t.fetchGameVersion=function e(t){return r(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(c));if(!isNaN(n)&&n>=Date.now()){const e=parseInt(window.localStorage.getItem(a));if(!isNaN(e))return e}const r=t.querySelector("select[name=version] option:last-of-type");if(r instanceof HTMLOptionElement){const e=parseInt(r.value);return window.localStorage.setItem(a,String(e)),window.localStorage.setItem(c,String(Date.now()+864e5)),e}return e(t=yield l("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),n=new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5]));return(0,o.fixTimezone)(n).getTime()},t.removeScrollControl=function(e){for(const t of["#page-top","#page-bottom"]){const n=e.querySelector(t);n instanceof HTMLImageElement&&(n.src=s,n.style.pointerEvents="none")}const t=e.querySelector(".spmenu_toggle");t instanceof HTMLElement&&(t.style.backgroundImage=`url(${s})`)},t.addLvToSongTitle=function(e,t,n){return r(this,void 0,void 0,(function*(){const r=e.querySelector(".basic_block.break"),o=r.querySelector("img");o&&o.remove();const a=document.createElement("div");a.className="f_r",a.append("Lv "+n),a.style.color=(0,i.getDifficultyTextColor)(t),r.append(a)}))}},4452:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatFloat=t.roundFloat=t.sum=t.compareNumber=void 0,t.compareNumber=function(e,t){return e>t?1:e<t?-1:0},t.sum=function(e){let t=0;for(const n of e)t+=n;return t},t.roundFloat=function(e,t,n){return Math[t](e/n)*n},t.formatFloat=function(e,t){return e?e.toFixed(t):"0"}},1059:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e,t){if("jp"===e)return t>21?["全世界共通リズム感テスト","君の知らない物語","Our Fighting","おじゃま虫","はじめまして地球人さん","ヒビカセ","アンチクロックワイズ"]:["全世界共通リズム感テスト"];if("intl"===e){let e=["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"];return t>21&&(e=e.concat(["泥の分際で私だけの大切を奪おうだなんて","テリトリーバトル","くらべられっ子","あの世行きのバスに乗ってさらば。","アンダーキッズ"])),e}return[]}},7303:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={"zh-TW":{bscStart:"讀取綠譜成績中…",bscDone:"✔",advStart:"讀取黃譜成績中…",advDone:"✔",expStart:"讀取紅譜成績中…",expDone:"✔",masStart:"讀取紫譜成績中…",masDone:"✔",remStart:"讀取白譜成績中…",remDone:"✔"},"en-US":{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},"ko-KR":{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,r){const o=n[e];switch(t){case 4:return r?o.remDone+"\n":o.remStart;case 3:return r?o.masDone+"\n":o.masStart;case 2:return r?o.expDone+"\n":o.expStart;case 1:return r?o.advDone+"\n":o.advStart;case 0:return r?o.bscDone+"\n":o.bscStart}return""}},7300:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=t.FALLBACK_MAI_TOOLS_BASE_URL=void 0,t.FALLBACK_MAI_TOOLS_BASE_URL="https://myjian.github.io/mai-tools",t.getScriptHost=function(e){const n=Array.from(document.querySelectorAll("script"));for(;n.length;){const t=n.pop();if(t.src.includes(e)||t.src.includes("all-in-one")){const e=new URL(t.src),n=e.pathname;return e.origin+n.substring(0,n.lastIndexOf("/scripts"))}}return t.FALLBACK_MAI_TOOLS_BASE_URL},t.getMaiToolsBaseUrl=function(){return t.FALLBACK_MAI_TOOLS_BASE_URL}},7168:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNiconicoLink=t.getSongNicknameWithChartType=t.getSongNicknameForDxRatingNet=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=void 0;const o=n(3745),i=n(790);function a(e,t){return"Link"===e?t.includes("niconico")?"Link (nico)":"Link (org)":e}t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=a,t.getSongNicknameForDxRatingNet=function(e,t){return"Link"===e?t.includes("niconico")?"Link (2)":"Link":e},t.getSongNicknameWithChartType=function(e,t,n){return a(e,t)+" ["+(0,o.getChartTypeName)(n)+"]"};let c={};t.isNiconicoLink=function(e){return r(this,void 0,void 0,(function*(){if(c.nico===e)return!0;if(c.original===e)return!1;const t=(yield(0,i.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?c.nico=e:c.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},4608:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadSongDatabase=t.SongDatabase=void 0;const o=n(739),i=n(4863),a=n(3383),c=n(7300),s=n(7168);t.SongDatabase=class{constructor(e=null,t=null,n=!0,r=new Map,o=new Map,i=new Map){this.gameVer=e,this.region=t,this.verbose=n,this.dxMap=r,this.standardMap=o,this.nameByIco=i}hasDualCharts(e,t){if("Link"===e)return!0;if(this.dxMap.has(e)&&this.standardMap.has(e))return!0;const n=(0,s.getSongNickname)(e,t);return!!n&&this.dxMap.has(n)&&this.standardMap.has(n)}getSongPropsByIco(e,t){const n=this.nameByIco.get(e);return this.getSongProperties(n,"",t)}getSongProperties(e,t,n=0){if(null==e)return;const r=1===n?this.dxMap:this.standardMap;let o=r.get(e);if(o)return o;const i=(0,s.getSongNickname)(e,t);if(o=r.get(i),o)return o;this.verbose&&console.warn(`Could not find song properties for ${e} ${n}`)}getAllProps(){return Array.from(this.dxMap.values()).concat(Array.from(this.standardMap.values()))}getPropsForSongs(e){return e.map((e=>{const t=this.getSongProperties(e.nickname,"",e.dx)||this.getSongProperties(e.name,"",e.dx);return t||console.warn("Could not find song properties for",e),t})).filter((e=>!!e))}toString(){return String({dxMap:this.dxMap,standardMap:this.standardMap})}},t.loadSongDatabase=function(e,t){return r(this,void 0,void 0,(function*(){return new a.SongDatabaseFactory(new i.MaiToolsApi((0,c.getMaiToolsBaseUrl)()),new o.MagicApi).create(e,t)}))}},5371:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},790:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const o=n(3745),i=n(6624),a=n(9732),c=n(423),s=n(7168);t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return r(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(0);e=yield(0,c.fetchPage)(t)}return yield function(e){return r(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),r=(0,i.getSongName)(e),a=(0,o.getChartType)(e);let c;"Link"===r&&(c=(yield(0,s.isNiconicoLink)(t))?"Link (nico)":"Link (org)"),n.push({dx:a,name:r,nickname:c})}return n}))}(e)}))},t.fetchSongDetailPage=function(e){return r(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,r)=>{const o={action:n,payload:r};e.postMessage(o,t)}},t.sleep=function(e){return new Promise((t=>setTimeout(t,e)))}},5919:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(8850),i=n(6624),a=n(4225),c=n(1850),s=n(423),l=n(7303),u=n(7300),d=n(4608),f=n(790),g=n(4585);!function(e){const t=(0,u.getScriptHost)("analyze-friend-rating-in-new-tab");let n=(0,c.getInitialLanguage)();const m={"zh-TW":{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating",plateProgress:"名牌板",pleaseFavoriteFriend:"無法讀取分數。請先將好友加入最愛"},"en-US":{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating",plateProgress:"Plates",pleaseFavoriteFriend:"Failed to load scores. Please add friend to favorite."},"ko-KR":{pleaseLogIn:"maimai DX NET에 로그인 해 주세요.",analyze:"레이팅 분석하기",plateProgress:"Plates",pleaseFavoriteFriend:"Failed to load scores. Please add friend to favorite."}},h={};function p(r,o,i){const c=(0,a.getGameRegionFromOrigin)(window.location.origin),s=new URLSearchParams({region:c,gameVersion:r.toString(),friendIdx:o.idx,playerName:o.name});let l=(2===o.page?document:i).querySelector(".analyzeSpan");l&&l.remove(),l=document.createElement("span"),l.className="analyzeSpan";const u=e.createElement("a");u.className="f_14",u.style.color="#1477e6",u.target=g.IFRAME_ID,u.innerText=m[n].analyze,u.href=t+"/rating-calculator/?"+s,(0,g.addFocusIframeListener)(u);const d=document.createElement("a");d.className="f_14",d.style.color="#1477e6",d.target=g.IFRAME_ID,d.append(m[n].plateProgress),d.href=t+"/plate-progress/?"+s,(0,g.addFocusIframeListener)(d),l.append(u," / ",d),2===o.page?(l.className+=" d_ib friend_comment_block f_r",l.style.transform="translate(-25px, -20px)",i.parentElement.insertAdjacentElement("afterend",l)):(l.className+=" d_b",i.querySelector(0===o.page?".friend_comment_block":".comment_block").insertAdjacentElement("afterbegin",l))}function S(e,t,i,a){return r(this,void 0,void 0,(function*(){t.grade&&a("playerGrade",t.grade);try{let r=[];for(const c of o.FRIEND_SCORE_URLS.keys())a("showProgress",(0,l.statusText)(n,c,!1)),r=r.concat(yield(i?o.fetchFriendScoresFull:o.fetchFriendScores)(t.idx,c,new d.SongDatabase(e,null,!1)));a("showProgress",""),a("setPlayerScore",r)}catch(e){console.warn(e),(0,f.handleError)(m[n].pleaseFavoriteFriend)}}))}!function(){r(this,void 0,void 0,(function*(){if(!(0,a.isMaimaiNetOrigin)(document.location.origin))return void(0,f.handleError)(m[n].pleaseLogIn);(0,g.addIframe)();const t=yield(0,s.fetchGameVersion)(document.body);if(location.pathname.includes("/friendLevelVs/")||location.pathname.includes("/friendGenreVs/")){const e=document.querySelector(".friend_vs_friend_block"),n=new URLSearchParams(location.search).get("idx"),r={idx:n,name:(0,i.getPlayerName)(e),grade:"",page:2};h[n]=r,p(t,r,e)}else if(location.pathname.includes("/friend/friendDetail/")){const e=document.querySelector(".see_through_block"),n=new URLSearchParams(location.search).get("idx"),r={idx:n,name:(0,i.getPlayerName)(e),grade:(0,i.getPlayerGrade)(e),page:1};h[n]=r,p(t,r,e)}else Array.from(e.querySelectorAll("img.friend_favorite_icon")).map((e=>e.parentElement)).forEach((e=>{const n=e.querySelector("[name=idx]").value,r={idx:n,name:(0,i.getPlayerName)(e),grade:(0,i.getPlayerGrade)(e),page:0};h[n]=r,p(t,r,e)}));window.ratingCalcMsgListener&&window.removeEventListener("message",window.ratingCalcMsgListener),window.ratingCalcMsgListener=e=>{console.log(e.origin,e.data);{const r=(0,f.getPostMessageFunc)(document.getElementById("bookmarkletView").contentWindow,e.origin);if("object"!=typeof e.data)return;if("getFriendRecords"===e.data.action){r("gameVersion",t);const n=h[e.data.payload];n&&(S(t,n,!1,r),(0,f.fetchAllSongs)().then((e=>{r("allSongs",e)})))}else if("fetchFriendScoresFull"===e.data.action){const n=h[e.data.payload];n&&S(t,n,!0,r)}else"saveLanguage"===e.data.action&&(n=e.data.payload,(0,c.saveLanguage)(n))}},window.addEventListener("message",window.ratingCalcMsgListener)}))}()}(document)},4585:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addFocusIframeListener=t.addIframe=t.IFRAME_ID=void 0,t.IFRAME_ID="bookmarkletView",t.addIframe=function(){if(document.getElementById(t.IFRAME_ID))return;let e=document.createElement("iframe");e.name=t.IFRAME_ID,e.id=t.IFRAME_ID,e.style.width="100%",e.style.height="70%",e.style.resize="vertical",e.style.display="none",document.body.innerHTML=e.outerHTML+document.body.innerHTML},t.addFocusIframeListener=function(e){e.addEventListener("click",(()=>{document.getElementById(t.IFRAME_ID).style.display="block",window.location.href="#"+t.IFRAME_ID}))}}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(5919)})();