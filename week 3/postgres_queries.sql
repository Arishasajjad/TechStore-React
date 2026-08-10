-- Query 1: Get all users
SELECT * FROM users;


-- Query 2: Get all products
SELECT * FROM products;


-- Query 3: Get all orders with user and product details
SELECT
    u.name AS user_name,
    o.order_id,
    o.total_price,
    o.status,
    p.name AS product_name,
    oi.quantity
FROM users u
JOIN orders o
    ON u.user_id = o.user_id
JOIN order_items oi
    ON o.order_id = oi.order_id
JOIN products p
    ON oi.product_id = p.product_id;