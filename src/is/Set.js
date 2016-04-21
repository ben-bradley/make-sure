'use strict';

const isSet = (set) =>
  set.toString && set.toString() === '[object Set]';

export default isSet;
