'use strict';

import isObject from './is/Object';
import util from './util';

const { stringifySchema } = util;

const validators = [{
  property: 'eq',
  check(v) { return this.value === v; },
  fail(v) { throw new Error(v + ' does not eq ' + this.value); }
}, {
  property: 'equals',
  check(v) { return this.value == v; },
  fail(v) { throw new Error(v + ' does not equal ' + this.value); }
}, {
  property: 'contains',
  check(v) { return this.value.indexOf && this.value.indexOf(v) !== -1; },
  fail(v) { throw new Error(this.value + ' does not contain ' + v); }
}, {
  property: 'schema',
  check(schema) {
    if (isObject(schema) === false)
      throw new Error('schema must be an object');

    return Object.keys(schema).reduce((pass, property) => {
      let type = schema[property];

      return (this.value.hasOwnProperty(property) && type(this.value[property])) ? pass : false;
    }, true);
  },
  fail(schema) {
    throw new Error(JSON.stringify(this.value) + ' does not match schema ' + stringifySchema(schema));
  }
}].map(({ property, check, fail }) => ({
  property,
  validate(v) {
    if (check.bind(this)(v) === false)
      return fail.bind(this)(v);

    return this;
  }
}));

export default validators;
