// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the
// URLs and print it to the console (stdout). You don't need to print out
// the length, just the data as a String; one line per URL. The catch is
// that you must print them out in the same order as the URLs are provided
// to you as command-line arguments.

var http = require( 'http' ),
    completed = 0,
    numberOfUrls = process.argv.length - 2,
    urls = process.argv.splice( 2, numberOfUrls ),
    urlsContent = [];

for( var i =0 ; i < numberOfUrls ; i += 1 ){
  http
    .get( urls[i], function( response ){
    
      response.setEncoding('utf8');

      response
        .on( 'data', function( chunk ){
          urlsContent[i] += chunk;
        })

        .on( 'end', function(){
          completed += 1;
          if( completed == numberOfUrls ) {
            console.log( urlsContent );
          }
        });
    })

    .on( 'error', function( err ){
      console.error( err );
      response.end( 'Server error' );
  });
}

// function getResponse( url, callback ){

//   http.get( url, function( response ){
//     response.on( 'end', function(){
//       completed += 1;
//       console.log( 'completed: ' + completed);
//     });
//   })

//   .on( 'error', function( err ){
//     console.error( err );
//     response.end( 'Server error' );
//   });

// }

// console.log( urls[0] );
// getResponse( 'http://www.josemenor.com' );



// Pseudocode
// Store the urls in order in an object
// Make a get request for each one of the urls
// When the request ends check if the others have also ended
// Output the contents
