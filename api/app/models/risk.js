var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  rows: {
    type: Array,
    required: false
  }
});

mongoose.model('Risk', schema);