const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    addProduct(product) {
        let products = this.getProducts();
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        product.id = id;
        products.push(product);
        this.saveProducts(products);
        console.log(`Producto '${product.title}' agregado con éxito.`);
    }

    getProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.log("Error al cargar productos:", err);
            return [];
        }
    }

    getProductById(id) {
        const products = this.getProducts();
        return products.find(product => product.id === id);
    }

    updateProduct(id, updatedFields) {
        let products = this.getProducts();
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...updatedFields };
            this.saveProducts(products);
            console.log(`Producto con ID ${id} actualizado con éxito.`);
        } else {
            console.log(`No se encontró un producto con el ID ${id}.`);
        }
    }

    deleteProduct(id) {
        let products = this.getProducts();
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            const removedProduct = products.splice(index, 1)[0];
            this.saveProducts(products);
            console.log(`Producto '${removedProduct.title}' eliminado con éxito.`);
        } else {
            console.log(`No se encontró un producto con el ID ${id}.`);
        }
    }

    saveProducts(products) {
        try {
            const data = JSON.stringify(products, null, 2);
            fs.writeFileSync(this.path, data);
        } catch (err) {
            console.log("Error al guardar productos:", err);
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager('productos.json');

productManager.addProduct({ title: "Producto A", description: "Descripción A", price: 45, thumbnail: "imagen_a.jpg", code: 1, stock: 50 });
productManager.addProduct({ title: "Producto B", description: "Descripción B", price: 78, thumbnail: "imagen_b.jpg", code: 2, stock: 30 });

console.log("Productos:", productManager.getProducts());

console.log("Producto con ID 1:", productManager.getProductById(1));

productManager.updateProduct(1, { price: 20, stock: 60 });

productManager.deleteProduct(2);

console.log("Productos actualizados:", productManager.getProducts());
