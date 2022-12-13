const express = require("express");
const app = express();
const port = 4000;

app.get("/healthcheck", (req, res) => {
  res.send({ status: "ok" });
});

app.listen(port, () => {
  console.log(`[API] running on http://localhost:${port}`);
});
