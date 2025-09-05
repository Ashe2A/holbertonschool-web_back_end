const fs = require('fs');

function countStudents(path) {
  try {
    const rawData = fs.readFileSync(path, 'utf8');
    // Attempt (try) to read the database file synchronously

    const rows = rawData.split('\n').filter((i) => i.trim() !== '');
    // Convert CSV into an array, splitting newlines and trimming empty lines
    const studentList = rows.slice(1).map((i) => i.split(','));
    // Map the rows into an actual array

    console.log(`Number of students: ${studentList.length}`);

    const fieldList = {};
    for (const i of studentList) {
      const givenName = i[0];
      const field = i[3];
      if (!(fieldList[field])) {
        fieldList[field] = [];
      }
      fieldList[field].push(givenName);
    }

    for (const i of Object.keys(fieldList)) {
      const fieldStudentList = fieldList[i].join(', ');
      // join method allows to turn an array into a simple string
      console.log(`Number of students in ${i}: ${fieldList[i].length}. List: ${fieldStudentList}`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
    // catch and throw file reading error
  }
}

module.exports = countStudents;
