let express = require("express");
let router = express.Router();
let controllerCat = require("../controller/controllerCat.js");

router.get("/", async function (req, res) {
  console.log('test');
  let result = await controllerCat.getCat();
  res.send(result);
});

router.post("/", function (req, res) {
  let cat = req.body;
  controllerCat.postCat(cat.title, cat.path, cat.link, cat.description);
});

module.exports = router;