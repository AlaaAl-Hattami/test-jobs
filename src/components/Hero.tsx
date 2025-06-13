import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen font-sans  relative">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center pb-24"
        style={{
          backgroundImage: "url('/johnny-briggs-Asheyr3zRLE-unsplash.jpg')",
        }}
      >
        {/* Gradient fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/30 to-transparent z-20" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Navbar */}
        <motion.nav
          className="absolute top-0 left-0 w-full px-4 py-4    z-50"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <h1 className="text-xl md:text-2xl font-bold">FurniShop</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4 md:space-x-6 text-sm md:text-base">
              {["Home", "About", "Features", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none z-60"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Panel */}
          {isOpen && (
            <ul className="md:hidden mt-4 px-2 space-y-2 text-white text-sm bg-black/60 rounded-lg shadow-lg backdrop-blur-md py-4 z-50 relative">
              {["Home", "About", "Features", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-white/10 rounded transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          className="relative z-30 flex flex-col justify-center items-center text-center text-white h-full px-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="
    text-3xl md:text-5xl font-bold mb-2
    leading-snug md:leading-tight
    drop-shadow-md md:drop-shadow-lg
    text-white
    max-w-full
    whitespace-normal
  "
            variants={item}
          >
            Creative Home Simplify Your
            <br />
            <span className="text-4xl md:text-6xl text-white/90 mt-2 block">
              Furniture
            </span>
          </motion.h2>

          <motion.p
            className="max-w-xl mb-6 text-lg md:text-base drop-shadow-md leading-relaxed text-white/80"
            variants={item}
          >
            Explore timeless pieces crafted for modern living crafted for modern
            living.
            <br />
            Elevate your space with style and simplicity.
          </motion.p>

          <motion.button
            className="mb-8 px-12 py-3 cursor-pointer rounded-2xl font-medium text-white bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:scale-105"
            variants={item}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>

      {/* Gray Background below Hero and behind Stats Box */}
      <div className="">
        {/* Stats Box */}
        <motion.div
          className="relative mx-auto bg-[#117672] text-white w-[90%] max-w-7xl rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-0 px-6 py-4 -mt-16 md:-mt-20 z-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[0, 1, 2, 3].map((idx) => (
            <div key={idx} className="relative text-center sm:px-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-white select-none">
                {["7", "2", "10k+", "260+"][idx]}
              </h3>
              <p className="text-sm sm:text-base mt-2 leading-tight whitespace-pre-line">
                {
                  [
                    "Year\nExperience",
                    "Opened\nin the country",
                    "Furniture\nsold",
                    "Variant\nFurniture",
                  ][idx]
                }
              </p>

              {/* Vertical Divider */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-1 bottom-1 right-0 w-px bg-white/60"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
