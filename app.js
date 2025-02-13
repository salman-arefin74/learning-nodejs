const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit() :- incase you want to exit the process and close the event loop

    // sending response:
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My server </title></head>');
    res.write('<body>Hello from my NodeJS server!</body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);