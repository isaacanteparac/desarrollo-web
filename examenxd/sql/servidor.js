const express = require("express");
const bodyParser = require("body-parser");
const rutas = require("./rutas");
const morgan = require("morgan");

var app = express();
const numberPort = 5550;
app.set("port", process.env.PORT || numberPort);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
rutas(app);

app.use("/", express.static("public"));

async function main() {
  console.clear();
  console.log("\n");
  console.log("      ▄▀▄     ▄▀▄");
  console.log("     ▄█  ▀▀▀▀▀  █▄");
  console.log(" ▄▄  █           █  ▄▄");
  console.log("█▄▄█ █  ▀  ┬  ▀  █ █▄▄█");
  console.log(` http://localhost:${numberPort}\n`);

  await app.listen(app.get("port"));
}

main();
