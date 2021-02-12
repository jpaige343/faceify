const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("index", { title: "Home Page", user: req.user ? req.user : null });
});
router.get("/about", function (req, res) {
  res.render("about", { title: "About Page", user: req.user ? req.user : null });
});

module.exports = router;
