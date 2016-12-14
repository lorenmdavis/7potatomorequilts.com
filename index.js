var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 9000 });

server.route({
    path: "/{path*}",
    method: "GET",
    handler: {
        directory: {
            path: Path.join(__dirname, 'public'),
            listing: false
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
