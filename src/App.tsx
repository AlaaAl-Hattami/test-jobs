import AllProduct from "./components/AllProduct";
import FurnitureSection from "./components/FurnitureSection";
import Hero from "./components/Hero";
import MainHighlight from "./components/MainHighlight";
import NewInStore from "./components/NewInStore";
import TestimonialSection from "./components/TestimonialSection";

export default function App() {
  return (
    <div>
      <Hero />
      <FurnitureSection />
      <NewInStore />
      <MainHighlight />
      <AllProduct />
      <TestimonialSection />
    </div>
  );
}
