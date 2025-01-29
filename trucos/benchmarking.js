console.time('todo');

let suma = 0;

console.time('bucle');

for (let i = 0; i < 10000000000; i++) {
  suma += 1;
}

console.timeEnd('bucle');

let suma2 = 0;

console.time('bucle2');

for (let j = 0; j < 10000000; j++) {
  suma2 += 1;
}

console.timeEnd('bucle2');
console.time('asincrono');
console.log('Comienza el proceso asincrono');
asinc().then(() => {
  console.timeEnd('asincrono');
});

console.timeEnd('todo');

console.time('asinc');
function asinc() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      res();
    }, 1000);
  });
}

console.timeEnd('asinc');
