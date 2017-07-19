var http = require("http");
var fs = require("fs");
var hostname = "127.0.0.1";
var port = 44326;
var server = http.createServer(function (request, response) {
    var filePath = "." + request.url;
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
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
