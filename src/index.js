import "./styles.css";

let bodybuilder = require("bodybuilder");
let build = bodybuilder()
  .query("match", "name", "Tessa")
  .query("gte", "age", 18)
  .query("lte", "age", 38)
  .query("range", "price", {
    gte: 10,
    lte: 320
  })
  .build();

document.getElementById("app").innerHTML = JSON.stringify(build, null, 2);
