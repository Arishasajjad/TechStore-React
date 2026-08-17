const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/logger");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(express.json());
app.use(logger);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "TechStore API is running!"
    });
});

// Start server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});