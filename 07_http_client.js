// Write a program that performs an HTTP GET request to a URL 
// provided to you as the first command-line argument. 
// Write the String contents of each "data" event from the 
// response to a new line on the console (stdout).
var http = require( 'http' ),
    url = process.argv[2];

http.get( url, function( response ){

  response
    .on( 'data', function( chunk ){
      console.log( chunk.toString() );
    });

}).on( 'error', function( error ){
  return console.error( 'There was an error: ', error );
});
