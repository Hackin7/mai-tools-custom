(()=>{"use strict";var e={2347:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getPlayerGrade=n.getPlayerName=n.getChartType=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0;const i=t(472);n.getSongName=function(e){return i.normalizeSongName(e.getElementsByClassName("music_name_block")[0].innerText)},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const n=e.querySelector(".pointer");e=n||e}const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getChartType=function(e){return e.id?e.id.includes("sta_")?0:1:e.querySelector("img:nth-child(2)").src.includes("_standard")?0:1},n.getPlayerName=function(e){var n,t;return e.className.includes("friend_vs_friend_block")?null===(n=e.querySelector(".t_l"))||void 0===n?void 0:n.innerText:null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},n.getPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},6510:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.fetchScores=n.SELF_SCORE_URLS=void 0;const o=t(2347),r=t(6420);n.SELF_SCORE_URLS=new Map([["Re:MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],["MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],["EXPERT","/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],["ADVANCED","/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"]]),n.fetchScores=function(e,t){return i(this,void 0,void 0,(function*(){const i=n.SELF_SCORE_URLS.get(e);if(!i)return;const c=yield r.fetchPage(i),s=c.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:"",scoreList:t};return s.forEach((n=>function(e,n,t){const i=e.classList.contains("screw_block"),r=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)t.genre=e.innerText;else if(r){const i=o.getSongName(e),r=o.getChartLevel(e),c=1===o.getChartType(e)?"DX":"STANDARD",s=function(e){const n=e.querySelector(".music_score_block.w_120");return n&&n.innerText}(e);if(!s)return;t.scoreList.push([i,t.genre,n,r,c,s].join("\t"))}}(n,e,a))),c}))}},472:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=n.normalizeSongName=n.RATING_TARGET_SONG_NAME_PREFIX=n.DX_SONG_NAME_SUFFIX=void 0;const o=t(6420);n.DX_SONG_NAME_SUFFIX=" [DX]",n.RATING_TARGET_SONG_NAME_PREFIX="▶ ",n.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,t,i){return"Link"===e&&(e=t.includes("niconico")?"Link(nico)":"Link(org)"),1===i?e+n.DX_SONG_NAME_SUFFIX:e};let r={};n.isNicoNicoLink=function(e){return i(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const n=(yield o.fetchPage("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?r.nico=e:r.original=e,n}))}},6420:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchNewSongs=n.fetchAllSongs=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0;const o=t(2347),r=t(6510),c=t(472);function s(e){return i(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}function a(e){return i(this,void 0,void 0,(function*(){const n=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),t=[];for(const e of n){const n=c.getSongIdx(e),i=o.getSongName(e),r=o.getChartType(e);let s;"Link"===i&&(s=(yield c.isNicoNicoLink(n))?"Link(nico)":"Link(org)"),t.push({dx:r,name:i,nickname:s})}return t}))}n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],n.handleError=function(e){alert(e)},n.fetchPage=s,n.fetchGameVersion=function e(n){return i(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?parseInt(t.value):e(n=yield s("/maimai-mobile/record/musicVersion/"))}))},n.fetchAllSongs=function(e){return i(this,void 0,void 0,(function*(){if(!e){const n=r.SELF_SCORE_URLS.get("MASTER");e=yield s(n)}return yield a(e)}))},n.fetchNewSongs=function(e){return i(this,void 0,void 0,(function*(){const n=yield s(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield a(n)}))},n.getPostMessageFunc=function(e,n){return(t,i)=>{const o={action:t,payload:i};e.postMessage(o,n)}}},1290:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(2347),r=t(472);!function(){i(this,void 0,void 0,(function*(){console.log(yield function(){return i(this,void 0,void 0,(function*(){const e=Array.from(document.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const t of e){const e=r.getSongIdx(t);let i=o.getSongName(t);const c=o.getChartDifficulty(t);let s=o.getChartLevel(t);const a=o.getChartType(t);"Link"===i?i=(yield r.isNicoNicoLink(e))?"Link(nico)":"Link(org)":"+♂"!==i&&"39"!==i||(i="'"+i),1===a&&(i+=" [dx]"),s.includes("+")||(s="'"+s),n.push([i,c,s].join("\t"))}return n}))}())}))}()}},n={};!function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}(1290)})();