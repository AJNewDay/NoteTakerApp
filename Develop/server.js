const express = require("express");
const api = require("./routes/apiroutes.js");
const html = require("./routes/htmlroutes");
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use("/", html);

app.use(express.static("public"));

app.get("/api", (req, res) => res.json(pulls));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
