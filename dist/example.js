'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)(NaN).is.a.Falsy;

// makeSure({ a: 'b' }).is.an.Object.with.properties([ 'a' ]);

try {
  (0, _index2.default)({ a: 1 }).is.an.Object.with.schema({ a: _index2.default.isString });
} catch (err) {
  console.log('Caught an error!', err.message);
}

(0, _index2.default)({ a: 1 }).is.an.Object.with.schema({ a: Number });