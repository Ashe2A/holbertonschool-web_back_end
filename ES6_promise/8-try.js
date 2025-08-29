/* eslint-disable import/extensions */
export default function divideFunction(numerator, denominator) {
  if (typeof { numerator, denominator } !== 'number') {
    throw new TypeError('Divide numbers please.');
  }

  if (denominator === 0) {
    throw new RangeError('cannot divide by 0');
  }

  return numerator / denominator;
}
