'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  stringifySchema: function stringifySchema(schema, replacer, space) {
    return JSON.stringify(Object.keys(schema).reduce(function (obj, key) {
      obj[key] = schema[key].name;
      return obj;
    }, {}), replacer, space);
  }
};