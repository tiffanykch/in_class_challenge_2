//TASK 1: WORKING WITH ARRAYS - PRODUCT INVENTORY MANAGEMENT

//Create array containing objects with properties
let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Desk Chair", price: 800, category: "Furniture"},
    {name: "Notebook", price: 5, category: "Stationery"}
]

// //Create function that filters products based on category
// function getProductsByCategory(products, category) {
//     return products.filter(product => product.category == category);
// }

// console.log(getProductsByCategory(products, "Electronics"));

// TASK 2: ARRAY METHODS - APPLYING DISCOUNT TO PRODUCTS
console.log(products)
console.log("*".repeat(20))

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }

    ))
}

console.log(applyDiscount(products, 0.1));
console.log("*".repeat(20))
console.log(products)