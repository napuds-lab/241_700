//import http module
const http = require('http');
const host = 'localhost';
const port = 8000;

//set up server
const requireListener = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World This is my first server');
});

const server = http.createServer(requireListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});