var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rows: {
    type: Array,
    required: true
  }
});

mongoose.model('Risk', schema);