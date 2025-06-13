import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      {/* الجزء العلوي */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h2 className="text-2xl font-bold">FurniShop</h2>
        <div className="flex gap-3">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Icon className="text-white w-4 h-4" />
              </a>
            )
          )}
        </div>
      </div>

      {/* خط فاصل */}
      <hr className="border-white  mb-10" />

      {/* الأعمدة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Press</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Chairs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Tables</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Sofas</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Lights</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Beds</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Help Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Returns</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Shipping</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Warranty</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Terms of Use</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Cookies</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Accessibility</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Security</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Forums</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Affiliates</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Events</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Ambassadors</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Newsletters</a></li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Alaa Alhattami. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
