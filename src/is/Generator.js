'use strict';

const isGenerator = (generator) =>
  generator.toString &&
  /^function\*/.test(generator.toString());

export default isGenerator;
