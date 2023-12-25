const express = require('express');
const { getMonitor } = require("consulta-dolar-venezuela");

const app = express();
const port = 5000; // Puedes cambiar el puerto si es necesario

// Todas las Tasas de Cambio
app.get('/api/all', async (req, res) => {
    /*Obtener los valores de todos los monitores*/
    const tasa = await getMonitor("null")
    res.json(tasa);
});


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
