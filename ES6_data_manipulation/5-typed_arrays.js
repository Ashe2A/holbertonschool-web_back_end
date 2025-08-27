export default function createInt8TypedArray(length, position, value) {
  if (typeof (length) !== 'number') {
    throw TypeError('Length is a number');
  }
  if (typeof (position) !== 'number') {
    throw TypeError('Position is a number');
  }
  if (typeof (value) !== 'number') {
    throw TypeError('Value is a number');
  }

  if (position < 0 || position >= length) {
    throw RangeError('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
