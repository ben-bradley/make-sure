'use strict';

import should from 'should';
import makeSure from '../';
import util from '../util';
import { Transform } from 'stream';

const { stringifySchema } = util;

const pass = (value, getter) =>
  it(value, () => should.doesNotThrow(() => makeSure(value).is.a[getter]));

const fail = (value, getter) =>
  it(value, () => should.throws(() => makeSure(value).is.a[getter]));

const passthroughs = [ 'is', 'a', 'an' ];

const types = [
  { getter: 'String',     values: [ 'foo', '1', 'true', '' ]            },
  { getter: 'Number',     values: [ 0, 1, -1, 0.1, .1, -0.1, -1 ]       },
  { getter: 'Array',      values: [ [ 0, 1, 'a', 'b' ], [] ]            },
  { getter: 'Boolean',    values: [ true, false ]                       },
  { getter: 'Function',   values: [ function noop() {}, () => {} ]      },
  { getter: 'Object',     values: [ { a: 'b' }, {}, { c: 1 } ]          },
  { getter: 'RegExp',     values: [ /foo/, /bar/i, /baz/g, /qux/ig ]    },
  { getter: 'Error',      values: [ new Error('oh noes!') ]             },
  { getter: 'Undefined',  values: [ undefined ]                         }, // ¯\_(ツ)_/¯
  { getter: 'Null',       values: [ null ]                              },
  { getter: 'Date',       values: [ new Date() ]                        },
  { getter: 'Promise',    values: [ new Promise((res, rej) => res()) ]  },
  // { getter: 'Generator',  values: [ function* () { yield true; } ]      },
  // { getter: 'Symbol',     values: [ Symbol('foo') ]                     },
  { getter: 'Map',        values: [ new Map() ]                         },
  { getter: 'Set',        values: [ new Set() ]                         },
  { getter: 'WeakMap',    values: [ new WeakMap() ]                     },
  { getter: 'WeakSet',    values: [ new WeakSet() ]                     },
  { getter: 'Stream',     values: [ new Transform({ transform() {} }) ] }
];

const valuesNot = (type) => types
  .filter(({ getter }) => getter !== type)
  .reduce((a, { values }) => a.concat(values), []);

// falsy & truthy have to be excluded from the types array because
// the values that pass or fail falsy/truthy tests cross standard types
const falsy = [ 0, -0, false, '', null, NaN, undefined ];
const truthy = [ 1, '0', true, {}, [] ];

const random = () => new Date().getTime() + 'foo' + Math.floor(Math.random() * 1000000000);

