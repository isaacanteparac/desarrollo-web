const express = require("express");
const morgan = require("morgan");

const router = express.Router();
const app = express();

var data = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(morgan("dev"));

router.get("/get-data", function (req, res) {
  res.send(data);
});

router.post("/post", function (req, res) {
  const { name, lastname, email } = req.body;
  const miniData = {
    name,
    lastname,
    email,
  };
  data.push(miniData);
  res.redirect("/");
});

app.use("/", express.static("public"));

let puerto = 6660;

app.listen(puerto);
console.log(`La aplicacion esta escuchando en http://localhost:${puerto}`);
