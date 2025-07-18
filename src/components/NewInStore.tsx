import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const items = [
  { title: "Chair", image: "/pexels-heyho-6580227.jpg" },
  { title: "Cupboard", image: "/sanibell-bv-r2SxETsa5SA-unsplash.jpg" },
  {
    title: "Bed",
    image: "/albero-furniture-bratislava-u88zDvr5V6g-unsplash.jpg",
  },
  { title: "Lighting", image: "/reinaldo-EQz1tZWS1hM-unsplash.jpg" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function NewInStore() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12">
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-[300px] flex flex-col md:ml-0 pr-4 md:pr-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            New In
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Store Now
          </h2>
          <p className="text-gray-600 mb-6 md:mb-10 pt-6 md:pt-14 leading-relaxed text-base md:text-lg">
            Get the latest items immediately <br /> with promo prices
          </p>
          <a
            href="#all-products"
            className="inline-flex items-center text-black font-semibold underline underline-offset-4 transition-colors duration-300 hover:text-emerald-700"
          >
            Check All
            <span className="ml-2 text-xl underline-offset-0">→</span>
          </a>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 flex-1"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="
                relative 
                w-[160px] sm:w-[180px] md:w-[220px] 
                h-64 md:h-80 
                rounded-md 
                overflow-hidden 
                shadow-lg 
                group 
                cursor-pointer
                transition-transform 
                duration-500 

                hover:scale-105
                hover:shadow-2xl
                hover:z-10
                hover:brightness-110
                hover:-translate-y-2
              "
              variants={itemVariants}
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full 
                  h-full 
                  object-cover 
                  transition-transform 
                  duration-500 

                  group-hover:scale-110
                "
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl font-bold drop-shadow-md text-center pointer-events-none">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
