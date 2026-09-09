// ============================================================
// Cottage Finder – app.js
// Single-page app: Google Maps + listing cards
// ============================================================

const LISTINGS = [
  {
    id: 1,
    name: "Water view A-frame # 5 (8 guests)",
    region: "Renfrew County / Ottawa River Watershed, ON",
    waterBody: "Ottawa River / Lower Madawaska System",
    drive: "~4h 00m",
    driveMin: 240,
    capacity: "8 guests · 4 beds · 1 bath",
    rating: "4.85 ★",
    ratingNum: 4.85,
    reviews: "13 reviews",
    badges: "Superhost",
    price: 322,
    link: "https://www.airbnb.ca/rooms/1152214537794848375",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-949277017879183525/original/e40997e0-bf44-429b-b2f6-3702b7b8ccf5.jpeg?im_w=720",
    amenities: [
      "Direct waterfront with scenic water views",
      "Private beach access and water entry",
      "Dock access for swimming, fishing, and kayak launches",
      "Outdoor fire pit and riverside seating area",
      "Resort amenity privileges on site"
    ],
    lat: 45.52, lng: -77.10
  },
  {
    id: 2,
    name: "Cozy 3BR Retreat near Fenelon Falls | Bobcaygeon",
    region: "Kawartha Lakes, ON (Fenelon Falls / Bobcaygeon)",
    waterBody: "Cameron Lake / Sturgeon Lake Basin",
    drive: "~1h 45m",
    driveMin: 105,
    capacity: "8 guests · 3 beds + sofa bed · 1 bath",
    rating: "4.82 ★",
    ratingNum: 4.82,
    reviews: "39 reviews",
    badges: "Guest Favourite",
    price: 400,
    link: "https://www.airbnb.ca/rooms/1566211448606828667",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1566211448606828667/original/080dc254-9c16-41d8-8211-707a4b33d233.jpeg?im_w=720",
    amenities: [
      "Minutes to Cameron Lake and Sturgeon Lake beaches",
      "Dedicated lake access point nearby",
      "Large private lawn with outdoor fire pit",
      "Patio with BBQ grill and outdoor dining",
      "Close to Trent-Severn Waterway Lock 34"
    ],
    lat: 44.53, lng: -78.73
  },
  {
    id: 3,
    name: "Cottage #6 - 3 Bedroom Lakeview Cottage (Sleeps 8)",
    region: "Bobcaygeon / Kawartha Lakes, ON",
    waterBody: "Pigeon Lake / Trent-Severn Waterway",
    drive: "~1h 50m",
    driveMin: 110,
    capacity: "8 guests · 3 bedrooms · 4 beds · 1 bath",
    rating: "4.73 ★",
    ratingNum: 4.73,
    reviews: "15 reviews",
    badges: "Superhost",
    price: 410,
    link: "https://www.airbnb.ca/rooms/1424839198634533841",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1424839198634533841/original/7ae64a40-b6be-4d96-a50c-741dcc22d50e.jpeg?im_w=720",
    amenities: [
      "Private lakefront beach access on Pigeon Lake",
      "Shared dock for boat tie-up and fishing",
      "Canoe and paddle equipment on site",
      "Waterfront picnic tables and fire pit",
      "Quiet family-friendly cottage resort setting"
    ],
    lat: 44.52, lng: -78.65
  },
  {
    id: 4,
    name: "Cottage #1 - 4 Bedroom Lakefront Cottage (Sleeps 10)",
    region: "Bobcaygeon / Kawartha Lakes, ON",
    waterBody: "Pigeon Lake / Trent-Severn Waterway",
    drive: "~1h 50m",
    driveMin: 110,
    capacity: "10 guests · 4 bedrooms · 4 beds · 1 bath",
    rating: "4.94 ★",
    ratingNum: 4.94,
    reviews: "18 reviews",
    badges: "Superhost & Guest Favourite",
    price: 436,
    link: "https://www.airbnb.ca/rooms/1424063869041071641",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1424063869041071641/original/f6eae2a5-6e65-4c12-a637-f977a892dba7.jpeg?im_w=720",
    amenities: [
      "Steps to Pigeon Lake shoreline with direct lake access",
      "Private sand beach area ideal for groups and swimming",
      "Boat dock for docking personal watercraft or fishing",
      "Fire pit with Muskoka chairs overlooking water",
      "Spacious 4-bedroom layout for full 10-person group"
    ],
    lat: 44.53, lng: -78.66
  },
  {
    id: 5,
    name: "Carp Haven | Waterfront Fishing Cottage #2",
    region: "Kawartha Lakes / Rice Lake Region, ON",
    waterBody: "Chemong Lake / Rice Lake System",
    drive: "~1h 30m",
    driveMin: 90,
    capacity: "8 guests · 4 bedrooms · 5 beds · 1 bath",
    rating: "5.0 ★",
    ratingNum: 5.0,
    reviews: "7 reviews",
    badges: "Guest Favourite",
    price: 521,
    link: "https://www.airbnb.ca/rooms/1681299069067164455",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1681299069067164455/original/39eac962-a47a-459e-a237-df41332329aa.jpeg?im_w=720",
    amenities: [
      "Direct water frontage with fishing dock",
      "Private lake access for swimming and boating",
      "Renowned fishing waters right outside your doorstep",
      "Outdoor deck with BBQ and water views",
      "Spacious 4-bedroom interior"
    ],
    lat: 44.42, lng: -78.37
  },
  {
    id: 6,
    name: "Rice Lake Waterfront Cottage Escape (Units #2 & #3)",
    region: "Roseneath / Bewdley (Rice Lake), ON",
    waterBody: "Rice Lake (Southern Kawarthas)",
    drive: "~1h 20m",
    driveMin: 80,
    capacity: "8-10 guests · 2 cottage suites · 5 beds · 2 baths",
    rating: "New",
    ratingNum: 0,
    reviews: "New Listing",
    badges: "Waterfront Host",
    price: 560,
    link: "https://www.airbnb.ca/rooms/1702613281924530915",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1702613281924530915/original/be80ff8b-5fd0-4ad8-b354-a2c850b22097.jpeg?im_w=720",
    amenities: [
      "Directly on the Rice Lake water's edge",
      "Shared long dock with boat slips and sunset view",
      "Sandy water entry suitable for swimming",
      "Dual private entrances with 2 full bathrooms",
      "Outdoor fire pit, picnic tables, and BBQ"
    ],
    lat: 44.18, lng: -78.21
  },
  {
    id: 7,
    name: "Paradise on Golden Lake",
    region: "Golden Lake, Renfrew County, ON",
    waterBody: "Golden Lake / Bonnechere & Madawaska Watershed",
    drive: "~3h 45m",
    driveMin: 225,
    capacity: "8 guests · 3 bedrooms · 5 beds · 1.5 baths",
    rating: "4.77 ★",
    ratingNum: 4.77,
    reviews: "104 reviews",
    badges: "Superhost",
    price: 568,
    link: "https://www.airbnb.ca/rooms/40733633",
    image: "https://a0.muscache.com/im/pictures/18ca72c0-526d-4ec0-af11-78c6f1d926d7.jpg?im_w=720",
    amenities: [
      "Direct private waterfront on clear Golden Lake",
      "Shallow sandy beach entry with clear bottom",
      "Large private dock with swimming ladder",
      "Kayaks provided with safety gear",
      "Expansive waterside deck, gas BBQ, and fire pit"
    ],
    lat: 45.55, lng: -77.32
  },
  {
    id: 8,
    name: "Diamond Lake Delight!",
    region: "Hastings Highlands / Bancroft, ON",
    waterBody: "Diamond Lake (Madawaska Basin)",
    drive: "~2h 45m",
    driveMin: 165,
    capacity: "8+ guests · 1 suite layout · 5 beds · 1 bath",
    rating: "New · Superhost",
    ratingNum: 0,
    reviews: "New Listing",
    badges: "Superhost",
    price: 572,
    link: "https://www.airbnb.ca/rooms/1758895951606161465",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1758895951606161465/original/0b116352-77fa-4ec7-ad40-5101fac128f1.jpeg?im_w=720",
    amenities: [
      "Private dock directly on Diamond Lake",
      "Direct shoreline with beach access",
      "Waterfront deck with outdoor dining and BBQ",
      "Fire pit overlooking the lake",
      "Pet-friendly property"
    ],
    lat: 45.10, lng: -77.85
  },
  {
    id: 9,
    name: "#3 Cottage - Morocco",
    region: "Bewdley, ON (Rice Lake / Kawarthas)",
    waterBody: "Rice Lake Shoreline",
    drive: "~1h 15m",
    driveMin: 75,
    capacity: "8 guests · 3 bedrooms · 5 beds · 1 bath",
    rating: "5.0 ★",
    ratingNum: 5.0,
    reviews: "12 reviews",
    badges: "Superhost",
    price: 642,
    link: "https://www.airbnb.ca/rooms/1483333825416443433",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1483333825416443433/original/9a2b821f-4fcb-4d46-9b42-053b7583e50c.png?im_w=720",
    amenities: [
      "Directly on Rice Lake with zero-step shore access",
      "Private dock access with boat slip availability",
      "On-site kayaks for guest use",
      "Shared expansive backyard lawn to water",
      "Lakeside fire pit and outdoor dining with BBQ"
    ],
    lat: 44.18, lng: -78.27
  },
  {
    id: 10,
    name: "Amazing Mattawa Riverfront, Mountain View Home",
    region: "Mattawa / Renfrew County Boundary, ON",
    waterBody: "Mattawa River / Ottawa River Waterway",
    drive: "~4h 15m",
    driveMin: 255,
    capacity: "8-10 guests · 4 bedrooms · 6 beds · 3 baths",
    rating: "4.91 ★",
    ratingNum: 4.91,
    reviews: "164 reviews",
    badges: "Guest Favourite & Superhost",
    price: 652,
    link: "https://www.airbnb.ca/rooms/48066725",
    image: "https://a0.muscache.com/im/pictures/137136d3-0b2e-4272-97b7-e1d73b97c92f.jpg?im_w=720",
    amenities: [
      "Spectacular private river frontage with mountain views",
      "Private beachfront water entry for swimming",
      "Large covered patio and multiple sundecks",
      "Waterside fire pit with endless firewood",
      "3 full bathrooms ideal for large groups"
    ],
    lat: 46.22, lng: -78.70
  },
  {
    id: 11,
    name: "Lake Front Cottage on Rush Lake",
    region: "Kirkfield, Kawartha Lakes, ON",
    waterBody: "Rush Lake / Trent-Severn System",
    drive: "~1h 45m",
    driveMin: 105,
    capacity: "8 guests · 3 bedrooms · 5 beds · 1 bath",
    rating: "4.67 ★",
    ratingNum: 4.67,
    reviews: "36 reviews",
    badges: "Guest Favourite",
    price: 709,
    link: "https://www.airbnb.ca/rooms/1064637094582745177",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1064637094582745177/original/39c9dad3-ee38-4e53-ab3c-8210ed4ef5b1.jpeg?im_w=720",
    amenities: [
      "Private Rush Lake shoreline and private dock",
      "Gradual shallow entry for safe swimming",
      "Kayaks provided for exploring the lake",
      "Lakeside fire pit with Muskoka chairs",
      "Covered deck with propane BBQ"
    ],
    lat: 44.58, lng: -79.00
  },
  {
    id: 12,
    name: "Waterfront Home/Cottage - Near Lake Simcoe & Trent Lakes",
    region: "Trent Lakes / Brechin Border, ON",
    waterBody: "Trent-Severn Kawartha Waterway Channel",
    drive: "~1h 30m",
    driveMin: 90,
    capacity: "8 guests · 3 bedrooms · 4 beds · 2.5 baths",
    rating: "4.6 ★",
    ratingNum: 4.6,
    reviews: "5 reviews",
    badges: "New Cottage Listing",
    price: 713,
    link: "https://www.airbnb.ca/rooms/1661337328644349634",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1661337328644349634/original/0b7592cd-f048-4296-ac42-937ceaf18c37.jpeg?im_w=720",
    amenities: [
      "Water channel access to open lake",
      "Walking access to sandy community beach",
      "Spacious private backyard with fire pit",
      "Multi-tier deck with BBQ grill",
      "2.5 bathrooms for easy group preparation"
    ],
    lat: 44.58, lng: -79.14
  },
  {
    id: 13,
    name: "Very Private Cottage by Algonquin Park",
    region: "Madawaska Valley, ON",
    waterBody: "Madawaska River / Kamaniskeg Waterway",
    drive: "~3h 45m",
    driveMin: 225,
    capacity: "8+ guests · 4 bedrooms · 5 beds · 1 bath",
    rating: "4.76 ★",
    ratingNum: 4.76,
    reviews: "200+ reviews",
    badges: "Superhost & Guest Favourite",
    price: 731,
    link: "https://www.airbnb.ca/rooms/11543533",
    image: "https://a0.muscache.com/im/pictures/5af16f8b-3c1b-4e1b-a09f-c18c3f565768.jpg?im_w=720",
    amenities: [
      "Exceptional seclusion on private Madawaska River frontage",
      "Large private dock with deep water swimming",
      "Canoes and kayaks provided with paddles",
      "Sandy shoreline pocket for easy water access",
      "Private fire pit right by the river"
    ],
    lat: 45.24, lng: -77.78
  },
  {
    id: 14,
    name: "Spacious 4 Bedroom Retreat by Lake Couchiching",
    region: "Kawartha Lakes / Lake Couchiching Border, ON",
    waterBody: "Lake Couchiching (Trent-Severn)",
    drive: "~1h 35m",
    driveMin: 95,
    capacity: "8-10 guests · 4 bedrooms · 5 beds · 3.5 baths",
    rating: "5.0 ★",
    ratingNum: 5.0,
    reviews: "23 reviews",
    badges: "Guest Favourite",
    price: 752,
    link: "https://www.airbnb.ca/rooms/1461769982258563557",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1461769982258563557/original/b9725733-b6a6-42be-82f3-5896d2609fbc.jpeg?im_w=720",
    amenities: [
      "Direct lake access with boat ramp and mooring",
      "3.5 bathroom layout for group comfort",
      "Large sun patio and balcony with water views",
      "Private lawn area with fire pit and outdoor dining",
      "Modern kitchen and high-speed amenities"
    ],
    lat: 44.60, lng: -79.30
  },
  {
    id: 15,
    name: "Spacious Cozy Waterfront Getaway in Harcourt",
    region: "Harcourt / Northern Kawartha Lakes Border, ON",
    waterBody: "Farquhar Lake / York River Watershed",
    drive: "~2h 35m",
    driveMin: 155,
    capacity: "10+ guests · 6 bedrooms · 9 beds · 2 baths",
    rating: "5.0 ★",
    ratingNum: 5.0,
    reviews: "25 reviews",
    badges: "Guest Favourite & Superhost",
    price: 824,
    link: "https://www.airbnb.ca/rooms/1221811775489079564",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1221811775489079564/original/dc0ca4b0-3c67-4108-9440-f8c2518d8368.jpeg?im_w=720",
    amenities: [
      "Direct water access with kayaks and bicycles",
      "6 separate bedrooms and 9 individual beds",
      "Fully fenced private lakeside backyard with fire pit",
      "Spacious covered deck with barbecue grill",
      "Surrounded by Haliburton/Kawartha wilderness"
    ],
    lat: 45.06, lng: -78.10
  },
  {
    id: 16,
    name: "Serene Riverfront Retreat",
    region: "Bancroft / Madawaska Valley Watershed, ON",
    waterBody: "York River (Madawaska Basin)",
    drive: "~2h 45m",
    driveMin: 165,
    capacity: "8-10 guests · 3 bedrooms · 6 beds · 2 baths",
    rating: "4.7 ★",
    ratingNum: 4.7,
    reviews: "43 reviews",
    badges: "Superhost",
    price: 848,
    link: "https://www.airbnb.ca/rooms/823829905794788449",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-823829905794788449/original/f7a99ac5-b666-4748-96fd-85b3b465efd5.jpeg?im_w=720",
    amenities: [
      "Private riverfront shoreline on the York River",
      "Private kayaks and life jackets supplied",
      "Lakeside hammocks and expansive yard",
      "Large fire pit with supplied firewood",
      "Propane gas BBQ on the private riverside deck"
    ],
    lat: 45.06, lng: -77.86
  },

  {
    id: 18,
    name: "Waterfront Escape - Hot Tub, Volleyball, Fire Pit",
    region: "Hastings Highlands / Maynooth, ON",
    waterBody: "Baptiste Lake Waterway",
    drive: "~2h 55m",
    driveMin: 175,
    capacity: "8-10 guests · 3 bedrooms · 6 beds · 2 baths",
    rating: "5.0 ★",
    ratingNum: 5.0,
    reviews: "3 reviews",
    badges: "Superhost",
    price: 933,
    link: "https://www.airbnb.ca/rooms/1461977687412627039",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1461977687412627039/original/63fd5273-7319-476e-9165-1ecfccf0b69e.jpeg?im_w=720",
    amenities: [
      "Direct waterfront with private dock and lake access",
      "Year-round private outdoor hot tub",
      "Full sand volleyball court on lakeside lawn",
      "Stone fire pit with ample firewood and seating",
      "Spacious covered deck with outdoor dining and BBQ"
    ],
    lat: 45.20, lng: -77.94
  },
  {
    id: 19,
    name: "Cozy Private Waterfront Cottage Getaway",
    region: "Rice Lake / Bewdley, ON",
    waterBody: "Rice Lake (Kawarthas)",
    drive: "~1h 20m",
    driveMin: 80,
    capacity: "8-10 guests · 4 bedrooms · 5 beds · 1.5 baths",
    rating: "4.67 ★",
    ratingNum: 4.67,
    reviews: "9 reviews",
    badges: "Superhost",
    price: 1032,
    link: "https://www.airbnb.ca/rooms/912072290223111784",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-912072290223111784/original/46d1b4cc-4115-4cae-bf59-761b18c7ed78.jpeg?im_w=720",
    amenities: [
      "Direct private lake access with shared boat slip",
      "Fully fenced private yard to the shoreline",
      "Dock for morning coffee, swimming, and fishing",
      "Outdoor fire pit with supplied firewood",
      "Large patio with barbecue and dining furniture"
    ],
    lat: 44.19, lng: -78.24
  },
  {
    id: 20,
    name: "Canalside Summer Cottage w/ Waterview & Bar",
    region: "Brechin, ON (Kawartha / Trent-Severn Lakes)",
    waterBody: "Trent-Severn Canal / Lake Simcoe System",
    drive: "~1h 30m",
    driveMin: 90,
    capacity: "8+ guests · 4 bedrooms · 4 beds · 3 baths",
    rating: "4.92 ★",
    ratingNum: 4.92,
    reviews: "49 reviews",
    badges: "Guest Favourite",
    price: 1063,
    link: "https://www.airbnb.ca/rooms/1432979189401200280",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1432979189401200280/original/92545a45-27c5-4a85-976d-9b92a3736977.png?im_w=720",
    amenities: [
      "Private boat slip / dock right in front",
      "Custom outdoor covered waterfront tiki bar",
      "3 full bathrooms minimizing wait times",
      "Fire pit on the canal lawn with seating",
      "Expansive multi-level patio deck"
    ],
    lat: 44.59, lng: -79.17
  },
  {
    id: 21,
    name: "The Swan Lake Cottage",
    region: "Carrying Place / Quinte West, ON",
    waterBody: "Bay of Quinte / Lake Ontario Channel",
    drive: "~1h 45m",
    driveMin: 105,
    capacity: "10 guests · 4 bedrooms · 5 Queen beds · 4 baths",
    rating: "4.80 ★",
    ratingNum: 4.8,
    reviews: "112 reviews",
    badges: "Guest Favourite",
    price: 1077,
    link: "https://www.airbnb.ca/rooms/563026261455041638",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-563026261455041638/original/79e63c14-bd88-4159-9bd9-3898d430f255.jpeg?im_w=720",
    amenities: [
      "Sprawling waterfront on the water's edge",
      "Private dock and launch for swimming",
      "Kayaks provided with paddles and safety gear",
      "5 full Queen beds — ideal for 10 adults",
      "Waterside fire pit and outdoor charcoal BBQ"
    ],
    lat: 44.02, lng: -77.47
  },
  {
    id: 22,
    name: "Waterfront Oasis",
    region: "Renfrew County / Ottawa River Basin, ON",
    waterBody: "Ottawa River / Lower Madawaska System",
    drive: "~4h 10m",
    driveMin: 250,
    capacity: "8-10 guests · 4 bedrooms · 5 beds · 2 baths",
    rating: "4.75 ★",
    ratingNum: 4.75,
    reviews: "28 reviews",
    badges: "Superhost",
    price: 1097,
    link: "https://www.airbnb.ca/rooms/1330675141617467272",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1330675141617467272/original/36e6cb71-b3a8-4aa9-9ef2-a3d52aa96af2.jpeg?im_w=720",
    amenities: [
      "Direct private waterfront on the Ottawa River",
      "Large private dock with deep water swimming",
      "Waterside deck with barbecue and dining",
      "Fire pit area overlooking the calm bay",
      "Peaceful wooded setting with total privacy"
    ],
    lat: 45.50, lng: -77.08
  },
  {
    id: 23,
    name: "The Cove - Malibu Lake House, Hot Tub w/ Parking",
    region: "Kawartha Lakes / Clarington Border, ON",
    waterBody: "Lake Scugog / Kawartha Lakes System",
    drive: "~1h 15m",
    driveMin: 75,
    capacity: "8 guests · 3 bedrooms · 5 beds · 2.5 baths",
    rating: "New",
    ratingNum: 0,
    reviews: "New Listing",
    badges: "Premium Stay",
    price: 1108,
    link: "https://www.airbnb.ca/rooms/1763858355508705840",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1763858355508705840/original/99db70a2-c492-4935-a1cb-2bfda9cdb1b7.jpeg?im_w=720",
    amenities: [
      "Direct access to lakefront beach and water",
      "Private outdoor hot tub facing the water",
      "2.5 modern bathrooms and luxury open-concept",
      "Outdoor dining area and BBQ grill",
      "Closest drive to Toronto (~1h 15m)"
    ],
    lat: 44.10, lng: -78.86
  },
  {
    id: 24,
    name: "Luxury Lakefront Escape on Cayamant",
    region: "Lac-Cayamant / Renfrew County Border, QC/ON",
    waterBody: "Lac Cayamant (Clear Spring-Fed Lake)",
    drive: "~4h 30m",
    driveMin: 270,
    capacity: "10-12 guests · 5 bedrooms · 7 beds · 3 baths",
    rating: "New",
    ratingNum: 0,
    reviews: "New Listing",
    badges: "Luxury Lakefront Chalet",
    price: 1167,
    link: "https://www.airbnb.ca/rooms/1763025942957367916",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1763025942957367916/original/59bc3f7c-aad0-40da-ae5f-6cc4befa74b4.jpeg?im_w=720",
    amenities: [
      "Direct private sandy beach and crystal-clear lake",
      "Private dock for diving, swimming, and boat mooring",
      "5 full bedrooms with 7 beds and 3 bathrooms",
      "Fire pit by the beach with Muskoka chairs",
      "Expansive wraparound deck with barbecue grill"
    ],
    lat: 46.10, lng: -76.08
  }
];

