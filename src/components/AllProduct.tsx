import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Ceiling Light",
    image: "/istockphoto-1015165702-1024x1024.jpg",
    price: 75,
    oldPrice: 82,
  },
  {
    name: "Wood Chair",
    image: "/istockphoto-869078270-1024x1024.jpg",
    price: 50,
    oldPrice: 70,
  },
  {
    name: "Papper Cupboard",
    image: "/istockphoto-1474579509-1024x1024.jpg",
    price: 105,
    oldPrice: 120,
  },
  {
    name: "Ole Gundorse Spring...",
    image: "/istockphoto-1474579509-1024x1024.jpg",
    price: 82,
    oldPrice: 100,
  },
  {
    name: "Treos Seroes 911",
    image: "/istockphoto-1474579509-1024x1024.jpg",
    price: 200,
    oldPrice: 210,
  },
  {
    name: "Multi Bilderman Slibber...",
    image: "/istockphoto-1015165702-1024x1024.jpg",
    price: 45,
    oldPrice: 50,
  },
  {
    name: "XORA Corner Desk",
    image: "/istockphoto-1015165702-1024x1024.jpg",
    price: 320,
    oldPrice: 325,
  },
  {
    name: "Black Forest Series Wo...",
    image: "/istockphoto-1015165702-1024x1024.jpg",
    price: 225,
    oldPrice: 240,
  },
];

const AllProduct = () => {
  return (
    <section className="px-4 md:px-20 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">All Product</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        The products we provide only for you as our service are selected from the
        best products with number 1 quality in the world
      </p>

      {/* المنتجات */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="relative w-[260px] h-[250px] rounded-xl border border-gray-200  p-4 overflow-hidden hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-md"
              />
              <button className="absolute bottom-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow">
                <Plus className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            <div className="mt-3 text-left w-full px-1">
              <h3 className="text-base font-semibold text-gray-800 truncate">
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
      </div>

      {/* Pagination مميز */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-100 transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        {[1, 2, 3, 4].map((page) => (
          <div
            key={page}
            className={`w-2.5 h-2.5 rounded-full transition ${
              page === 1 ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
        <button className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-100 transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default AllProduct;
