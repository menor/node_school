// Write a TCP time server!

//Your server should listen to TCP connections on the port provided
// by the first argument to your program. For each connection you
// must write the current date & time in the format:

//    "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must
// be zero-filled to 2 integers. For example:

//    "2013-07-06 07:42"

var net = require( 'net' ),
    socket = process.argv[2],
    date = new Date();

var server = net.createServer( function( socket ){
  socket.end( getTime() + '\n' );
});

function getTime() {
  var actual_time = '';
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours()
  var minutes = date.getMinutes();
  actual_time += date.getFullYear() + '-';
  actual_time +=  month < 10 ? '0'+ month : month;
  actual_time += '-';
  actual_time +=  day < 10 ? '0'+ day : day;
  actual_time += ' ';
  actual_time += hour < 10 ? '0'+ hour : hour;
  actual_time += ':';
  actual_time += minutes < 10 ? '0'+ minutes : minutes;
  return actual_time;
}

server.listen( socket );