// ============================================================
// Map setup
// ============================================================
const map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: 44.8, lng: -78.2 },
  zoom: 7,
  zoomControl: true,
  gestureHandling: 'auto'
});

// Shared InfoWindow (replaces Leaflet popups)
const infoWindow = new google.maps.InfoWindow();

// Custom price-marker overlay (replaces Leaflet divIcon)
class PriceMarkerOverlay extends google.maps.OverlayView {
  constructor(position, price, id, targetMap) {
    super();
    this.position = new google.maps.LatLng(position.lat, position.lng);
    this.price = price;
    this.listingId = id;
    this.div = null;
    this.clickHandler = null;
    this.setMap(targetMap);
  }

  onAdd() {
    this.div = document.createElement('div');
    this.div.className = 'price-marker';
    this.div.dataset.id = this.listingId;
    this.div.textContent = `$${this.price}`;
    this.div.style.position = 'absolute';
    this.div.style.cursor = 'pointer';
    this.div.style.transform = 'translate(-50%, -50%)';

    const panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div);

    this.div.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.clickHandler) this.clickHandler();
    });
  }

  draw() {
    const projection = this.getProjection();
    if (!projection || !this.div) return;
    const pos = projection.fromLatLngToDivPixel(this.position);
    this.div.style.left = pos.x + 'px';
    this.div.style.top = pos.y + 'px';
  }

  onRemove() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  }

  getElement() {
    return this.div;
  }

  getPosition() {
    return this.position;
  }
}

