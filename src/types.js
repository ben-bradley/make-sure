'use strict';

import is from './is';

const types = [
  { property: 'String', check: is.isString },
  { property: 'Number', check: is.isNumber },
  { property: 'Array', check: is.isArray },
  { property: 'Boolean', check: is.isBoolean },
  { property: 'Function', check: is.isFunction },
  { property: 'Object', check: is.isObject },
  { property: 'RegExp', check: is.isRegExp },
  { property: 'Error', check: is.isError },
  { property: 'Undefined', check: is.isUndefined },
  { property: 'Null', check: is.isNull },
  { property: 'Date', check: is.isDate },
  { property: 'Promise', check: is.isPromise },
  { property: 'Generator', check: is.isGenerator },
  { property: 'Symbol', check: is.isSymbol },
  { property: 'Map', check: is.isMap },
  { property: 'Set', check: is.isSet },
  { property: 'WeakMap', check: is.isWeakMap },
  { property: 'WeakSet', check: is.isWeakSet },
  { property: 'Truthy', check: is.isTruthy },
  { property: 'Falsy', check: is.isFalsy },
  { property: 'Stream', check: is.isStream }
].map(({ property, check }) => ({
  property,
  get() {
    if (check(this.value) === false)
      throw new Error(this.value + ' is not ' + property);

    return this;
  }
}));

export default types;
