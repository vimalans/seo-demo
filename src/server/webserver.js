const http = require("http");
const fs = require("fs");

const webServer = http.createServer((req, res) => {
  const stream = fs.createReadStream("../assets/content.json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  stream.pipe(res);
});
webServer.listen(8390);
