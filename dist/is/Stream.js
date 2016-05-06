'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stream = require('stream');

var streamTypes = [_stream.Writable, _stream.Readable, _stream.Transform, _stream.PassThrough, _stream.Duplex];

var isStream = function isStream(stream) {
  return streamTypes.reduce(function (isStream, type) {
    return isStream || stream instanceof type;
  }, false);
};

exports.default = isStream;