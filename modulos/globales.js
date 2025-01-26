console.log(__filename);

console.log(__dirname);

console.log(process);

let i = 0;

const intervalo = setInterval(() => {
  if (i === 3) {
    clearInterval(intervalo);
  }

  i++;

  console.log('hola');
}, 1000);

setImmediate(() => {
  console.log('Hola');
});

globalThis.miVariable = 'elValor';
console.log(miVariable);
