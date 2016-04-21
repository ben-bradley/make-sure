'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isSymbol = function isSymbol(symbol) {
  return (typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol)) === 'symbol';
};

exports.default = isSymbol;