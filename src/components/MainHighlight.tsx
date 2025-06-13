import { motion } from "framer-motion";

const MainHighlight = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10 bg-white ml-10">
      {/* Left side - Text */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
          The Best Furniture <br /> Manufacturer Of Your Choice
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future. Furnitre <br /> power is a software as
          services \
        </p>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        className="flex-1 w-full flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/pexels-fotoaibe-1668860.jpg"
          alt="Modern kitchen"
          className="rounded-xl shadow-md w-[600px] h-[300px] max-w-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default MainHighlight;
