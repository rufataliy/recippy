const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(express.static(`${__dirname}/build`));
app.get("/*", (req, res) => {
  res.sendFile(`index.html`, { root: __dirname + "/build" });
});

server.listen(3003, () => {
  console.log("Server running 3003");
});
