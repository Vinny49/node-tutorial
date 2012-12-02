var http = require("http");
var url = require("url");

function start(route, handle) {
    var port = 8888; // vd
    function onRequest( request,response ) {
        var pathname = url.parse( request.url ).pathname; // use the url library to obtain the pathname (directory)
        var qs = url.parse( request.url ).query; // vd
        console.log(Date() + " Request for " + pathname + " received.  Querystring is " + qs); 	// basic logging
        route( handle, pathname, response, request );							// do something according to the pathname
    }
    
    http.createServer(onRequest).listen( port );				// listen on port
    
    console.log( "------------------------------------------------------------------" );
    console.log(Date() + " Server started successfully on :" + port + ".");
    console.log( "------------------------------------------------------------------" );

}

exports.start = start;



/* Random testing */
/*
function say_word(word) {
    console.log(word);
}

function do_thing(fn, arg) {
    fn(arg);
}

do_thing(say_word,"Hello!");
*/