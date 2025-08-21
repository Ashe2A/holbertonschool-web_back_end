// 0. You used to attend a place like this at some point
export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new TypeError('Max students size must be a number');
    }

    this._maxStudentsSize = maxStudentsSize;
  }
}
