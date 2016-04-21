'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isPromise = function isPromise(promise) {
  return promise instanceof Promise;
};

exports.default = isPromise;