// You must correct a script that is intended to handle calculations for a small e-commerce checkout system. The script includes functions using ES6 syntax but suffers from issues related to type coercion and syntax errors.
// Steps:

//     Identify and correct the type coercion that incorrectly handles the price as a string.
//     Refactor the addItem method to ensure that it correctly validates and adds only items with valid numerical prices.
//     Fix any ES6 syntax errors and ensure the output format is consistent

const checkout = {

items: [],

total: 0,

addItem(item) {

if (typeof item.price !== 'number' || isNaN(item.price)) {

console.log("Invalid price.");

return;
}
this.items.push(item);

this.total += item.price;
console.log("Item successfully added")

},

getTotal() {

return `Total: ${parseFloat(this.total).toFixed(2)};` } };

checkout.addItem({ name: "Coffee Maker", price: 99.95 });

checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Expected issue ! 