// Store markers keyed by listing id
const markers = {};
const bounds = new google.maps.LatLngBounds();

LISTINGS.forEach(listing => {
  const overlay = new PriceMarkerOverlay(
    { lat: listing.lat, lng: listing.lng },
    listing.price,
    listing.id,
    map
  );

  overlay.clickHandler = () => {
    infoWindow.setContent(`<strong>${listing.name}</strong><br>$${listing.price} CAD`);
    infoWindow.setPosition({ lat: listing.lat, lng: listing.lng });
    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -15) });
    infoWindow.open(map);
    setActiveCard(listing.id);
    scrollToCard(listing.id);
  };

  markers[listing.id] = overlay;
  bounds.extend({ lat: listing.lat, lng: listing.lng });
});

// Fit map to all markers
map.fitBounds(bounds, { top: 10, right: 10, bottom: 10, left: 10 });

// ============================================================
// Render cards
// ============================================================
const grid = document.getElementById('listings-grid');
const sortSelect = document.getElementById('sort-select');
let activeId = null;

function renderCards(listings) {
  grid.innerHTML = '';
  document.getElementById('listing-count').textContent = `${listings.length} listing${listings.length !== 1 ? 's' : ''}`;

  listings.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${l.id}`;
    card.dataset.id = l.id;
    if (l.id === activeId) card.classList.add('active');

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${l.image}" alt="${l.name}" loading="lazy"
             onerror="this.onerror=null;this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22240%22><rect fill=%22%23e5e7eb%22 width=%22400%22 height=%22240%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-family=%22sans-serif%22 font-size=%2216%22>Image unavailable</text></svg>'">
        <span class="card-badge">${l.badges}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${l.name}</div>
        <div class="card-location">${l.waterBody}</div>
        <div class="card-meta">
          <span>⭐ ${l.rating}</span>
          <span>🚗 ${l.drive}</span>
          <span>👥 ${l.capacity.split('·')[0].trim()}</span>
        </div>
        <div class="card-price">$${l.price.toLocaleString()} CAD</div>
      </div>
      <div class="card-footer">
        <button class="btn-see-more" data-id="${l.id}">See more</button>
      </div>
      <div class="card-details" id="details-${l.id}">
        <div class="card-details-inner">
          <div class="detail-label">Location</div>
          <div class="detail-value">${l.region}</div>
          <div class="detail-label">Capacity & Layout</div>
          <div class="detail-value">${l.capacity}</div>
          <div class="detail-label">Reviews</div>
          <div class="detail-value">${l.reviews}</div>
          <div class="detail-label">Waterfront Amenities</div>
          <ul class="amenities-list">
            ${l.amenities.map(a => `<li>${a}</li>`).join('')}
          </ul>
          <a href="${l.link}" target="_blank" rel="noopener noreferrer" class="btn-book">Book Now on Airbnb</a>
        </div>
      </div>
    `;

    // Click card body to focus map
    card.querySelector('.card-body').addEventListener('click', () => {
      setActiveCard(l.id);
      focusMap(l.id);
    });

    card.querySelector('.card-img-wrap').addEventListener('click', () => {
      setActiveCard(l.id);
      focusMap(l.id);
    });

    // See more toggle
    card.querySelector('.btn-see-more').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDetails(l.id);
    });

    grid.appendChild(card);
  });
}

