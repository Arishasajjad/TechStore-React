import { createContext, useState } from "react";


export const CartContext = createContext();



function CartProvider({ children }) {


    const [cart, setCart] = useState([]);


    const [message, setMessage] = useState("");



    // ADD PRODUCT TO CART

    const addToCart = (product) => {


        setCart((previousCart) => [

            ...previousCart,

            product

        ]);



        // show notification

        setMessage(
            `✅ ${product.title} added to cart!`
        );



        // remove notification after 2 seconds

        setTimeout(() => {

            setMessage("");

        }, 2000);


    };



    // REMOVE PRODUCT FROM CART

    const removeFromCart = (id) => {


        setCart((previousCart) =>

            previousCart.filter(

                (item) => item.id !== id

            )

        );


    };



    // EMPTY CART

    const clearCart = () => {


        setCart([]);


    };



    return (

        <CartContext.Provider


            value={{

                cart,

                addToCart,

                removeFromCart,

                clearCart,

                message

            }}


        >

            {children}


        </CartContext.Provider>

    );

}



export default CartProvider;