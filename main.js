// Importar las clases
const TicketManager = require('./src/eventos/TicketManager');
const ProductManager = require('./src/productos/ProductManager');

// Crear instancias de los gestores
const ticketManager = new TicketManager();
const productManager = new ProductManager();

// Agregar eventos y productos de ejemplo
ticketManager.agregarEvento("Concierto", "Estadio", 100);
ticketManager.agregarEvento("Conferencia", "Centro de Convenciones", 50, 200, new Date('2024-02-15'));

productManager.addProduct({ title: "Producto A", description: "Descripción A", price: 29.99, thumbnail: "imagen_a.jpg", code: 1, stock: 50 });
productManager.addProduct({ title: "Producto B", description: "Descripción B", price: 49.99, thumbnail: "imagen_b.jpg", code: 2, stock: 30 });

// Mostrar eventos y productos
ticketManager.getEventos();
productManager.displayProducts();
