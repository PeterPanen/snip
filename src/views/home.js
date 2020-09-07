module.exports = (version) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snip v${version}</title>
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
      background-color: #00ca86;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
    input[type=submit]:hover {
      background-color: #04f9a6;
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
  </style>
</head>
<body>
  <div class="App">
    <form method="POST" action="/save">
      <div class="content">
        <textarea placeholder="Paste code here..." name="source"></textarea>
        <input type="submit" value="Save" />
      </div>
    </form>
  </div>
</body>
</html>
`;
