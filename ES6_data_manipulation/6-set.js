export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Array must be... an array');
  }
  return new Set(array);
}
