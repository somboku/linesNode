/*const http = require('http');
const url  = require('url');
const path = require('path');
const fs   = rquire('fs');

const mimeTypes {
	"html": "text/html",
	"jpeg": "image/jpeg",
	"png": 	"image/png",
	"js":	"text/javascript",
	"css": 	"text/css"
};
 from another site
*/


/* start here    */
const http = require("http");
const host = 'localhost';
const port = 3000;



const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!\n");
};



const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});







