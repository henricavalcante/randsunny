var chalk = require('chalk');
var stdin = process.stdin;
var inscritos = require('./inscritos.js');
var interval;
function randomizar(inscritos) {
  var id = ~~(Math.random()*inscritos.length);
  return inscritos[id];
}

function toggle() {
  if (!interval) {
    interval = setInterval(function() {
      console.log('\033[2J');
      console.log(chalk.blue(randomizar(inscritos)));
    }, 100);
  } else {
    clearInterval(interval);
    interval = false;
  }
}

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', function(key){
  if (key === '\u0003') {
    process.exit();
  }
  toggle();
});
