const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = '3001';

const server = http.createServer((req, res) => { // createserver creates a new HTTP server and returns it
    // req => http.IncomingMessage object
    // res => http.ServerResponse object
    res.statusCode = 200; // 200 http statusCode stating the response is successful, 404 -> Poge not Found
    res.setHeader('Content-Type', 'text/plain'); // setting the Content Type
    res.end('Hello World!!!!!!\n'); // closing the response, we are adding 'Hello World!!!!!!\n' as a content to the argument
});

server.listen(port, hostname, () => {
    console.log(`Local Server running on http://${hostname}:${port}/`);
});