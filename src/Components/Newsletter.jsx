import { useState } from "react";


function Newsletter(){

    const [message, setMessage] = useState("");



    const handleSubscribe = (e) => {

        e.preventDefault();


        setMessage("✅ Newsletter subscribed successfully!");


        setTimeout(() => {

            setMessage("");

        },3000);

    };



    return(

        <section className="newsletter">


            <h2>
                Subscribe To Our Newsletter
            </h2>


            <p>
                Get updates about latest technology products and offers.
            </p>



            <form onSubmit={handleSubscribe}>


                <input

                type="email"

                placeholder="Enter your email"

                required

                />


                <button 
                className="btn-primary"
                type="submit"
                >

                    Subscribe

                </button>


            </form>



            {
                message && (

                    <div className="toast">

                        {message}

                    </div>

                )
            }


        </section>

    );

}


export default Newsletter;