'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stream = require('./Stream');

var _Stream2 = _interopRequireDefault(_Stream);

var _Undefined = require('./Undefined');

var _Undefined2 = _interopRequireDefault(_Undefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = function isObject(object) {
  return (0, _Undefined2.default)(object) === false && object.toString && object.toString() === '[object Object]' && object instanceof Promise === false && (0, _Stream2.default)(object) === false;
};

exports.default = isObject;