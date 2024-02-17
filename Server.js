const express = require('express');

const app = express();
const PORT = 8080;

// Middleware para manejar el body de las solicitudes JSON
app.use(express.json());

// Enrutador para '/products'
const productsRouter = express.Router();
productsRouter.get('/', (req, res) => {
    // Aquí puedes devolver una lista de productos
    res.send('Lista de productos');
});
app.use('/products', productsRouter);

// Enrutador para '/carts'
const cartsRouter = express.Router();
cartsRouter.get('/', (req, res) => {
    // Aquí puedes devolver información sobre el carrito de compras
    res.send('Información del carrito de compras');
});
app.use('/carts', cartsRouter);

// Manejador de ruta predeterminado
app.get('/', (req, res) => {
    res.send('¡Bienvenido! Este es un servidor con rutas /products y /carts.');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
