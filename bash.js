process.stdout.write('prompt > ');

const pwd = require('./pwd');
pwd();

const ls = require('./ls');
ls();

const cat = require('./cat');
cat();

const curl = require('./curl');
curl();
