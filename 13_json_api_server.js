var http = require( 'http' );
var url = require( 'url' );
var port = process.argv[2];

var server = http.createServer( function( req, res ){
  var requestUrl = url.parse( req.url, true );
  var isoTime = new Date( requestUrl.query.iso );
  var myTime = {};
  
  res.writeHead(200, { 'Content-Type': 'application/json' });

  switch ( requestUrl.pathname ){

    case "/api/parsetime":
      myTime = JSON.stringify({
          hour: isoTime.getHours(),
          minute: isoTime.getMinutes(),
          second: isoTime.getSeconds()
      });
      break;
    
    case "/api/unixtime":
      myTime = JSON.stringify({
        unixtime: isoTime.getTime()
      });
      break;
    
    default:
      console.log( "Invalid API call" );
  }
  res.end( myTime );

});

console.log( 'Magic happens at ' + port );
server.listen( process.argv[2] );