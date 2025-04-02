export default function returnHowManyArguments(...args) {
  let res = 0;
  for (const i of args) {
    if (Number.isInteger(i)) {
      res += i;
    }
  }
  return res + 1;
}
