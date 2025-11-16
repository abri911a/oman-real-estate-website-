'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { type Property } from '@/lib/mockData';

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  onPropertySelect?: (property: Property) => void;
}

function MapBoundsUpdater({ properties }: { properties: Property[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (properties.length > 0) {
      const bounds = properties.map(p => [
        p.location.coordinates.lat,
        p.location.coordinates.lng
      ] as [number, number]);
      
      if (bounds.length === 1) {
        map.setView(bounds[0], 13);
      } else if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }
  }, [properties, map]);
  
  return null;
}

export default function Map({ 
  properties, 
  center = [23.5859, 58.4059], // Default to Muscat
  zoom = 10,
  height = '400px',
  onPropertySelect
}: MapProps) {
  const formatPrice = (price: number, currency: string, listingType: string) => {
    const formatted = price.toLocaleString();
    const period = listingType === 'rent' ? '/mo' : '';
    return `${currency} ${formatted}${period}`;
  };

  return (
    <div style={{ height, width: '100%' }}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapBoundsUpdater properties={properties} />
        
        {properties.map((property) => (
          <Marker 
            key={property.id}
            position={[property.location.coordinates.lat, property.location.coordinates.lng]}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h3 className="font-semibold text-sm mb-1">{property.title}</h3>
                <p className="text-xs text-gray-600 mb-2">
                  {property.location.district}, {property.location.city}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-600 font-bold">
                    {formatPrice(property.price, property.currency, property.listingType)}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {property.listingType === 'sale' ? 'Sale' : 'Rent'}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  {property.bedrooms > 0 && `${property.bedrooms} beds • `}
                  {property.bathrooms} baths • {property.area} sqm
                </div>
                <button
                  onClick={() => {
                    if (onPropertySelect) {
                      onPropertySelect(property);
                    } else {
                      window.open(`/properties/${property.id}`, '_blank');
                    }
                  }}
                  className="w-full bg-blue-600 text-white text-xs py-1 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}