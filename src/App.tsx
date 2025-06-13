import AllProduct from "./components/AllProduct";
import Footer from "./components/Footer";
import FurnitureSection from "./components/FurnitureSection";
import Hero from "./components/Hero";
import MainHighlight from "./components/MainHighlight";
import NewInStore from "./components/NewInStore";
import NewsletterBanner from "./components/NewsletterBanner";
import TestimonialSection from "./components/TestimonialSection";

export default function App() {
  return (
    <div>
      {/* Home */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <FurnitureSection />
      </section>

      {/* Features */}
      <section id="features">
        <NewInStore />
        <MainHighlight />
        <div id="all-products">
          <AllProduct />
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <TestimonialSection />
        <NewsletterBanner />
        <Footer />
      </section>
    </div>
  );
}
