'use strict';

import types from './types';
import passthroughs from './passthroughs';
import validators from './validators';
import is from './is';

const makeSure = (value) => {

  let root = Object.defineProperty({}, 'value', { value });

  passthroughs.reduce((o, { property, get }) =>
    Object.defineProperty(o, property, { get }), root);

  types.reduce((o, { property, get }) =>
    Object.defineProperty(o, property, { get }), root);

  validators.reduce((o, { property, validate }) =>
    root[property] = validate, root);

  return root;
};

Object.assign(makeSure, is);

// oink!
export default makeSure;
