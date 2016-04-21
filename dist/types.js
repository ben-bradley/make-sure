'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = [{ property: 'String', check: _is2.default.isString }, { property: 'Number', check: _is2.default.isNumber }, { property: 'Array', check: _is2.default.isArray }, { property: 'Boolean', check: _is2.default.isBoolean }, { property: 'Function', check: _is2.default.isFunction }, { property: 'Object', check: _is2.default.isObject }, { property: 'RegExp', check: _is2.default.isRegExp }, { property: 'Error', check: _is2.default.isError }, { property: 'Undefined', check: _is2.default.isUndefined }, { property: 'Null', check: _is2.default.isNull }, { property: 'Date', check: _is2.default.isDate }, { property: 'Promise', check: _is2.default.isPromise }, { property: 'Generator', check: _is2.default.isGenerator }, { property: 'Symbol', check: _is2.default.isSymbol }, { property: 'Map', check: _is2.default.isMap }, { property: 'Set', check: _is2.default.isSet }, { property: 'WeakMap', check: _is2.default.isWeakMap }, { property: 'WeakSet', check: _is2.default.isWeakSet }, { property: 'Truthy', check: _is2.default.isTruthy }, { property: 'Falsy', check: _is2.default.isFalsy }].map(function (_ref) {
  var property = _ref.property;
  var check = _ref.check;
  return {
    property: property,
    get: function get() {
      if (check(this.value) === false) throw new Error(this.value + ' is not ' + property);

      return this;
    }
  };
});

exports.default = types;