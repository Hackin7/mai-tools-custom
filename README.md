Tools for maimai
====

This repo compliments [maichart-app](https://github.com/Hackin7/maichart-app) but can be used by itself as a bookmarklet.
It essentially opens external pages in an iframe instead of in a new tab. This doesn't clutter your tabs and makes it more deployable

Use
----

Method 1. Follow https://myjian.github.io/mai-tools/#howto

For method 1, instead of the bookmarklet link they give you, use this link

```js
javascript:(function(d){if(["https://maimaidx.jp","https://maimaidx-eng.com"].indexOf(d.location.origin)>=0){var s=d.createElement("script");s.src="https://hackin7.github.io/mai-tools-custom/build/scripts/all-in-one.js?t="+Math.floor(Date.now()/60000);d.body.append(s);}})(document);
```

Running the bookmarklet is the same as the regular bookmarklet

Method 2. Install the userscript: https://github.com/myjian/mai-tools/blob/gh-pages/install-mai-tools.user.js . Your browser must support Tampermonkey or other userscript managers before you can install the userscript. Once the userscript is installed, mai-tools will be loaded automatically on every maimai-NET page.

Build
----

    npm install
    npm run build

Run
----

    npm install -g serve
    npm start

Develop
----

    npm run watch
    npm start

Code Search
----

Using SourceGraph
https://sourcegraph.com/search?q=context%3Aglobal+repo%3A%5Egithub%5C.com%2Fmyjian%2Fmai-tools%24+GameRegion&patternType=standard&sm=1&groupBy=path (replace GameRegion with whatever you want to find)


The edits made are a bit messy (due to eol issues)

But the key files modified are (to allow for iframe support)

1. `src/rating-calculator/components/RootComponent.tsx`
2. `src/plate-progress/RootComponent.tsx`
3. `src/scripts/analyze-friend-rating-in-new-tab.ts`
4. `src/scripts/analyze-rating-in-newtab.ts`



```cpp
private postMessageToOpener(data: {action: string; payload?: string | number}) {
    if (window.opener) {
      if (this.referrer) {
        window.opener.postMessage(data, this.referrer);
      } else {
        // Unfortunately, document.referrer is not set when mai-tools is run on localhost.
        // Send message to all maimai net origins and pray that one of them will respond.
        for (const origin of MAIMAI_NET_ORIGINS) {
          window.opener.postMessage(data, origin);
        }
      }
    }

    // NEW CODE /////////////////////////////////////////////////////
    if (window.parent) {  
      if (this.referrer) {
        window.parent.postMessage(data, this.referrer);
      } else {
        // Unfortunately, document.referrer is not set when mai-tools is run on localhost.
        // Send message to all maimai net origins and pray that one of them will respond.
        for (const origin of MAIMAI_NET_ORIGINS) {
          window.parent.postMessage(data, origin);
        }
      }
    }
    // NEW CODE /////////////////////////////////////////////////////
  }

private initWindowCommunication() {
    window.addEventListener('message', (evt) => {
    // if (!isMaimaiNetOrigin(evt.origin) && evt.origin !== window.origin) {
    //     return;
    // }
```

```cpp
export class RootComponent extends React.PureComponent<{}, State> {
  ...
    //if (window.opener) {
      this.initWindowCommunication();
    //}
```

```cpp
import {fetchAllSongs, getPostMessageFunc, handleError} from '../common/util';
import {IFRAME_ID, addIframe, addFocusIframeListener} from './iframe-view';

  function insertAnalyzeButton(friend: FriendInfo, container: HTMLElement) {
    
    ...

    const analyzeRatingLink = d.createElement('a');
    analyzeRatingLink.className = 'f_14';
    analyzeRatingLink.style.color = '#1477e6';
    analyzeRatingLink.target = IFRAME_ID; // NEW CODE
    analyzeRatingLink.innerText = UIString[LANG].analyze;
    analyzeRatingLink.href = BASE_URL + '/rating-calculator/?' + queryParams;
    addFocusIframeListener(analyzeRatingLink); // NEW CODE

    const analyzePlatesLink = document.createElement('a');
    analyzePlatesLink.className = 'f_14';
    analyzePlatesLink.style.color = '#1477e6';
    analyzePlatesLink.target = IFRAME_ID; // NEW CODE
    analyzePlatesLink.append(UIString[LANG].plateProgress);
    analyzePlatesLink.href = BASE_URL + '/plate-progress/?' + queryParams;
    addFocusIframeListener(analyzePlatesLink); // NEW CODE

    ...

  }


  function main() {
    if (!isMaimaiNetOrigin(document.location.origin)) {
      handleError(UIString[LANG].pleaseLogIn);
      return;
    }
    addIframe(); // NEW CODE
    
    ...

    window.ratingCalcMsgListener = async (
      evt: MessageEvent<{action: string; payload?: string | number}>
    ) => {
      console.log(evt.origin, evt.data);
      
    // NEW CODE ///////////////////////////////////////////////////////////
    if (true){ //ALLOWED_ORIGINS.includes(evt.origin)) {
        //const send = getPostMessageFunc(evt.source as WindowProxy, evt.origin);
        const send = getPostMessageFunc((document.getElementById('bookmarkletView') as HTMLIFrameElement).contentWindow as WindowProxy, evt.origin);
    // NEW CODE ///////////////////////////////////////////////////////////
        
```


```cpp
import {fetchAllSongs, getPostMessageFunc, handleError} from '../common/util';
import {IFRAME_ID, addIframe, addFocusIframeListener} from './iframe-view';

function insertAnalyzeButton(playerName: string) {
    ...
    const analyzeRatingLink = document.createElement('a');
    analyzeRatingLink.className = 'f_14';
    analyzeRatingLink.style.color = '#1477e6';
    analyzeRatingLink.target = IFRAME_ID; // NEW CODE
    analyzeRatingLink.append(UIString[LANG].analyze);
    analyzeRatingLink.href = BASE_URL + '/rating-calculator/?' + urlSearch;
    addFocusIframeListener(analyzeRatingLink); // NEW CODE

    const analyzePlatesLink = document.createElement('a');
    analyzePlatesLink.className = 'f_14';
    analyzePlatesLink.style.color = '#1477e6';
    analyzePlatesLink.target = IFRAME_ID; // NEW CODE
    analyzePlatesLink.append(UIString[LANG].plateProgress);
    analyzePlatesLink.href = BASE_URL + '/plate-progress/?' + urlSearch;
    addFocusIframeListener(analyzePlatesLink); // NEW CODE
    ...
  }

function main() {
    if (!isMaimaiNetOrigin(document.location.origin)) {
      handleError(UIString[LANG].pleaseLogIn);
      return;
    }
    addIframe(); // NEWCODE
    
    ...
    
    window.ratingCalcMsgListener = async (
      evt: MessageEvent<string | {action: string; payload?: string | number}>
    ) => {
      console.log(evt.origin, evt.data);
      // NEW CODE /////////////////////////////////////////////////////
      if (true) { //ALLOWED_ORIGINS.includes(evt.origin)) {
        //const send = getPostMessageFunc(evt.source as WindowProxy, evt.origin);
        const send = getPostMessageFunc((document.getElementById('bookmarkletView') as HTMLIFrameElement).contentWindow as WindowProxy, evt.origin);
      // NEW CODE /////////////////////////////////////////////////////
        //const send = getPostMessageFunc(evt.source as WindowProxy, evt.origin);
```

Also create a new file  `/scripts/iframe-view.ts`

```cpp
export const IFRAME_ID = 'bookmarkletView';
export function addIframe() {
    if (document.getElementById(IFRAME_ID)){
        return;
    }
    let iframe = document.createElement('iframe');
    iframe.name = IFRAME_ID; 
    iframe.id = IFRAME_ID;
    iframe.style['width'] = '100%';
    iframe.style['height'] = '70%';
    iframe.style['resize'] = 'vertical';
    iframe.style['display'] = 'none';
    document.body.innerHTML = iframe.outerHTML + document.body.innerHTML;
}

export function addFocusIframeListener(element: HTMLElement){
    element.addEventListener('click', () => {
        const iframe = document.getElementById(IFRAME_ID);
        iframe.style['display'] = 'block';
        window.location.href = "#" + IFRAME_ID;
    });
}
```