<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# \#\# **Role and Goal**

**AI Persona:** Senior Full-Stack Real-Estate Platform Engineer \& Product Manager
**Primary Objective:** Produce a complete, legally-aware, step-by-step technical blueprint and development roadmap to recreate the *functionality* and *listing/data structure* of a publicly visible competitor real-estate website (Oman market) and launch a production site that captures leads. The output must include reverse-engineering guidance, data acquisition and ETL plans for public listings, frontend \& backend architecture, dev tasks, deployment, security/compliance checklist, and CRM/lead-capture integration.

## **Audience and Context**

**End Users:** Your internal engineering team and product stakeholders (frontend + backend developers, DevOps, QA, a product manager, and a marketing/lead-gen owner).
**Use Case Context:** You are building a competitive real-estate portal for Oman that mirrors the public listing features of a local competitor (listings are publicly visible). The goal is not to copy copyrighted content verbatim but to replicate structure, UX, and features and to capture leads (potential buyers). The output must be actionable for implementation and safe/legal in scope.

## **Data and Sources**

**Data Requirements:**

- Scrape and structure all publicly visible listing data fields: title, description, price, currency, property type, address, geolocation, area (sqm), bedrooms, bathrooms, images (public URLs), agent/dealer name, contact info (if publicly available), listing date, status (for sale/rent), features/amenities, attachments, listing id, and any tags/categories.
- Maintain provenance metadata (source URL, scrape timestamp, page HTML snapshot hash) for every record.
- Geocode addresses to latitude/longitude and normalize address fields.

**Preferred Sources:**

- The target competitor’s public listing pages (respect robots.txt and site TOS).
- Public Omani property portals and classifieds for cross-validation.
- Public government/municipal datasets where available (land registry, zoning) for enrichment (note: verify local access rules).
- Map/geocoding APIs (recommend Mapbox or Google Maps; fallback OpenStreetMap + Nominatim).

**Freshness Standards:**

- Initial full ingest: include all current public listings (as of ingest time).
- Incremental updates: run a differential crawl every 6–12 hours for new/changed listings; reindex changed records within 1 hour of detection.
- Retain historical snapshots for audit (30–90 days default; configurable).


## **Analytical Framework**

**Analysis Steps:**

1. **Scoping \& legal check**
    - Confirm which pages/data are public, check robots.txt and competitor TOS.
    - Determine any Omani data/privacy rules to comply with (consult legal counsel if needed).
2. **Field mapping**
    - Crawled page → canonical listing schema mapping (define every field and data type).
3. **Crawl strategy**
    - Use polite crawling: obey robots.txt, set appropriate rate limits and concurrency, use rotating user-agents, use conditional requests (ETags/If-Modified-Since) to reduce load.
    - Two levels: (A) sitemap/paginated index crawl for discovery; (B) detail page crawl to extract fields and media.
4. **Extraction \& parsing**
    - Prefer structured sources (JSON-LD, microdata). Fallback to robust HTML parsing (Playwright/BeautifulSoup + resilient selectors + fallback heuristics).
    - Store raw HTML and parsed JSON for each record.
5. **Data normalization**
    - Normalize currencies, numeric units (sqm), address components, and property types to controlled vocabularies.
6. **Geocoding \& deduplication**
    - Geocode addresses and deduplicate using fuzzy matching on address + geolocation + price + title. Keep canonical ID mapping.
7. **Indexing \& search**
    - Index normalized records in a search engine (Elasticsearch/OpenSearch) with full-text, geo, numeric, and faceted filters.
8. **Lead capture**
    - Build forms that reference a listing id; store leads in a CRM or database; trigger email/SMS alerts and agent notifications.
9. **Monitoring \& QA**
    - Implement data quality checks: missing essential fields, image counts, price anomalies, sudden status changes.
10. **Ops \& scaling**
    - Containerize scrapers and services, use task queues and autoscaling for peak loads.

**Required Calculations \& Metrics:**

- Duplicate detection thresholds (e.g., Levenshtein distance on titles > 0.85 and geo distance < 50m → duplicate).
- Lead conversion rate target (example baseline: 1–3% of unique listing views → leads) — configurable.
- Staleness detection: flag listings not updated in X days (configurable).
- Search response time SLO: <200ms for common queries.


## **Output Specifications**

**Format Type:** Combined deliverable: Development Roadmap + Detailed Technical Blueprint (document + actionable Jira-style task list + data schema + sample API specs).
**Structure/Layout:**

- Executive summary \& goals
- Legal \& ethical checklist (Oman-specific items to verify)
- Canonical data model \& JSON schema for listings
- Crawl \& ETL plan with component diagrams and sequencing
- Full stack architecture diagram (frontend, backend, DBs, search, cache, queues, storage, monitoring)
- API specification (REST/GraphQL) with sample endpoints (GET /listings, GET /listings/{id}, POST /lead)
- Lead capture \& CRM integration plan (data flows, webhook examples)
- Security and SRE checklist (auth, rate limits, input validation, encryption)
- Deployment plan and cost/hosting recommendations
- Testing plan (unit, integration, E2E, data QA)
- Implementation timeline split into sprints with deliverables and acceptance criteria
**Technical Requirements:**
- Scalable search with geo and faceted filtering (Elasticsearch/OpenSearch).
- Primary relational DB: PostgreSQL with PostGIS extension for geospatial queries.
- Object storage for images (S3 or S3-compatible).
- Background worker queue (Redis + Bull / Celery / Sidekiq).
- Containerized services (Docker + Kubernetes/ECS) for production readiness.
- CI/CD pipelines, automated migrations, blue/green or canary deployments.
- HTTPS everywhere, CSP, rate limiting, and WAF protection.


## **Style and Tone**

**Voice:** Clear, prescriptive, and technical — aimed at engineers and product leads. Use concise checklists, diagrams, and code/pseudocode examples where helpful.
**Visual Design:** Deliverables should include simple diagrams (system architecture, dataflow), JSON schema blocks, and concise tables. Use a neutral, professional UI aesthetic in mockups (clean layout, prominent search bar, map view, list/grid toggles).

## **Quality and Success Criteria**

**Accuracy Standards:**

- Parsed listing fields must match 95%+ of required fields for 95%+ of sampled pages in acceptance tests.
- Deduplication accuracy measured on a hand-labeled sample: target F1 score ≥ 0.9.
**Success Metrics:**
- Lead capture: measurable leads per month and organic conversion improvement vs competitor baseline (set target after initial data).
- Search latency: 95th percentile < 300ms under normal load.
- System uptime: 99.9% (SLA for public site).
**Iteration Process:**
- Deliver in 2-week sprints. Sprint 1: MVP search + listing pages + lead form. Sprint 2: indexing, geolocation, admin. Sprint 3: CRM integration, notifications, QA \& hardening. After MVP, run 3 iterative cycles to improve search relevance and lead flows based on analytics.


## **Implementation Details \& Examples (Actionable)**

**Recommended Stack (opinionated):**

- Frontend: Next.js + React + TypeScript, Tailwind CSS for rapid UI.
- Backend: Node.js with NestJS or Fastify + TypeScript (clear modularity); alternative: Python FastAPI.
- Database: PostgreSQL + PostGIS.
- Search: OpenSearch or Elasticsearch.
- Caching: Redis.
- Workers: BullMQ (Node) or Celery (Python).
- Storage: AWS S3 (or DigitalOcean Spaces) for listing images and raw crawled HTML.
- Auth: NextAuth or Auth0 for accounts (if needed later).
- Map/Geocode: Mapbox or Google Maps (Mapbox for simpler billing; OSM as fallback).
- Deployment: Docker + Kubernetes (EKS/GKE/AKS) or DigitalOcean Apps for smaller teams.
- Monitoring: Prometheus + Grafana, Sentry for errors, ELK or OpenSearch for logs.

