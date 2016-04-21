'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Object = require('./is/Object');

var _Object2 = _interopRequireDefault(_Object);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringifySchema = _util2.default.stringifySchema;


var validators = [{
  property: 'eq',
  check: function check(v) {
    return this.value === v;
  },
  fail: function fail(v) {
    throw new Error(v + ' does not eq ' + this.value);
  }
}, {
  property: 'equals',
  check: function check(v) {
    return this.value == v;
  },
  fail: function fail(v) {
    throw new Error(v + ' does not equal ' + this.value);
  }
}, {
  property: 'contains',
  check: function check(v) {
    return this.value.indexOf && this.value.indexOf(v) !== -1;
  },
  fail: function fail(v) {
    throw new Error(this.value + ' does not contain ' + v);
  }
}, {
  property: 'schema',
  check: function check(schema) {
    var _this = this;

    if ((0, _Object2.default)(schema) === false) throw new Error('schema must be an object');

    return Object.keys(schema).reduce(function (pass, property) {
      var type = schema[property];

      return _this.value.hasOwnProperty(property) && type(_this.value[property]) ? pass : false;
    }, true);
  },
  fail: function fail(schema) {
    throw new Error(JSON.stringify(this.value) + ' does not match schema ' + stringifySchema(schema));
  }
}].map(function (_ref) {
  var property = _ref.property;
  var check = _ref.check;
  var fail = _ref.fail;
  return {
    property: property,
    validate: function validate(v) {
      if (check.bind(this)(v) === false) return fail.bind(this)(v);

      return this;
    }
  };
});

exports.default = validators;