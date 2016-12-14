var fs = require('fs');
var parse = require('csv-parse');

var inputFile = 'parking_feb_2016.csv';


module.exports = {
    getLength,
    getViolationCount
};

function getLength(inputData) {
    return inputData.length - 1;
}


function getViolationCount(inputData) {
    var parkingType = [];

    inputData.forEach(function getViolationColumn(columnSelected) {
        parkingType.push(columnSelected.VIOLATION_DESCRIPTION);
    });

    var count = {};

    parkingType.forEach(function seperationAndCounting(ticket) {
        if (!count[ticket]) {
            count[ticket] = 1;
        } else {
            count[ticket]++;
        }
    })

    var sortable = [];
    for (var ticketEach in count)
        sortable.push([ticketEach, count[ticketEach]]);

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    })

    return sortable;
}


//
// console.log(sortable);
// console.log(sortable[0]);
// console.log(sortable.length);
//
// //We need to be able to generate a new unique key for an array based on values in getViolationColumn
//
// // console.log(count);
//
//       // console.log(parkingType);
//
//     });
