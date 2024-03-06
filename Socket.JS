const express = require('express');
const exphbs  = require('express-handlebars');
const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Configuración de Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configuración de las rutas
app.get('/', (req, res) => {
    // Renderizar la vista home.handlebars con la lista de productos
    res.render('home', { productos: obtenerProductos() });
});

app.get('/realtimeproducts', (req, res) => {
    // Renderizar la vista realTimeProducts.handlebars con la lista de productos
    res.render('realTimeProducts', { productos: obtenerProductos() });
});

// Lógica de negocio para agregar y eliminar productos
// Emitir eventos de socket.io cuando se agregue o elimine un producto
// Escuchar estos eventos en el cliente y actualizar la lista de productos en la vista realTimeProducts.handlebars

// Iniciar el servidor
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Función para obtener productos (simulación)
function obtenerProductos() {
    return JSON.parse(fs.readFileSync('productos.json', 'utf8'));
}
