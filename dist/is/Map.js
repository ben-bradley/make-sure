'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isMap = function isMap(map) {
  return map.toString && map.toString() === '[object Map]';
};

exports.default = isMap;