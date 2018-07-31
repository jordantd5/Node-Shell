const fs = require('fs');
process.stdin.setEncoding('utf8');

module.exports = function () {
  process.stdin.on('data', (data) => {
    const split = data.split(' ');
    const cmd = split[0].toString().trim();
    const file = split[1].toString().trim();
    if (cmd === 'cat') {
      fs.readFile(file, (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
      })
    }
  })
}
