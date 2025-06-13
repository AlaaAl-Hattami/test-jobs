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
      <Hero />
      <FurnitureSection />
      <NewInStore />
      <MainHighlight />
      {/* ✅ لف AllProduct داخل div فيه ID */}
      <div id="all-products">
        <AllProduct />
      </div>{" "}
      <TestimonialSection />
      <NewsletterBanner />
      <Footer />
    </div>
  );
}
