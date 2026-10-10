const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


const basePath = process.pkg ? path.dirname(process.execPath) : __dirname;

app.use(express.static(basePath));


app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor de tarjeta perforada corriendo en http://localhost:${PORT}`);
});