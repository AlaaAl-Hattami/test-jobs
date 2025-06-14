import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const FurnitureSection = () => {
  return (
    <section className="py-16 bg-white mt-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-[90%] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start gap-20"
      >
        {/* الصورة */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-[40%] flex justify-center"
        >
          <img
            src="/istockphoto-942917354-1024x1024.jpg"
            alt="Furniture"
            className="rounded-xl object-cover w-full max-w-md h-[400px]"
          />
        </motion.div>

        {/* النصوص */}
        <div className="w-full md:w-[60%]">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug"
          >
            We Create Your Home <br /> More Aesthetic
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            Furniture power is a software as services for multipurpose <br />
            business management system,
          </motion.p>

          {/* نقاط الخدمات */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <CheckCircle className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Valuation Services
                </h4>
                <p className="text-gray-600 text-sm">
                  Sometimes features require a short description. This can be
                  detailed <br /> description
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <CheckCircle className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Development of Furniture Models
                </h4>
                <p className="text-gray-600 text-sm">
                  Sometimes features require a short description. This can be
                  detailed <br /> description
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FurnitureSection;
