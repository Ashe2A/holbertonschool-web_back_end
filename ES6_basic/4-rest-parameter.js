/* eslint-disable no-unused-vars */
export default function returnHowManyArguments(...args) {
  let argc = 0;
  for (let i of args) {
    argc += 1;
  }
  return argc;
}
