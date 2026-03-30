const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = parseInt(process.env.PORT, 10) || 3000;

let indexHTML;
try {
  indexHTML = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
  console.log("Loaded index.html (" + indexHTML.length + " bytes)");
} catch (e) {
  console.error("Failed to read index.html:", e.message);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(indexHTML);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Listening on 0.0.0.0:" + PORT);
});
