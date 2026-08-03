import { Link } from "react-router-dom";
import laptop from "../assets/images/laptop.jpeg";
import iphone from "../assets/images/iphone.jpeg";
import headphones from "../assets/images/headphones.jpeg";

function ProductCard({ product }) {

    const imageMap = {
        1: laptop,
        2: iphone,
        3: headphones
    };

    return (
        <div className="product-card">

            <img
                src={imageMap[product.id]}
                alt={product.name}
            />

            <span className="badge">
                {product.id === 1
                    ? "New"
                    : product.id === 2
                    ? "Popular"
                    : "Hot"}
            </span>

            <h3>{product.name}</h3>

            <p className="price">
                {product.price}
            </p>

           <Link to="/products">
    <button className="btn-primary buy-btn">
        Buy Now
    </button>
</Link>

        </div>
    );
}

export default ProductCard;