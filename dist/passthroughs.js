'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var passthroughs = ['is', 'a', 'an', 'and', 'that', 'with'].map(function (property) {
  return {
    property: property,
    get: function get() {
      return this;
    }
  };
});

exports.default = passthroughs;