// Run in terminal => node read.js

var fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err, data){
  console.log(data);
});

console.log('other processes');
