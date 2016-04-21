'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _passthroughs = require('./passthroughs');

var _passthroughs2 = _interopRequireDefault(_passthroughs);

var _validators = require('./validators');

var _validators2 = _interopRequireDefault(_validators);

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSure = function makeSure(value) {

  var root = Object.defineProperty({}, 'value', { value: value });

  _passthroughs2.default.reduce(function (o, _ref) {
    var property = _ref.property;
    var get = _ref.get;
    return Object.defineProperty(o, property, { get: get });
  }, root);

  _types2.default.reduce(function (o, _ref2) {
    var property = _ref2.property;
    var get = _ref2.get;
    return Object.defineProperty(o, property, { get: get });
  }, root);

  _validators2.default.reduce(function (o, _ref3) {
    var property = _ref3.property;
    var validate = _ref3.validate;
    return root[property] = validate;
  }, root);

  return root;
};

Object.assign(makeSure, _is2.default);

// oink!
exports.default = makeSure;