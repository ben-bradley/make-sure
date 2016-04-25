# Make Sure [![Build Status](https://secure.travis-ci.org/ben-bradley/make-sure.png?branch=master)](https://travis-ci.org/ben-bradley/make-sure)

Fluently validate that your function arguments are what you expect.

## Install

```bash
npm install make-sure
```

## Example

```javascript
import makeSure from 'make-sure';

const myFunc = (a, b) => {
  makeSure(a).is.a.String.eq('foo');
  if (makeSure.isBoolean(b) === false)
    console.log('uhoh, b is NOT a Boolean');

  // a strictly equals 'foo' and you've been warned if b isn't a Boolean

  console.log('Yay!');
};

myFunc('foo', false);
```

## Type Validation

If you use the chained approach, `make-sure` will throw when a validation fails.  Alternatively, you can call the assertion directly and it will return `true` or `false`.

### Array / isArray()

```javascript
makeSure([ 1, 2, 3 ]).is.an.Array; // doesn't throw
makeSure('foo').is.an.Array; // throws
makeSure.isArray([ 1, 2, 3 ]); // returns true
makeSure.isArray('foo'); // returns false
```

### Boolean / isBoolean()

```javascript
makeSure(true).is.a.Boolean; // doesn't throw
makeSure('true').is.a.Boolean; // throws
makeSure.isBoolean(true); // returns true
makeSure.isBoolean('true'); // returns false
```

### Date / isDate()

```javascript
makeSure(new Date()).is.a.Date; // doesn't throw
makeSure(1).is.a.Date; // throws
makeSure.isDate(new Date()); // returns true
makeSure.isDate(1); // returns false
```

### Error / isError()

```javascript
makeSure(new Error('uhoh!')).is.an.Error; // doesn't throw
makeSure('uhoh').is.an.Error; // throws
makeSure.isError(new Error('uhoh!')); // returns true
makeSure.isError('uhoh'); // returns false
```

### Falsy / isFalsy()

```javascript
makeSure(0).is.Falsy; // doesn't throw
makeSure('').is.Falsy; // doesn't throw
makeSure(false).is.Falsy; // doesn't throw
makeSure(null).is.Falsy; // doesn't throw
makeSure(undefined).is.Falsy; // doesn't throw
makeSure(true).is.Falsy; // throws
makeSure.isFalsy(''); // returns true
makeSure.isFalsy('foo'); // returns false
```

### Function / isFunction()

```javascript
makeSure(() => {}).is.a.Function; // doesn't throw
makeSure(function () {}).is.a.Function; // doesn't throw
makeSure('foo').is.a.Function; // throws
makeSure.isFunction(() => {}); // returns true
makeSure.isFunction('foo'); // returns false
```

### Generator / isGenerator()

```javascript
makeSure(function* () {}).is.a.Generator; // doesn't throw
makeSure(() => {}).is.a.Generator; // throws
makeSure.isGenerator(function* () {}); // returns true
makeSure.isGenerator(() => {}); // returns false
```

### Map / isMap()

```javascript
makeSure(new Map()).is.a.Map; // doesn't throw
makeSure(new Set()).is.a.Map; // throws
makeSure.isMap(new Map()); // returns true
makeSure.isMap(new Set()); // returns false
```

### Null / isNull()

```javascript
makeSure(null).is.Null; // doesn't throw
makeSure(undefined).is.Null; // throws
makeSure.isNull(null); // returns true
makeSure.isNull(0); // returns false
```

### Number / isNumber()

```javascript
makeSure(1).is.a.Number; // doesn't throw
makeSure('1').is.a.Number; // throws;
makeSure.isNumber(1); // returns true
makeSure.isNumber('1'); // returns false
```

### Object / isObject()

```javascript
makeSure({ a: true }).is.an.Object; // doesn't throw
makeSure('{"a":true}').is.an.Object; // throws
makeSure.isObject({ a: true }); // returns true
makeSure.isObject('{"a":true}'); // returns false
```

### Promise / isPromise()

```javascript
makeSure(new Promise().resolve()).is.a.Promise; // doesn't throw
makeSure(() => {}).is.a.Promise; // throws
makeSure.isPromise(new Promise().resolve()); // returns true
makeSure.isPromise(() => {}); // returns false
```

### RegExp / isRegExp()

```javascript
makeSure(/a/).is.a.RegExp; // doesn't throw
makeSure('/a/').is.a.RegExp; // throws
makeSure.isRegExp(/a/); // returns true
makeSure.isRegExp('/a/'); // returns false
```

### Set / isSet()

```javascript
makeSure(new Set()).is.a.Set; // doesn't throw
makeSure(new Map()).is.a.Set; // throws
makeSure.isSet(new Set()); // returns true
makeSure.isSet(new Map()); // returns false
```

### String / isString()

```javascript
makeSure('a').is.a.String; // doesn't throw
makeSure('1').is.a.String; // doesn't throw
makeSure(0).is.a.String; // throws
makeSure.isString('1'); // returns true
makeSure.isString(1); // returns false
```

### Symbol / isSymbol()

```javascript
makeSure(Symbol()).is.a.Symbol; // doesn't throw
makeSure('foo').is.a.Symbol; // throws
makeSure.isSymbol(Symbol()); // returns true
makeSure.isSymbol('foo'); // returns false
```

### Truthy / isTruthy();

```javascript
makeSure(1).is.Truthy; // doesn't throw
makeSure('1').is.Truthy; // doesn't throw
makeSure(true).is.Truthy; // doesn't throw
makeSure({a:1}).is.Truthy; // doesn't throw
makeSure([1]).is.Truthy; // doesn't throw
makeSure(false).is.Truthy; // throws
makeSure.isTruthy(1); // returns true
makeSure.isTruthy(''); // returns false
```

### Undefined / isUndefined()

```javascript
makeSure(undefined).is.Undefined; // doesn't throw
makeSure(null).is.Undefined; // throws
makeSure.isUndefined(undefined); // returns true
makeSure.isUndefined(null); // returns false
```

### WeakMap / isWeakMap()

```javascript
makeSure(new WeakMap()).is.a.WeakMap; // doesn't throw
makeSure(new Set()).is.a.WeakMap; // throws
makeSure.isWeakMap(new WeakMap()); // returns true
makeSure.isWeakMap(new Set()); // returns false
```

### WeakSet / isWeakSet()

```javascript
makeSure(new WeakSet()).is.a.WeakSet; // doesn't throw
makeSure(new Map()).is.a.WeakSet; // throws
makeSure.isWeakSet(new WeakSet()); // returns true
makeSure.isWeakSet(new Map()); // returns false
```

## Tests!

Currently, there are over 700 tests!

```bash
npm test
```

## Inspiration

`should`
`lodash`
`is`
