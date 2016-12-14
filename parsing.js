var fs = require('fs');
var parse = require('csv-parse');

var inputFile='parking_feb_2016.csv';


var csvData=[];

fs.createReadStream(inputFile)
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        // console.log(csvrow);
        csvData.push(csvrow);
    })
    .on('end',function() {
      console.log((csvData.length) - 1);

    });
