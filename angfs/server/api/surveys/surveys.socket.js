/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Surveys = require('./surveys.model');

exports.register = function(socket) {
  Surveys.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Surveys.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('surveys:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('surveys:remove', doc);
}