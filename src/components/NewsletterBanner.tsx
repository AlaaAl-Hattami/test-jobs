import { motion } from "framer-motion";

const NewsletterBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[550px] flex items-center justify-center md:justify-end px-6 md:px-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg')",
      }}
    >
      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}  // هنا تعديل
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-2">
            Get more discount
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}  // هنا تعديل
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
        >
          Off your order
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}  // هنا تعديل
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-200 text-base sm:text-lg md:text-xl mb-8"
        >
          Join our mailing list
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}  // هنا تعديل
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-5 py-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 transition-all duration-200"
            required
          />
          <button
            type="submit"
            className="flex-shrink-0 px-8 py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors font-semibold text-lg shadow-lg w-full sm:w-auto"
          >
            Shop Now
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
