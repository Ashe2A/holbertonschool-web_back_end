/* eslint-disable no-unused-vars */
export default function returnHowManyArguments(...args) {
  let res = 0;
  for (const i of args) {
    res += 1;
  }
  return res;
}
