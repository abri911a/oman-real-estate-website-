import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Property in Oman
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover luxury villas, apartments, and commercial properties across Muscat, Salalah, and beyond
            </p>
            <Link 
              href="/properties"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Search Properties</h2>
            <p className="text-gray-600 mt-4">Find exactly what you're looking for</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full p-3 border border-gray-300 rounded-md">
                  <option>All Locations</option>
                  <option>Muscat</option>
                  <option>Salalah</option>
                  <option>Sohar</option>
                  <option>Nizwa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-md">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full p-3 border border-gray-300 rounded-md">
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
                  className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-gray-600 mt-4">Handpicked properties from our premium collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Property Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa in Al Mouj</h3>
                <p className="text-gray-600 mb-4">4 Beds • 5 Baths • 350 sqm</p>
                <p className="text-2xl font-bold text-blue-600">OMR 450,000</p>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Property Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Apartment in Muscat</h3>
                <p className="text-gray-600 mb-4">2 Beds • 2 Baths • 120 sqm</p>
                <p className="text-2xl font-bold text-blue-600">OMR 180,000</p>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Property Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Townhouse in Salalah</h3>
                <p className="text-gray-600 mb-4">3 Beds • 3 Baths • 220 sqm</p>
                <p className="text-2xl font-bold text-blue-600">OMR 320,000</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/properties"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Oman Real Estate</h3>
            <p className="text-gray-300 mb-6">Your trusted partner in finding the perfect property</p>
            <div className="flex justify-center space-x-6">
              <Link href="/properties" className="text-gray-300 hover:text-white">Properties</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2024 Oman Real Estate. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}