var Hapi = require('hapi');
var Path = require('path');
var Quilts = require('./data-store/quilts.json');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 9000 });

server.route({
    method: 'GET',
    path: '/quilts/{name*}',
    handler: function (request, reply) {
        debugger;
        reply.view('index', Quilts[request.params.name]);
    }
});

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

server.views({
    engines: {
        hbs: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
