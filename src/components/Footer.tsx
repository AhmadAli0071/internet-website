
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-white">SkyConnect</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Connecting You to the Sky — Fast. Reliable. Limitless.
            </p>
            <p className="text-sm text-gray-400">
              Premium internet and TV services across the United States.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm hover:text-blue-400 transition-colors">
                  All Packages
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-sm hover:text-blue-400 transition-colors">
                  Buy Internet & TV
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>High-Speed Internet</li>
              <li>Premium TV Packages</li>
              <li>Bundle Deals</li>
              <li>Business Solutions</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="font-medium text-gray-300">Address:</p>
                <p>9528 Miramar Rd<br />San Diego, CA 92126</p>
              </div>
              <div>
                <p className="font-medium text-gray-300">Phone:</p>
                <p>+1 (818) 660-0126</p>
                <p>+1 (952) 592-0128</p>
              </div>
              <div>
                <p className="font-medium text-gray-300">Email:</p>
                <p>info@skyconnect.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Sky Connect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
