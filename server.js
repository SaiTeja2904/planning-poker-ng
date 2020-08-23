const express = require("express");
const app = express();

app.use(express.static("./dist/planning-poker-ng"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/planning-poker-ng" });
});

app.listen(process.env.PORT || 4200);
