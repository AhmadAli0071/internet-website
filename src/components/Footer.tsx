
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Packages', href: '/packages' },
    { name: 'Buy Internet & TV', href: '/buy' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    'High-Speed Internet',
    'Premium TV Packages',
    'Bundle Deals',
    'Business Solutions',
    '24/7 Support'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-50"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SkyConnect
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting You to the Sky — Fast. Reliable. Limitless.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Premium internet and TV services across the United States with cutting-edge technology and unmatched customer support.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300 mb-1">Address:</p>
                    <p className="text-gray-400 leading-relaxed">9528 Miramar Rd<br />San Diego, CA 92126</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <Phone className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300 mb-1">Phone:</p>
                    <p className="text-gray-400">+1 (818) 660-0126</p>
                    <p className="text-gray-400">+1 (952) 592-0128</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300 mb-1">Email:</p>
                    <p className="text-gray-400">info@skyconnect.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 SkyConnect. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
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
