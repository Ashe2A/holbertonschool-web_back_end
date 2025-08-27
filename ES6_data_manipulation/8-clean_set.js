export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('Set must be... a set');
  }

  let res = '';
  if (typeof startString === 'string' && startString !== '') {
    for (const i of set) {
      if ((typeof i === 'string') && i.startsWith(startString)) {
        if (!(res === '')) {
          res += '-';
        }
        res += i.slice(startString.length, i.length);
      }
    }
  }
  return res;
}
