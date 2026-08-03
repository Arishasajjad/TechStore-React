import { Link } from "react-router-dom";

function Hero(){

    return(

        <section className="hero">


            <div className="hero-text">


                <span className="hero-tag">
                    🚀 New Collection 2026
                </span>


                <h2>
                    Upgrade Your Digital Setup
                </h2>


                <p>
                    Explore premium laptops,
                    smartphones, headphones,
                    gaming gear and smart accessories
                    designed for students, professionals
                    and creators.
                </p>


                <div className="hero-buttons">

                    <Link to="/products">

    <button className="btn-primary">
        Shop Now
    </button>

</Link>


                </div>


                <div className="hero-stats">


                    <div>
                        <h3>15K+</h3>
                        <span>Happy Customers</span>
                    </div>


                    <div>
                        <h3>500+</h3>
                        <span>Products</span>
                    </div>


                    <div>
                        <h3>4.9★</h3>
                        <span>Customer Rating</span>
                    </div>


                </div>


            </div>




        </section>

    );

}


export default Hero;