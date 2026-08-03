import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsSection() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/products/category/smartphones")
            .then(res => res.json())
            .then(data => {

                // Only keep the first 3 products
                setProducts(data.products.slice(0, 3));

            });

    }, []);

    return (

        <section className="products">

            <h2>Featured Products</h2>

            <p>Our most popular gadgets.</p>

            <div className="product-grid">

                {products.map((product) => (

                    <div
                        className="product-card"
                        key={product.id}
                    >

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />

                        <span className="badge">
                            {product.id === products[0].id
                                ? "New"
                                : product.id === products[1].id
                                ? "Popular"
                                : "Hot"}
                        </span>

                        <h3>{product.title}</h3>

                        <p className="price">
                            PKR {(product.price * 280).toLocaleString()}
                        </p>

                        <Link to={`/products/${product.id}`}>
                            <button className="btn-primary buy-btn">
                                Buy Now
                            </button>
                        </Link>

                    </div>

                ))}

            </div>

            <div className="view-more">

                <Link to="/products">

                    <button className="btn-primary">
                        View More Products
                    </button>

                </Link>

            </div>

        </section>

    );

}

export default ProductsSection;