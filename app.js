const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit() :- incase you want to exit the process and close the event loop
})

server.listen(3000);