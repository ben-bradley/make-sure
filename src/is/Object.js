'use strict';

import isStream from './Stream';
import isUndefined from './Undefined';

const isObject = (object) =>
  isUndefined(object) === false &&
  object.toString &&
  object.toString() === '[object Object]' &&
  object instanceof Promise === false &&
  isStream(object) === false;

export default isObject;
