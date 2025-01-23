console.log('Hola mundo');

let i = 0;

setInterval(() => {
  console.log('Sigo activo');

  console.log(i);
  i++;

  //   if (i === 5) {
  //     console.log('forzamos error');
  //     // Este error detendrá el proceso. Esto debido a la caracteristica
  //     // de ser monohilo. Por tanto, se debe estar mu atento para mitigar errores que puedan detener el proceso.
  //     var a = 3 + z;
  //   }
}, 1000);

console.log('Segunda instrucción');
