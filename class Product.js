class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = []; 
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Producto '${product.title}' agregado con éxito.`);
    }

    removeProduct(productCode) {
        const index = this.products.findIndex(product => product.code === productCode);
        if (index !== -1) {
            const removedProduct = this.products.splice(index, 1)[0];
            console.log(`Producto '${removedProduct.title}' eliminado con éxito.`);
        } else {
            console.log(`No se encontró un producto con el código ${productCode}.`);
        }
    }

    displayProducts() {
        if (this.products.length === 0) {
            console.log("No hay productos en el inventario.");
        } else {
            console.log("Lista de productos:");
            this.products.forEach(product => {
                console.log(`Titulo: ${product.title}, Descripción: ${product.description}, Precio: ${product.price}, ` +
                            `Imagen: ${product.thumbnail}, Código: ${product.code}, Stock: ${product.stock}`);
            });
        }
    }
}

// Ejemplo de uso
// Crear instancias de productos
const product1 = new Product("Producto A", "Descripción A", 29.99, "imagen_a.jpg", 1, 50);
const product2 = new Product("Producto B", "Descripción B", 49.99, "imagen_b.jpg", 2, 30);
const product3 = new Product("Producto C", "Descripción C", 19.99, "imagen_c.jpg", 3, 20);

// Crear un gestor de productos
const productManager = new ProductManager();


productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);

// Mostrar la lista de productos
productManager.displayProducts();

// Eliminar un producto por código
productManager.removeProduct(2);

// Mostrar la lista de productos después de la eliminación
productManager.displayProducts();
