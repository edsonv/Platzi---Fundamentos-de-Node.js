console.log('Algo');

console.info('Info');

console.error('Error');

console.warn('Advertencia');

const tabla = [
  { a: 1, b: 'Z' },
  { a: 2, b: 'Otra' },
];
console.table(tabla);

console.log('Conversacion:');
console.group('Conversación');
console.log('Hola');
console.log('Blablabla');
console.log('Adios');
console.groupEnd('Conversación');

console.log('otras cosas de funcion');

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
