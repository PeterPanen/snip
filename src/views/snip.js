module.exports = (source) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snip</title>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/monokai-sublime.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
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
  </style>
</head>
<body>
  <pre><code>${source}</code></pre>
</body>
</html>
`;
