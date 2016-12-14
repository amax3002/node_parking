var fs = require('fs');
var parse = require('csv-parse');

var inputFile='parking_feb_2016.csv';


var csvData=[];
var parkingType=[];

fs.createReadStream(inputFile)
    .pipe(parse({delimiter: ','},{columns: true}))
    .on('data', function(csvrow) {

        // console.log(csvrow);
        csvData.push(csvrow);
    })
    .on('end',function() {


      csvData.forEach(function getViolationColumn(columnSelected) {
        parkingType.push(columnSelected.VIOLATION_DESCRIPTION);
});
var count = {};
parkingType.forEach(function seperationAndCounting(ticket) {
  if(!count[ticket]) {
    count[ticket] = 1;
  } else {
    count[ticket] ++;
  }
})

var sortable = [];
for (var ticketEach in count)
    sortable.push([ticketEach, count[ticketEach]]);

sortable.sort(function(a, b) {
    return b[1] - a[1];
})

console.log(sortable);
console.log(sortable[0]);
console.log(sortable.length);

//We need to be able to generate a new unique key for an array based on values in getViolationColumn

// console.log(count);

      // console.log(parkingType);

    });
