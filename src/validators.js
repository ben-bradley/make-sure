'use strict';

import isObject from './is/Object';
import util from './util';

const { stringifySchema } = util;

const validators = {
  eq(value) {
    if (this.value === value)
      return true;

    throw new Error(value + ' does not eq ' + this.value);
  },
  equals(value) {
    if (this.value == value)
      return true;

    throw new Error(value + ' does not equal ' + this.value);
  },
  contains(value) {
    if (this.value.indexOf && this.value.indexOf(v) !== -1)
      return true;

    throw new Error(this.value + ' does not contain ' + value);
  },
  schema(schema) {
    if (isObject(schema) === false)
      throw new Error('schema must be an object');

    const valid = Object.keys(schema).reduce((pass, property) => {
      const type = schema[property],
        hop = this.value.hasOwnProperty(property);

      return (hop && type(this.value[property])) ? pass : false;
    }, true);

    if (valid)
      return true;

    const jsonValue = JSON.stringify(this.value),
      jsonSchema = stringifySchema(schema);

    throw new Error(jsonValue + ' does not match schema ' + jsonSchema);
  }
}

export default validators;
