import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2>Loading Product...</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="product-details">
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div>
          <h1>{product.title}</h1>

          <h2>PKR {product.price * 280}</h2>

          <p>{product.description}</p>

          <button
    className="btn-primary"
    onClick={() => addToCart(product)}
>
    Add To Cart
</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;