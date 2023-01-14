const express = require('express')
const bodyParser = require('body-parser')
const morgan = require("morgan");
const bd = require('./bd')
const config = require('./configuracion')
const rutas = require('./network/rutas')

bd( config.DB_URL )

var app = express()
const numberPort = 7770;
app.set("port", process.env.PORT || numberPort);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
rutas(app);

app.use("/", express.static("public"));


async function main() {
    console.clear();
    console.log("\n")
    console.log("      ▄▀▄     ▄▀▄")
    console.log("     ▄█  ▀▀▀▀▀  █▄")
    console.log(" ▄▄  █           █  ▄▄")
    console.log("█▄▄█ █  ▀  ┬  ▀  █ █▄▄█")
    console.log(` http://localhost:${numberPort}\n`);

    await app.listen(app.get("port"));
  }
  
  main();