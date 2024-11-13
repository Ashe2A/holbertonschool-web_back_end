export default function returnHowManyArguments(...args) {
  let argc = 0;
  for (const i of args) {
    argc += 1;
  }
  return argc;
}
