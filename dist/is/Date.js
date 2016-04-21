'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isDate = function isDate(date) {
  return date instanceof Date && isNaN(date.valueOf()) === false;
};

exports.default = isDate;