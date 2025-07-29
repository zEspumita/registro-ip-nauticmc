const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;    

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  fs.appendFile('ips.txt', ip + '\n', err => {
    if (err) console.error('Error al guardar IP:', err);
  });

  res.send(`
    <h1>NORMAS MUTEOS NAUTICMC</h1>
    <p>Tu IP ha sido registrada.</p>
  `);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