// oink
describe('makeSure', () => {

  describe('passthroughs', () => {
    passthroughs.forEach((p) =>
      it(p, () => (makeSure('foo')[p].value).should.eql('foo')));
  });

  describe('types', () => {
    types.forEach(({ getter, values, }) => {
      describe(getter, () => {
        describe('should pass', () => values.forEach((value) => pass(value, getter)));
        describe('should fail', () => valuesNot(getter).forEach((value) => fail(value, getter)));
      });
    });
    describe('Truthy', () => {
      describe('should pass', () => truthy.forEach((value) => pass(value, 'Truthy')));
      describe('should fail', () => falsy.forEach((value) => fail(value, 'Truthy')));
    });
  });

  describe('validators', () => {
    const values = types.reduce((v, { getter, values }) => v.concat(values), []);

    describe('eq', () => {
      describe('should pass', () => {
        values.forEach((v) =>
          it(v + ' === ' + v, () => should.doesNotThrow(() => makeSure(v).eq(v))));
      });
      describe('should fail', () => {
        values.forEach((v) => {
          let fail = random();

          it(v + ' !== ' + fail, () => should.throws(() => makeSure(v).eq(fail)));
        });
      });
    });

    describe('equals', () => {
      describe('should pass', () => {
        values.forEach((v) =>
          it(v + ' == ' + v, () => should.doesNotThrow(() => makeSure(v).equals(v))));

        it('"0" == 0', () => should.doesNotThrow(() => makeSure('0').equals(0)));
        it('0 == "0"', () => should.doesNotThrow(() => makeSure(0).equals('0')));
        it('"1" == 1', () => should.doesNotThrow(() => makeSure('1').equals(1)));
        it('1 == "1"', () => should.doesNotThrow(() => makeSure(1).equals('1')));
      });
      describe('should fail', () => {
        values.forEach((v) => {
          let fail = random();

          it(v + ' != ' + fail, () => should.throws(() => makeSure(v).equals(fail)));
        });
      });
    });

    describe('schema', () => {
      describe('should pass', () => {
        [ { object: {a:[1]}, schema: {a:makeSure.isArray} },
          { object: {a:[1]}, schema: {a:Array.isArray} },
          { object: {a:true}, schema: {a:makeSure.isBoolean} },
          { object: {a:new Date()}, schema: {a:makeSure.isDate} },
          { object: {a:new Error()}, schema: {a:makeSure.isError} },
          { object: {a:() => {}}, schema: {a:makeSure.isFunction} },
          // { object: {a: function*() {}}, schema: {a:makeSure.isGenerator} },
          { object: {a:new Map()}, schema: {a:makeSure.isMap} },
          { object: {a:null}, schema: {a:makeSure.isNull} },
          { object: {a:1}, schema: {a:makeSure.isNumber} },
          { object: {a:1}, schema: {a:Number} },
          { object: {a:{b:1}}, schema: {a:makeSure.isObject} },
          { object: {a:{b:1}}, schema: {a:Object} },
          { object: {a:new Promise((a,b) => { a() })}, schema: {a:makeSure.isPromise} },
          { object: {a:/b/}, schema: {a:makeSure.isRegExp} },
          { object: {a:new Set()}, schema: {a:makeSure.isSet} },
          { object: {a:'b'}, schema: {a:makeSure.isString} },
          // { object: {a: Symbol()}, schema: {a:makeSure.isSymbol} },
          { object: {a:undefined}, schema: {a:makeSure.isUndefined} },
          { object: {a:new WeakMap()}, schema: {a:makeSure.isWeakMap} },
          { object: {a:new WeakSet()}, schema: {a:makeSure.isWeakSet} }
        ].forEach(({ object, schema }) => {
          let label = JSON.stringify(object) + ' matches ' + stringifySchema(schema);

          it(label, () => makeSure(object).schema(schema));
        });
      });
      describe('should fail', () => {
        [ { object: {a:'0'}, schema: {a:makeSure.isArray} },
          { object: {a:'0'}, schema: {a:Array.isArray} },
          { object: {a:'0'}, schema: {a:makeSure.isBoolean} },
          { object: {a:'0'}, schema: {a:makeSure.isDate} },
          { object: {a:'0'}, schema: {a:makeSure.isError} },
          { object: {a:'0'}, schema: {a:makeSure.isFunction} },
          // { object: {a: function*() {}}, schema: {a:makeSure.isGenerator} },
          { object: {a:'0'}, schema: {a:makeSure.isMap} },
          { object: {a:'0'}, schema: {a:makeSure.isNull} },
          { object: {a:'0'}, schema: {a:makeSure.isNumber} },
          { object: {a:'0'}, schema: {a:Number} },
          { object: {a:'0'}, schema: {a:makeSure.isObject} },
          { object: {a:'0'}, schema: {a:makeSure.isPromise} },
          { object: {a:'0'}, schema: {a:makeSure.isRegExp} },
          { object: {a:'0'}, schema: {a:makeSure.isSet} },
          { object: {a:0}, schema: {a:makeSure.isString} },
          // { object: {a: Symbol()}, schema: {a:makeSure.isSymbol} },
          { object: {a:'0'}, schema: {a:makeSure.isUndefined} },
          { object: {a:'0'}, schema: {a:makeSure.isWeakMap} },
          { object: {a:'0'}, schema: {a:makeSure.isWeakSet} }
        ].forEach(({ object, schema }) => {
          let label = JSON.stringify(object) + ' does not match ' + stringifySchema(schema);

          it(label, () =>
            should.throws(() => makeSure(object).schema(schema)));
        });
      });
    });

  });

});
