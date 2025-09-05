const express = require('express');

// 3-read_file_async adapted clone block start
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (e, rawData) => {
      if (e) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = rawData.split('\n').filter((i) => i.trim() !== '');
      const studentList = rows.slice(1).map((i) => i.split(','));

      const res = [];
      res.push(`Number of students: ${studentList.length}`);

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
        res.push(`Number of students in ${i}: ${fieldList[i].length}. List: ${fieldStudentList}`);
      }
      resolve(res.join('\n').trim());
    });
  });
}
// 3-read_file_async adapted clone block end

const app = express();

app.get('/', (req, res) => {
  res.status(200).end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((studentListOutput) => {
    res.end(`This is the list of our students\n${studentListOutput}`);
  }).catch(() => {
    res.end('This is the list of our students\nCannot load the database');
  });
});

app.listen(1245);

module.exports = app;
