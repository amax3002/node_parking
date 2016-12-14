var fs = require('fs');
var parse = require('csv-parse');

module.exports = function parsingSetup(status) {
  var inputFile='parking_feb_2016.csv';
  var csvData=[];

  fs.createReadStream(inputFile)
    .pipe(parse({delimiter: ','},{columns: true}))
    .on('data', function(csvrow) {
        // console.log(csvrow);
        csvData.push(csvrow);
        // console.log('pushed on some data');
    })
    .on('end',function() {
      status(csvData);
    });
}
