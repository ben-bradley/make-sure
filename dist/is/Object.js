'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stream = require('./Stream');

var _Stream2 = _interopRequireDefault(_Stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = function isObject(object) {
  return object.toString && object.toString() === '[object Object]' && object instanceof Promise === false && (0, _Stream2.default)(object) === false;
};

exports.default = isObject;