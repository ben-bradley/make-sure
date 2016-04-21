'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isGenerator = function isGenerator(generator) {
  return generator.toString && /^function\*/.test(generator.toString());
};

exports.default = isGenerator;