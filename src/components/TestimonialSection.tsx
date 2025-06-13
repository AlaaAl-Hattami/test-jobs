import React from "react";

function TestimonialSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-white py-16 px-6 lg:px-20">
      {/* اليسار: الشهادة */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        {/* العنوان */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
          What People Are Saying About Us
        </h2>

        {/* بطاقة الشهادة */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <img
              src="/pexels-fotoaibe-1668860.jpg"
              alt="Josh Smith"
              className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-gray-200"
            />
            <div>
              <p className="text-xl font-semibold text-gray-900">Josh Smith</p>
              <p className="text-gray-600 text-sm">
                Manager of The New York Times
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            "They are have a perfect touch for make something so professional,
            interest and useful for a lot of people."
          </p>
        </div>

        {/* الأسهم */}
        <div className="flex space-x-4 mt-auto">
          <button className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors">
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
          <button className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition-colors">
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
      </div>

      {/* اليمين: صورة ثابتة */}
      <div className="lg:w-1/2 w-full h-96 lg:h-[600px] overflow-hidden rounded-2xl flex items-center justify-center">
        <img
          src="/pexels-fotoaibe-1668860.jpg"
          alt="Testimonial Background"
          className="w-[650px] h-[400px] object-cover rounded-md"
        />
      </div>
    </section>
  );
}

export default TestimonialSection;
