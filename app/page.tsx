import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Oman Real Estate
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              <Link 
                href="/properties"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Property in Oman
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover luxury villas, apartments, and commercial properties across Muscat, Salalah, and beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/properties"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100"
              >
                Browse Properties
              </Link>
              <Link 
                href="/properties?listingType=sale"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600"
              >
                View Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Search Properties</h2>
            <p className="text-gray-600 mt-4">Find exactly what you're looking for</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Locations</option>
                  <option>Muscat</option>
                  <option>Salalah</option>
                  <option>Sohar</option>
                  <option>Nizwa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Any Price</option>
                  <option>Under OMR 100K</option>
                  <option>OMR 100K - 300K</option>
                  <option>OMR 300K - 500K</option>
                  <option>Over OMR 500K</option>
                </select>
              </div>
              <div className="flex items-end">
                <Link 
                  href="/properties"
                  className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 text-center font-medium"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-gray-600 mt-4">Handpicked properties from our premium collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-600 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏖️</div>
                  <div className="font-semibold">Luxury Villa</div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  HOT
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-sm">
                  FOR SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Beachfront Villa in Al Mouj</h3>
                <p className="text-gray-600 mb-4">4 Beds • 5 Baths • 350 sqm</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-blue-600">OMR 1,500,000</p>
                  <Link 
                    href="/properties/OMA-001"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-2">📍 Al Mouj, Muscat</p>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-emerald-600 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏢</div>
                  <div className="font-semibold">Modern Apartment</div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  NEW
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-sm">
                  FOR SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Apartment in Muscat Hills</h3>
                <p className="text-gray-600 mb-4">2 Beds • 2 Baths • 120 sqm</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-emerald-600">OMR 180,000</p>
                  <Link 
                    href="/properties/OMA-002"
                    className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                  >
                    View Details
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-2">📍 Muscat Hills</p>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-orange-600 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏘️</div>
                  <div className="font-semibold">Premium Townhouse</div>
                </div>
                <div className="absolute top-4 left-4 bg-purple-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  PREMIUM
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-sm">
                  FOR SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Townhouse in Wave</h3>
                <p className="text-gray-600 mb-4">3 Beds • 3 Baths • 220 sqm</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600">OMR 750,000</p>
                  <Link 
                    href="/properties/OMA-004"
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                  >
                    View Details
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-2">📍 The Wave, Muscat</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/properties"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Oman Real Estate</h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner in finding the perfect property. Professional real estate services across Oman.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded">
                  <span>📧</span>
                </div>
                <div className="bg-blue-600 p-2 rounded">
                  <span>📱</span>
                </div>
                <div className="bg-blue-600 p-2 rounded">
                  <span>🌐</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/properties" className="block text-gray-300 hover:text-white">
                  Properties
                </Link>
                <Link href="/properties?listingType=sale" className="block text-gray-300 hover:text-white">
                  For Sale
                </Link>
                <Link href="/properties?listingType=rent" className="block text-gray-300 hover:text-white">
                  For Rent
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Locations */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Locations</h4>
              <div className="space-y-2">
                <Link href="/properties?city=Muscat" className="block text-gray-300 hover:text-white">
                  Muscat
                </Link>
                <Link href="/properties?city=Salalah" className="block text-gray-300 hover:text-white">
                  Salalah
                </Link>
                <Link href="/properties?city=Sohar" className="block text-gray-300 hover:text-white">
                  Sohar
                </Link>
                <Link href="/properties?city=Nizwa" className="block text-gray-300 hover:text-white">
                  Nizwa
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Oman Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}