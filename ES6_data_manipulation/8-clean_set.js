export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('Set must be... a set');
  }
  if (typeof startString !== 'string') {
    throw new TypeError('Starting substring must be a string');
  }

  let res = '';
  if (startString === '') {
    return res;
  }
  for (const i of set) {
    if (i.startsWith(startString)) {
      if (!(res === '')) {
        res += '-';
      }
      res += i.slice(startString.length);
    }
  }
  return res;
}
