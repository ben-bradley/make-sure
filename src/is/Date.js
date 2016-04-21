'use strict';

const isDate = (date) =>
  date instanceof Date &&
  isNaN(date.valueOf()) === false;

export default isDate;
