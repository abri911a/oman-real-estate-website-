'use client';

import dynamic from 'next/dynamic';
import { type Property } from '@/lib/mockData';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-600 text-sm">Loading map...</p>
      </div>
    </div>
  ),
});

interface DynamicMapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  onPropertySelect?: (property: Property) => void;
}

export default function DynamicMap(props: DynamicMapProps) {
  return <Map {...props} />;
}