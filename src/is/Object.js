'use strict';

const isObject = (object) =>
  object.toString &&
  object.toString() === '[object Object]' &&
  object instanceof Promise === false;

export default isObject;
