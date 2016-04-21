'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isWeakSet = function isWeakSet(weakset) {
  return weakset.toString && weakset.toString() === '[object WeakSet]';
};

exports.default = isWeakSet;