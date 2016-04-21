'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isWeakMap = function isWeakMap(weakmap) {
  return weakmap.toString && weakmap.toString() === '[object WeakMap]';
};

exports.default = isWeakMap;