var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 8080 });

server.route({
    path: "/{path*}",
    method: "GET",
    handler: {
        directory: {
            path: "./public",
            listing: false
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
