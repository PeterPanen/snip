module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snip</title>
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
      color: white;
      background-color: #232327;
      border: 1px solid #444;
      padding: 12px;
    }
  </style>
</head>
<body>
  <div class="App">
    <form method="POST" action="/save">
      <select name="language">
        <option value="javascript">JavaScript</option>
      </select>
      <div class="content">
        <textarea name="source">Hello</textarea>
        <input type="submit" value="Save" />
      </div>
    </form>
  </div>
</body>
</html>
`;
