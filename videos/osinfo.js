var os = require('os');

var message = 'This script is runnin on Node.js ' + process.version + ' on a ' + os.type() + '-based operation system.';

console.log(message);