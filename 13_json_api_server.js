var http = require( 'http' );
var url = require( 'url' );
var port = process.argv[2];

var server = http.createServer( function( req, res ){
  var requestUrl = url.parse( req.url, true );
  var isoTime = requestUrl.query.iso;
  console.log( requestUrl );

  switch ( requestUrl.pathname ){
    case "/api/parsetime":
      console.log( 'API format' );
      break;
    case "/api/unixtime":
      console.log( 'Unix time' );
      break;
    default:
      console.log( "Invalid API call" );
  }
  res.end();
  
});

console.log( 'Magic happens at ' + port );
server.listen( process.argv[2] );