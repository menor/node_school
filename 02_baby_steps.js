var cleanArray = process.argv.slice( 2 );

var sum = cleanArray.reduce( function( a, b ){
  return parseInt( a ) + parseInt( b );
});

console.log( sum );