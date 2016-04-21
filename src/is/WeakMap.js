'use strict';

const isWeakMap = (weakmap) =>
  weakmap.toString && weakmap.toString() === '[object WeakMap]';

export default isWeakMap;
