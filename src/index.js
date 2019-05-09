import "./styles.css";

let bodybuilder = require("bodybuilder");
let build = bodybuilder()
  .query("match", "name", "Tessa")
  // .query("gte", "age", 18)
  // .query("lte", "age", 38)
  .query("range", "age", {
    gte: 18,
    lte: 38
  })
  .build();

document.getElementById("app").innerHTML = JSON.stringify(build, null, 2);
