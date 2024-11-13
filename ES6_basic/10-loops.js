export default function appendToEachArrayValue(array, appendString) {
  const arrayCpy = array;

  for (const value of arrayCpy) {
    arrayCpy.push(appendString + value);
  }

  return arrayCpy;
}
