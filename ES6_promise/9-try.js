export default function guardrail(mathFunction) {
  if (!(mathFunction instanceof Function)) {
    throw new TypeError('Input a function please.');
  }

  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(e.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