**Scraping Tools \& Patterns:**

- Discovery: sitemap + paginated index crawler (Scrapy or custom Playwright script).
- Extraction: prefer JSON-LD; otherwise, fallback to server-side headless browser capture (Playwright) for JS-rendered pages.
- Respectful scraping: concurrency 2–5, 1–3s delay, throttle by IP if required. Use conditional GETs and ETags to reduce bandwidth.
- Media handling: download images to object storage only when allowed and keep references to original URLs; keep copyright provenance.

**Data Model (sample simplified JSON schema block):**

```json
{
  "listing_id": "string",
  "title": "string",
  "description": "string",
  "price": { "amount": "number", "currency": "string" },
  "property_type": "string",
  "address": { "street": "string", "city": "string", "region": "string", "postal_code": "string" },
  "location": { "lat": "number", "lon": "number" },
  "area_sqm": "number",
  "bedrooms": "integer",
  "bathrooms": "integer",
  "images": ["s3://..."],
  "agent": { "name": "string", "contact": "string" },
  "source_url": "string",
  "scrape_timestamp": "ISO8601",
  "provenance_hash": "string"
}

Now I'll generate the final comprehensive answer as the technical blueprint document.

# Complete Technical Blueprint: Oman Real Estate Platform Development

**Executive Summary**

This document provides a comprehensive, legally-aware, step-by-step technical blueprint and development roadmap to build a competitive real-estate portal for the Oman market. The platform will replicate the functionality and data structure of existing competitors while implementing robust lead capture, search capabilities, and compliance with Oman's Personal Data Protection Law (PDPL). The solution leverages a modern full-stack architecture, automated data acquisition pipelines, and production-ready deployment strategies to deliver a scalable, secure platform within 12 weeks.

## Legal & Ethical Compliance Framework

### Oman Personal Data Protection Law (PDPL) Compliance

**Critical Deadline**: Full compliance required by February 5, 2025. Organizations must implement comprehensive data protection measures including:[^1_1][^1_2][^1_3]

**Required Actions**:
- **Explicit Consent**: Obtain clear, documented consent before processing personal data[^1_1]
- **Data Protection Officer (DPO)**: Appoint a licensed DPO to oversee compliance[^1_2][^1_4]
- **Records of Processing Activities (ROPA)**: Maintain detailed documentation of all data processing[^1_3][^1_1]
- **Breach Notification**: Report data breaches to the Ministry of Transport, Communications & Information Technology (MTCIT) within 72 hours[^1_3][^1_1]
- **Data Subject Rights**: Implement mechanisms for users to access, correct, delete, and transfer their data within 45 days of request[^1_5][^1_2]
- **Sensitive Data Permits**: Obtain permits from MTCIT for processing genetic, biometric, health, or location data[^1_2][^1_5]

**Platform-Specific Requirements**:
- User contact information (names, emails, phone numbers) captured through lead forms requires explicit consent with clear privacy notices[^1_1][^1_2]
- Geolocation data from property searches requires disclosure and opt-in consent[^1_5]
- Third-party data transfers (e.g., to CRM systems) require explicit user consent and adequate protection guarantees[^1_6][^1_3]

### Web Scraping Legal Framework

**Permissible Activities** (based on US/international precedent applicable to Oman):
- Scraping **publicly accessible** data without login requirements is generally legal[^1_7][^1_8][^1_9]
- The hiQ vs. LinkedIn precedent established that accessing public data does not violate anti-hacking laws[^1_8][^1_7]
- Public real estate listings fall under fair use for competitive analysis purposes[^1_10][^1_7]

**Legal Safeguards**:

1. **Respect robots.txt**: Honor crawl-delay directives and disallowed paths[^1_11][^1_8][^1_10]
2. **Avoid Login-Protected Content**: Do not scrape data behind authentication walls[^1_9][^1_7]
3. **Rate Limiting**: Implement 1-3 second delays; limit concurrency to 2-5 requests[^1_10][^1_11]
4. **Terms of Service Review**: Document review of competitor ToS; avoid explicit scraping prohibitions[^1_8][^1_10]
5. **No Substantial Reproduction**: Use scraped data for indexing/aggregation, not verbatim republication[^1_11][^1_8]
6. **Provenance Tracking**: Maintain source URLs, timestamps, and attribution metadata[This requirement from user]

**Prohibited Actions**:
- Creating a competing product that republishes copyrighted content verbatim[^1_8]
- Circumventing technical protection measures (CAPTCHA breaking, authentication bypass)[^1_10]
- Scraping personal data without lawful basis under PDPL[^1_9][^1_1]

### Oman Real Estate Market Context

The Oman residential real estate market is projected to reach $6.76 billion by 2031, growing at 6.82% CAGR. Major players include Al Mouj Muscat, Wujha Real Estate, Al Raid Group, Hilal Properties, and Vista Real Estate. Existing platforms like Oman Real, OpenSooq, Mawa, and Dubizzle Oman serve as competitive benchmarks.[^1_12][^1_13][^1_14][^1_15][^1_16][^1_17][^1_18][^1_19]


## Canonical Data Model

The listing schema defines 18 properties with strict validation rules to ensure data quality and consistency across all ingested sources. **Required fields** include `listing_id`, `title`, `property_type`, `location`, `price`, and `source_url`. The schema enforces controlled vocabularies for property types (apartment, villa, townhouse, land, commercial, office, shop, warehouse) and regions (Muscat, Dhofar, Sohar, Nizwa, Salalah), aligning with Oman's geographic structure.[^1_19][^1_20][^1_21]

**Key Design Decisions**:
- **Geospatial Data**: `location` object with WGS84 coordinates (SRID 4326) for PostGIS compatibility[^1_22][^1_23]
- **Price Normalization**: Separate `amount`, `currency` (OMR/USD/EUR), and `period` fields for consistent comparisons
- **Provenance Metadata**: Full audit trail with `scrape_timestamp`, `source_hash`, `last_updated`, and `raw_html_s3_key`[User requirement]
- **Image Management**: Array of objects with `s3_key`, `url`, `order`, and `caption` for CDN-optimized delivery[^1_24][^1_25]
- **No Additional Properties**: `additionalProperties: false` prevents schema drift and ensures validation integrity[^1_26][^1_27]

## Data Acquisition & ETL Architecture

### Crawl Strategy

**Discovery Phase** (Sitemap + Pagination):
- Parse XML sitemaps and paginated index pages to enumerate all listing URLs
- Store discovered URLs in Redis queue with priority scoring (new listings > updated > unchanged)
- Run discovery crawl every 6 hours to detect new/changed listings[User requirement]

**Detail Extraction Phase** (Playwright + Scrapy):
- **Primary Tool**: Scrapy for static HTML parsing (3x faster than Playwright for simple pages)[^1_28][^1_29]
- **Fallback Tool**: Playwright for JavaScript-rendered pages (React/Vue-based competitor sites)[^1_30][^1_31][^1_28]
- **Extraction Priority**: JSON-LD structured data > Schema.org microdata > CSS selectors with fallback chains[^1_30]
- **Concurrent Workers**: 2-5 parallel browsers to avoid overwhelming target servers[^1_28][^1_10]

**Polite Crawling Rules**:
- **Rate Limits**: 1-3 second delay between requests; max 5 concurrent connections per domain[^1_11][^1_10]
- **User-Agent Rotation**: Cycle through 5-10 legitimate browser user-agents[^1_10]
- **Conditional Requests**: Use `If-Modified-Since` and `ETag` headers to reduce bandwidth[^1_10]
- **Respect robots.txt**: Implement Scrapy's built-in RobotsTxtMiddleware[^1_28]

### Data Normalization Pipeline

**Field Transformations**:
1. **Price Normalization**: Convert all currencies to OMR base; parse ranges ("100-150K") to min/max
2. **Address Standardization**: 
   - Extract street, district, city, region using regex patterns
   - Validate region against controlled vocabulary (Muscat, Dhofar, Sohar, Nizwa, Salalah)
   - Normalize abbreviations (St. → Street, Ave → Avenue)
3. **Numeric Units**: Convert feet² to sqm; parse "3BR/2BA" to separate bedrooms/bathrooms integers
4. **Property Type Mapping**: Map vendor-specific terms to canonical enum (e.g., "flat" → "apartment", "house" → "villa")

**Geocoding** (Mapbox API):
- **Primary**: Forward geocode full addresses using Mapbox Geocoding API (50,000 free requests/month)[^1_32][^1_33][^1_34]
- **Fallback**: Reverse geocode approximate locations from competitor map pins
- **Quality Threshold**: Reject geocodes with confidence < 0.85; flag for manual review
- **Performance**: Batch geocode 100 addresses per API call to reduce latency[^1_32]

### Deduplication Algorithm

**Multi-Stage Fuzzy Matching**:

**Stage 1 - Blocking** (reduce comparisons from O(n²) to O(n)):
- Group candidates by (city + price_range + property_type)
- Only compare records within same block[^1_35][^1_36]

**Stage 2 - Fuzzy Comparison** (Levenshtein + Geospatial):
```python
def is_duplicate(listing_a, listing_b, threshold=0.85):
    # Title similarity using Levenshtein ratio
    title_score = fuzz.partial_ratio(listing_a.title, listing_b.title) / 100
    
    # Geospatial distance (< 50m = likely duplicate)
    geo_distance = haversine(listing_a.location, listing_b.location)
    geo_score = 1.0 if geo_distance < 50 else 0.0
    
    # Price similarity (within 5%)
    price_diff = abs(listing_a.price - listing_b.price) / max(listing_a.price, listing_b.price)
    price_score = 1.0 if price_diff < 0.05 else 0.0
    
    # Weighted composite score
    composite = (0.4 * title_score) + (0.4 * geo_score) + (0.2 * price_score)
    
    return composite >= threshold
