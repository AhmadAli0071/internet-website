
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { packages } from '@/data/packages';

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredAndSortedPackages = useMemo(() => {
    let filtered = packages.filter(pkg => 
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'company':
        return filtered.sort((a, b) => a.provider.localeCompare(b.provider));
      case 'speed':
        return filtered.sort((a, b) => {
          const aSpeed = parseFloat(a.speed.replace(/[^0-9.]/g, ''));
          const bSpeed = parseFloat(b.speed.replace(/[^0-9.]/g, ''));
          return bSpeed - aSpeed;
        });
      case 'popular':
      default:
        return filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return 0;
        });
    }
  }, [searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Available Packages
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse all of our internet and TV packages to find the perfect option for your needs.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search packages or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="company">Company Name</SelectItem>
                  <SelectItem value="speed">Internet Speed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No packages found matching your search criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredAndSortedPackages.length} of {packages.length} packages
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedPackages.map((pkg) => (
                  <Card key={pkg.id} className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-blue-500 text-white px-3 py-1 text-sm font-medium">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                        <p className="text-blue-600 font-medium">{pkg.provider}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Internet Speed:</span>
                          <span className="font-semibold text-gray-900 bg-blue-50 px-2 py-1 rounded text-sm">
                            {pkg.speed}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">TV Channels:</span>
                          <span className="font-semibold text-gray-900 bg-green-50 px-2 py-1 rounded text-sm">
                            {pkg.channels}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-3xl font-bold text-gray-900">
                              ${pkg.price}
                            </span>
                            <span className="text-gray-500 text-sm">/month</span>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                          Buy Package
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;
