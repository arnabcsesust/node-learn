//load server module from modules/server.js
var server = require('./modules/server');

//load router module from modules/router.js
var router = require('./modules/router');

//load requestHandlers module from modules/requestHandlers.js
var requestHandlers = require('./modules/requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

//call the start method of server module 
//and pass the route method of router module as a dependency
//and pass the handle object as dependency
server.start(router.route, handle);