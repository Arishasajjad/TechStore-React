import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Products(){

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");



    useEffect(() => {


        const fetchProducts = async () => {


            try {


                const categories = [
                    "smartphones",
                    "laptops",
                    "tablets",
                    "mobile-accessories"
                ];



                const requests = categories.map((category) =>

                    fetch(
                        `https://dummyjson.com/products/category/${category}`
                    )
                    .then((res)=>{

                        if(!res.ok){

                            throw new Error("Failed to fetch products");

                        }

                        return res.json();

                    })

                );



                const results = await Promise.all(requests);



                const techProducts = results.flatMap(
                    (result)=> result.products
                );



                setProducts(techProducts);

                setLoading(false);



            } catch(error) {


                setError(error.message);

                setLoading(false);


            }


        };



        fetchProducts();



    },[]);






    const filteredProducts = products.filter((product)=>{


        return product.title

        .toLowerCase()

        .includes(search.toLowerCase());


    });





    if(loading){

        return (

            <>

            <Navbar />


            <section className="loading-page">

                <div className="loader"></div>


                <h2>
                    Loading Latest Tech Products...
                </h2>


            </section>


            <Footer />


            </>

        );

    }





    if(error){

        return (

            <>

            <Navbar />


            <h2>
                {error}
            </h2>


            <Footer />

            </>

        );

    }





    return(


        <>

        <Navbar />



        <section className="products">


            <h2>
                Discover Latest Tech
            </h2>



            <p>
                Explore laptops, phones, tablets and accessories
            </p>





            <input

                type="text"

                placeholder="Search tech products..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="search-box"

            />







            <div className="product-grid">



                {

                filteredProducts.map((product)=>(


                    <div

                    className="product-card"

                    key={product.id}

                    >



                        <img

                        src={product.thumbnail}

                        alt={product.title}

                        />





                        <h3>

                            {product.title}

                        </h3>





                        <h4 className="price">

                            PKR {(product.price * 280).toLocaleString()}

                        </h4>





                        <p>

                            {product.description}

                        </p>





                        <Link to={`/products/${product.id}`}>


                            <button className="btn-primary buy-btn">

                                View Details

                            </button>


                        </Link>



                    </div>


                ))


                }



            </div>



        </section>



        <Footer />

        </>

    );


}



export default Products;