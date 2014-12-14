var mod = require('./module.js');

mod(process.argv[2], process.argv[3], function (err, list) {
  if (err) {
    console.error(err);
  }
  list.forEach (function (file) {
    console.log(file);
  })
})