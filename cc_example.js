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
function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }

    ))
}

// console.log(applyDiscount(products, 0.1));

// Task 3

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale) => total+sale,0)
}

console.log(`Total Rev. 2024: $${calculateTotalRevenue(sales)}`)

