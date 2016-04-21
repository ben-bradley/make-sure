'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isError = function isError(error) {
  return error instanceof Error === true;
};

exports.default = isError;