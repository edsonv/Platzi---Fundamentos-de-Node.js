const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn('ls', ['-al']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
  console.log('Está muerto?');
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', () => {
  console.log('El proceso terminó');
  console.log(proceso.killed);
});
