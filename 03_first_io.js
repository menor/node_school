// Write a program that uses a single synchronous filesystem operation to 
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs');
var pathToFile = process.argv[2];

// Passing utf8 as an option returns a string instead of a buffer
var textFromFile = fs.readFileSync( pathToFile, 'utf8' );

// We need the number of new lines not of lines, so we do the -1
var numberOfLines = textFromFile.split( '\n' ).length - 1;
console.log( numberOfLines );