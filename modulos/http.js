const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Nueva petición!');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;
    default:
      res.write('Error 404: No se lo que quieres');
      res.end();
  }
  // res.writeHead(201, { 'content-type': 'text/plain' });

  // res.write('Hola, ya se puede usar http de NodeJS');

  // res.end();
}

function hola() {
  return 'Hola, que tal';
}

console.log('Escuchando en el puerto 3000');
