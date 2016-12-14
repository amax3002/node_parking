var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var inputFile='parking_feb_2016.csv';


// var nameList = inputFile
//     .split(',')
//     .map(function convertName(name) {
//       return name.toUpperCase();
//   })
//   .filter(function(name) {
//     return name.trim().length > 0;
//   })
//
//   console.log(nameList);


var csvData=[];
fs.createReadStream(inputFile)
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);
    })
    .on('end',function() {
      //do something wiht csvData
      console.log(csvData);
    });
