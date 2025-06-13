const items = [
  { title: "Chair", image: "/istockphoto-942917354-1024x1024.jpg" },
  { title: "Bed", image: "/istockphoto-942917354-1024x1024.jpg" },
  { title: "Cupboard", image: "/istockphoto-942917354-1024x1024.jpg" },
  { title: "Lighting", image: "/istockphoto-942917354-1024x1024.jpg" },
];

export default function NewInStore() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12">
        {/* Left Text Section */}
        <div className="w-full md:w-[300px] flex flex-col md:ml-0 pr-4 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">New In</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Store Now</h2>
          <p className="text-gray-600 mb-6 md:mb-10 pt-6 md:pt-14 leading-relaxed text-base md:text-lg">
            Get the latest items immediately <br /> with promo prices
          </p>
          <a
            href="#"
            className="inline-flex items-center text-black font-semibold underline underline-offset-4"
          >
            Check All
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 flex-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-[160px] sm:w-[180px] md:w-[220px] h-64 md:h-80 rounded-md overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl font-bold drop-shadow-md text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