```

**Deduplication Target**: Achieve F1 score ≥ 0.9 on hand-labeled validation set[User requirement][^1_37][^1_38][^1_39][^1_35]

**Performance Optimizations**:

- Use PostGIS spatial indexes for geo-filtering before fuzzy matching[^1_40][^1_41][^1_42][^1_22]
- Cache title n-grams in Redis for faster string comparisons[^1_43]
- Parallel processing with BullMQ workers for large batches[^1_44][^1_45][^1_46]


### Media Handling

**Image Download**:

- **Storage**: AWS S3 / DigitalOcean Spaces with public-read ACL[^1_25][^1_47][^1_24]
- **Naming Convention**: `{listing_id}/{image_hash}.jpg` to prevent collisions
- **Optimization**: Resize to max 2048px width using Sharp library; convert to WebP format[^1_24]
- **CDN Integration**: CloudFront distribution for global edge caching[^1_48][^1_49]

**Copyright Safeguards**:

- Store original image URLs as `provenance.original_image_url`
- Add `robots` meta tag to prevent re-indexing of scraped images
- Implement DMCA takedown process for copyright disputes[^1_8]


## Full-Stack Architecture

### Frontend Layer (Next.js 14 + TypeScript)

**Framework Justification**:

- **Server-Side Rendering (SSR)**: Improves SEO for property listings; critical for organic discovery[^1_50][^1_51][^1_52]
- **Image Optimization**: Built-in lazy loading and WebP conversion reduce bandwidth by 40%[^1_51][^1_53]
- **API Routes**: Eliminate CORS issues; co-locate API logic with frontend[^1_52][^1_51]

**Core Pages**:

1. **Homepage** (`/`): Featured listings, search bar, location-based recommendations
2. **Search Results** (`/search`): Grid/list toggle, filters sidebar, map view integration
3. **Listing Detail** (`/listing/[id]`): Image carousel, contact form, similar properties
4. **Lead Capture** (`/contact`): Multi-step form with validation, CAPTCHA, success tracking

**State Management**:

- **React Query**: Server state caching for listings; optimistic updates for favorites[^1_52]
- **Zustand**: Client state for filters, map bounds, UI preferences[^1_52]

**Map Integration** (Mapbox GL JS):

- **Cluster Markers**: Group nearby listings to prevent marker overlap[^1_54][^1_32]
- **Popup Cards**: Show price, image, title on marker click
- **Bounding Box Search**: Update listings when map viewport changes[^1_33][^1_32]


### Backend Layer (NestJS + TypeScript)

**Framework Justification**:

- **Dependency Injection**: Testable, modular architecture (vs. Express monoliths)[^1_55][^1_56][^1_50]
- **Built-in Swagger**: Auto-generated API docs from TypeScript decorators[^1_50][^1_55]
- **TypeScript-First**: Shared types between frontend/backend reduce integration bugs[^1_57][^1_50]

**Core Modules**:

**Listings Module**:

```typescript
// GET /api/v1/listings?city=Muscat&type=villa&min_price=50000&page=1
@Controller('api/v1/listings')
export class ListingsController {
  @Get()
  async search(@Query() filters: ListingSearchDto): Promise<PaginatedResponse<Listing>> {
    return this.listingsService.search(filters);
  }
  
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Listing> {
    return this.listingsService.findById(id);
  }
}
```

**Leads Module**:

```typescript
// POST /api/v1/leads
@Controller('api/v1/leads')
export class LeadsController {
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createLeadDto: CreateLeadDto): Promise<Lead> {
    const lead = await this.leadsService.create(createLeadDto);
    await this.crmService.syncLead(lead); // Webhook to CRM
    await this.notificationService.notifyAgent(lead); // Email/SMS
    return lead;
  }
}
```

**Search Module** (OpenSearch Integration):

```typescript
async fullTextGeoSearch(query: string, bounds: GeoBounds): Promise<Listing[]> {
  return this.openSearchClient.search({
    index: 'listings',
    body: {
      query: {
        bool: {
          must: [
            { multi_match: { query, fields: ['title^2', 'description'] } }
          ],
          filter: [
            { geo_bounding_box: { location: bounds } }
          ]
        }
      },
      sort: [{ _score: 'desc' }, { price: 'asc' }]
    }
  });
}
```


### Database Layer (PostgreSQL 15 + PostGIS)

**Schema Design**:

**Listings Table**:

```sql
CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  property_type property_type_enum NOT NULL,
  listing_type listing_type_enum NOT NULL,
  price NUMERIC(12, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'OMR',
  location GEOGRAPHY(POINT, 4326) NOT NULL, -- PostGIS spatial column
  address JSONB,
  area_sqm NUMERIC(8, 2),
  bedrooms SMALLINT,
  bathrooms SMALLINT,
  features TEXT[],
  images JSONB,
  agent JSONB,
  source_url TEXT NOT NULL,
  provenance JSONB NOT NULL,
  status listing_status_enum DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT valid_price CHECK (price >= 0),
  CONSTRAINT valid_area CHECK (area_sqm > 0)
);

-- Spatial index for geo queries (critical for performance)
CREATE INDEX idx_listings_location ON listings USING GIST(location);

-- GIN index for JSONB address searches
CREATE INDEX idx_listings_address ON listings USING GIN(address jsonb_path_ops);

-- Composite index for common filters
CREATE INDEX idx_listings_filters ON listings(property_type, listing_type, status, price);

-- Full-text search index
CREATE INDEX idx_listings_fts ON listings USING GIN(to_tsvector('english', title || ' ' || description));
```

**Leads Table**:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  source VARCHAR(50) DEFAULT 'website',
  consent_given BOOLEAN NOT NULL DEFAULT false, -- PDPL compliance
  crm_synced BOOLEAN DEFAULT false,
  crm_sync_error TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE INDEX idx_leads_listing ON leads(listing_id);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
```

