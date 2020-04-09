'use strict';

const rangeOdd = (start, end) => {
  const result = [];
  let i = start;
  if (i % 2 === 0) {
    i += 1;
  }
  for (i; i <= end; i += 2) {
    result.push(i);
  }
  return result;
};

module.exports = { rangeOdd };
