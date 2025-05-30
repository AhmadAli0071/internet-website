
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { packages } from '@/data/packages';
import { ArrowRight, Wifi, Tv, Shield, Globe, Star, Zap, Users, Award } from 'lucide-react';

const Home = () => {
  const popularPackages = packages.filter(pkg => pkg.popular).slice(0, 3);

  const services = [
    {
      icon: Zap,
      title: 'Ultra Fast Internet',
      description: 'Lightning-fast speeds up to 2 Gbps for seamless streaming and gaming',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Tv,
      title: '250+ TV Channels',
      description: 'Premium entertainment with HD channels, sports, and on-demand content',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'No Contracts',
      description: 'Flexible plans with no long-term commitments or hidden fees',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Reliable service across the United States with 24/7 support',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { icon: Users, value: '2M+', label: 'Happy Customers' },
    { icon: Globe, value: '50+', label: 'States Covered' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' }
  ];

  const handleCallConversion = (phoneNumber: string) => {
    const telUrl = `tel:${phoneNumber}`;
    // @ts-ignore - gtag_report_conversion is defined in index.html
    return window.gtag_report_conversion(telUrl);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-blue-200 text-sm font-medium mb-6">
                🚀 The Future of Connectivity
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Connecting You
              </span>
              <br />
              <span className="text-white">to the Sky</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 font-medium mb-4">
              Fast. Reliable. Limitless.
            </p>
            
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of connectivity with SkyConnect's premium internet and TV packages 
              designed for modern living across the United States.
            </p>

            {/* Phone Numbers with Call to Queue */}
            <div className="mb-12 space-y-4">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="group flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <span className="text-xl font-semibold text-white">📞 +1(516) 619-1704</span>
                  <Button 
                    onClick={() => handleCallConversion('+18186600126')}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    Call to Queue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="group flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <span className="text-xl font-semibold text-white">📞+1(513) 334-6758</span>
                  <Button 
                    onClick={() => handleCallConversion('+19525920128')}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    Call to Queue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <Link to="/packages">
                  View Packages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                <Link to="/buy">Buy Internet & TV</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              About SkyConnect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            America's Premier 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Internet & TV</span> Provider
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            SkyConnect delivers cutting-edge internet and television services to millions of customers 
            across the United States. With our state-of-the-art infrastructure and commitment to excellence, 
            we're revolutionizing how Americans connect, stream, and communicate in the digital age.
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SkyConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make us the preferred choice for internet and TV
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden hover:-translate-y-2">
                <CardContent className="p-8 text-center relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-6">
              Popular Choices
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most loved internet and TV bundles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPackages.map((pkg, index) => (
              <Card key={pkg.id} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden hover:-translate-y-3 relative">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-bold rounded-bl-2xl">
                  🔥 Popular
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{pkg.title}</h3>
                    <p className="text-blue-600 font-semibold text-lg">{pkg.provider}</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                      <span className="text-gray-600 font-medium flex items-center">
                        <Wifi className="w-4 h-4 mr-2" />
                        Internet Speed:
                      </span>
                      <span className="font-bold text-gray-900">{pkg.speed}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                      <span className="text-gray-600 font-medium flex items-center">
                        <Tv className="w-4 h-4 mr-2" />
                        TV Channels:
                      </span>
                      <span className="font-bold text-gray-900">{pkg.channels}</span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${pkg.price}
                        <span className="text-lg text-gray-500">/mo</span>
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Buy Package
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Find the Perfect Package 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> for Your Needs</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Explore all of our internet and TV packages to discover the ideal solution for your home or business
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Link to="/packages">
              Explore All Packages Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
