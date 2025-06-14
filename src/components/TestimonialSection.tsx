import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Josh Smith",
    position: "Manager of The New York Times",
    message:
      "They have a perfect touch for making something so professional, interesting and useful for a lot of people.",
    image: "/pexels-fotoaibe-1668860.jpg",
  },
  {
    name: "Sarah Johnson",
    position: "CEO of Creative Minds",
    message:
      "Absolutely wonderful experience! They brought our vision to life better than we imagined.",
    image: "/aranprime-KbytCpI1i5I-unsplash.jpg",
  },
  {
    name: "Mohammed Ali",
    position: "Developer at Techie Co.",
    message:
      "Their work is outstanding and their dedication to quality is unmatched. Highly recommended.",
    image: "/istockphoto-942917354-1024x1024.jpg",
  },
];

function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setActiveButton("prev");
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setActiveButton("next");
  };

  const current = testimonials[index];

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row bg-white py-16 px-6 lg:px-20"
    >
      {/* اليسار: الشهادة */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
          What People Are Saying About Us
        </h2>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <img
              src={current.image}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-gray-200"
            />
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {current.name}
              </p>
              <p className="text-gray-600 text-sm">{current.position}</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            "{current.message}"
          </p>
        </div>

        {/* الأزرار في الشاشات الكبيرة فقط */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={handlePrev}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
              activeButton === "prev"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className={`w-12 h-12 cursor-pointer rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none  ${
              activeButton === "next"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* اليمين: الصورة + أزرار التنقل للشاشات الصغيرة */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.2,
        }}
        className="lg:w-1/2 flex flex-col items-center justify-center p-6"
      >
        <div className="w-[650px] max-w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={current.image}
            alt="Testimonial Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* الأزرار في الشاشات الصغيرة فقط */}
        <div className="flex lg:hidden space-x-4 mt-6">
          <button
            onClick={handlePrev}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none  ${
              activeButton === "prev"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
              activeButton === "next"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default TestimonialSection;
