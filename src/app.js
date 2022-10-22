const http = require('http');

http.createServer((req, res) => {
    const url = req.url
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/users') {
        res.end('Users page')
    }
    res.send('404')
}).listen(3000);

// createServer é uma função que vai ser exercuta pra qualquer requisição que chegar no servidor