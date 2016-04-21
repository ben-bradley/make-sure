'use strict';

const isError = (error) =>
  error instanceof Error === true;

export default isError;
