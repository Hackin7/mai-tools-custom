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
so here's a quick command for reference

Update the branch depending on the time

```
git diff --ignore-space-at-eol head~1 head~3
```
