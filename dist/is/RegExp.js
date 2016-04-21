'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isRegExp = function isRegExp(regexp) {
  return regexp instanceof RegExp === true;
};

exports.default = isRegExp;