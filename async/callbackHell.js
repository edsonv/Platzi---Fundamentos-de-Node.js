function hola(nombre, miCallback) {
  // console.log('Hola, soy una funcion asíncrona');
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

//  --
console.log('Iniciando proceso...');
hola('Edson', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado');
  });
});

// hola('Edson', function (nombre) {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Terminando proceso...');
//         });
//       });
//     });
//   });
// });
