HNjsredraw
==========

Redraws the Hacker News page with a side panel for showing up discussions pages without leaving HN main page.


How to use
==========

Just copy and paste the following at the address bar:
```javascript
javascript: var tag_script=document.createElement("script");tag_script.src = "https://felipebn.github.io/hnjsredraw/hnjsredraw.src.js";document.getElementsByTagName('head')[0].appendChild( tag_script );
```

What it does
==========

The script first will set every headline link to a _blank page, add a sidepane (iframe tag), then it will enlarge the page to 95% off the available space.

After that all links pointing to a discussion page will be replaced with a JS function call which will load the discussion page at the sidepane.
