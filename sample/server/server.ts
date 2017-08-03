import * as http from "http";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";

const hostname = "localhost";
const port = 8080;

const server = http.createServer((request, response) => {
  let pathName = url.parse(request.url).pathname;
  //let query = url.parse(request.url).query;
  //console.log(`pathName: ${pathName}`);
  //console.log(`query: ${query}`);
  let filePath = path.join(__dirname, pathName);
  fs.access(filePath, fs.constants.R_OK, function (err) {
    if (!err) {
      fs.readFile(filePath, function (error, content) {
        if (error) {
          response.writeHead(500);
          response.end(JSON.stringify(error));
        }
        else {
          response.writeHead(200);
          response.end(content, "utf-8");
        }
      });
    }
    else {
      response.writeHead(404);
      response.end(JSON.stringify(err));
    }
  });
});
server.listen(port, hostname, () => {
  console.log(`1. For authenticatiion, please open "http://${hostname}:${port}/login.html" \n\tor whatever ` +
    `is the redirect/reply url for the Active Directory web application.`);
  console.log(`2. After successful authentication, please open "http://${hostname}:${port}/index.html" \n\t` +
    `or any other page that invokes your javascript code where the authenticated client needs to talk to Azure.`);
  console.log(`\n\n3. Server is running at "http://${hostname}:${port}/" ...`);
});
