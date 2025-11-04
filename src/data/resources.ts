export interface ResourceProgram {
  title: string;
  description: string;
  schedule: string;
}

export interface ResourceTestimonial {
  name: string;
  quote: string;
  context: string;
}

export interface ResourceContact {
  phone?: string;
  email?: string;
  website?: string;
}

export interface ResourceLocation {
  address: string;
  directions?: string;
  neighborhood: string;
  lat: number;
  lng: number;
}

export interface ResourceDetail {
  slug: string;
  name: string;
  type: string;
  summary: string;
  description: string;
  tags: string[];
  heroImage: string;
  gallery: string[];
  location: ResourceLocation;
  hours: string;
  distance?: string;
  contact: ResourceContact;
  highlights: string[];
  amenities: string[];
  meals: string[];
  programs: ResourceProgram[];
  testimonials: ResourceTestimonial[];
  volunteerOpportunities: string[];
  tips: string[];
}

export const resources: ResourceDetail[] = [
  {
    slug: "sunshine-community-kitchen",
    name: "Sunshine Community Kitchen",
    type: "Community Kitchen",
    summary: "Warm meals made from rescued ingredients, served with dignity in the heart of Downtown.",
    description:
      "Sunshine Community Kitchen transforms surplus produce and donated staples into nourishing meals twice a day. The space feels like a neighborhood café—with communal tables, quiet nooks, and friendly regulars who often help plate dishes and welcome newcomers.",
    tags: ["Hot Meals", "Community Tables", "Family Friendly"],
    heroImage:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522184216315-dcaa0f1bb7e1?auto=format&fit=crop&w=1200&q=80",
    ],
    location: {
      address: "245 Oak Street, Downtown",
      directions: "Entrance is on Oak Street next to the mural, ramp access available around the corner on 3rd Avenue.",
      neighborhood: "Downtown",
      lat: 37.7823,
      lng: -122.4112,
    },
    hours: "Mon-Fri: 11:30am - 1:30pm, 5:00pm - 7:00pm",
    distance: "0.3 mi",
    contact: {
      phone: "(555) 123-4567",
      email: "hello@sunshinekitchen.org",
      website: "https://sunshinekitchen.example.org",
    },
    highlights: [
      "Chef-led rotating seasonal menu",
      "Kids corner with books and coloring",
      "Take-home pantry packs every Friday",
    ],
    amenities: ["Wheelchair accessible", "Warm beverages", "Charging stations", "Free Wi-Fi"],
    meals: ["Vegetarian soups", "Hearty grain bowls", "Freshly baked bread", "Seasonal salads"],
    programs: [
      {
        title: "Evening Community Meal",
        description: "Sit-down service with plated dinners and volunteer hosts at each table.",
        schedule: "Weekdays · 5:00pm - 7:00pm",
      },
      {
        title: "Cooking Confidence Workshops",
        description: "Learn quick techniques for cooking nutritious meals with pantry staples.",
        schedule: "Wednesdays · 3:30pm",
      },
      {
        title: "Kids Snack Lab",
        description: "Hands-on activities that let young ones build their own healthy snacks.",
        schedule: "Fridays · 5:30pm",
      },
    ],
    testimonials: [
      {
        name: "Mariana G.",
        quote: "The volunteers remember my daughter’s favorite soup—it truly feels like family dinner.",
        context: "Regular guest",
      },
      {
        name: "Ravi S.",
        quote: "I started helping with prep and now lead the Saturday bread baking crew.",
        context: "Volunteer",
      },
    ],
    volunteerOpportunities: [
      "Meal prep and plating shifts",
      "Dining room hosts to welcome guests",
      "Grocery rescue drivers",
    ],
    tips: [
      "Arrive 15 minutes early for the dinner seating to secure a favorite table.",
      "Ask about pantry packs on Fridays—quantities are limited.",
      "Bring containers if you hope to take leftovers; compostable options provided when available.",
    ],
  },
  {
    slug: "harvest-food-pantry",
    name: "Harvest Food Pantry",
    type: "Food Pantry",
    summary: "Weekly selection of fresh produce, grains, and essentials curated for families of all sizes.",
    description:
      "Harvest Food Pantry partners with regional farms and grocers to stock a mini-market style pantry. Guests choose items that fit their household, with nutrition volunteers sharing storage and cooking tips along the way.",
    tags: ["Market Style", "Fresh Produce", "Nutrition Support"],
    heroImage:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484981184820-2e84ea0b1f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564866657313-0415fd873d73?auto=format&fit=crop&w=1200&q=80",
    ],
    location: {
      address: "892 Maple Avenue, Riverside",
      directions: "Look for the red brick community center; pantry entrance is through the courtyard.",
      neighborhood: "Riverside",
      lat: 37.7695,
      lng: -122.4294,
    },
    hours: "Tue & Thu: 9:00am - 4:00pm, Sat: 10:00am - 2:00pm",
    distance: "0.8 mi",
    contact: {
      phone: "(555) 234-5678",
      email: "support@harvestpantry.org",
      website: "https://harvestpantry.example.org",
    },
    highlights: [
      "Choose-what-you-need market layout",
      "Recipe cards and tastings every visit",
      "Family nutrition consultations available",
    ],
    amenities: ["Grocery carts", "Kid play corner", "Bike parking", "Interpreter support"],
    meals: ["Seasonal produce boxes", "Whole grains and legumes", "Shelf-stable proteins", "House-made sauces"],
    programs: [
      {
        title: "Produce Spotlight",
        description: "Weekly produce feature with cooking demos and samples.",
        schedule: "Thursdays · 11:00am",
      },
      {
        title: "Family Nutrition Consults",
        description: "One-on-one sessions with registered dietitians.",
        schedule: "By appointment",
      },
    ],
    testimonials: [
      {
        name: "Luis and Pat",
        quote: "We always leave with groceries we actually cook—and new recipes to try.",
        context: "Parents of three",
      },
    ],
    volunteerOpportunities: [
      "Shelf stocking and inventory",
      "Nutrition education table",
      "Delivery support for seniors",
    ],
    tips: [
      "Bring reusable bags if you can; extra totes are available if needed.",
      "Check in with a volunteer on arrival—appointments help reduce wait times.",
    ],
  },
  {
    slug: "green-market-community-share",
    name: "Green Market Community Share",
    type: "Fresh Produce Distribution",
    summary: "Outdoor pop-up with farm-direct produce, cooking demos, and seasonal wellness workshops.",
    description:
      "Hosted twice weekly in a colorful parklet, Green Market offers farm baskets, herbs, and rotating local vendor tastings. Families can linger for live music, recipe swaps, and kids activities under shaded canopies.",
    tags: ["Outdoor", "Live Music", "Local Farms"],
    heroImage:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
    ],
    location: {
      address: "1523 Pine Boulevard, Westside",
      directions: "Set up in the Pine & 15th street parklet—look for the green canopy tents.",
      neighborhood: "Westside",
      lat: 37.8004,
      lng: -122.4367,
    },
    hours: "Wed & Fri: 3:00pm - 6:00pm",
    distance: "1.2 mi",
    contact: {
      phone: "(555) 876-5432",
      email: "hello@greenmarketshare.org",
      website: "https://greenmarketshare.example.org",
    },
    highlights: [
      "Farm-to-table tastings",
      "Kids sprouts station",
      "Community fridge restock at 5:45pm",
    ],
    amenities: ["Shaded seating", "Live music", "Recipe cards", "Compost drop-off"],
    meals: ["Seasonal fruit boxes", "Herb bundles", "Farm-fresh bread", "Cold-pressed juices"],
    programs: [
      {
        title: "Herb Spotlight Demo",
        description: "Local chef shares quick ways to use the featured herb of the week.",
        schedule: "Fridays · 4:30pm",
      },
      {
        title: "Sprout Scouts",
        description: "Kids explore veggies with guided tastings and garden crafts.",
        schedule: "Wednesdays · 3:30pm",
      },
    ],
    testimonials: [
      {
        name: "Amina K.",
        quote: "It’s our family’s mid-week ritual—we meet neighbors, dance, and stock the fridge.",
        context: "Westside resident",
      },
    ],
    volunteerOpportunities: [
      "Set up and break down canopy tents",
      "Harvest crew to pack farm shares",
      "Music and welcoming committee",
    ],
    tips: [
      "Bring a picnic blanket to enjoy the live music corner.",
      "Farm baskets sell out quickly—arrive near the start for the widest selection.",
    ],
  },
  {
    slug: "neighborhood-meals-program",
    name: "Neighborhood Meals Program",
    type: "Hot Meal Service",
    summary: "Daily sit-down meals with rotating volunteer chefs and a friendly front porch atmosphere.",
    description:
      "This long-running program serves hearty classics and comfort favorites every day of the week. A restored bungalow houses the dining room, with a covered porch where neighbors sip tea, share stories, and sometimes catch live acoustic sets.",
    tags: ["Daily Service", "Live Music", "Family Friendly"],
    heroImage:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526989879974-2ab16584f61e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506086679525-9d05e52d0b75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529946825183-fe596d0bbf7b?auto=format&fit=crop&w=1200&q=80",
    ],
    location: {
      address: "67 Elm Street, Central",
      directions: "White bungalow with blue trim; please use the accessible side entrance with ramp.",
      neighborhood: "Central",
      lat: 37.7891,
      lng: -122.4215,
    },
    hours: "Daily: 12:00pm - 1:00pm, 6:00pm - 7:00pm",
    distance: "1.5 mi",
    contact: {
      phone: "(555) 345-6789",
      email: "info@neighborhoodmeals.org",
      website: "https://neighborhoodmeals.example.org",
    },
    highlights: [
      "Daily acoustic porch sessions",
      "Family-style seating",
      "Shelf-stable pantry station",
    ],
    amenities: ["Ramp access", "Outdoor heaters", "Story corner", "Board games"],
    meals: ["Comfort classics", "Seasonal vegetarian options", "Fresh baked desserts", "Herbal teas"],
    programs: [
      {
        title: "Porch Music Hour",
        description: "Local musicians play unplugged sets as guests arrive for dinner.",
        schedule: "Weekends · 5:15pm",
      },
      {
        title: "Community Story Night",
        description: "Gather on Thursdays to share stories over dessert.",
        schedule: "Thursdays · 6:30pm",
      },
    ],
    testimonials: [
      {
        name: "Joelle T.",
        quote: "We celebrate birthdays here because everyone ends up singing along.",
        context: "Longtime guest",
      },
    ],
    volunteerOpportunities: [
      "Front porch greeters",
      "Dessert baking crew",
      "Musician coordination",
    ],
    tips: [
      "Lunch service is quieter—perfect if you prefer a calmer experience.",
      "Porch seating opens 20 minutes before meal times and fills fast on weekends.",
    ],
  },
];

export const resourceIndex = resources.reduce<Record<string, ResourceDetail>>((acc, resource) => {
  acc[resource.slug] = resource;
  return acc;
}, {});