**Geospatial Query Examples**:

```sql
-- Find properties within 2km of coordinates
SELECT * FROM listings
WHERE ST_DWithin(
  location,
  ST_SetSRID(ST_MakePoint(58.4059, 23.5880), 4326)::geography,
  2000 -- meters
)
AND status = 'active'
ORDER BY ST_Distance(location, ST_SetSRID(ST_MakePoint(58.4059, 23.5880), 4326)::geography);
```

**Performance**: PostGIS spatial queries with GIST indexes achieve 15-25ms response times for 3M+ records.[^1_23][^1_41][^1_42][^1_22]

### Search Engine (OpenSearch)

**Index Mapping**:

```json
{
  "mappings": {
    "properties": {
      "title": { "type": "text", "analyzer": "english", "boost": 2.0 },
      "description": { "type": "text", "analyzer": "english" },
      "property_type": { "type": "keyword" },
      "listing_type": { "type": "keyword" },
      "price": { "type": "double" },
      "location": { "type": "geo_point" },
      "address.city": { "type": "keyword" },
      "address.region": { "type": "keyword" },
      "area_sqm": { "type": "double" },
      "bedrooms": { "type": "integer" },
      "bathrooms": { "type": "integer" },
      "features": { "type": "keyword" },
      "status": { "type": "keyword" },
      "created_at": { "type": "date" }
    }
  }
}
```

**Search Query Example**:

```json
{
  "query": {
    "bool": {
      "must": [
        { "multi_match": { "query": "sea view villa", "fields": ["title^2", "description"] } }
      ],
      "filter": [
        { "term": { "address.region": "Muscat" } },
        { "term": { "property_type": "villa" } },
        { "range": { "price": { "gte": 100000, "lte": 500000 } } },
        { "range": { "bedrooms": { "gte": 3 } } },
        { "geo_distance": { "distance": "5km", "location": { "lat": 23.5880, "lon": 58.4059 } } }
      ]
    }
  },
  "aggs": {
    "by_city": { "terms": { "field": "address.city" } },
    "price_ranges": { "range": { "field": "price", "ranges": [{"to": 100000}, {"from": 100000, "to": 300000}, {"from": 300000}] } }
  },
  "sort": [{ "_score": "desc" }, { "price": "asc" }]
}
```

**OpenSearch vs. Elasticsearch**:

- **Cost**: OpenSearch is fully open-source (Apache 2.0); Elasticsearch requires paid license for production features[^1_58][^1_59][^1_60][^1_61]
- **Performance**: Elasticsearch is 3-12x faster for vector search, but OpenSearch is competitive for text/geo search[^1_59][^1_62][^1_58]
- **Recommendation**: Use OpenSearch for cost savings; switch to Elasticsearch only if advanced ML features are needed[^1_63][^1_64][^1_58]


### Cache Layer (Redis 7)

**Caching Strategy**:

1. **Query Cache**: Store frequent search queries (key: `search:{hash}`, TTL: 10 minutes)
2. **Listing Detail Cache**: Cache full listing objects (key: `listing:{id}`, TTL: 1 hour)
3. **Geo Boundary Cache**: Cache listings within popular map bounds (TTL: 5 minutes)
4. **Session Store**: Store user sessions and CSRF tokens (TTL: 24 hours)

**Cache Invalidation**:

- **Write-Through**: Update cache immediately after database writes
- **Pub/Sub**: Broadcast cache invalidation events to all API servers[^1_46]


### Background Jobs (BullMQ + Redis)

**Job Queues**:

1. **Scraping Queue** (priority: high):
    - Scheduled: Every 6 hours for differential crawl
    - Workers: 5 concurrent Playwright instances[^1_45][^1_65][^1_44][^1_46]
2. **Geocoding Queue** (priority: medium):
    - Process: Batch geocode 100 addresses per job
    - Retry: 3 attempts with exponential backoff[^1_44][^1_46]
3. **Image Processing Queue** (priority: low):
    - Process: Resize, optimize, upload to S3
    - Parallelism: 10 workers[^1_65][^1_45][^1_44]
4. **CRM Sync Queue** (priority: high):
    - Process: Webhook POST to CRM on lead creation
    - Retry: 5 attempts; DLQ for manual review[^1_46][^1_44]

**Worker Implementation** (Node.js):

```typescript
import { Worker } from 'bullmq';

const worker = new Worker('geocoding', async job => {
  const { addresses } = job.data;
  const results = await mapboxClient.forwardGeocode({ query: addresses, limit: 1 }).send();
  
  for (const result of results.body.features) {
    await db.listings.update({
      where: { id: result.id },
      data: { location: { lat: result.center[^1_1], lon: result.center[^1_0] } }
    });
  }
}, { connection: redisConnection, concurrency: 5 });

worker.on('completed', job => {
  console.log(`Geocoded ${job.data.addresses.length} addresses`);
});
```


## Lead Capture \& CRM Integration

### Lead Capture Flow

**Frontend Form** (React Hook Form + Zod validation):

```typescript
const leadSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  phone: z.string().regex(/^\+968[0-9]{8}$/, 'Invalid Oman phone'),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent required (PDPL)' }) })
});

function LeadForm({ listingId }: { listingId: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(leadSchema)
  });
  
  const onSubmit = async (data) => {
    await fetch('/api/v1/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, listing_id: listingId })
    });
    // Show success message, track conversion event
  };
}
```

**Backend Validation \& Processing**:

1. **Validate**: Check email format, phone pattern, consent flag
2. **Store**: Insert into PostgreSQL `leads` table with consent timestamp
3. **Enqueue**: Add to BullMQ `crm-sync` queue for async processing
4. **Notify**: Send email to listing agent with lead details
5. **Track**: Log conversion event to analytics (Google Analytics 4 / Plausible)

### CRM Integration Patterns

**Webhook Integration** (Push to CRM):

