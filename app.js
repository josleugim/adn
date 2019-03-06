const Helpers = require('./server/utilities/Helpers');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const noMutation = ['A T G C G A', 'C A G T G C', 'T T A T T T', 'A G A C G G', 'G C G T C A', 'T C A C T G'];
const mutation = ['A T G C G A', 'C A G T G C', 'T T A T G T', 'A G A A G G', 'C C C C T A', 'T C A C T G'];
Helpers.hasMutation(mutation)
.then(result => console.log(result));