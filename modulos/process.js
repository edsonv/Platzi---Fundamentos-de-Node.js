process.on('beforeExit', () => {
  console.log('el proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale, el proceso se acabó');
});

process.on('uncaughtException', (err, origen) => {
  console.error('Se nos ha olvidado capturar un error');

  setTimeout(() => {
    console.log('Esto no se va a ver nunca ');
  }, 0);

  console.error(err.message);
});

setTimeout(() => {
  console.log('Esto si se va a ver ');
}, 0);

// process.on("unhandledRejection");

// funcionquenoexiste();

console.log('Si el error no se recoge, no sale');
