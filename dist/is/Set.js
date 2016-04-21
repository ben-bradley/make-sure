'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isSet = function isSet(set) {
  return set.toString && set.toString() === '[object Set]';
};

exports.default = isSet;