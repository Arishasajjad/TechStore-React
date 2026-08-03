import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";


function Contact(){

    const [message, setMessage] = useState("");



    const handleSubmit = (e) => {

        e.preventDefault();


        setMessage("✅ Your message has been sent successfully!");


        setTimeout(() => {

            setMessage("");

        },3000);

    };



    return(

        <>

        <Navbar />



        <section className="contact-modern">


            <div className="contact-heading">


                <span>
                    CONTACT NOVATECH
                </span>


                <h1>
                    Let's Talk Technology
                </h1>


                <p>
                    Have a question about products or orders?
                    Our team is ready to help.
                </p>


            </div>




            <div className="contact-container">



                <div className="contact-info">


                    <div className="info-card">

                        <h3>
                            📧 Email
                        </h3>

                        <p>
                            support@novatech.com
                        </p>

                    </div>



                    <div className="info-card">

                        <h3>
                            📞 Phone
                        </h3>

                        <p>
                            +92 300 1234567
                        </p>

                    </div>



                    <div className="info-card">

                        <h3>
                            📍 Location
                        </h3>

                        <p>
                            Karachi, Pakistan
                        </p>

                    </div>


                </div>





                <form 
                className="contact-form"
                onSubmit={handleSubmit}
                >


                    <input

                    type="text"

                    placeholder="Your Name"

                    required

                    />



                    <input

                    type="email"

                    placeholder="Your Email"

                    required

                    />



                    <textarea

                    placeholder="Your Message"

                    required

                    ></textarea>




                    <button 
                    className="btn-primary"
                    type="submit"
                    >

                        Send Message

                    </button>



                </form>



            </div>



            {
                message && (

                    <div className="toast">

                        {message}

                    </div>

                )
            }



        </section>




        <Footer />

        </>

    );

}


export default Contact;