'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isObject = function isObject(object) {
  return object.toString && object.toString() === '[object Object]' && object instanceof Promise === false;
};

exports.default = isObject;