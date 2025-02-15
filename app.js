const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req);
    // process.exit() :- incase you want to exit the process and close the event loop
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title> Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();    
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(body);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end(); 
        });
    }
    // sending response:
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My server </title></head>');
    res.write('<body>Hello from my NodeJS server!</body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);