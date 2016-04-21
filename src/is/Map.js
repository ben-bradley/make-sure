'use strict';

const isMap = (map) =>
  map.toString && map.toString() === '[object Map]';

export default isMap;
