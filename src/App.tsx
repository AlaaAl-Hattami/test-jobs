import FurnitureSection from "./components/FurnitureSection";
import Hero from "./components/Hero";
import MainHighlight from "./components/MainHighlight";
import NewInStore from "./components/NewInStore";

export default function App() {
  return (
    <div>
      <Hero />
      <FurnitureSection />
      <NewInStore />
      <MainHighlight />
    </div>
  );
}
