function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en función asíncrona');
      cb(error);
    }
  }, 1000);
}

try {
  // otraFuncion();
  seRompeAsincrona((error) => {
    console.log(error.message);
  });
} catch (err) {
  console.error('Vaya, algo se ha roto...');
  console.error(err.message);
  console.error('Hemos capturado el error');
}

console.log('Esto de aqui esta al final');
