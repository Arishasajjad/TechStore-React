
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProductsSection from "../Components/ProductsSection";
import Features from "../Components/Features";
import Reviews from "../Components/Reviews";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductsSection />
      <Features />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;