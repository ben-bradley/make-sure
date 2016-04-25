'use strict';

const passthroughs = [
  'is', 'a', 'an', 'and', 'that', 'with'
].map((property) =>
  ({ property, get() { return this; } }));

export default passthroughs;
