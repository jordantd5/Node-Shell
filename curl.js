const request = require('request');
process.stdin.setEncoding('utf8');

module.exports = function () {
  process.stdin.on('data', (data) => {
    const split = data.split(' ');
    const cmd = split[0].toString().trim();
    const site = split[1].toString().trim();
    if (cmd === 'curl') {
      request(site, function (error, response, body) {
        if (error) {
          throw error
        } else {
          process.stdout.write('statusCode: ', response && response.statusCode);
          process.stdout.write(body);
        }
      })
    }
  })
}
