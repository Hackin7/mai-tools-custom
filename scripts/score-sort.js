(()=>{"use strict";var e={1134:(e,n)=>{var t;Object.defineProperty(n,"__esModule",{value:!0}),n.DxVersion=n.SSSPLUS_MIN_ACHIEVEMENT=n.DIFFICULTY_CLASSNAME_MAP=n.DIFFICULTIES=void 0,n.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],n.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),n.SSSPLUS_MIN_ACHIEVEMENT=100.5,(t=n.DxVersion||(n.DxVersion={}))[t.PLUS=14]="PLUS",t[t.SPLASH=15]="SPLASH",t[t.SPLASH_PLUS=16]="SPLASH_PLUS"},4007:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.fetchPlayerGrade=n.getPlayerName=n.getChartType=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0,n.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const n=e.querySelector(".pointer");e=n||e}const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getChartType=function(e){return e.id?e.id.includes("sta_")?0:1:e.querySelector("img:nth-child(2)").src.includes("_standard")?0:1},n.getPlayerName=function(e){var n;return null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},n.fetchPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},2847:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.fetchScores=n.SELF_SCORE_URLS=void 0;const o=t(4007),c=t(4871);n.SELF_SCORE_URLS=new Map([["Re:MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],["MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],["EXPERT","/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],["ADVANCED","/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"]]),n.fetchScores=function(e,t){return r(this,void 0,void 0,(function*(){const r=n.SELF_SCORE_URLS.get(e);if(!r)return;const s=yield c.fetchPage(r),i=s.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:"",scoreList:t};return i.forEach((n=>function(e,n,t){const r=e.classList.contains("screw_block"),c=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(r)t.genre=e.innerText;else if(c){const r=o.getSongName(e),c=o.getChartLevel(e),s=1===o.getChartType(e)?"DX":"STANDARD",i=function(e){const n=e.querySelector(".music_score_block.w_120");return n&&n.innerText}(e);if(!i)return;t.scoreList.push([r,t.genre,n,c,s,i].join("\t"))}}(n,e,a))),s}))}},1735:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LANG=void 0;const t=new URLSearchParams(location.search);let r="en";t.get("hl")?r=t.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(r="zh"),n.LANG=r},9340:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDefaultLevel=n.getOfficialLevel=void 0,n.getOfficialLevel=function(e){const n=Math.floor(e);return e-n>.6?n+"+":n.toString()},n.getDefaultLevel=function(e){if(!e)return 1;const n=parseInt(e);return e.endsWith("+")?n+.7:n}},533:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.iWantSomeMagic=void 0;const o=t(1134),c=[105,117,117,113,116,59,48,48,104,106,116,117,47,104,106,117,105,118,99,118,116,102,115,100,112,111,117,102,111,117,47,100,112,110,48,110,122,107,106,98,111,48,100,51,52,54,98,49,50,52,49,58,57,103,56,102,101,99,100,52,98,53,55,98,54,49,53,57,98,53,100,52,58,57,48,115,98,120,48],s=[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,116,113,109,98,116,105,47,107,116],i=[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,116,113,109,98,116,105,113,109,118,116,47,107,116];n.iWantSomeMagic=function(e){return r(this,void 0,void 0,(function*(){let n=c;switch(e){case o.DxVersion.SPLASH:n=s;break;case o.DxVersion.SPLASH_PLUS:n=i}const t=n.map((e=>e-1)),r=yield fetch(String.fromCharCode(...t));return yield r.text()}))}},5165:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.filterSongsByVersion=n.getSongProperties=n.buildSongPropsMap=void 0;const r=t(1134),o=t(868),c=/\bdx\s*:\s*([0-9]+)/,s=/\blv\s*:\s*(\[.+?\])/,i=/\bv\s*:\s*(-?[0-9]+)/,a=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,l=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/,u=[{name:"BREaK! BREaK! BREaK!",lv:[-6,-8,12.8,14.7,0],debut:r.DxVersion.SPLASH,dx:1}];function f(e){const n=e.match(c),t=e.match(s),r=e.match(i),o=e.match(a),u=e.match(l);if(n&&t&&r&&o)return{dx:parseInt(n[1]),lv:JSON.parse(t[1]),debut:Math.abs(parseInt(r[1])),name:(f=o[1],"D✪N’T  ST✪P  R✪CKIN’"===f?"D✪N’T ST✪P R✪CKIN’":f.replace(/" \+ '/g,"").replace(/' \+ "/g,"")),nickname:u&&u[1]};var f}function d(e,n){e.has(n.name)||e.set(n.name,[]),e.get(n.name).push(n)}n.buildSongPropsMap=function(e){const n=e.split("\n"),t=new Map;for(const e of n){const n=f(e);n&&d(t,n)}for(const e of u)d(t,e);return t},n.getSongProperties=function(e,n,t,r){let c=e.get(n);if(c&&c.length>0){if(c.length>1&&(c=c.filter((e=>e.dx===r)),c.length>1)){const e=o.getSongNickname(n,t);c=c.filter((n=>n.nickname===e))}if(c.length)return c.length>1&&(console.warn(`Found multiple song properties for ${n} ${r}`),console.warn(c)),c[0]}return console.warn(`Could not find song properties for ${n} ${r}`),null},n.filterSongsByVersion=function(e,n,t,r){const o=[];for(const c of e){const{dx:e,name:s,nickname:i}=c;let a=n.get(s);a&&a.length>0&&(a.length>1&&(a=a.filter((n=>n.dx===e)),a.length>1&&(a=a.filter((e=>e.nickname===i)))),a.length)?(a.length>1&&(console.warn(`Found multiple song properties for ${s} ${e?"[DX]":""}`),console.warn(a)),(0===r&&a[0].debut===t||1===r&&a[0].debut<t)&&o.push(a[0])):console.warn(`Could not find song properties for ${s} ${e?"[DX]":""}`)}return o}},868:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=n.RATING_TARGET_SONG_NAME_PREFIX=n.DX_SONG_NAME_SUFFIX=void 0;const o=t(4871);n.DX_SONG_NAME_SUFFIX=" [DX]",n.RATING_TARGET_SONG_NAME_PREFIX="▶ ",n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,t,r){return"Link"===e&&(e=t.includes("niconico")?"Link(nico)":"Link(org)"),r?e+n.DX_SONG_NAME_SUFFIX:e};let c={};n.isNicoNicoLink=function(e){return r(this,void 0,void 0,(function*(){if(c.nico===e)return!0;if(c.original===e)return!1;const n=(yield o.fetchPage("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?c.nico=e:c.original=e,n}))}},4871:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchNewSongs=n.fetchAllSongs=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0;const o=t(4007),c=t(2847),s=t(868);function i(e){return r(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}function a(e){return r(this,void 0,void 0,(function*(){const n=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),t=[];for(const e of n){const n=s.getSongIdx(e),r=o.getSongName(e),c=o.getChartType(e);let i;"Link"===r&&(i=(yield s.isNicoNicoLink(n))?"Link(nico)":"Link(org)"),t.push({dx:c,name:r,nickname:i})}return t}))}n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],n.handleError=function(e){alert(e)},n.fetchPage=i,n.fetchGameVersion=function e(n){return r(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?t.value:e(n=yield i("/maimai-mobile/record/musicVersion/"))}))},n.fetchAllSongs=function(e){return r(this,void 0,void 0,(function*(){if(!e){const n=c.SELF_SCORE_URLS.get("MASTER");e=yield i(n)}return yield a(e)}))},n.fetchNewSongs=function(e){return r(this,void 0,void 0,(function*(){const n=yield i(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield a(n)}))},n.getPostMessageFunc=function(e,n){return(t,r)=>{const o={action:t,payload:r};e.postMessage(o,n)}}},4276:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(1134),c=t(4007),s=t(2847),i=t(1735),a=t(9340),l=t(533),u=t(5165),f=t(868),d=t(4871);var h;!function(e){e.None="None",e.RankDes="RankDes",e.RankAsc="RankAsc",e.ApFcDes="ApFcDes",e.ApFcAsc="ApFcAsc",e.SyncDes="SyncDes",e.SyncAsc="SyncAsc",e.VsResultAsc="VsResultAsc",e.VsResultDes="VsResultDes",e.LvDes="LvDes",e.LvAsc="LvAsc",e.InLvDes="InLvDes",e.InLvAsc="InLvAsc"}(h||(h={})),function(e){const n={en:{[h.None]:"-- Choose Sort Option --",[h.RankAsc]:"Rank (low → high)",[h.RankDes]:"Rank (high → low)",[h.ApFcAsc]:"AP/FC (FC → AP+)",[h.ApFcDes]:"AP/FC (AP+ → FC)",[h.SyncAsc]:"Sync (FS → FDX+)",[h.SyncDes]:"Sync (FDX+ → FS)",[h.VsResultAsc]:"VS Result (Lose → Win)",[h.VsResultDes]:"VS Result (Win → Lose)",[h.LvAsc]:"Level (low → high)",[h.LvDes]:"Level (high → low)",[h.InLvAsc]:"Internal Level (low → high)",[h.InLvDes]:"Internal Level (high → low)"},zh:{[h.None]:"-- 選擇排序方式 --",[h.RankAsc]:"達成率 (由低至高)",[h.RankDes]:"達成率 (由高至低)",[h.ApFcAsc]:"AP/FC (由 FC 到 AP+)",[h.ApFcDes]:"AP/FC (由 AP+ 到 FC)",[h.SyncAsc]:"Sync (由 FS 到 FDX+)",[h.SyncDes]:"Sync (由 FDX+ 到 FS)",[h.VsResultAsc]:"對戰結果 (由敗北到勝利)",[h.VsResultDes]:"對戰結果 (由勝利到敗北)",[h.LvAsc]:"譜面等級 (由低至高)",[h.LvDes]:"譜面等級 (由高至低)",[h.InLvAsc]:"內部譜面等級 (由低至高)",[h.InLvDes]:"內部譜面等級 (由高至低)"}}[i.LANG],t=["1","2","3","4","5","6","7","7+","8","8+","9","9+","10","10+","11","11+","12","12+","13","13+","14","14+","15"],S=["SSS+","SSS","SS+","SS","S+","S","AAA","AA","A","BBB","BB","B","C","D",null],g=["AP+","AP","FC+","FC",null],p=["FDX+","FDX","FS+","FS",null],m=["WIN","DRAW","LOSE"],_=location.pathname.includes("battleStart"),v=location.search.includes("scoreType=1"),A={};function y(e){const n=e-Math.floor(e);return n>.95?1:n>.65&&n<.69?.7:0}function L(e){const n=y(e);return n?n<1?"UNKNOWN LEVEL "+Math.floor(e)+"+":"UNKNOWN LEVEL "+e.toFixed(0):"INTERNAL LEVEL "+e.toFixed(1)}function E(e,n){const t=new Map;n&&e.reverse();for(const n of e)t.set(n,[]);return n&&e.reverse(),t}function D(n,t,r){let o=[];return n.forEach(((n,c)=>{if(n.length){const s=e.createElement("div");s.className="screw_block m_15 f_15",s.innerText=function(e,n,t,r){let o="◖";return o+=e&&n?e+" "+n:e?"NO "+e:n||" --- ",o+"◗　　　"+t+"/"+r}(t,c,n.length,r),o.push(s),o=o.concat(n)}})),o}function P(e){return e.getElementsByClassName("music_lv_block")[0]}function N(e,n="lv"){return P(e).dataset[n]}function b(e,n){const t=P(e);if(!t.dataset.inlv){const e=y(n);t.dataset.inlv=n.toFixed(2);const r=(e?"*":"")+n.toFixed(1);r.length>4&&(t.classList.remove("f_14"),t.classList.add("f_13")),t.innerText=r}}function F(e,n,t){let r=0;return t&&(r=t.lv[n],"number"!=typeof r?r=0:r<0&&(r=Math.abs(r)-.02)),r||a.getDefaultLevel(N(e))-.02}function I(e,n){const t=N(e,"inlv");if(t)return parseFloat(t);const r=c.getSongName(e),s=c.getChartType(e),i=o.DIFFICULTIES.indexOf(c.getChartDifficulty(e));let a;if("Link"===r){const t=_?null:f.getSongIdx(e);A.nicoLinkIdx===t?a=u.getSongProperties(n,r,"niconico",s):A.originalLinkIdx===t&&(a=u.getSongProperties(n,r,"",s)),console.log(a)}else a=u.getSongProperties(n,r,"",s);return F(e,i,a)}function k(e,n){const t=I(e,A.songProps),r=I(n,A.songProps);return t<r?-1:r<t?1:0}function R(e,n){const r=E(t,n);return e.forEach((e=>{const n=N(e);r.get(n).push(e)})),A.songProps&&r.forEach((e=>{e.sort(k),n&&e.reverse()})),D(r,"LEVEL",e.length)}function x(e){const n=_?e.querySelector("tr:last-child td:last-child img:last-child"):e.children[0].querySelector("img.f_r:not(.music_kind_icon):last-of-type");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf(".");return t.substring(r+1,o).replace("p","+").toUpperCase()}function M(e){const n=_?e.querySelector("tr:first-child td:last-child"):e.querySelector(".music_score_block.w_120");return n?parseFloat(n.innerText):n}function T(e,n){const t=M(e),r=M(n);return null===t&&null===r?0:null===r?-1:null===t?1:t>r?-1:t<r?1:0}function w(e,n){const t=E(S,n);return e.forEach((e=>{const n=x(e);t.get(n).push(e)})),v||t.forEach(((e,t)=>{e.sort(T),null!==t&&n&&e.reverse()})),D(t,"RANK",e.length)}function C(e){const n=_?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf("."),c=t.substring(r+1,o);return"back"===c?null:c.replace("ap","AP").replace("p","+").toUpperCase()}function O(e,n){const t=E(g,n);return e.forEach((e=>{const n=C(e);t.get(n).push(e)})),D(t,"",e.length)}function $(e){const n=_?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf("."),c=t.substring(r+1,o);return"back"===c?null:c.replace("sd","DX").replace("p","+").toUpperCase()}function V(e,n){const t=E(p,n);return e.forEach((e=>{const n=$(e);t.get(n).push(e)})),D(t,"",e.length)}function q(e,n){const t=E(m,n);return e.forEach((e=>{const n=function(e){const n=e.querySelector("tr:first-child td:nth-child(2) img").src.replace(/\?ver=.*$/,""),t=n.lastIndexOf("_"),r=n.lastIndexOf(".");return n.substring(t+1,r).toUpperCase()}(e);t.get(n).push(e)})),D(t,"",e.length)}function U(e,n){const t=new Map,r=[];for(const n of Array.from(e)){const e=I(n,A.songProps);t.set(e,!0),r.push(e)}const o=Array.from(t.keys()).sort(((e,n)=>e>n?-1:e<n?1:0));n&&o.reverse();const c=new Map;return o.forEach((e=>{c.set(L(e),[])})),Array.from(e).forEach(((e,n)=>{c.get(L(r[n])).push(e)})),D(c,"",e.length)}function H(){return e.body.querySelectorAll(".main_wrapper.t_c .w_450.m_15.f_0")}function X(t,r){const o=n[t];let c=e.getElementsByClassName("option_"+t)[0];return c||(c=e.createElement("option"),c.className="option_"+t,c.innerText=o,c.value=t),r?c.classList.add("d_n"):c.classList.remove("d_n"),c}_?function(){r(this,void 0,void 0,(function*(){const n=(yield d.fetchPage(s.SELF_SCORE_URLS.get("Re:MASTER"))).querySelector(".music_scorelist_table").parentElement;n.querySelector("tr:last-child").remove();const t=H(),r=t.length,o={},c={},i={};for(let e=0;e<g.length;e++)o[g[e]]=0,c[p[e]]=0;for(let e=0;e<S.length;e++)i[S[e]]=0;t.forEach((e=>{o[C(e)]++,c[$(e)]++,i[x(e)]++}));for(let e=1;e<9;e++)i[S[e]]+=i[S[e-1]];for(let e=1;e<4;e++)o[g[e]]+=o[g[e-1]],c[p[e]]+=c[p[e-1]];let a=n.querySelectorAll("tr:first-child .f_11");a[0].innerHTML=`${i.A}/${r}`,a[1].innerHTML=`${i.S}/${r}`,a[2].innerHTML=`${i["S+"]}/${r}`,a[3].innerHTML=`${i.SS}/${r}`,a[4].innerHTML=`${i["SS+"]}/${r}`,a[5].innerHTML=`${i.SSS}/${r}`,a[6].innerHTML=`${i["SSS+"]}/${r}`,a=n.querySelectorAll("tr:last-child .f_11"),a[0].innerHTML=`${o.FC}/${r}`,a[1].innerHTML=`${o["FC+"]}/${r}`,a[2].innerHTML=`${o.AP}/${r}`,a[3].innerHTML=`${o["AP+"]}/${r}`,a[4].innerHTML=`${c.FS}/${r}`,a[5].innerHTML=`${c["FS+"]}/${r}`,a[6].innerHTML=`${c.FDX}/${r}`,a[7].innerHTML=`${c["FDX+"]}/${r}`,e.querySelector(".town_block + .see_through_block").insertAdjacentElement("afterend",n)}))}():e.querySelectorAll("div.w_450.m_15.p_r.f_0[id]").forEach((e=>{var n,t;e.style.removeProperty("display"),e.style.removeProperty("margin-top"),e.id.includes("sta_")?null===(n=e.querySelector(".music_kind_icon_dx"))||void 0===n||n.remove():null===(t=e.querySelector(".music_kind_icon_standard"))||void 0===t||t.remove();const r=e.querySelector("img:nth-child(2)");r.onclick=null,r.className="music_kind_icon"})),Array.from(e.getElementsByClassName("music_lv_block")).forEach((e=>{e.dataset.lv||(e.dataset.lv=e.innerText)}));const G=e.body.querySelector(".main_wrapper.t_c .screw_block");G&&(G.insertAdjacentElement("beforebegin",function(){const n="scoreSortContainer";let t=e.getElementById(n);if(t)return t;t=e.createElement("div"),t.id=n,t.className="w_450 m_15";const r=e.createElement("select");return r.className="w_300 m_10",r.addEventListener("change",(n=>{!function(n){const t=H(),r=Array.from(e.body.querySelectorAll(".main_wrapper.t_c .screw_block"));let o=null;switch(n){case h.RankDes:o=w(t,!1);break;case h.RankAsc:o=w(t,!0);break;case h.ApFcDes:o=O(t,!1);break;case h.ApFcAsc:o=O(t,!0);break;case h.SyncDes:o=V(t,!1);break;case h.SyncAsc:o=V(t,!0);break;case h.VsResultAsc:o=q(t,!0);break;case h.VsResultDes:o=q(t,!1);break;case h.LvDes:o=R(t,!0);break;case h.LvAsc:o=R(t,!1);break;case h.InLvDes:o=U(t,!1);break;case h.InLvAsc:o=U(t,!0);break;default:return}for(let e=1;e<r.length;e++)r[e].remove();const c=r[0];for(let e=o.length-1;e>=1;e--)c.insertAdjacentElement("afterend",o[e]);c.innerText=o[0].innerText}(n.target.value)})),r.append(X(h.None)),r.append(X(h.RankAsc)),r.append(X(h.RankDes)),r.append(X(h.ApFcAsc)),r.append(X(h.ApFcDes)),r.append(X(h.SyncAsc)),r.append(X(h.SyncDes)),_&&(r.append(X(h.VsResultAsc)),r.append(X(h.VsResultDes))),r.append(X(h.LvAsc)),r.append(X(h.LvDes)),r.append(X(h.InLvAsc,!0)),r.append(X(h.InLvDes,!0)),t.append(r),t}()),function(){r(this,void 0,void 0,(function*(){const n=parseInt(yield d.fetchGameVersion(e.body)),t=u.buildSongPropsMap(yield l.iWantSomeMagic(n)),r=Array.from(H());for(const e of r){const n=c.getSongName(e);if("Link"===n){const r=o.DIFFICULTIES.indexOf(c.getChartDifficulty(e));try{const o=f.getSongIdx(e);let c;(yield f.isNicoNicoLink(o))?(A.nicoLinkIdx=o,c=u.getSongProperties(t,n,"niconico",0)):(A.originalLinkIdx=o,c=u.getSongProperties(t,n,"",0)),b(e,F(e,r,c))}catch(n){b(e,F(e,r))}}else b(e,I(e,t))}console.log("enabling internal level sort"),X(h.InLvAsc,!1),X(h.InLvDes,!1),A.songProps=t}))}())}(document)}},n={};!function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={exports:{}};return e[r].call(c.exports,c,c.exports,t),c.exports}(4276)})();