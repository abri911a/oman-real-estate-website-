# Oman Real Estate Platform

A modern, responsive real estate website built with Next.js 14, TypeScript, and Tailwind CSS. Features advanced property search, interactive maps, and lead capture functionality.

## 🚀 Features

- **Modern Design**: Clean, professional UI inspired by leading real estate platforms
- **Property Search**: Advanced filtering by location, type, price, and specifications  
- **Interactive Maps**: Leaflet.js integration with property markers and popups
- **Multiple Views**: Grid, list, and map viewing modes for properties
- **Property Details**: Comprehensive property pages with image carousels
- **Lead Capture**: Contact forms with agent details and inquiry management
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Next.js 14 with optimized images and caching

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js, React Leaflet
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗 Build & Deployment

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Alternative Deployment Options

**Netlify:**
```bash
# Build command: npm run build
# Publish directory: .next
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📁 Project Structure

```
real-estate-website/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── properties/        # Properties pages
│       ├── page.tsx       # Properties list
│       └── [id]/
│           └── page.tsx   # Property details
├── components/            # Reusable components
│   ├── Map.tsx           # Leaflet map component
│   └── DynamicMap.tsx    # SSR-safe map wrapper
├── lib/                   # Utilities and data
│   └── mockData.ts       # Property data and types
├── public/               # Static assets
└── README.md
```

## 🎯 Key Features Implemented

### ✅ Core Functionality
- [x] Homepage with hero and featured properties
- [x] Properties listing with grid/list/map views
- [x] Advanced search and filtering
- [x] Property detail pages with image carousels
- [x] Interactive maps with property markers
- [x] Contact forms and lead capture
- [x] Mobile-responsive design
- [x] TypeScript integration

### 📋 Property Data Model
```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: {
    city: string;
    district: string;
    region: string;
    coordinates: { lat: number; lng: number };
  };
  propertyType: 'villa' | 'apartment' | 'townhouse' | 'commercial' | 'land';
  listingType: 'sale' | 'rent';
  status: 'available' | 'under-offer' | 'sold' | 'under-construction';
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  // ... additional fields
}
```

### 🗺 Map Integration
- **Interactive maps** powered by Leaflet.js
- **Property markers** with popup information
- **Auto-fitting bounds** for multiple properties
- **Detailed property maps** on individual listings
- **SSR-safe implementation** with dynamic imports

### 📱 Responsive Design
- **Mobile-first approach** with Tailwind CSS
- **Flexible layouts** adapting to screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized images** with Next.js Image component

## 🔧 Customization

### Adding New Properties
Edit `lib/mockData.ts` to add new properties to the `mockProperties` array:

```typescript
{
  id: "OMA-XXX",
  title: "Your Property Title",
  description: "Property description...",
  price: 150000,
  currency: "OMR",
  location: {
    city: "Muscat",
    district: "Al Khuwair",
    region: "Muscat",
    coordinates: { lat: 23.6061, lng: 58.4822 }
  },
  // ... other required fields
}
```

### Styling Modifications
- Edit `app/globals.css` for global styles
- Modify Tailwind classes throughout components
- Update `tailwind.config.js` for theme customizations

### API Integration
Replace mock data in `lib/mockData.ts` with API calls:

```typescript
// Example API integration
export async function getProperties() {
  const response = await fetch('/api/properties');
  return response.json();
}
```

## 🌟 Performance Features

- **Next.js 14** with App Router for optimal performance
- **Image optimization** with automatic WebP conversion
- **Code splitting** and lazy loading
- **SSR/SSG** support for better SEO
- **Optimized bundle size** with tree shaking

## 📊 SEO Ready

- **Meta tags** configured in layout.tsx
- **Structured data** ready for schema.org integration
- **Semantic HTML** for better accessibility
- **Open Graph** tags for social sharing

## 🚀 Production Checklist

- [x] Responsive design implemented
- [x] Image optimization configured
- [x] Error boundaries added
- [x] TypeScript strict mode
- [x] Production build tested
- [x] Map integration working
- [x] Contact forms functional

## 📝 Next Steps for Production

1. **Content Management**: Integrate with CMS (Strapi, Sanity)
2. **Authentication**: Add user accounts and saved searches  
3. **Backend API**: Connect to real property database
4. **Email Integration**: Set up EmailJS or SendGrid
5. **Analytics**: Add Google Analytics or Plausible
6. **SEO**: Implement sitemap and robots.txt
7. **Performance**: Add caching and CDN

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For deployment or customization assistance, contact your development team.

---

**Built with ❤️ using Next.js 14 and modern web technologies**