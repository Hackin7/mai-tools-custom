!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=25)}([function(e,t){e.exports=React},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LANG=void 0;const n=new URLSearchParams(document.location.search);let l="en";n.get("hl")?l=n.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(l="zh"),t.LANG=l},,,,,,function(e,t){e.exports=ReactDOM},,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PAGE_TITLE=void 0;const n=a(1);t.PAGE_TITLE={en:"maimai Bookmarklets",zh:"maimai 書籤小工具"}[n.LANG]},,,,,,,,function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(0)),r=n(a(7)),o=a(1),i=a(17),c=a(26);document.children[0].lang="zh"===o.LANG?"zh-Hant":"en-US",document.title=i.PAGE_TITLE,r.default.render(l.default.createElement(c.RootComponent,null),document.getElementById("root"))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=void 0;const l=n(a(0)),r=a(1),o=a(27),i=a(28),c=a(17),s=a(29),u=a(30),m=a(31),d={zh:{intro1:"以下各標題的連結都是書籤小工具，必須在 maimai NET 上打開才有效果。如果沒使用過書籤小工具，請先閱讀 ",faq:"常見問題",intro2:"。"},en:{intro1:"The link for each section title is a bookmarklet. Bookmarklet works only when they are opened on maimai NET. If you never used bookmarklets before, read ",faq:"FAQ",intro2:" first."}}[r.LANG];t.RootComponent=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement("h2",null,c.PAGE_TITLE),l.default.createElement("p",null,d.intro1,l.default.createElement("a",{href:"#faq"},d.faq),d.intro2),l.default.createElement("div",{className:"bookmarkletList"},l.default.createElement(o.BookmarkItem,Object.assign({},i.recentPlaySummary)),l.default.createElement(o.BookmarkItem,Object.assign({},i.scoreConverter)),l.default.createElement(o.BookmarkItem,Object.assign({},i.scoreSorter)),l.default.createElement(o.BookmarkItem,Object.assign({},i.ratingAnalyzer)),l.default.createElement(o.BookmarkItem,Object.assign({},i.analyzeFriendRating)),l.default.createElement(o.BookmarkItem,Object.assign({},i.scoreDownloader)),l.default.createElement("br",null),l.default.createElement("div",null,l.default.createElement("h2",{id:"faq"},d.faq),l.default.createElement(m.PCManual,null),l.default.createElement(s.MobileCreateManual,null),l.default.createElement(u.MobileUseManual,null))),l.default.createElement("div",{className:"footer credit"},l.default.createElement("hr",null),"Made by"," ",l.default.createElement("a",{href:"https://github.com/myjian",target:"_blank"},"myjian"),"."))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BookmarkItem=void 0;const l=n(a(0));t.BookmarkItem=({itemTitle:e,feature:t,howTo:a,screenshotUrl:n,scriptUrl:r})=>l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"bookmarklet"},l.default.createElement("div",{className:"bookmarkletText"},l.default.createElement("h3",{className:"bookmarkletTitle"},l.default.createElement("a",{href:r},e)),l.default.createElement("ul",null,l.default.createElement("li",null,t),l.default.createElement("li",null,"string"==typeof a?a:a()))),l.default.createElement("div",{className:"bookmarkletImage"},l.default.createElement("a",{href:n},l.default.createElement("img",{className:"screenshot",alt:"screenshot",src:n})))))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.scoreDownloader=t.analyzeFriendRating=t.ratingAnalyzer=t.recentPlaySummary=t.scoreSorter=t.scoreConverter=void 0;const l=n(a(0)),r=a(1);function o(e,t=[],a){return`javascript:void (function(d){if (\n['maimaidx-eng.com','maimaidx.jp'].indexOf(d.location.host)>=0\n${t.reduce((e,t,n,l)=>(0===n?e+=" && (":n>0&&(e+=" || "),e+=a?"d.location.pathname==='"+t+"'":"d.location.pathname.indexOf('"+t+"')>=0",n===l.length-1&&(e+=")"),e),"")}\n){var s=d.createElement('script');\ns.src='${e}?t='+Math.floor(Date.now()/60000);\nd.body.append(s);\n}})(document)`}t.scoreConverter={itemTitle:{zh:"新舊版分數轉換 & 分析",en:"Convert DX score to old score system"}[r.LANG],feature:{zh:"功能：可轉換 DX 達成率為舊版計分方式，以及分析各指令扣分比例。",en:"Feature: Convert DX achievement to old achievement (maimai FiNALE & older), and analyze score penalty by note type."}[r.LANG],howTo:{zh:"使用方式：登入 maimai NET，點選最近遊玩的其中一筆紀錄後執行。執行後會開啟新分頁，顯示舊版成績以及相關數據。點擊地點（Cafe MiLK）可切換計分方式，點擊達成率可切換詳細顯示。",en:'Usage: Log in to maimai NET. Open a recent song record and execute the bookmarklet. New tab will open and display score in old achievement system. You can click on "Cafe MiLK" to switch to DX achievement, and click on the achievement % to see how much percentage was lost per note type.'}[r.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/score-converter.js",["/maimai-mobile/record/playlogDetail/"]),screenshotUrl:"./screenshots/convert-to-finale-score-20200718.jpg"},t.scoreSorter={itemTitle:{zh:"排序成績",en:"Sort scores"}[r.LANG],feature:{zh:"功能：可依照等級、Rank、AP/FC 狀態排序成績。",en:"Feature: Sort scores by level, rank, or AP/FC status."}[r.LANG],howTo:{zh:"使用方式：於分類查詢成績頁執行。執行完後畫面上會出現選單，可按自己喜歡的方式排序。",en:"Usage: Open historical scores (by genre, level, song title, version, etc.) and execute the bookmarklet."}[r.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/score-sort.js",["/maimai-mobile/record/music"]),screenshotUrl:"./screenshots/score-sort-20200630.png"},t.recentPlaySummary={itemTitle:{zh:"整理最近遊玩紀錄",en:"Recent play summary"}[r.LANG],feature:{zh:"功能：以表格方式整理最近的遊玩紀錄，並將遊戲時間修正為當地時間。",en:"Feature: Organize recent game records into a condensed table."}[r.LANG],howTo:{zh:"使用方式：於最近成績列表執行。執行後會在頁面中產生表格，可以選取日期和排序。",en:"Usage: Open the recent game records list and execute the bookmarklet."}[r.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/recent-play-downloader.js",["/maimai-mobile/record/"],!0),screenshotUrl:"./screenshots/recent-play-summary-20200704.png"},t.ratingAnalyzer={itemTitle:{zh:"分析 DX Rating",en:"Analyze DX Rating"}[r.LANG],feature:{zh:"功能：可分析自己的 DX Rating 組成。",en:"Feature: Analyze your DX Rating composition."}[r.LANG],howTo:{zh:"使用方式：於 maimai NET 首頁或個人檔案頁面執行。執行時會開新分頁，載入成績並進行分析。",en:"Usage: Execute the bookmarklet on maimai NET home page or player data page."}[r.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/analyze-rating-in-newtab.js"),screenshotUrl:"./screenshots/rating-analyzer-20200702.png"},t.analyzeFriendRating={itemTitle:{zh:"分析好友 DX Rating",en:"Analyze Friend's DX Rating"}[r.LANG],feature:{zh:"功能：可分析朋友的 DX Rating 組成。",en:"Feature: Analyze your favorite friend's DX Rating composition."}[r.LANG],howTo:{zh:"使用方式：於朋友清單頁面，先將想分析的好友加入最愛（ADD to FAVORITE），再執行書籤。設成最愛的好友檔案中會出現「分析 Rating」的連結，點擊後會分析該玩家的 R 值。",en:'Usage: Open friend list. Add the friend you want to analyze to FAVORITE. Execute the bookmarklet. There will have an "Analyze Rating" link for each favorite friend. Click on one of the links to analyze rating for that player.'}[r.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/analyze-friend-rating-in-new-tab.js",["/maimai-mobile/friend/","/maimai-mobile/friend/favoriteOn/","/maimai-mobile/friend/pages/"],!0),screenshotUrl:"./screenshots/analyze-friend-rating-20200725.png"};const i={en:{part1:'Usage: Execute the bookmarklet on maimai NET home page. After several seconds, a "Copy" button will appear on screen. Click the Copy button to copy scores. You can paste them in Excel, Google Sheets, or ',ratingAnalyzer:"Rating Analyzer",part2:"."},zh:{part1:"使用方式：於 maimai NET 首頁執行。執行完後點下畫面上的「複製」按鈕就能複製所有成績。複製後可貼到 Excel、Google 試算表，或是 ",ratingAnalyzer:"R 值分析工具",part2:"。"}}[r.LANG];t.scoreDownloader={itemTitle:{zh:"下載所有歌曲成績",en:"Download all scores"}[r.LANG],feature:{zh:"功能：下載所有白譜、紫譜、紅譜、黃譜的成績。可用於個人紀錄或是 R 值分析。",en:"Feature: Download all ADVANCED, EXPERT, MASTER, and Re:MASTER scores."}[r.LANG],howTo:()=>l.default.createElement(l.default.Fragment,null,i.part1,l.default.createElement("a",{href:"/mai-tools/rating-calculator/",target:"_blank"},i.ratingAnalyzer),i.part2),scriptUrl:o("https://myjian.github.io/mai-tools/scripts/score-download.js"),screenshotUrl:"./screenshots/score-download-20200630.png"}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MobileCreateManual=void 0;const l=n(a(0)),r={zh:{title:"在手機上怎麼新增書籤？",desc:"最簡單的方式，是先在電腦上新增書籤，再同步到手機上。如果不方便用電腦，請依照你使用的瀏覽器參考以下步驟。",chrome1:"長按並複製連結網址",chrome2:"打開瀏覽器右上角的選單，按星星把此頁加入書籤",chrome3:"畫面下方會顯示「已加入書籤」，點右邊「編輯」",chrome4:"把網址完全刪除，並貼上剛才複製的連結",fx1:"長按連結",fx2:"選取「將鏈結加入書籤」"},en:{title:"How to create bookmarklet on phone?",desc:"Easiest way is to create the bookmarklet on PC and sync it to the phone. If it does not work, try the following steps for your browser.",chrome1:"Long press and copy the bookmarklet link",chrome2:"Tap the browser menu and tap the star to add current page to bookmarks.",chrome3:'Screen bottom will show "Bookmarked". Tap the "Edit" link next to it.',chrome4:"Replace the URL with what you copied earlier.",fx1:"Long press the bookmarklet.",fx2:'Select "Bookmark Link"'}}[a(1).LANG];t.MobileCreateManual=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",null,"● ",r.title),l.default.createElement("div",null,l.default.createElement("p",null,r.desc),l.default.createElement("p",null,"Chrome:"),l.default.createElement("ol",null,l.default.createElement("li",null,r.chrome1),l.default.createElement("li",null,r.chrome2),l.default.createElement("li",null,r.chrome3),l.default.createElement("li",null,r.chrome4)),l.default.createElement("p",null,"Firefox:"),l.default.createElement("ol",null,l.default.createElement("li",null,r.fx1),l.default.createElement("li",null,r.fx2))))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MobileUseManual=void 0;const l=n(a(0)),r={zh:{title:"在手機上怎麼使用書籤？",step1:"登入 maimai NET 並進入指定的頁面後",step2:"點網址欄",chrome3:"把原本的網址刪除，再輸入書籤名稱的開頭前幾個字",chrome4:"找到剛才新增的書籤（網址開頭應該要是 javascript），點下去",fx3:"選「行動書籤」",fx4:"找到剛才新增的書籤，點下去。"},en:{title:"How to execute bookmarklet on phone?",step1:"Log in to maimai NET and open the specific page for the bookmarklet.",step2:"Tap the URL field.",chrome3:"Input the first few characters of the bookmarklet name.",chrome4:'Find and tap the bookmarklet you created earlier. The URL of the bookmarklet should start with "javascript".',fx3:'Tap "BOOKMARKS".',fx4:"Find the bookmarklet you created earlier and tap it."}}[a(1).LANG];t.MobileUseManual=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",null,"● ",r.title),l.default.createElement("div",null,l.default.createElement("p",null,"Chrome:"),l.default.createElement("ol",null,l.default.createElement("li",null,r.step1),l.default.createElement("li",null,r.step2),l.default.createElement("li",null,r.chrome3),l.default.createElement("li",null,r.chrome4)),l.default.createElement("p",null,"Firefox:"),l.default.createElement("ol",null,l.default.createElement("li",null,r.step1),l.default.createElement("li",null,r.step2),l.default.createElement("li",null,r.fx3),l.default.createElement("li",null,r.fx4))))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PCManual=void 0;const l=n(a(0)),r={zh:{title:"在電腦上怎麼新增和使用書籤？",create:"直接把連結拖曳到書籤列就能新增書籤。",use:"使用時，先登入 maimai NET 並進入指定的頁面後，再點擊書籤。"},en:{title:"How to create and execute bookmarklets on PC?",create:"Show bookmarks bar (or favorites bar) in browser. Drag the link into the bookmarks bar to save the bookmarklet. ",use:"To use the bookmarklet, log in to maimai DX NET and open the specific page for the bookmarklet, and then click the bookmarklet in bookmarks bar."}}[a(1).LANG];t.PCManual=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",null,"● ",r.title),l.default.createElement("div",null,l.default.createElement("p",null,r.create),l.default.createElement("p",null,r.use)))}]);