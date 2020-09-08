const { themes, languages } = require("../config");

module.exports = (version) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="og:title" content="Snippets 💗">
  <meta name="og:image" content="http://snip.panen.ga/logo.png">
  <title>Snippets 💗</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #232327;
    }
    .App {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    input[type=submit] {
      padding: 8px;
      background-color: #1178fd;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
    input[type=submit]:hover {
      background-color: #348dff;
    }
    textarea {
      width: 90vw;
      height: 80vh;
      max-width: 90vw;
      max-height: 80vh;
      color: white;
      background-color: #232327;
      border: 1px solid #444;
      padding: 12px;
      min-width: 200px;
      min-height: 200px;
    }
    .editor {
      display: flex;
      flex-direction: column;
    }
    .toolbar {
      font-family: Arial;
      font-size: 12px;
      color: #78f765;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;
    }
    .toolbar label {
      margin-right: 6px;
    }
    .toolbar select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #78f765;
      background-color: #232327;
      padding: 2px;
      border: none;
      margin-right: 16px;
      border: 1px solid #78f765;
    }
    .toolbar select:after {
      content: '<>';
      color: #333;
    }
  </style>
</head>
<body>
  <div class="App">
    <form method="POST" action="/save">
      <div class="content">
        <div class="toolbar">
          <label for="theme">Theme:</label>
          <select name="theme" id="theme">
            ${themes
              .map((theme) => `<option ${theme === "monokai-sublime" && `selected`} value="${theme}">${theme}</option>`)
              .join("")}
          </select>
          <label for="syntax">Syntax:</label>
          <select name="syntax" id="syntax">
            <option selected value="auto">auto</option>
            ${languages.map((language) => `<option value="${language}">${language}</option>`).join("")}
          </select>
        </div>
        <div class="editor">
          <textarea placeholder="Paste code here..." name="source"></textarea>
          <input type="submit" value="Save" />
        </div>
      </div>
    </form>
  </div>
</body>
</html>
`;
