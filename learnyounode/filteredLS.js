// process.argv[2] & 3 - which extension to filter by  

var fs = require('fs');
fs.readdir(process.argv[2], doneReading)
var extension = process.argv[3];

function doneReading (err, list) {
  if (err) {
    return console.error(err);
  }
  for (var i=0; i<list.length; i++) {
    var period = list[i].indexOf('.');
    if (period>0 && list[i].slice(period+1) === extension) {
      console.log(list[i]);
    }
  }
}

// official solution
// path!!! extname v useful
    // var fs = require('fs')
    // var path = require('path')

    // fs.readdir(process.argv[2], function (err, list) {
    //   list.forEach(function (file) {
    //     if (path.extname(file) === '.' + process.argv[3])
    //       console.log(file)
    //   })
    // })