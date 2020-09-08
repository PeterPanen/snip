const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const Datastore = require("nedb-promises");
const shortid = require("shortid");
const pjson = require("../package.json");
const homeView = require("./views/home");
const snipView = require("./views/snip");

const datastore = Datastore.create(path.resolve(__dirname, "../data/data.db"));
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(homeView(pjson.version));
});

app.get("/:sid", async (req, res, next) => {
  const { sid } = req.params;
  if (!sid) return next();
  const snip = await datastore.findOne({ sid });
  if (snip) {
    return res.send(snipView(snip.source, sid, pjson.version, snip.theme, snip.syntax));
  }
  return next();
});

app.post("/save", async (req, res) => {
  const { source, syntax, theme } = req.body;
  const sid = shortid.generate();
  console.log(sid);

  await datastore.insert({
    sid,
    source,
    syntax,
    theme,
  });

  res.redirect(`/${sid}`);
});

app.listen(PORT, () => console.log(`Now listening for connections on port ${PORT}`));
