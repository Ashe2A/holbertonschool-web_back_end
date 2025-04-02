export default function returnHowManyArguments(...args) {
  var res = 0;
  for (const i of args) {
    res += 1;
  }
  return res;
}
