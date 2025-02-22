const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Create User</title></head>');
        res.write('<body><form action="create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title> Users </title></head>');
        res.write('<body><p>Users of the service: </p><br><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(`New user created: ${username}`);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    }
    res.write('<html>');
    res.write('<head><title> My server </title></head>');
    res.write('<body>Hello from my NodeJS server!</body>');
    res.write('</html>');
    res.end();
});

server.listen(9001);
