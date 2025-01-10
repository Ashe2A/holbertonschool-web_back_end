export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (Array.isArray(students)) {
      let allstring = true;
      for (const i in students) {
        if ((typeof i !== 'string') && (allstring)) {
          allstring = false;
          throw new TypeError('Students\' names must be strings');
        }
      }
      if (allstring) {
        this._students = students;
      }
    } else {
      throw new TypeError('Students must be in an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n === 'string') {
      this._name = n;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(l) {
    if (typeof l === 'number') {
      this._length = l;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(s) {
    if (Array.isArray(s)) {
      let allstring = true;
      for (const i in s) {
        if ((typeof i !== 'string') && (allstring)) {
          allstring = false;
          throw new TypeError('Students\' names must be strings');
        }
      }
      if (allstring) {
        this._students = s;
      }
    } else {
      throw new TypeError('Students must be in an array');
    }
  }
}
