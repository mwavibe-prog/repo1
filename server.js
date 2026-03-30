const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const filePath =
    req.url === "/" || req.url === "/index.html"
      ? path.join(__dirname, "index.html")
      : req.url === "/teto_game.html"
        ? path.join(__dirname, "teto_game.html")
        : null;

  if (!filePath || !fs.existsSync(filePath)) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(content);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Teto game running on port ${PORT}`);
});
