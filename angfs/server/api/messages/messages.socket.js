/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Messages = require('./messages.model');

exports.register = function(socket) {
  Messages.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Messages.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('messages:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('messages:remove', doc);
}