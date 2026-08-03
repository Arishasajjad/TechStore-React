import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Cart(){

    const {cart, removeFromCart} = useContext(CartContext);



    return(

        <section className="products">


            <h2>
                Shopping Cart
            </h2>



            {
                cart.length === 0 ?

                <h3>
                    Cart is Empty
                </h3>


                :


                <div className="product-grid">

                {

                    cart.map((item)=>(


                        <div 
                        className="product-card"
                        key={item.id}
                        >


                            <img

                            src={item.thumbnail}

                            alt={item.title}

                            />


                            <h3>
                                {item.title}
                            </h3>


                            <p className="price">
                                PKR {item.price * 280}
                            </p>



                            <button

                            className="btn-primary"

                            onClick={()=>removeFromCart(item.id)}

                            >

                            Remove

                            </button>


                        </div>


                    ))

                }

                </div>


            }


        </section>

    );

}


export default Cart;