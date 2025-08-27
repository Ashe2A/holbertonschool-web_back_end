export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError('Set must be... a set');
  }
  if (!(array instanceof Array)) {
    throw new TypeError('Array must be... an array');
  }
  for (const i of array) {
    if ((!set.has(i))) {
      return false;
    }
  }
  return true;
}
