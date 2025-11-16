export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: {
    city: string;
    district: string;
    region: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  propertyType: 'villa' | 'apartment' | 'townhouse' | 'commercial' | 'land';
  listingType: 'sale' | 'rent';
  status: 'available' | 'under-offer' | 'sold' | 'under-construction';
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  yearBuilt?: number;
  parking?: number;
  furnished: boolean;
  dateAdded: string;
}

export const mockProperties: Property[] = [
  {
    id: "OMA-001",
    title: "Luxury Beachfront Villa in Al Mouj",
    description: "Stunning 4-bedroom villa with panoramic sea views, private beach access, and premium finishes throughout. This architectural masterpiece features an infinity pool, landscaped gardens, and state-of-the-art smart home technology.",
    price: 1500000,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "Al Mouj",
      region: "Muscat",
      coordinates: { lat: 23.6242, lng: 58.4059 }
    },
    propertyType: "villa",
    listingType: "sale",
    status: "available",
    bedrooms: 4,
    bathrooms: 5,
    area: 450,
    features: ["Sea View", "Private Beach", "Swimming Pool", "Garden", "Smart Home", "Maid's Room", "Driver's Room"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    agent: {
      name: "Ahmed Al-Rashid",
      phone: "+968 99123456",
      email: "ahmed@omanrealestate.com"
    },
    yearBuilt: 2021,
    parking: 3,
    furnished: false,
    dateAdded: "2024-11-10"
  },
  {
    id: "OMA-002",
    title: "Modern 2-Bedroom Apartment in Muscat Hills",
    description: "Contemporary apartment with stunning mountain views and modern amenities. Perfect for young professionals or small families looking for comfort and convenience in a prime location.",
    price: 180000,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "Muscat Hills",
      region: "Muscat",
      coordinates: { lat: 23.5880, lng: 58.3829 }
    },
    propertyType: "apartment",
    listingType: "sale",
    status: "available",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    features: ["Mountain View", "Balcony", "Gym", "Swimming Pool", "Security", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
    ],
    agent: {
      name: "Fatima Al-Zahra",
      phone: "+968 99234567",
      email: "fatima@omanrealestate.com"
    },
    yearBuilt: 2020,
    parking: 2,
    furnished: true,
    dateAdded: "2024-11-12"
  },
  {
    id: "OMA-003",
    title: "Spacious Family Villa in Al Khuwair",
    description: "Perfect family home with large living spaces, private garden, and excellent schools nearby. This well-maintained villa offers comfort and privacy in one of Muscat's most sought-after neighborhoods.",
    price: 320000,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "Al Khuwair",
      region: "Muscat",
      coordinates: { lat: 23.6061, lng: 58.4822 }
    },
    propertyType: "villa",
    listingType: "sale",
    status: "available",
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    features: ["Garden", "Family Room", "Study Room", "Maid's Room", "Storage", "Covered Parking"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    agent: {
      name: "Mohammed Al-Balushi",
      phone: "+968 99345678",
      email: "mohammed@omanrealestate.com"
    },
    yearBuilt: 2018,
    parking: 4,
    furnished: false,
    dateAdded: "2024-11-08"
  },
  {
    id: "OMA-004",
    title: "Premium Townhouse in Wave Muscat",
    description: "Elegant 3-bedroom townhouse in the prestigious Wave development. Features contemporary design, premium finishes, and access to world-class amenities including golf course and marina.",
    price: 750000,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "The Wave",
      region: "Muscat",
      coordinates: { lat: 23.6190, lng: 58.4180 }
    },
    propertyType: "townhouse",
    listingType: "sale",
    status: "under-offer",
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    features: ["Golf Course View", "Marina Access", "Premium Finishes", "Balcony", "Storage"],
    images: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    agent: {
      name: "Salim Al-Hinai",
      phone: "+968 99456789",
      email: "salim@omanrealestate.com"
    },
    yearBuilt: 2019,
    parking: 2,
    furnished: false,
    dateAdded: "2024-11-05"
  },
  {
    id: "OMA-005",
    title: "Luxury Apartment in Salalah City Center",
    description: "High-end apartment in the heart of Salalah with modern amenities and stunning city views. Perfect for those seeking urban lifestyle with all conveniences at their doorstep.",
    price: 250000,
    currency: "OMR",
    location: {
      city: "Salalah",
      district: "City Center",
      region: "Dhofar",
      coordinates: { lat: 17.0151, lng: 54.0924 }
    },
    propertyType: "apartment",
    listingType: "sale",
    status: "available",
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    features: ["City View", "Central AC", "Built-in Wardrobes", "Balcony", "Security", "Elevator"],
    images: [
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800"
    ],
    agent: {
      name: "Aisha Al-Kathiri",
      phone: "+968 99567890",
      email: "aisha@omanrealestate.com"
    },
    yearBuilt: 2022,
    parking: 1,
    furnished: true,
    dateAdded: "2024-11-14"
  },
  {
    id: "OMA-006",
    title: "Commercial Office Space in CBD",
    description: "Prime commercial office space in Muscat's Central Business District. Ideal for businesses looking for a prestigious address with excellent connectivity and modern facilities.",
    price: 150000,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "CBD",
      region: "Muscat",
      coordinates: { lat: 23.5859, lng: 58.4059 }
    },
    propertyType: "commercial",
    listingType: "sale",
    status: "available",
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    features: ["Prime Location", "Elevator", "AC", "Reception Area", "Meeting Rooms", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    ],
    agent: {
      name: "Omar Al-Mawali",
      phone: "+968 99678901",
      email: "omar@omanrealestate.com"
    },
    yearBuilt: 2020,
    parking: 10,
    furnished: false,
    dateAdded: "2024-11-09"
  },
  {
    id: "OMA-007",
    title: "Charming Villa in Nizwa Heritage Area",
    description: "Traditional Omani villa with modern upgrades in the historic city of Nizwa. Perfect blend of heritage charm and contemporary comfort, close to the famous souq and fort.",
    price: 280000,
    currency: "OMR",
    location: {
      city: "Nizwa",
      district: "Heritage Area",
      region: "Ad Dakhiliyah",
      coordinates: { lat: 22.9333, lng: 57.5333 }
    },
    propertyType: "villa",
    listingType: "sale",
    status: "available",
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    features: ["Heritage Design", "Courtyard", "Traditional Architecture", "Modern Kitchen", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600566753051-e64ace684751?w=800"
    ],
    agent: {
      name: "Khalid Al-Busaidi",
      phone: "+968 99789012",
      email: "khalid@omanrealestate.com"
    },
    yearBuilt: 2017,
    parking: 2,
    furnished: false,
    dateAdded: "2024-11-07"
  },
  {
    id: "OMA-008",
    title: "Modern Studio in Sohar Marina",
    description: "Compact yet stylish studio apartment perfect for young professionals. Located in the vibrant marina area with restaurants, cafes, and waterfront views.",
    price: 85000,
    currency: "OMR",
    location: {
      city: "Sohar",
      district: "Marina",
      region: "Al Batinah North",
      coordinates: { lat: 24.3570, lng: 56.7539 }
    },
    propertyType: "apartment",
    listingType: "sale",
    status: "available",
    bedrooms: 0,
    bathrooms: 1,
    area: 45,
    features: ["Marina View", "Compact Design", "Balcony", "Security", "Close to Amenities"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    agent: {
      name: "Mariam Al-Ghafri",
      phone: "+968 99890123",
      email: "mariam@omanrealestate.com"
    },
    yearBuilt: 2021,
    parking: 1,
    furnished: true,
    dateAdded: "2024-11-13"
  },
  {
    id: "OMA-009",
    title: "Investment Land Plot in Sur",
    description: "Prime development land in the coastal city of Sur. Perfect for investors looking to develop residential or commercial properties in this growing tourist destination.",
    price: 120000,
    currency: "OMR",
    location: {
      city: "Sur",
      district: "Development Zone",
      region: "Ash Sharqiyah South",
      coordinates: { lat: 22.5667, lng: 59.5289 }
    },
    propertyType: "land",
    listingType: "sale",
    status: "available",
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    features: ["Development Potential", "Coastal Location", "Investment Opportunity", "Clear Title"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
    ],
    agent: {
      name: "Rashid Al-Harthi",
      phone: "+968 99901234",
      email: "rashid@omanrealestate.com"
    },
    parking: 0,
    furnished: false,
    dateAdded: "2024-11-06"
  },
  {
    id: "OMA-010",
    title: "Penthouse with Panoramic Views",
    description: "Exclusive penthouse apartment with 360-degree views of Muscat city and mountains. Features luxury finishes, private rooftop terrace, and premium amenities.",
    price: 950000,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "Al Qurum",
      region: "Muscat",
      coordinates: { lat: 23.6139, lng: 58.4661 }
    },
    propertyType: "apartment",
    listingType: "sale",
    status: "available",
    bedrooms: 4,
    bathrooms: 4,
    area: 350,
    features: ["Panoramic Views", "Rooftop Terrace", "Luxury Finishes", "Private Elevator", "Premium Location"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800"
    ],
    agent: {
      name: "Nadia Al-Rawahi",
      phone: "+968 99012345",
      email: "nadia@omanrealestate.com"
    },
    yearBuilt: 2023,
    parking: 3,
    furnished: false,
    dateAdded: "2024-11-11"
  },
  // Rental properties
  {
    id: "OMA-011",
    title: "Furnished 2BR Apartment for Rent",
    description: "Fully furnished apartment available for immediate occupancy. Perfect for expats or temporary accommodation. All utilities included and close to international schools.",
    price: 800,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "Al Hail",
      region: "Muscat",
      coordinates: { lat: 23.6345, lng: 58.5410 }
    },
    propertyType: "apartment",
    listingType: "rent",
    status: "available",
    bedrooms: 2,
    bathrooms: 2,
    area: 100,
    features: ["Fully Furnished", "Utilities Included", "Swimming Pool", "Gym", "Security"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
    ],
    agent: {
      name: "Said Al-Mahrouqi",
      phone: "+968 99123457",
      email: "said@omanrealestate.com"
    },
    yearBuilt: 2019,
    parking: 2,
    furnished: true,
    dateAdded: "2024-11-15"
  },
  {
    id: "OMA-012",
    title: "Villa for Rent in Madinat Sultan Qaboos",
    description: "Spacious family villa available for rent in prestigious MSQ area. Perfect for families seeking comfort and privacy with excellent schools and amenities nearby.",
    price: 1500,
    currency: "OMR",
    location: {
      city: "Muscat",
      district: "Madinat Sultan Qaboos",
      region: "Muscat",
      coordinates: { lat: 23.5859, lng: 58.3734 }
    },
    propertyType: "villa",
    listingType: "rent",
    status: "available",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    features: ["Garden", "Maid's Room", "Study Room", "Garage", "Family-Friendly Area"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    agent: {
      name: "Laila Al-Busaidi",
      phone: "+968 99234568",
      email: "laila@omanrealestate.com"
    },
    yearBuilt: 2018,
    parking: 3,
    furnished: false,
    dateAdded: "2024-11-14"
  }
];

export const cities = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];
export const propertyTypes = ["villa", "apartment", "townhouse", "commercial", "land"];
export const priceRanges = [
  { label: "Under OMR 100K", min: 0, max: 100000 },
  { label: "OMR 100K - 300K", min: 100000, max: 300000 },
  { label: "OMR 300K - 500K", min: 300000, max: 500000 },
  { label: "OMR 500K - 1M", min: 500000, max: 1000000 },
  { label: "Over OMR 1M", min: 1000000, max: Infinity }
];