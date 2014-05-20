// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the
// URLs and print it to the console (stdout). You don't need to print out
// the length, just the data as a String; one line per URL. The catch is
// that you must print them out in the same order as the URLs are provided
// to you as command-line arguments.

// Pseudocode
// Store the urls in order in an object
// Make a get request for each one of the urls
// When the request ends check if the others have also ended
// Output the contents

var http = require( 'http' ),
    completed = 0,
    numberOfUrls = process.argv.length - 2,
    urls = process.argv.splice( 2, numberOfUrls ),
    urlsContent = ['','','',''];

function getResponse( urls, position ){
  
  http
    .get( urls[position], function( response ){
    
      response.setEncoding('utf8');

      response
        .on( 'data', function( chunk ){
          urlsContent[position] += chunk;
        })

        .on( 'end', function(){
          completed += 1;
          if( completed == numberOfUrls ) {
            for( var i = 0; i <= numberOfUrls; i+= 1 ){
              console.log( urlsContent[i] );
            }
          }
        });
    })

    .on( 'error', function( err ){
      console.error( err );
      response.end( 'Server error' );
  });
}

for( var i =0 ; i < numberOfUrls ; i += 1 ){
    getResponse( urls, i);
}
