import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const FurnitureSection = () => {
  return (
    <section className="py-16 bg-white mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-[90%] max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start gap-20"
      >
        {/* الصورة */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="/istockphoto-942917354-1024x1024.jpg"
            alt="Furniture"
            className="rounded-xl object-cover w-full max-w-md h-[400px]"
          />
        </div>

        {/* النصوص */}
        <div className="w-full md:w-[60%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            We Create Your Home <br /> More Aesthetic
          </h2>
          <p className="text-gray-600 mb-8">
            Furniture power is a software as services for multipurpose <br />
            business management system,
          </p>

          {/* نقاط الخدمات */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
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
            </div>

            <div className="flex items-start gap-4">
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
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FurnitureSection;
