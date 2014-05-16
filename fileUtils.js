var fs = require( 'fs' );

var fileUtils = {

  filterFiles:  function( folder, extension, callback ) {
                  // It has to be a better way to exclude the dot from the
                  // match object, so we don't have to add it inside the
                  // filter function.
                  var checkExtension = /\..+$/;

                  fs.readdir( folder, function( err, list ){

                    var matchingFiles = list.filter(function( file ){
                      return checkExtension.exec( file ) == '.' + extension ;
                    });

                    // We send null to indicate that there's no errors  
                    return callback( null, matchingFiles.join('\n') );
                  });
  }
};

module.exports = fileUtils;