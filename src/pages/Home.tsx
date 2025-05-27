
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { packages } from '@/data/packages';

const Home = () => {
  const popularPackages = packages.filter(pkg => pkg.popular).slice(0, 3);

  const services = [
    {
      icon: '🚀',
      title: 'Ultra Fast Internet',
      description: 'Lightning-fast speeds up to 2 Gbps for seamless streaming and gaming'
    },
    {
      icon: '📺',
      title: '250+ TV Channels',
      description: 'Premium entertainment with HD channels, sports, and on-demand content'
    },
    {
      icon: '🔒',
      title: 'No Contracts',
      description: 'Flexible plans with no long-term commitments or hidden fees'
    },
    {
      icon: '🌐',
      title: 'Nationwide Coverage',
      description: 'Reliable service across the United States with 24/7 support'
    }
  ];

  const handleCallConversion = (phoneNumber: string) => {
    const telUrl = `tel:${phoneNumber}`;
    // @ts-ignore - gtag_report_conversion is defined in index.html
    return window.gtag_report_conversion(telUrl);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Connecting You to the Sky
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-4 animate-fade-in">
              Fast. Reliable. Limitless.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Experience the future of connectivity with SkyConnect's premium internet and TV packages 
              designed for modern living across the United States.
            </p>
            
            {/* Phone Numbers with Call to Queue */}
            <div className="mb-8 space-y-4 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-lg font-semibold text-gray-800">📞 +1 (818) 660-0126</span>
                  <Button 
                    onClick={() => handleCallConversion('+18186600126')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm"
                  >
                    Call to Queue
                  </Button>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-lg font-semibold text-gray-800">📞 +1 (952) 592-0128</span>
                  <Button 
                    onClick={() => handleCallConversion('+19525920128')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm"
                  >
                    Call to Queue
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3">
                <Link to="/packages">View Packages</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-3">
                <Link to="/buy">Buy Internet & TV</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            America's Premier Internet & TV Provider
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            SkyConnect delivers cutting-edge internet and television services to millions of customers 
            across the United States. With our state-of-the-art infrastructure and commitment to excellence, 
            we're revolutionizing how Americans connect, stream, and communicate in the digital age.
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SkyConnect?
            </h2>
            <p className="text-lg text-gray-600">
              Discover the features that make us the preferred choice for internet and TV
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Packages
            </h2>
            <p className="text-lg text-gray-600">
              Our most loved internet and TV bundles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPackages.map((pkg) => (
              <Card key={pkg.id} className="border border-blue-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-blue-500 text-white px-3 py-1 text-sm font-medium">
                  Popular
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                    <p className="text-blue-600 font-medium">{pkg.provider}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Internet Speed:</span>
                      <span className="font-semibold text-gray-900">{pkg.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">TV Channels:</span>
                      <span className="font-semibold text-gray-900">{pkg.channels}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ${pkg.price}/mo
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      Buy Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find the Perfect Package for Your Needs
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore all of our internet and TV packages to discover the ideal solution for your home or business
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
            <Link to="/packages">Explore All Packages Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
