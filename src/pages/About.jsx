import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


function About(){

    return(

        <>

        <Navbar />


        <section className="about-simple">


            <div className="about-text">


                <span>
                    ABOUT NOVATECH
                </span>


                <h1>
                    Technology Made Simple
                </h1>


                <p>
                    NovaTech provides modern laptops,
                    smartphones and accessories with
                    a smooth and reliable shopping experience.
                </p>


                <Link to="/products">

                    <button className="btn-primary">
                        Explore Products
                    </button>

                </Link>


            </div>



            

        </section>





        <section className="about-features">


            <div>

                <h3>
                    ⚡ Latest Tech
                </h3>

                <p>
                    Discover modern devices
                    from trusted brands.
                </p>

            </div>



            <div>

                <h3>
                    🔒 Secure Shopping
                </h3>

                <p>
                    Safe and simple online
                    shopping experience.
                </p>

            </div>



            <div>

                <h3>
                    🚀 Customer Support
                </h3>

                <p>
                    We are always here
                    to help you.
                </p>

            </div>


        </section>



        <Footer />

        </>

    );

}


export default About;