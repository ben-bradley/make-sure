'use strict';

export default {
  stringifySchema: (schema, replacer, space) =>
    JSON.stringify(Object.keys(schema).reduce((obj, key) => {
      obj[key] = schema[key].name;
      return obj;
    }, {}), replacer, space)
};
