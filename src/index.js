'use strict';

import types from './types';
import passthroughs from './passthroughs';
import validators from './validators';
import is from './is';

const getters = [].concat(passthroughs, types);

const makeSure = (value) =>
  getters.reduce((root, { property, get }) =>
    Object.defineProperty(root, property, { get }),
    Object.assign({}, { value }, validators)
  );

// provide access to the type validators
Object.assign(makeSure, is);

// oink!
export default makeSure;
