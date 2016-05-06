'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _String = require('./String');

var _String2 = _interopRequireDefault(_String);

var _Number = require('./Number');

var _Number2 = _interopRequireDefault(_Number);

var _Array = require('./Array');

var _Array2 = _interopRequireDefault(_Array);

var _Boolean = require('./Boolean');

var _Boolean2 = _interopRequireDefault(_Boolean);

var _Function = require('./Function');

var _Function2 = _interopRequireDefault(_Function);

var _Object = require('./Object');

var _Object2 = _interopRequireDefault(_Object);

var _RegExp = require('./RegExp');

var _RegExp2 = _interopRequireDefault(_RegExp);

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

var _Undefined = require('./Undefined');

var _Undefined2 = _interopRequireDefault(_Undefined);

var _Null = require('./Null');

var _Null2 = _interopRequireDefault(_Null);

var _Date = require('./Date');

var _Date2 = _interopRequireDefault(_Date);

var _Promise = require('./Promise');

var _Promise2 = _interopRequireDefault(_Promise);

var _Generator = require('./Generator');

var _Generator2 = _interopRequireDefault(_Generator);

var _Symbol = require('./Symbol');

var _Symbol2 = _interopRequireDefault(_Symbol);

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var _Set = require('./Set');

var _Set2 = _interopRequireDefault(_Set);

var _WeakMap = require('./WeakMap');

var _WeakMap2 = _interopRequireDefault(_WeakMap);

var _WeakSet = require('./WeakSet');

var _WeakSet2 = _interopRequireDefault(_WeakSet);

var _Truthy = require('./Truthy');

var _Truthy2 = _interopRequireDefault(_Truthy);

var _Falsy = require('./Falsy');

var _Falsy2 = _interopRequireDefault(_Falsy);

var _Stream = require('./Stream');

var _Stream2 = _interopRequireDefault(_Stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  isString: _String2.default,
  isNumber: _Number2.default,
  isArray: _Array2.default,
  isBoolean: _Boolean2.default,
  isFunction: _Function2.default,
  isObject: _Object2.default,
  isRegExp: _RegExp2.default,
  isError: _Error2.default,
  isUndefined: _Undefined2.default,
  isNull: _Null2.default,
  isDate: _Date2.default,
  isPromise: _Promise2.default,
  isGenerator: _Generator2.default,
  isSymbol: _Symbol2.default,
  isMap: _Map2.default,
  isSet: _Set2.default,
  isWeakMap: _WeakMap2.default,
  isWeakSet: _WeakSet2.default,
  isTruthy: _Truthy2.default,
  isFalsy: _Falsy2.default,
  isStream: _Stream2.default
};