const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const Datastore = require("nedb-promises");
const shortid = require("shortid");
const homeView = require("./views/home");
const snipView = require("./views/snip");

const datastore = Datastore.create(path.resolve(__dirname, "../data/data.db"));
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send(homeView);
});

app.get("/:sid", async (req, res, next) => {
  const { sid } = req.params;
  if (!sid) return next();
  const snip = await datastore.findOne({ sid });
  if (snip) {
    return res.send(snipView(snip.source, sid));
  }
  return next();
});

app.post("/save", async (req, res) => {
  const { language, source } = req.body;
  const sid = shortid.generate();

  await datastore.insert({
    sid,
    language,
    source,
  });

  res.redirect(`/${sid}`);
});

app.listen(PORT, () =>
  console.log(`Now listening for connections on port ${PORT}`)
);
