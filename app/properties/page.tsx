'use client';

import { useState, useMemo } from 'react';
import { mockProperties, cities, propertyTypes, priceRanges, type Property } from '@/lib/mockData';
import DynamicMap from '@/components/DynamicMap';
import Image from 'next/image';
import Link from 'next/link';

interface Filters {
  city: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
  listingType: string;
  search: string;
}

export default function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>({
    city: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    listingType: '',
    search: ''
  });

  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');

  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties];

    // Apply filters
    if (filters.city) {
      filtered = filtered.filter(p => p.location.city === filters.city);
    }

    if (filters.propertyType) {
      filtered = filtered.filter(p => p.propertyType === filters.propertyType);
    }

    if (filters.listingType) {
      filtered = filtered.filter(p => p.listingType === filters.listingType);
    }

    if (filters.bedrooms) {
      const bedroomCount = parseInt(filters.bedrooms);
      filtered = filtered.filter(p => p.bedrooms >= bedroomCount);
    }

    if (filters.priceRange) {
      const range = priceRanges.find(r => r.label === filters.priceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price <= range.max);
      }
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.location.district.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bedrooms':
        filtered.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

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
              <Link href="/properties" className="text-blue-600 font-medium">Properties</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6">Filter Properties</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={filters.search}
                  onChange={(e) => updateFilter('search', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Listing Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Listing Type</label>
                <select
                  value={filters.listingType}
                  onChange={(e) => updateFilter('listingType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Types</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>

              {/* City */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  value={filters.city}
                  onChange={(e) => updateFilter('city', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => updateFilter('propertyType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => updateFilter('priceRange', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Any Price</option>
                  {priceRanges.map(range => (
                    <option key={range.label} value={range.label}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Bedrooms</label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => updateFilter('bedrooms', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <button
                onClick={() => setFilters({ city: '', propertyType: '', priceRange: '', bedrooms: '', listingType: '', search: '' })}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
                <p className="text-gray-600 mt-1">{filteredProperties.length} properties found</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {/* View Mode Toggle */}
                <div className="flex border rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 text-sm ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                  >
                    List
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`px-3 py-2 text-sm ${viewMode === 'map' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                  >
                    Map
                  </button>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="bedrooms">Most Bedrooms</option>
                </select>
              </div>
            </div>

            {/* Properties Grid/List/Map */}
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No properties found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : viewMode === 'map' ? (
              <div className="h-[600px]">
                <DynamicMap 
                  properties={filteredProperties}
                  height="100%"
                />
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property, viewMode }: { property: Property; viewMode: 'grid' | 'list' | 'map' }) {
  const formatPrice = (price: number, currency: string, listingType: string) => {
    const formatted = price.toLocaleString();
    const period = listingType === 'rent' ? '/month' : '';
    return `${currency} ${formatted}${period}`;
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      'under-offer': 'bg-yellow-100 text-yellow-800',
      sold: 'bg-red-100 text-red-800',
      'under-construction': 'bg-blue-100 text-blue-800',
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
        {status.replace('-', ' ').toUpperCase()}
      </span>
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
        <div className="w-1/3">
          <div className="h-48 relative">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{property.title}</h3>
            {getStatusBadge(property.status)}
          </div>
          <p className="text-gray-600 mb-2">{property.location.district}, {property.location.city}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 text-sm text-gray-500">
              {property.bedrooms > 0 && <span>{property.bedrooms} Beds</span>}
              <span>{property.bathrooms} Baths</span>
              <span>{property.area} sqm</span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                {formatPrice(property.price, property.currency, property.listingType)}
              </p>
              <Link 
                href={`/properties/${property.id}`}
                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <div className="h-48 relative">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-2 right-2">
          {getStatusBadge(property.status)}
        </div>
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            {property.listingType === 'sale' ? 'FOR SALE' : 'FOR RENT'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location.district}, {property.location.city}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4 text-sm text-gray-500">
            {property.bedrooms > 0 && <span>{property.bedrooms} Beds</span>}
            <span>{property.bathrooms} Baths</span>
            <span>{property.area} sqm</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price, property.currency, property.listingType)}
          </p>
          <Link 
            href={`/properties/${property.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}