import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const { cart } = useContext(CartContext);

    return (

        <header className="header">

            <Link to="/" className="logo">
                 NovaTech
            </Link>


            <nav className="navbar">


                <Link to="/">
                    Home
                </Link>


                <Link to="/products">
                    Shop
                </Link>


                <Link to="/about">
                    About
                </Link>


                <Link to="/contact">
                    Contact
                </Link>


                <Link to="/cart" className="cart">

                    🛒

                    <span>
                        Cart
                    </span>


                    {
                        cart.length > 0 && (

                            <small className="cart-count">
                                {cart.length}
                            </small>

                        )
                    }


                </Link>


            </nav>


        </header>

    );

}


export default Navbar;