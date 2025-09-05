const http = require('http');

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

      let res = `Number of students: ${studentList.length}\n`;

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
        res += `Number of students in ${i}: ${fieldList[i].length}. List: ${fieldStudentList}\n`;
      }
      resolve(res);
    });
  });
}
// 3-read_file_async adapted clone block end

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  else if (req.url === '/students') {
    countStudents(process.argv[2]).then((studentListOutput) => {
      res.end(`This is the list of our students\n${studentListOutput}`);
    }).catch(() => {
      res.end('Cannot load the database');
    });
  } else {
    res.end('404 Not found');
  }
});

app.listen(1245);

module.exports = app;
