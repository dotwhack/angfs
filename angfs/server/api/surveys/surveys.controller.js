'use strict';

var _ = require('lodash');
var Surveys = require('./surveys.model');

// Get list of surveys
exports.index = function(req, res) {	
	
	Surveys.find(function(err,surveys){
		if (err) {
			return handleError(res, err);
		}
		//console.log(surveys.length);
		res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
	    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
		return res.status(200).send(JSON.stringify(surveys));


	});


	

};


// Get a single surveys
exports.show = function(req, res) {
  Surveys.findById(req.params.id, function (err, surveys) {
    if(err) { return handleError(res, err); }
    if(!surveys) { return res.send(404); }
    return res.json(surveys);
  });
};

// Creates a new surveys in the DB.
exports.create = function(req, res) {
  Surveys.create(req.body, function(err, surveys) {
    if(err) { return handleError(res, err); }
    return res.json(201, surveys);
  });
};

// Updates an existing surveys in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Surveys.findById(req.params.id, function (err, surveys) {
    if (err) { return handleError(res, err); }
    if(!surveys) { return res.send(404); }
    var updated = _.merge(surveys, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, surveys);
    });
  });
};

// Deletes a surveys from the DB.
exports.destroy = function(req, res) {
  Surveys.findById(req.params.id, function (err, surveys) {
    if(err) { return handleError(res, err); }
    if(!surveys) { return res.send(404); }
    surveys.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}