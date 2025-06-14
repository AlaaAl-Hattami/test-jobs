import { useEffect, useState } from "react";
import AllProduct from "./components/AllProduct";
import Footer from "./components/Footer";
import FurnitureSection from "./components/FurnitureSection";
import Hero from "./components/Hero";
import MainHighlight from "./components/MainHighlight";
import NewInStore from "./components/NewInStore";
import NewsletterBanner from "./components/NewsletterBanner";
import TestimonialSection from "./components/TestimonialSection";
import Loader from "./components/Loader"; // 👈 إضافة شاشة التحميل

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main>
      {/* القسم الرئيسي - الصفحة الأولى */}
      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>

      {/* قسم من نحن أو نبذة */}
      <section id="about" className="scroll-mt-16">
        <FurnitureSection />
      </section>

      {/* الميزات والمنتجات */}
      <section id="features" className="scroll-mt-16">
        <NewInStore />
        <MainHighlight />
        <div id="all-products">
          <AllProduct />
        </div>
      </section>

      {/* آراء العملاء والنشرة البريدية والفوتر */}
      <section id="contact" className="scroll-mt-16">
        <TestimonialSection />
        <NewsletterBanner />
        <Footer />
      </section>
    </main>
  );
}
