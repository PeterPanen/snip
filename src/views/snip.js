const htmlEscapes = {
  "&": "&amp",
  "<": "&lt",
  ">": "&gt",
  '"': "&quot",
  "'": "&#39",
};

const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

function escape(string) {
  return string && reHasUnescapedHtml.test(string)
    ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
    : string;
}

module.exports = (source, sid, version, theme, syntax) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="og:title" content="Codesnippet ${escape(sid)}">
  <meta name="og:image" content="http://snip.panen.ga/logo.png">
  <title>Snippets 💗</title>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.2.0/styles/${theme}.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.2.0/highlight.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js"></script>
  <script>hljs.initHighlightingOnLoad(); hljs.initLineNumbersOnLoad();</script>
  <style>
    * {
      box-sizing: border-box;
    }
    html, body, pre {
      height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      background-color: #23241f;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    code {
      color: white;
      margin: 0;
      padding: 0 !important;
      display: inline-block !important;
    }
    pre {
      margin: 0;
      padding: 12px;
      overflow: auto;
    }
    .hljs-ln-numbers {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  
      text-align: center;
      color: #5e5e5e;
      border-right: 1px solid #5e5e5e;
      vertical-align: top;
      padding-right: 5px !important;
  
      /* your custom style here */
    }
    .hljs-ln-code {
      padding-left: 5px !important;
    }
    .toolbar {
      font-family: Arial;
      font-size: 11px;
      color: #ddd;
      background-color: #202020;
      padding: 2px;
      border-bottom: 1px solid #171717;
   
    }
    .green {
      color: #70ff70;
    }
    .orange {
      color: #ff9f4a;
    }
    .toolbar .item {
      border-left: 1px solid #333;
      padding-left: 16px;
      padding-right: 16px;
    }
    .toolbar .item:first-child {
      padding-left: 4px;
      border-left: 0;
    }
    .toolbar .item:last-child {
      padding-right: 0;
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <span class="item">Version: <span class="orange">${version}</span></span>
    <span class="item">Syntax: <span id="languageText" class="green"></span></span>
    <span class="item">Theme: <span id="themeText" class="green">${theme}</span></span>
  </div>
  <pre><code ${syntax === "auto" ? "" : `class="${syntax}"`}>${escape(source)}</code></pre>
  <script type="text/javascript">
    window.onload = e => {
      const classes = document.getElementsByClassName("hljs")[0].classList;
      const filteredClasses = Array.prototype.filter.call(classes, c => c !== "hljs")[0];
      document.getElementById("languageText").textContent = filteredClasses;
      document.body.style.backgroundColor = getComputedStyle(document.getElementsByTagName("code")[0]).backgroundColor;
    }
  </script>
</body>
</html>
`;
