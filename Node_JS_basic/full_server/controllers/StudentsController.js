/* eslint-disable no-unused-vars */
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];
    const readData = readDatabase(path).then(() => {
      const sortedFields = Object.keys(readData).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      const output = ['This is the list of our students'];
      for (const i of sortedFields) {
        const studentList = readData[i];
        output.push(`Number of students in ${i}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }
      response.status(200).send(output.join('\n'));
    }).catch((e) => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
