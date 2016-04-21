'use strict';

const isWeakSet = (weakset) =>
  weakset.toString && weakset.toString() === '[object WeakSet]';

export default isWeakSet;