```typescript
async syncLeadToCRM(lead: Lead): Promise<void> {
  const payload = {
    contact: {
      firstName: lead.name.split(' ')[^1_0],
      lastName: lead.name.split(' ').slice(1).join(' '),
      email: lead.email,
      phone: lead.phone,
      customFields: {
        listingId: lead.listing_id,
        source: 'Oman Real Estate Platform',
        consentDate: lead.created_at
      }
    },
    dealNote: lead.message
  };
  
  const response = await fetch(process.env.CRM_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CRM_API_KEY}`
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    throw new Error(`CRM sync failed: ${response.statusText}`);
  }
  
  await db.leads.update({ where: { id: lead.id }, data: { crm_synced: true } });
}
```

**Supported CRMs** (via native integrations or Zapier):

- Zoho CRM: Native REST API; field mapping via custom modules[^1_66]
- HubSpot: Contacts API; automatic deal creation pipeline
- Salesforce: REST/SOAP API; custom object for properties
- Follow Up Boss: Real estate-specific CRM; property-lead linking[^1_67][^1_68][^1_69][^1_70][^1_71]

**Lead Distribution Logic**:

1. **Round-Robin**: Distribute leads evenly across active agents
2. **Territory-Based**: Route leads to agents covering listing region
3. **Skill-Based**: Route luxury properties (>OMR 500K) to senior agents
4. **Time-Based**: Route leads during business hours; queue for next day otherwise[^1_68][^1_67]

## Security \& Compliance Checklist

### OWASP API Security Top 10 (2023)

**API1 - Broken Object Level Authorization**:

- ✅ Validate user owns resource before GET/PUT/DELETE (check `user_id` in JWT matches resource owner)[^1_72][^1_73][^1_74]
- ✅ Use UUIDs for listing IDs (prevent enumeration attacks)

**API2 - Broken Authentication**:

- ✅ Implement NextAuth.js with OAuth 2.0 for admin panel[^1_73][^1_72]
- ✅ Enforce MFA for admin accounts[^1_75][^1_72]
- ✅ Rate limit login attempts (5 attempts / 15 minutes)[^1_72]

**API3 - Broken Object Property Level Authorization**:

- ✅ Use DTO classes to whitelist exposed fields (hide `provenance.raw_html_s3_key` from public API)[^1_73][^1_72]

**API4 - Unrestricted Resource Consumption**:

- ✅ Implement rate limiting: 100 requests/minute per IP (Nginx/CloudFlare)[^1_72][^1_73]
- ✅ Limit search results to 100 per page[^1_72]
- ✅ Implement query timeouts (5 seconds for OpenSearch)[^1_72]

**API5 - Broken Function Level Authorization**:

- ✅ Separate public (`/api/v1/listings`) and admin (`/api/admin/scraper`) routes[^1_73][^1_72]
- ✅ Require `role: admin` claim in JWT for admin endpoints[^1_72]

**API6 - Unrestricted Access to Sensitive Business Flows**:

- ✅ Implement CAPTCHA (hCaptcha) on lead submission forms[^1_72]
- ✅ Monitor lead submission rates; flag accounts submitting >10 leads/hour[^1_72]

**API7 - Server-Side Request Forgery (SSRF)**:

- ✅ Validate all user-supplied URLs against allowlist (only allow Mapbox, S3 domains)[^1_74][^1_73][^1_72]
- ✅ Disable URL parsing in user inputs[^1_72]

**API8 - Security Misconfiguration**:

- ✅ Disable Swagger UI in production (`NODE_ENV=production`)[^1_73][^1_72]
- ✅ Remove verbose error messages; log stack traces server-side only[^1_72]
- ✅ Enable HTTPS-only (redirect HTTP → HTTPS)[^1_75][^1_73][^1_72]

**API9 - Improper Inventory Management**:

- ✅ Maintain API endpoint inventory in OpenAPI spec[^1_72]
- ✅ Retire deprecated endpoints with 6-month sunset period[^1_72]

**API10 - Unsafe Consumption of APIs**:

- ✅ Validate all Mapbox API responses against expected schema[^1_73][^1_72]
- ✅ Implement timeout (10s) for external API calls[^1_72]


### Additional Security Measures

**HTTPS \& TLS**:

- ✅ Use Let's Encrypt for free SSL certificates (auto-renewal via cert-manager)[^1_73][^1_72]
- ✅ Enforce TLS 1.3; disable TLS 1.0/1.1[^1_72]

**Content Security Policy (CSP)**:

```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://maps.mapbox.com;
  img-src 'self' https://s3.amazonaws.com data:;
  connect-src 'self' https://api.mapbox.com;
  frame-ancestors 'none';
```

**CORS Configuration**:

- Allow origins: `https://yourdomain.com`, `https://www.yourdomain.com`
- Allow methods: `GET, POST, OPTIONS`
- Allow headers: `Content-Type, Authorization`[^1_73][^1_72]

**Input Validation**:

- ✅ Sanitize all user inputs with DOMPurify (prevent XSS)[^1_73][^1_72]
- ✅ Use parameterized queries (Prisma/TypeORM) to prevent SQL injection[^1_72]
- ✅ Validate file uploads (max 5MB, only image MIME types)[^1_72]

**Secrets Management**:

- ✅ Store secrets in Kubernetes Secrets / AWS Secrets Manager[^1_76][^1_77]
- ✅ Rotate API keys every 90 days[^1_72]
- ✅ Never commit `.env` files to Git (add to `.gitignore`)[^1_72]


## Deployment \& Infrastructure

### Containerization (Docker)

**Multi-Stage Dockerfile** (Next.js Frontend):

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

**Docker Compose** (Local Development):

```yaml
version: '3.8'
services:
  postgres:
    image: postgis/postgis:15-3.3-alpine
    environment:
      POSTGRES_DB: real_estate
      POSTGRES_PASSWORD: dev_password
    ports: ['5432:5432']
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports: ['6379:6379']
  
  opensearch:
    image: opensearchproject/opensearch:2.11.0
    environment:
      discovery.type: single-node
      OPENSEARCH_INITIAL_ADMIN_PASSWORD: Dev@123
    ports: ['9200:9200']
  
  backend:
    build: ./backend
    ports: ['4000:4000']
    depends_on: [postgres, redis, opensearch]
    environment:
      DATABASE_URL: postgresql://postgres:dev_password@postgres:5432/real_estate
      REDIS_URL: redis://redis:6379
  
  frontend:
    build: ./frontend
    ports: ['3000:3000']
    depends_on: [backend]
```


### Kubernetes Deployment

**Deployment Manifest** (Backend API):

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend-api
  template:
    metadata:
      labels:
        app: backend-api
    spec:
      containers:
      - name: api
        image: your-registry/backend-api:v1.0.0
        ports:
        - containerPort: 4000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url
        - name: REDIS_URL
          value: redis://redis-service:6379
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 4000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 4000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: backend-api-service
spec:
  type: ClusterIP
  selector:
    app: backend-api
  ports:
  - port: 80
    targetPort: 4000
```

**Horizontal Pod Autoscaler**:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend-api
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```


### CI/CD Pipeline (GitHub Actions)

**Workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run unit tests
        run: npm test -- --coverage
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
      
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: your-registry/backend-api:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Kubernetes
        uses: azure/k8s-deploy@v4
        with:
          manifests: |
            k8s/deployment.yaml
            k8s/service.yaml
          images: your-registry/backend-api:${{ github.sha }}
          kubectl-version: 'latest'
