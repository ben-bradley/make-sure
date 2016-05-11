'use strict';

import isStream from './Stream';

const isObject = (object) =>
  object &&
  object.toString &&
  object.toString() === '[object Object]' &&
  object instanceof Promise === false &&
  isStream(object) === false;

export default isObject;
