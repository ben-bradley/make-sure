'use strict';

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _stream = require('stream');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringifySchema = _util2.default.stringifySchema;


var pass = function pass(value, getter) {
  return it(value, function () {
    return _should2.default.doesNotThrow(function () {
      return (0, _2.default)(value).is.a[getter];
    });
  });
};

var fail = function fail(value, getter) {
  return it(value, function () {
    return _should2.default.throws(function () {
      return (0, _2.default)(value).is.a[getter];
    });
  });
};

var passthroughs = ['is', 'a', 'an'];

var types = [{ getter: 'String', values: ['foo', '1', 'true', ''] }, { getter: 'Number', values: [0, 1, -1, 0.1, .1, -0.1, -1] }, { getter: 'Array', values: [[0, 1, 'a', 'b'], []] }, { getter: 'Boolean', values: [true, false] }, { getter: 'Function', values: [function noop() {}, function () {}] }, { getter: 'Object', values: [{ a: 'b' }, {}, { c: 1 }] }, { getter: 'RegExp', values: [/foo/, /bar/i, /baz/g, /qux/ig] }, { getter: 'Error', values: [new Error('oh noes!')] }, { getter: 'Undefined', values: [undefined] }, // ¯\_(ツ)_/¯
{ getter: 'Null', values: [null] }, { getter: 'Date', values: [new Date()] }, { getter: 'Promise', values: [new Promise(function (res, rej) {
    return res();
  })] },
// { getter: 'Generator',  values: [ function* () { yield true; } ]      },
// { getter: 'Symbol',     values: [ Symbol('foo') ]                     },
{ getter: 'Map', values: [new Map()] }, { getter: 'Set', values: [new Set()] }, { getter: 'WeakMap', values: [new WeakMap()] }, { getter: 'WeakSet', values: [new WeakSet()] }, { getter: 'Stream', values: [new _stream.Transform({
    transform: function transform() {}
  })] }];

var valuesNot = function valuesNot(type) {
  return types.filter(function (_ref) {
    var getter = _ref.getter;
    return getter !== type;
  }).reduce(function (a, _ref2) {
    var values = _ref2.values;
    return a.concat(values);
  }, []);
};

// falsy & truthy have to be excluded from the types array because
// the values that pass or fail falsy/truthy tests cross standard types
var falsy = [0, -0, false, '', null, NaN, undefined];
var truthy = [1, '0', true, {}, []];

var random = function random() {
  return new Date().getTime() + 'foo' + Math.floor(Math.random() * 1000000000);
};

