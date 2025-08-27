export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if ((typeof endpoint === 'object')
    && endpoint.protocol && endpoint.name) {
    let queryCount = weakMap.get(endpoint);
    if (queryCount === undefined) {
      queryCount = 0;
    }
    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, queryCount + 1);
  }
}
