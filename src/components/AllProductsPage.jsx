// components/AllProductsPage.jsx
export default function AllProductsPage() {
  const items = [
    { title: "Chair", image: "/pexels-heyho-6580227.jpg" },
    { title: "Bed", image: "/istockphoto-942917354-1024x1024.jpg" },
    { title: "Cupboard", image: "/istockphoto-942917354-1024x1024.jpg" },
    { title: "Lighting", image: "/istockphoto-942917354-1024x1024.jpg" },
    // أضف المزيد هنا لو أردت
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10">
      <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-lg font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 