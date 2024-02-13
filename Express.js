const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const PRODUCTS_FILE = 'productos.json'; // Nombre del archivo de productos

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
    fs.readFile(PRODUCTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo de productos:", err);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        let products = JSON.parse(data);

        // Verificar si se proporcionó un límite en los parámetros de consulta (?limit=)
        const limit = parseInt(req.query.limit);
        if (!isNaN(limit) && limit > 0) {
            products = products.slice(0, limit); // Aplicar el límite de resultados
        }

        res.json(products);
    });
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);

    fs.readFile(PRODUCTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo de productos:", err);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        const products = JSON.parse(data);
        const product = products.find(p => p.id === productId);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(product);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
