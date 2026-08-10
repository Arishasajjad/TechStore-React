import mongoose from "mongoose";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

mongoose.connect("mongodb://127.0.0.1:27017/techstore")
.then(async () => {

    console.log("✅ MongoDB Connected");

    // Delete old data (optional)
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});

    // Create a user
    const user = await User.create({
        name: "Arisha Sajjad",
        email: "arisha@gmail.com",
        password: "123456"
    });

    // Create products
    const laptop = await Product.create({
        name: "Laptop",
        category: "Electronics",
        price: 150000,
        stock: 10,
        image: "laptop.jpg"
    });

    const phone = await Product.create({
        name: "iPhone",
        category: "Electronics",
        price: 250000,
        stock: 5,
        image: "iphone.jpg"
    });

    // Create an order
    await Order.create({
        user: user._id,
        products: [laptop._id, phone._id],
        totalPrice: 400000,
        status: "Pending"
    });

    console.log("✅ Sample Data Inserted");

    mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});