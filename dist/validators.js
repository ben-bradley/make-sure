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


var validators = {
  eq: function eq(value) {
    if (this.value === value) return true;

    throw new Error(value + ' does not eq ' + this.value);
  },
  equals: function equals(value) {
    if (this.value == value) return true;

    throw new Error(value + ' does not equal ' + this.value);
  },
  contains: function contains(value) {
    if (this.value.indexOf && this.value.indexOf(v) !== -1) return true;

    throw new Error(this.value + ' does not contain ' + value);
  },
  schema: function schema(_schema) {
    var _this = this;

    if ((0, _Object2.default)(_schema) === false) throw new Error('schema must be an object');

    var valid = Object.keys(_schema).reduce(function (pass, property) {
      var type = _schema[property],
          hop = _this.value.hasOwnProperty(property);

      return hop && type(_this.value[property]) ? pass : false;
    }, true);

    if (valid) return true;

    var jsonValue = JSON.stringify(this.value),
        jsonSchema = stringifySchema(_schema);

    throw new Error(jsonValue + ' does not match schema ' + jsonSchema);
  }
};

exports.default = validators;