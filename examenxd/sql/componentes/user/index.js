const { Router } = require("express");
const router = Router();
const { render, success, redirect } = require("../../lib/response");
const { getAll, postData } = require("../../lib/query");

router.route("/").get((req, res) => {
  render(req, res, "user");
});

router.route("/get").get(async (req, res) => {
  const result = await getAll("users");
  success(req, res, result);
});

router.route("/post").post(async (req, res) => {
  const { name, lastname, email } = req.body;
  if ([name, lastname, email] != "") {
    console.log(name, lastname, email);
    postData("users", { name, lastname, email });
    redirect(req, res, "/");
  }
});

module.exports = router;