```

**Best Practices**:

- ✅ Run tests on every PR; block merge if tests fail[^1_78][^1_79][^1_80][^1_81][^1_82]
- ✅ Use Docker layer caching to speed builds (5-10x faster)[^1_79][^1_78][^1_76]
- ✅ Implement blue-green deployments to minimize downtime[^1_78][^1_79]
- ✅ Tag images with Git SHA for traceability[^1_81][^1_82][^1_78]


### Monitoring \& Observability

**Metrics** (Prometheus + Grafana):

- **API Latency**: P50, P95, P99 response times (target: P95 < 300ms)[User requirement]
- **Error Rate**: 5xx responses per minute (target: < 0.1%)
- **Database Connections**: Active connections, connection pool utilization
- **Cache Hit Rate**: Redis cache hit ratio (target: > 80%)[User requirement]
- **Search Latency**: OpenSearch query times (target: < 200ms)[User requirement]

**Logs** (ELK / OpenSearch):

- Structured JSON logs with trace IDs for correlation
- Centralized aggregation from all pods
- Retention: 30 days for operational logs, 90 days for audit logs

**Error Tracking** (Sentry):

- Real-time alerts for critical errors (Slack/PagerDuty integration)
- Source map uploads for stack trace resolution
- Release tracking to correlate errors with deployments

**Uptime Monitoring** (UptimeRobot / Pingdom):

- HTTP checks every 1 minute from 5 global locations
- Alert if 2 consecutive checks fail (target: 99.9% uptime)[User requirement]


## Cost Estimation \& Optimization

**Monthly Infrastructure Costs** (Initial Scale):


| Service | Tier | Cost (USD) |
| :-- | :-- | :-- |
| Compute (DigitalOcean Droplets 3x 4GB) | \$48/droplet | \$144 |
| Managed PostgreSQL (4GB) |  | \$60 |
| Managed Redis (1GB) |  | \$15 |
| OpenSearch (2x 4GB nodes) |  | \$120 |
| S3 Storage (500GB + 1M requests) |  | \$15 |
| CloudFront CDN (1TB egress) |  | \$85 |
| Mapbox (100K geocodes + 200K map loads) | Free tier | \$0 |
| **Total** |  | **~\$439/month** |

**Scaling to 100K Monthly Users**:

- Add 2 additional compute nodes: +\$96/month
- Increase PostgreSQL to 8GB: +\$60/month
- Increase Redis to 2GB: +\$10/month
- **Total**: ~\$605/month

**Cost Optimization Strategies**:

- Use CloudFront to cache static assets (reduce origin requests by 70%)[^1_49][^1_48]
- Implement aggressive Redis caching to reduce database queries by 60%[^1_61]
- Use S3 Lifecycle policies to move old images to Glacier after 90 days (save 80% storage cost)[^1_83]
- Leverage Mapbox's generous free tier (50K geocodes + 50K map loads/month)[^1_34][^1_32]


## Implementation Timeline \& Sprint Plan

The 12-week development roadmap is divided into six 2-week sprints, delivering iterative value from infrastructure setup through production launch. Each sprint includes clear deliverables and acceptance criteria to ensure progress tracking and stakeholder alignment.[^1_84][^1_85][^1_86][^1_87][^1_88][^1_89]

**Sprint 1** establishes the foundation with cloud infrastructure, database setup, basic API scaffolding, and CI/CD pipelines. **Sprint 2** focuses on data acquisition, building the Scrapy/Playwright crawler and ETL pipeline to normalize and geocode listings. **Sprint 3** implements core search functionality with OpenSearch integration and lead capture forms. **Sprint 4** hardens security and performance through OWASP compliance audits, caching implementation, and advanced UI features. **Sprint 5** prepares for production deployment with Kubernetes setup, monitoring dashboards, and comprehensive documentation. **Sprint 6** executes UAT, critical bug fixes, performance tuning, and final production launch.[^1_85][^1_86][^1_88][^1_89][^1_84]

**Key Milestones**:

- **Week 2**: Infrastructure operational; first API endpoint live
- **Week 4**: Initial 1,000+ listings scraped and indexed
- **Week 6**: Search and lead capture functional; MVP feature-complete
- **Week 8**: Security audit passed; performance benchmarks met
- **Week 10**: Production environment deployed; monitoring live
- **Week 12**: Platform launched; UAT signed off; team trained

**Resource Allocation**:

- **2 Full-Stack Engineers** (Next.js + NestJS)
- **1 DevOps Engineer** (Kubernetes + CI/CD)
- **1 Data Engineer** (Scraping + ETL)
- **1 QA Engineer** (Testing + Security)
- **1 Product Manager** (Coordination + Stakeholder management)


## Testing Strategy

### Unit Testing

- **Framework**: Jest for TypeScript (both frontend + backend)
- **Coverage Target**: 80% line coverage; 100% for critical paths (payment, lead submission)[^1_84]
- **Mocking**: Mock external APIs (Mapbox, S3) using `nock` or `msw`


### Integration Testing

- **Database Tests**: Use `testcontainers` to spin up PostgreSQL/Redis for tests
- **API Tests**: Use Supertest to test REST endpoints end-to-end
- **Search Tests**: Validate OpenSearch queries return expected results


### End-to-End Testing

- **Framework**: Playwright (headless browser automation)[^1_31][^1_90]
- **Critical User Flows**:

1. Homepage → Search → View Listing → Submit Lead → Success Message
2. Apply filters → Update map bounds → Click marker → Open detail page
3. Invalid form submission → Validation errors displayed
- **Frequency**: Run E2E tests on every PR and nightly


### Performance Testing

- **Tool**: k6 for load testing
- **Scenarios**:
    - 100 concurrent users searching listings (target: P95 < 300ms)
    - 50 concurrent users submitting leads (target: P95 < 500ms)
    - 1,000 searches/minute sustained for 10 minutes (no errors)


### Security Testing

- **Static Analysis**: SonarQube for code quality and vulnerability scanning
- **Dependency Scanning**: Snyk / Dependabot for outdated packages
- **Penetration Testing**: Manual OWASP Top 10 testing before production launch[^1_91][^1_92][^1_93][^1_74][^1_75][^1_73][^1_72]


## Data Quality Metrics

**Parsing Accuracy**:

- **Target**: 95%+ of scraped listings have all required fields populated[User requirement]
- **Validation**: Sample 100 listings manually; compare extracted data to source HTML

**Deduplication Accuracy**:

- **Target**: F1 score ≥ 0.9 on hand-labeled validation set[User requirement]
- **Process**: Label 500 listing pairs as duplicate/not-duplicate; tune fuzzy matching thresholds

**Geocoding Accuracy**:

- **Target**: 90%+ of addresses geocoded with confidence > 0.85[User requirement]
- **Validation**: Manually verify 50 geocoded listings on map

**Freshness**:

- **Target**: New listings indexed within 1 hour of detection[User requirement]
- **Monitoring**: Track `scrape_timestamp` to `indexed_at` delay in Grafana


## API Specification Examples

**GET /api/v1/listings** (Search with filters):

```http
GET /api/v1/listings?city=Muscat&type=villa&min_price=100000&max_price=500000&bedrooms=3&page=1&per_page=20

Response 200 OK:
{
  "data": [
    {
      "id": "OMA-1234567890",
      "title": "Luxury 3-Bedroom Villa in Al Mouj",
      "property_type": "villa",
      "listing_type": "sale",
      "price": { "amount": 350000, "currency": "OMR" },
      "location": { "lat": 23.6242, "lon": 58.4059 },
      "address": { "city": "Muscat", "region": "Muscat", "district": "Al Mouj" },
      "bedrooms": 3,
      "bathrooms": 4,
      "area_sqm": 280,
      "images": [
        { "url": "https://cdn.yourdomain.com/listings/OMA-1234567890/img1.webp", "order": 1 }
      ],
      "agent": { "name": "Ahmed Al-Said", "phone": "+96899123456" }
    }
  ],
  "meta": {
    "total": 245,
    "page": 1,
    "per_page": 20,
    "total_pages": 13
  },
  "facets": {
    "by_city": [
      { "key": "Muscat", "count": 180 },
      { "key": "Salalah", "count": 45 }
    ],
    "by_property_type": [
      { "key": "villa", "count": 120 },
      { "key": "apartment", "count": 90 }
    ]
  }
}
```

**POST /api/v1/leads** (Submit lead):

```http
POST /api/v1/leads
Content-Type: application/json

{
  "listing_id": "OMA-1234567890",
  "name": "Fatima Al-Harthy",
  "email": "fatima@example.com",
  "phone": "+96899765432",
  "message": "Interested in scheduling a viewing.",
  "consent": true
}

