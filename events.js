var http = require('http');

var server = http.createServer(function() {
    res.writeHead(200);
    res.end('Hi everybody');
});

server.on('close', function() {
    console.log('Good Bye!');
});

server.listen(8080);

server.close();