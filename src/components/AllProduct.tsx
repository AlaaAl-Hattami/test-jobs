import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  { name: "Ceiling Light", image: "/istockphoto-1015165702-1024x1024.jpg", price: 75, oldPrice: 82 },
  { name: "Wood Chair", image: "/istockphoto-869078270-1024x1024.jpg", price: 50, oldPrice: 70 },
  { name: "Papper Cupboard", image: "/istockphoto-1474579509-1024x1024.jpg", price: 105, oldPrice: 120 },
  { name: "Ole Gundorse Spring...", image: "/istockphoto-1474579509-1024x1024.jpg", price: 82, oldPrice: 100 },
  { name: "Treos Seroes 911", image: "/istockphoto-1474579509-1024x1024.jpg", price: 200, oldPrice: 210 },
  { name: "Multi Bilderman Slibber...", image: "/istockphoto-1015165702-1024x1024.jpg", price: 45, oldPrice: 50 },
  { name: "XORA Corner Desk", image: "/istockphoto-1015165702-1024x1024.jpg", price: 320, oldPrice: 325 },
  { name: "Black Forest Series Wo...", image: "/istockphoto-1015165702-1024x1024.jpg", price: 225, oldPrice: 240 },
   { name: "Ceiling Light", image: "/istockphoto-1015165702-1024x1024.jpg", price: 75, oldPrice: 82 },
  { name: "Wood Chair", image: "/istockphoto-869078270-1024x1024.jpg", price: 50, oldPrice: 70 },
  { name: "Papper Cupboard", image: "/istockphoto-1474579509-1024x1024.jpg", price: 105, oldPrice: 120 },
  { name: "Ole Gundorse Spring...", image: "/istockphoto-1474579509-1024x1024.jpg", price: 82, oldPrice: 100 },
  { name: "Treos Seroes 911", image: "/istockphoto-1474579509-1024x1024.jpg", price: 200, oldPrice: 210 },
  { name: "Multi Bilderman Slibber...", image: "/istockphoto-1015165702-1024x1024.jpg", price: 45, oldPrice: 50 },
  { name: "XORA Corner Desk", image: "/istockphoto-1015165702-1024x1024.jpg", price: 320, oldPrice: 325 },
  { name: "Black Forest Series Wo...", image: "/istockphoto-1015165702-1024x1024.jpg", price: 225, oldPrice: 240 },
];

const ITEMS_PER_PAGE = 4; // عدد المنتجات لكل صفحة

const AllProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = Math.ceil(products.length / ITEMS_PER_PAGE) - 1;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const paginatedProducts = products.slice(
    currentIndex * ITEMS_PER_PAGE,
    (currentIndex + 1) * ITEMS_PER_PAGE
  );

  return (
    <section className="px-4 sm:px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">All Product</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12 px-2 sm:px-0">
        The products we provide only for you as our service are selected from the best
        products with number 1 quality in the world
      </p>

      {/* السلايدر */}
      <motion.div
        key={currentIndex} // ضروري عشان تحريك framer-motion عند التبديل
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-center"
      >
        {paginatedProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-start mx-auto max-w-[260px] w-full"
          >
            <div className="relative w-full h-[250px] rounded-xl border border-gray-200 p-4 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition-colors duration-200 cursor-pointer">
                <Plus className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            <div className="mt-3 text-left w-full px-1">
              <h3
                className="text-base font-semibold text-gray-800 truncate"
                title={product.name}
              >
                {product.name}
              </h3>
              <div className="mt-1">
                <span className="text-lg font-bold text-gray-900 mr-2">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* أزرار السلايدر */}
      <div className="flex justify-center items-center gap-4 mt-4 ">
        <button
          onClick={handlePrev}
          className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {[...Array(Math.ceil(products.length / ITEMS_PER_PAGE))].map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}

        <button
          onClick={handleNext}
          className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Next Page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default AllProduct;
