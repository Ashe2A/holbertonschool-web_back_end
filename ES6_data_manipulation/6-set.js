export default function setFromArray(array) {
  if (!(array instanceof Array)) {
    throw TypeError('Array must be... an array');
  }
  return new Set(array);
}
