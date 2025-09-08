const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (e, rawData) => {
      if (e) {
        reject(new Error('Cannot load the database'));
      }

      const rows = rawData.split('\n').filter((i) => i.trim() !== '');
      const studentList = rows.slice(1).map((i) => i.split(','));

      const fieldList = {};
      for (const i of studentList) {
        const givenName = i[0];
        const field = i[3];
        if (!(fieldList[field])) {
          fieldList[field] = [];
        }
        fieldList[field].push(givenName);
      }
      resolve(fieldList);
    });
  });
}

module.exports = readDatabase;
