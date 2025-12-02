const express = require('express');
const app = express();
const port = 3000;

// Middleware para usar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando correctamente 😎 mira esto es lo que modifique desde la laptop asus amigo');
});

// Ruta de prueba tipo API
app.get('/api/status', (req, res) => {
  res.json({
    ok: true,
    message: 'API lista y corriendo',
    hora: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});