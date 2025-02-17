function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla...');
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre);
      resolve();
    }, 1000);
  });
}

// --
console.log('Iniciando el proceso...');

hola('Edson')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then((nombre) => adios(nombre))
  .then((nombre) => {
    console.log('Terminado el proceso');
  })
  .catch((error) => {
    console.error('Ha habido un error: ');
    console.error(error);
  });
