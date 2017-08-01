const http = require("http");
const fs = require("fs");
const url = require("url");
const hostname = "localhost";
const port = 8080;
const server = http.createServer((request, response) => {
    let pathName = url.parse(request.url).pathname;
    let query  = url.parse(request.url).query;
    let filePath = "." + pathName;
    fs.access(filePath, fs.constants.R_OK, function (err) {
        if (!err) {
            fs.readFile(filePath, function (error, content) {
                if (error) {
                    response.writeHead(500);
                    response.write(JSON.stringify(error));
                    response.end();
                }
                else {
                    response.writeHead(200);
                    response.end(content, "utf-8");
                }
            });
        }
        else {
            response.writeHead(404);
            response.write(JSON.stringify(err));
            response.end();
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});