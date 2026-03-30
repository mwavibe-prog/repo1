const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const indexHTML = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  res.end(indexHTML);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Server listening on 0.0.0.0:" + PORT);
});
