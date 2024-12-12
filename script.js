//first commit
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

const chicken = new PerishableProductProperties("Chicken", 6.89, 25, "2024-12-18");
const potatoes = new PerishableProductProperties("Potatoes", 3.99, 40, "2024-12-31");

class Product {
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price *= (1 - discount);
        });
    }
}

class Store {
    constructor() {
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

const store = new Store();
store.addProduct(chicken);
store.addProduct(potatoes);

console.log("Total value before discount: $", store.getInventoryValue().toFixed(2));


