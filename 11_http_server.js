var http = require( 'http' ),
    fs = require( 'fs' ),
    port = process.argv[2];

server = http.createServer( function( req, res ){
  fs.createReadStream( process.argv[3] ).pipe( res );
});

server.listen( port );