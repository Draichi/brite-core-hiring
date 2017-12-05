var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Risk');


//methods
api.list = function(req, res) {
  model
    .find({})
    .then(function(jobs) {
      res.json(jobs);
    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });
};

api.post = function(req, res) {
  model
    .create(req.body)
    .then(function(job) {
      res.json(job);
    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });
};

api.find = function(req, res) {
  model
    .findById(req.params.id)
    .then(function(job) {
      if(!job) throw Error('errooo!');
      res.json(job);
    }, function(error) {
      console.log(error);
      res.status(404).json(error);
    });
};

api.edit = function(req, res) {
  model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(function(job) {
      res.json(job);
    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });
};

api.del = function(req, res) {
  model
    .remove({_id: req.params.id})
    .then(function() {
      res.sendStatus(204);
    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });
};

module.exports = api;