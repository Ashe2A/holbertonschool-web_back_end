export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('Cannot process');
  }
  for (const [i, j] of map) {
    if (j === 1) {
      map.set(i, 100);
    }
  }
}
