export default function appendToEachArrayValue(array, appendString) {
  const arrayCpy = array;

  for (const idx of arrayCpy) {
    const value = arrayCpy[idx];
    arrayCpy.push(appendString + value);
  }

  return arrayCpy;
}
