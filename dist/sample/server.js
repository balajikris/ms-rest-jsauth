const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 44326;
const server = http.createServer((request, response) => {
    let filePath = "." + request.url;
    if (filePath === "./")
        filePath = "./index.html";
    fs.access(filePath, fs.constants.R_OK, function (err) {
        if (!err) {
            fs.readFile(filePath, function (error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.end(content, "utf-8");
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map