var http = require( 'http' );
var url = require( 'url' );

var server = http.createServer( function( req, res ){
  var requestUrl = url.parse( req.url, true );
  var isoTime = requestUrl.query.iso;

  if ( requestUrl.pathname === '//api/parsetime' ){
    console.log( 'API format' );
  }
  else if ( requestUrl.pathName === '//api/unixtime' ){
    console.log( 'Unix' );
  }
  else {
    console.log( 'Invalid API call');
  }
  res.end();
});


server.listen( process.argv[2] );