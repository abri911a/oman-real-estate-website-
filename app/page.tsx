import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🏠 Oman Estate
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
              <Link href="/properties" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Properties</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</Link>
              <Link 
                href="/properties"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Browse Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                🏆 #1 Real Estate Platform in Oman
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your Dream
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Property in Oman
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover luxury villas, modern apartments, and prime commercial properties across Muscat, Salalah, and beyond. Your perfect home awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/properties"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-yellow-300 hover:to-orange-400"
              >
                🔍 Explore Properties
              </Link>
              <Link 
                href="/properties?listingType=sale"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View Listings
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/80">Properties Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Find Your Perfect Property
            </h2>
            <p className="text-xl text-gray-600">Advanced search with thousands of verified listings</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">📍 Location</label>
                  <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors">
                    <option>All Locations</option>
                    <option>🏙️ Muscat</option>
                    <option>🌴 Salalah</option>
                    <option>⚓ Sohar</option>
                    <option>🏛️ Nizwa</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">🏠 Property Type</label>
                  <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors">
                    <option>All Types</option>
                    <option>🏖️ Villa</option>
                    <option>🏢 Apartment</option>
                    <option>🏘️ Townhouse</option>
                    <option>🏢 Commercial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">💰 Price Range</label>
                  <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center font-bold text-lg"
                  >
                    🔍 Search Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-600">✨ Premium Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked luxury properties from our exclusive portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Property Card 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🏖️</div>
                    <div className="text-lg font-semibold">Luxury Villa</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    🔥 HOT
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                    FOR SALE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  Luxury Beachfront Villa in Al Mouj
                </h3>
                <div className="flex items-center text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center"><span className="text-blue-500 mr-1">🛏️</span> 4 Beds</span>
                  <span className="flex items-center"><span className="text-blue-500 mr-1">🚿</span> 5 Baths</span>
                  <span className="flex items-center"><span className="text-blue-500 mr-1">📐</span> 350 sqm</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      OMR 1,500,000
                    </p>
                    <p className="text-sm text-gray-500">📍 Al Mouj, Muscat</p>
                  </div>
                  <Link 
                    href="/properties/OMA-001"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-emerald-400 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🏢</div>
                    <div className="text-lg font-semibold">Modern Apartment</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✨ NEW
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                    FOR SALE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                  Modern Apartment in Muscat Hills
                </h3>
                <div className="flex items-center text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center"><span className="text-emerald-500 mr-1">🛏️</span> 2 Beds</span>
                  <span className="flex items-center"><span className="text-emerald-500 mr-1">🚿</span> 2 Baths</span>
                  <span className="flex items-center"><span className="text-emerald-500 mr-1">📐</span> 120 sqm</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      OMR 180,000
                    </p>
                    <p className="text-sm text-gray-500">📍 Muscat Hills</p>
                  </div>
                  <Link 
                    href="/properties/OMA-002"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-orange-400 to-red-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🏘️</div>
                    <div className="text-lg font-semibold">Premium Townhouse</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    💎 PREMIUM
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                    FOR SALE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                  Premium Townhouse in Wave
                </h3>
                <div className="flex items-center text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center"><span className="text-orange-500 mr-1">🛏️</span> 3 Beds</span>
                  <span className="flex items-center"><span className="text-orange-500 mr-1">🚿</span> 3 Baths</span>
                  <span className="flex items-center"><span className="text-orange-500 mr-1">📐</span> 220 sqm</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      OMR 750,000
                    </p>
                    <p className="text-sm text-gray-500">📍 The Wave, Muscat</p>
                  </div>
                  <Link 
                    href="/properties/OMA-004"
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/properties"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🏠 View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                🏠 Oman Estate
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Your premier destination for luxury properties in Oman. We connect dreams with reality through exceptional real estate experiences.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <span className="text-lg">📧</span>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <span className="text-lg">📱</span>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <span className="text-lg">🌐</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/properties" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  🏠 Properties
                </Link>
                <Link href="/properties?listingType=sale" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  💰 For Sale
                </Link>
                <Link href="/properties?listingType=rent" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  🏠 For Rent
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  📞 Contact
                </Link>
              </div>
            </div>
            
            {/* Locations */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Prime Locations</h4>
              <div className="space-y-3">
                <Link href="/properties?city=Muscat" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  🏙️ Muscat
                </Link>
                <Link href="/properties?city=Salalah" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  🌴 Salalah  
                </Link>
                <Link href="/properties?city=Sohar" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  ⚓ Sohar
                </Link>
                <Link href="/properties?city=Nizwa" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  🏛️ Nizwa
                </Link>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Properties Listed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Expert Agents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              &copy; 2024 Oman Estate. All rights reserved. 
              <span className="text-blue-400 ml-2">Built with 💙 for Oman</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}