Response 201 Created:
{
  "id": "lead-uuid-12345",
  "listing_id": "OMA-1234567890",
  "name": "Fatima Al-Harthy",
  "email": "fatima@example.com",
  "created_at": "2025-11-16T15:30:00Z",
  "message": "Thank you! An agent will contact you within 24 hours."
}
```


## Conclusion \& Next Steps

This blueprint provides a complete, actionable roadmap to build a production-ready real estate platform for the Oman market within 12 weeks. The architecture prioritizes legal compliance (PDPL), scalability (Kubernetes + OpenSearch), and lead conversion (CRM integration + analytics).

**Immediate Next Steps**:

1. **Legal Review** (Week 0): Consult Oman-based legal counsel to verify PDPL compliance strategies and scraping legality[^1_2][^1_3][^1_1]
2. **Infrastructure Provisioning** (Week 1): Set up AWS/DigitalOcean accounts; provision VPC, databases, and CI/CD pipelines
3. **Competitor Analysis** (Week 1): Document target competitor's site structure, robots.txt rules, and data fields
4. **Team Onboarding** (Week 1): Share this blueprint with engineering team; assign sprint responsibilities
5. **Kickoff Sprint 1** (Week 1): Begin infrastructure setup and API scaffolding tasks

**Risk Mitigation**:

- **Scraping Legal Risk**: Maintain provenance metadata; implement takedown process; consult legal before launch[^1_7][^1_8][^1_10]
- **Data Quality Risk**: Implement automated validation; manual QA sampling; iterative parser improvements[User requirement]
- **Performance Risk**: Load test early (Sprint 4); optimize database queries; implement aggressive caching[^1_85][^1_84]
- **Security Risk**: Conduct OWASP audit (Sprint 4); penetration testing before launch[^1_74][^1_73][^1_72]

**Success Metrics** (90 days post-launch):

- **Traffic**: 10,000+ monthly unique visitors
- **Listings**: 5,000+ active properties indexed
- **Leads**: 100+ leads submitted per month (1-3% conversion rate)[User requirement]
- **Performance**: P95 latency < 300ms; 99.9% uptime[User requirement]
- **Data Quality**: Duplicate rate < 5%; geocoding accuracy > 90%[User requirement]

By following this blueprint, your team will deliver a competitive, compliant, and scalable real estate platform that captures market share in Oman's growing property sector.[^1_20][^1_21][^1_19]
<span style="display:none">[^1_100][^1_101][^1_102][^1_103][^1_104][^1_105][^1_106][^1_107][^1_108][^1_109][^1_110][^1_111][^1_112][^1_113][^1_114][^1_115][^1_116][^1_117][^1_118][^1_119][^1_120][^1_121][^1_122][^1_123][^1_124][^1_125][^1_126][^1_127][^1_128][^1_129][^1_130][^1_131][^1_132][^1_133][^1_134][^1_135][^1_136][^1_137][^1_138][^1_139][^1_140][^1_94][^1_95][^1_96][^1_97][^1_98][^1_99]</span>

<div align="center">⁂</div>

[^1_1]: https://www.addleshawgoddard.com/en/insights/insights-briefings/2024/data-protection/executive-regulations-oman-personal-data-protection-law/

[^1_2]: https://www.tamimi.com/news/breaking-news-executive-regulation-of-the-omani-personal-data-protection-law-is-finally-released/

[^1_3]: https://www.clydeco.com/en/insights/2024/02/oman-issues-executive-regulations-to-pdpl

[^1_4]: https://www.saslo.com/latest/guidance-on-the-executive-regulation-of-the-personal-data-protection-law-in-oman

[^1_5]: https://www.amjoman.com/executive-regulations-to-the-omans-data-protection-law/

[^1_6]: https://www.pinsentmasons.com/out-law/news/oman-data-protection-regulation-now-in-force

[^1_7]: https://thunderbit.com/blog/is-web-scraping-legal

[^1_8]: https://blog.apify.com/is-web-scraping-legal/

[^1_9]: https://www.scraperapi.com/web-scraping/is-web-scraping-legal/

[^1_10]: https://groupbwt.com/blog/is-web-scraping-legal/

[^1_11]: https://scrapfly.io/is-web-scraping-legal

[^1_12]: https://omanreal.com

[^1_13]: https://omanoffplan.com

[^1_14]: https://om.opensooq.com/en/property/property-for-sale

[^1_15]: https://vistaoman.com

[^1_16]: https://hilalprp.com.om

[^1_17]: https://www.dubizzle.com.om/en/properties/properties-for-sale/

[^1_18]: https://www.mawa.om/en

[^1_19]: https://www.mordorintelligence.com/industry-reports/residential-real-estate-market-in-oman

[^1_20]: https://www.marketreportanalytics.com/reports/oman-commercial-real-estate-market-91877

[^1_21]: https://www.marknteladvisors.com/research-library/oman-residential-real-estate-market.html

[^1_22]: https://dennenboom.be/blog/the-hidden-superpowers-of-postgresql-geospatial-queries

[^1_23]: https://www.percona.com/blog/working-with-geospatial-data-postgis-makes-postgresql-enterprise-ready/

[^1_24]: https://www.youtube.com/watch?v=eQAIojcArRY

[^1_25]: https://realtypress.ca/downloads/realtypress-premium-amazon-s3-storage/

[^1_26]: https://stackoverflow.com/questions/17530762/only-allow-properties-that-are-declared-in-json-schema

[^1_27]: https://json-schema.org/understanding-json-schema/reference/object

[^1_28]: https://brightdata.com/blog/web-data/scrapy-vs-playwright

[^1_29]: https://dev.to/wisdomudo/top-10-tools-for-efficient-web-scraping-in-2025-20jk

[^1_30]: https://scrapfly.io/blog/posts/web-scraping-dynamic-websites-with-scrapy-playwright

[^1_31]: https://multilogin.com/blog/top-web-scraping-tools-for-scrapers/

[^1_32]: https://radar.com/blog/mapbox-vs-google-maps-api

[^1_33]: https://relevant.software/blog/choosing-a-map-amapbox-google-maps-openstreetmap/

[^1_34]: https://bachasoftware.com/blog/insights-2/mapping-api-comparing-mapbox-googlemaps-openstreetmap-691

[^1_35]: https://www.elastic.co/search-labs/blog/detect-duplicates-ai-elasticsearch

[^1_36]: https://meu.edu.jo/libraryTheses/5873670bbe21c_1.pdf

[^1_37]: https://optiblack.com/insights/fixing-duplicate-listing-for-a-real-estate-website

[^1_38]: https://aws.amazon.com/blogs/big-data/use-fuzzy-string-matching-to-approximate-duplicate-records-in-amazon-redshift/

[^1_39]: https://dataladder.com/fuzzy-matching-101/

[^1_40]: https://www.go-inicio.com/en/optimizing-geospatial-workflows-practical-postgis-tricks

[^1_41]: https://tech-couch.com/post/basic-geospatial-queries-in-postgres

[^1_42]: https://www.crunchydata.com/blog/postgis-performance-indexing-and-explain

[^1_43]: https://stackoverflow.com/questions/7196053/fuzzy-matching-deduplication-in-less-than-exponential-time

[^1_44]: https://devcenter.heroku.com/articles/node-redis-workers

[^1_45]: https://www.youtube.com/watch?v=zpkj9Z-JWKQ

[^1_46]: https://bullmq.io

[^1_47]: https://blog.codinghorror.com/using-amazon-s3-as-an-image-hosting-service/

[^1_48]: https://vinova.sg/use-amazon-s3-as-your-content-delivery-network/

[^1_49]: https://aws.amazon.com/cloudfront/getting-started/S3/

[^1_50]: https://metadesignsolutions.com/scalable-real-estate-software-development-features-tech-stack-cost/

[^1_51]: https://www.geeksforgeeks.org/reactjs/real-estate-listings-platform-using-nextjs/

[^1_52]: https://slashdev.io/-how-to-build-a-custom-real-estate-property-management-system-in-nextjs-in-2024

[^1_53]: https://blog.devgenius.io/next-js-for-real-estate-building-a-feature-rich-listing-platform-5f47f4d6ea68

[^1_54]: https://acropolium.com/blog/choosing-a-map-api-mapbox-vs-google-maps/

[^1_55]: https://www.planeks.net/nodejs-vs-fastapi-for-api/

[^1_56]: https://www.linkedin.com/posts/nest-js-hero_fastapi-vs-expressjs-vs-flask-vs-nestjs-activity-7211704207467274241-yrTb

[^1_57]: https://dev.to/whitmanmark/choosing-best-tech-stack-for-building-a-real-estate-listing-platform-48ij

[^1_58]: https://uptrace.dev/comparisons/opensearch-vs-elasticsearch

[^1_59]: https://www.elastic.co/search-labs/blog/elasticsearch-opensearch-vector-search-performance-comparison

[^1_60]: https://coralogix.com/guides/elasticsearch/elasticsearch-vs-opensearch-key-differences/

[^1_61]: https://redis.io/blog/elasticsearch-vs-opensearch/

[^1_62]: https://www.elastic.co/amazon-opensearch-service

[^1_63]: https://www.devcentrehouse.eu/blogs/opensearch-vs-elasticsearch-difference/

[^1_64]: https://sematext.com/opensearch-vs-elasticsearch-which-one-is-better-sematext/

[^1_65]: https://dev.to/hexshift/scaling-background-jobs-with-bullmq-and-redis-in-nodejs-4612

[^1_66]: https://www.zoho.com/crm/verticals/real-estate/

[^1_67]: https://www.plumb5.com/real-estate-crm-integration

[^1_68]: https://archizsolutions.com/crm-for-real-estate-lead-management/

[^1_69]: https://convin.ai/blog/ai-for-commercial-real-estate-crm-integration

[^1_70]: https://fello.ai/blogs/how-real-estate-crm-systems-can-improve-lead-nurturing-and-conversion

[^1_71]: https://www.leadcrm.io/blog/best-crm-for-real-estate-agents/

[^1_72]: https://www.pynt.io/learning-hub/owasp-top-10-guide/owasp-api-top-10

[^1_73]: https://www.f5.com/glossary/owasp-api-security-top-10

[^1_74]: https://www.appknox.com/blog/owasp-top-10-vulnerabilities

[^1_75]: https://www.aikido.dev/blog/what-is-owasp-top-10

[^1_76]: https://www.index.dev/blog/kubernetes-vs-docker

[^1_77]: https://docs.docker.com/guides/kube-deploy/

[^1_78]: https://varenyaz.com/revolutionizing-real-estate-how-devops-ci-cd-implementation-drives-efficiency-and-innovation/

[^1_79]: https://sidgs.com/ci-cd-best-practices-tips-for-successful-deployment-automation/

[^1_80]: https://www.sculptsoft.com/devops-best-practices-for-real-estate-software-development/

[^1_81]: https://aloa.co/blog/best-ci-cd-tools

[^1_82]: https://www.jetbrains.com/teamcity/ci-cd-guide/ci-cd-best-practices/

[^1_83]: https://acecloud.ai/blog/amazon-s3-guide/

[^1_84]: https://enlabsoftware.com/mvp/how-to-create-an-agile-mvp-roadmap-for-early-stage-startups.html

[^1_85]: https://divtechnosoft.com/guides/complete-guide-to-mvp-development

[^1_86]: https://asymm.com/case-studies/homesy/

[^1_87]: https://brights.io/projects/shugaland-real-estate-management-platform

[^1_88]: https://litslink.com/blog/how-to-build-an-mvp-in-several-steps

[^1_89]: https://cygnis.co/blog/agile-mvp-development/

[^1_90]: https://www.firecrawl.dev/blog/best-open-source-web-scraping-libraries

[^1_91]: https://owasp.org/www-project-top-ten/

[^1_92]: https://owasp.org/www-project-application-security-verification-standard/

[^1_93]: https://hicronsoftware.com/blog/web-app-security-checklist-owasp-top-10/

[^1_94]: https://www.quinnemanuel.com/the-firm/publications/the-legal-landscape-of-web-scraping/

[^1_95]: https://decree.om/2025/rd20250079/

[^1_96]: https://www.royex.ae/blog/architecting-a-fractional-real-estate-platform-tech-stack-spvs-regulatory-models/

[^1_97]: https://www.linkedin.com/pulse/building-real-estate-tokenization-platform-essential-kqjvf

[^1_98]: https://ideadope.com/roadmaps/optimal-tech-stack-for-portfolio-in-real-estate

[^1_99]: https://hypersense-software.com/blog/2023/07/25/building-a-real-estate-platform-like-zillow/

[^1_100]: https://postgis.net/docs/using_postgis_query.html

[^1_101]: https://litslink.com/blog/tech-stack-for-real-estate-it-solutions

[^1_102]: https://www.scrapingbee.com/blog/best-python-web-scraping-libraries

[^1_103]: https://www.linkedin.com/pulse/cicd-what-best-practices-real-world-deployment-example-usman-malik-fi2pf

[^1_104]: https://ltesocks.io/blog/anonymity-and-data-protection/key-differences-and-advantages-of-using-scrapy-and-playwright-for-web-scraping/

[^1_105]: https://vitamail.vitanur.com/blogs/real-estate-crm-integration

[^1_106]: https://aviaanaccounting.com/competition-analysis-service-in-oman/

[^1_107]: https://github.com/hamidkhans651/nextjs-real-estate-project

[^1_108]: https://www.marketresearch.com/seek/Real-Estate-Oman/161/1343/1.html

[^1_109]: https://www.stakly.dev/build/real-estate/with/next-js

[^1_110]: https://about.twimbit.com/about/blogs/reliable-background-task-execution-using-bullmq-and-node-js

[^1_111]: https://cavendishmaxwell.com/insights/market-reports/residential/oman-real-estate-market-performance-2024-and-future-outlook

[^1_112]: https://www.youtube.com/watch?v=DEhgtpMxuOQ

[^1_113]: https://blog.stackademic.com/building-distributed-job-queues-in-node-js-with-redis-and-bullmq-36c80cff91a7

[^1_114]: https://www.6wresearch.com/industry-report/oman-it-in-real-estate-market

[^1_115]: https://devabit.com/blog/how-to-develop-a-real-estate-platform/

[^1_116]: https://cs231n.stanford.edu/reports/2017/posters/7.pdf

[^1_117]: https://www.docker.com/blog/building-certified-kubernetes-cluster-on-premises-with-docker/

[^1_118]: https://www.docker.com/blog/building-a-local-application-development-environment-for-kubernetes-with-the-gefyra-docker-extension/

[^1_119]: https://schemantra.com/schema_list/RealEstateListing

[^1_120]: https://schema.org/RealEstateListing

[^1_121]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

[^1_122]: https://unece.org/sites/default/files/2023-11/API-TECH-SPEC_JSON_Schema_NDR_version1p0.pdf

[^1_123]: https://pubs.dbs.uni-leipzig.de/dc/files/Monge2000MatchingAlgorithmswithina.pdf

[^1_124]: https://thetechclouds.com/docker-vs-kubernetes-which-is-the-best-option/

[^1_125]: https://www.learnjsonschema.com/draft6/validation/propertynames/

[^1_126]: https://hpi.de/fileadmin/user_upload/fachgebiete/naumann/publications/PDFs/2021_panse_evaluation.pdf

[^1_127]: https://www.techaheadcorp.com/blog/the-growth-of-containers-and-kubernetes-architecture-in-cloud-deployment-a-2025-perspective/

[^1_128]: https://www.w3.org/TR/vc-json-schema/

[^1_129]: https://stackoverflow.com/questions/74778070/architecture-for-serving-images-from-s3-bucket-securely

[^1_130]: https://aloa.co/blog/mapbox-vs-google-maps-what-you-need-to-know-before-you-choose

[^1_131]: https://allfront.io/blog/mapbox-vs-google-maps/

[^1_132]: https://docs.redpointglobal.com/rpdm/fuzzy-matching-and-deduplication

[^1_133]: https://clockwise.software/blog/real-estate-mobile-app-development-guide/

[^1_134]: https://hostadvice.com/blog/web-hosting/node-js/fastapi-vs-nodejs/

[^1_135]: https://www.datablist.com/learn/data-cleaning/fuzzy-matching

[^1_136]: https://github.com/fastapi/fastapi/discussions/7320

[^1_137]: https://www.reddit.com/r/webdev/comments/1c121ra/nestjs_vs_django_vs_fastapi_for_backend/

[^1_138]: https://www.travisluong.com/fastapi-vs-express-js-vs-flask-vs-nest-js-benchmark/

[^1_139]: https://www.melissa.com/en-au/data-deduplication

[^1_140]: https://fastapi.tiangolo.com/alternatives/

