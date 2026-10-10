const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Definir la ruta base para que funcione tanto normal como dentro del archivo .exe
const basePath = process.pkg ? path.dirname(process.execPath) : __dirname;

// Servir archivos estáticos
app.use(express.static(basePath));

// Ruta principal que carga el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor de tarjeta perforada corriendo en http://localhost:${PORT}`);
});