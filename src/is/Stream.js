'use strict';

import { Writable, Readable, Transform, PassThrough, Duplex } from 'stream';

const streamTypes = [ Writable, Readable, Transform, PassThrough, Duplex ];

const isStream = (stream) => streamTypes.reduce((isStream, type) =>
  isStream || stream instanceof type, false);

export default isStream;
