var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/risks');
mongoose.connection.on('connected', () => console.log('\x1b[35m%s\x1b[0m', '        + CONNECTED ON MONGODB +\n'));
mongoose.connection.on('error', (error) => console.log('\x1b[41m%s\x1b[0m', '\n\n'+error+'\n\n'));
mongoose.connection.on('disconnected', () => console.log('\x1b[41m%s\x1b[0m', '\n\n MONGODB DISCONNECTED \n'));

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('\x1b[36m%s\x1b[0m', '\n Byebye \n');
    process.exit(0); // '0' means 'expected exit', default is '1' 
  })
});