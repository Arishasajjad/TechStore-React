import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

await User.db.asPromise();


// Query 1: Get all users
const users = await User.find();
console.log("\n--- Query 1: All Users ---");
console.log(users);


// Query 2: Get all products
const products = await Product.find();
console.log("\n--- Query 2: All Products ---");
console.log(products);


// Query 3: Get all orders with user and product details
const orders = await Order.find()
  .populate("user")
  .populate("products");

console.log("\n--- Query 3: Orders with User and Products ---");
console.log(orders);