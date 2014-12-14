// the full path to file will be 1st command line argument

var fs = require ('fs');
fs.readFile(process.argv[2], doneReading)

function doneReading(err, data) {
  if (err) {
      return console.error(err);
    }
  var str=data.toString();
  var arr=str.split('\n');
  console.log(arr.length-1);
}

// official solution
// var fs = require('fs')
//     var file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })