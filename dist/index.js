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

var getters = [].concat(_passthroughs2.default, _types2.default);

var makeSure = function makeSure(value) {
  return getters.reduce(function (root, _ref) {
    var property = _ref.property;
    var get = _ref.get;
    return Object.defineProperty(root, property, { get: get });
  }, Object.assign({}, { value: value }, _validators2.default));
};

// provide access to the type validators
Object.assign(makeSure, _is2.default);

// oink!
exports.default = makeSure;