// oink
describe('makeSure', function () {

  describe('passthroughs', function () {
    passthroughs.forEach(function (p) {
      return it(p, function () {
        return (0, _2.default)('foo')[p].value.should.eql('foo');
      });
    });
  });

  describe('types', function () {
    types.forEach(function (_ref3) {
      var getter = _ref3.getter;
      var values = _ref3.values;

      describe(getter, function () {
        describe('should pass', function () {
          return values.forEach(function (value) {
            return pass(value, getter);
          });
        });
        describe('should fail', function () {
          return valuesNot(getter).forEach(function (value) {
            return fail(value, getter);
          });
        });
      });
    });
    describe('Truthy', function () {
      describe('should pass', function () {
        return truthy.forEach(function (value) {
          return pass(value, 'Truthy');
        });
      });
      describe('should fail', function () {
        return falsy.forEach(function (value) {
          return fail(value, 'Truthy');
        });
      });
    });
  });

  describe('validators', function () {
    var values = types.reduce(function (v, _ref4) {
      var getter = _ref4.getter;
      var values = _ref4.values;
      return v.concat(values);
    }, []);

    describe('eq', function () {
      describe('should pass', function () {
        values.forEach(function (v) {
          return it(v + ' === ' + v, function () {
            return _should2.default.doesNotThrow(function () {
              return (0, _2.default)(v).eq(v);
            });
          });
        });
      });
      describe('should fail', function () {
        values.forEach(function (v) {
          var fail = random();

          it(v + ' !== ' + fail, function () {
            return _should2.default.throws(function () {
              return (0, _2.default)(v).eq(fail);
            });
          });
        });
      });
    });

    describe('equals', function () {
      describe('should pass', function () {
        values.forEach(function (v) {
          return it(v + ' == ' + v, function () {
            return _should2.default.doesNotThrow(function () {
              return (0, _2.default)(v).equals(v);
            });
          });
        });

        it('"0" == 0', function () {
          return _should2.default.doesNotThrow(function () {
            return (0, _2.default)('0').equals(0);
          });
        });
        it('0 == "0"', function () {
          return _should2.default.doesNotThrow(function () {
            return (0, _2.default)(0).equals('0');
          });
        });
        it('"1" == 1', function () {
          return _should2.default.doesNotThrow(function () {
            return (0, _2.default)('1').equals(1);
          });
        });
        it('1 == "1"', function () {
          return _should2.default.doesNotThrow(function () {
            return (0, _2.default)(1).equals('1');
          });
        });
      });
      describe('should fail', function () {
        values.forEach(function (v) {
          var fail = random();

          it(v + ' != ' + fail, function () {
            return _should2.default.throws(function () {
              return (0, _2.default)(v).equals(fail);
            });
          });
        });
      });
    });

    describe('schema', function () {
      describe('should pass', function () {
        [{ object: { a: [1] }, schema: { a: _2.default.isArray } }, { object: { a: [1] }, schema: { a: Array.isArray } }, { object: { a: true }, schema: { a: _2.default.isBoolean } }, { object: { a: new Date() }, schema: { a: _2.default.isDate } }, { object: { a: new Error() }, schema: { a: _2.default.isError } }, { object: { a: function a() {} }, schema: { a: _2.default.isFunction } },
        // { object: {a: function*() {}}, schema: {a:makeSure.isGenerator} },
        { object: { a: new Map() }, schema: { a: _2.default.isMap } }, { object: { a: null }, schema: { a: _2.default.isNull } }, { object: { a: 1 }, schema: { a: _2.default.isNumber } }, { object: { a: 1 }, schema: { a: Number } }, { object: { a: { b: 1 } }, schema: { a: _2.default.isObject } }, { object: { a: { b: 1 } }, schema: { a: Object } }, { object: { a: new Promise(function (a, b) {
              a();
            }) }, schema: { a: _2.default.isPromise } }, { object: { a: /b/ }, schema: { a: _2.default.isRegExp } }, { object: { a: new Set() }, schema: { a: _2.default.isSet } }, { object: { a: 'b' }, schema: { a: _2.default.isString } },
        // { object: {a: Symbol()}, schema: {a:makeSure.isSymbol} },
        { object: { a: undefined }, schema: { a: _2.default.isUndefined } }, { object: { a: new WeakMap() }, schema: { a: _2.default.isWeakMap } }, { object: { a: new WeakSet() }, schema: { a: _2.default.isWeakSet } }].forEach(function (_ref5) {
          var object = _ref5.object;
          var schema = _ref5.schema;

          var label = JSON.stringify(object) + ' matches ' + stringifySchema(schema);

          it(label, function () {
            return (0, _2.default)(object).schema(schema);
          });
        });
      });
      describe('should fail', function () {
        [{ object: { a: '0' }, schema: { a: _2.default.isArray } }, { object: { a: '0' }, schema: { a: Array.isArray } }, { object: { a: '0' }, schema: { a: _2.default.isBoolean } }, { object: { a: '0' }, schema: { a: _2.default.isDate } }, { object: { a: '0' }, schema: { a: _2.default.isError } }, { object: { a: '0' }, schema: { a: _2.default.isFunction } },
        // { object: {a: function*() {}}, schema: {a:makeSure.isGenerator} },
        { object: { a: '0' }, schema: { a: _2.default.isMap } }, { object: { a: '0' }, schema: { a: _2.default.isNull } }, { object: { a: '0' }, schema: { a: _2.default.isNumber } }, { object: { a: '0' }, schema: { a: Number } }, { object: { a: '0' }, schema: { a: _2.default.isObject } }, { object: { a: '0' }, schema: { a: _2.default.isPromise } }, { object: { a: '0' }, schema: { a: _2.default.isRegExp } }, { object: { a: '0' }, schema: { a: _2.default.isSet } }, { object: { a: 0 }, schema: { a: _2.default.isString } },
        // { object: {a: Symbol()}, schema: {a:makeSure.isSymbol} },
        { object: { a: '0' }, schema: { a: _2.default.isUndefined } }, { object: { a: '0' }, schema: { a: _2.default.isWeakMap } }, { object: { a: '0' }, schema: { a: _2.default.isWeakSet } }].forEach(function (_ref6) {
          var object = _ref6.object;
          var schema = _ref6.schema;

          var label = JSON.stringify(object) + ' does not match ' + stringifySchema(schema);

          it(label, function () {
            return _should2.default.throws(function () {
              return (0, _2.default)(object).schema(schema);
            });
          });
        });
      });
    });
  });
});