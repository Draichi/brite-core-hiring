var http = require('http');
var app = require('./config/express');
require('./config/database');

http.createServer(app).listen(3131, function() {
  console.log('\x1b[46m%s\x1b[0m', '            --  LISTEN ON:  --         ');
  console.log('\x1b[36m%s\x1b[0m', '--|--  http://localhost:3131/risks  --|--');
});