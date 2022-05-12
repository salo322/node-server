const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", function (req, res) {
   res.render("index", {});
});

app.listen(port, () => {
   console.log(`Rock album server is running on port ${port}.`);
});