function toggleDetails(id) {
  const el = document.getElementById(`details-${id}`);
  const btn = document.querySelector(`.btn-see-more[data-id="${id}"]`);
  const isOpen = el.classList.toggle('open');
  btn.textContent = isOpen ? 'See less' : 'See more';
}

function setActiveCard(id) {
  // Remove old active
  if (activeId !== null) {
    const oldCard = document.getElementById(`card-${activeId}`);
    if (oldCard) oldCard.classList.remove('active');
    const oldMarker = markers[activeId];
    if (oldMarker) {
      const el = oldMarker.getElement();
      if (el) el.classList.remove('active');
    }
  }

  activeId = id;

  // Add new active
  const card = document.getElementById(`card-${id}`);
  if (card) card.classList.add('active');
  const marker = markers[id];
  if (marker) {
    const el = marker.getElement();
    if (el) el.classList.add('active');
  }
}

function focusMap(id) {
  const listing = LISTINGS.find(l => l.id === id);
  if (!listing) return;
  map.panTo({ lat: listing.lat, lng: listing.lng });
  map.setZoom(12);
  infoWindow.setContent(`<strong>${listing.name}</strong><br>$${listing.price} CAD`);
  infoWindow.setPosition({ lat: listing.lat, lng: listing.lng });
  infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -15) });
  infoWindow.open(map);
}

function scrollToCard(id) {
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActiveCard(id);
  }
}

// ============================================================
// Sorting
// ============================================================
function getSorted() {
  const val = sortSelect.value;
  const sorted = [...LISTINGS];
  switch (val) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating-desc':
      sorted.sort((a, b) => b.ratingNum - a.ratingNum);
      break;
    case 'drive-asc':
      sorted.sort((a, b) => a.driveMin - b.driveMin);
      break;
  }
  return sorted;
}

sortSelect.addEventListener('change', () => {
  renderCards(getSorted());
});

// Initial render
renderCards(getSorted());
