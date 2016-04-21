'use strict';

import makeSure from './index';

makeSure(NaN).is.a.Falsy;

// makeSure({ a: 'b' }).is.an.Object.with.properties([ 'a' ]);

try { makeSure({ a: 1 }).is.an.Object.with.schema({ a: makeSure.isString }); }
catch(err) { console.log('Caught an error!', err.message); }

makeSure({ a: 1 }).is.an.Object.with.schema({ a: Number });
