var parsing = require('./parsing');
var analyzing = require('./analyzing');

var dataRecieved = parsing(function igotsomedata(data) {
  // console.log(data);
  // console.log(data.length);
  var lengthTest = analyzing.getLength(data);

  console.log(lengthTest);
  console.log('----------');
  var countingTicketsByType = analyzing.getViolationCount(data);
  console.log(countingTicketsByType);
  console.log('----------');
  console.log(countingTicketsByType[0]);
})
