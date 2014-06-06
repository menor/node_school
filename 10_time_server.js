// Write a TCP time server!

//Your server should listen to TCP connections on the port provided
// by the first argument to your program. For each connection you
// must write the current date & time in the format:

//    "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must
// be zero-filled to 2 integers. For example:

//    "2013-07-06 07:42"

var net = require( 'net' ),
    port = process.argv[2],
    date = new Date();

function zeroPad( i ){
  return ( i < 10 ? '0'+ i : i );
}

function getCurrentTime() {
  return date.getFullYear() + '-'
    + zeroPad( date.getMonth() + 1 ) + '-'
    + zeroPad( date.getDate() ) + ' '
    + zeroPad( date.getHours() ) + ':'
    + zeroPad( date.getMinutes() ); 
}

var server = net.createServer( function( socket ){
  socket.end( getCurrentTime() + '\n' );
});

server.listen( port );