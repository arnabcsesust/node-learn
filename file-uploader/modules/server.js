//load the http module of node.js library
var http = require('http');

//load the url module of node.js library
var url = require('url');

//start method that will be accessed via server module 
//and depend on the route method of router modules
var start = function(route, handle){
	//create the http server that listen on port 8888
	http.createServer(function(request, response){

		//getting the path where the request comes from
		var pathname = url.parse(request.url).pathname;

		//call the route method that is pass as depency injection
		//and returned content stored in the content variable
		var content = route(handle, pathname);

		//prepare the response of the request
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(content);
		response.end();
	}).listen(8888);

	console.log("Server is Started");
}

//start methods push into the server module
exports.start = start;
