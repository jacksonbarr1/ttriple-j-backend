// Sample data for testing the API
// Use these as templates when creating bands and events

const sampleBands = [
  {
    name: "The Rock Stars",
    description: "An indie rock band from Atlanta with a unique sound blending alternative and classic rock",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      coordinates: {
        latitude: 33.7490,
        longitude: -84.3880
      }
    },
    images: [
      "https://example.com/rockstars-1.jpg",
      "https://example.com/rockstars-2.jpg"
    ],
    tags: ["rock", "indie", "alternative"],
    contactEmail: "contact@therockstars.com",
    contactPhone: "404-555-0123",
    socialLinks: {
      website: "https://therockstars.com",
      instagram: "https://instagram.com/therockstars",
      spotify: "https://open.spotify.com/artist/example"
    }
  },
  {
    name: "Jazz Fusion Collective",
    description: "A modern jazz ensemble exploring fusion and experimental sounds",
    location: {
      city: "New York",
      state: "NY",
      country: "USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      }
    },
    images: ["https://example.com/jazzfusion-1.jpg"],
    tags: ["jazz", "fusion", "experimental"],
    contactEmail: "booking@jazzfusion.com",
    socialLinks: {
      website: "https://jazzfusioncollective.com"
    }
  },
  {
    name: "The Acoustic Duo",
    description: "Two guitarists performing folk and acoustic covers",
    location: {
      city: "Nashville",
      state: "TN",
      country: "USA"
    },
    images: ["https://example.com/acoustic-duo.jpg"],
    tags: ["acoustic", "folk", "covers"],
    contactEmail: "info@acousticduo.com"
  }
];

const sampleEvents = [
  {
    name: "Summer Music Festival 2025",
    description: "An outdoor music festival featuring local bands across multiple genres",
    location: {
      venue: "Central Park Amphitheater",
      address: "123 Park Avenue",
      city: "Atlanta",
      state: "GA",
      country: "USA",
      zipCode: "30303",
      coordinates: {
        latitude: 33.7490,
        longitude: -84.3880
      }
    },
    date: "2025-07-15T00:00:00.000Z",
    startTime: "14:00",
    endTime: "23:00",
    images: [
      "https://example.com/summer-fest-1.jpg",
      "https://example.com/summer-fest-2.jpg"
    ],
    tags: ["festival", "outdoor", "rock", "indie"],
    capacity: 5000,
    ticketPrice: 45,
    organizerName: "Atlanta Events Co.",
    organizerEmail: "info@atlantaevents.com",
    organizerPhone: "404-555-9999",
    status: "upcoming"
  },
  {
    name: "Jazz Night at Blue Note",
    description: "An intimate evening of jazz performances",
    location: {
      venue: "Blue Note Jazz Club",
      address: "456 Music Street",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10013"
    },
    date: "2025-08-20T00:00:00.000Z",
    startTime: "20:00",
    endTime: "23:30",
    images: ["https://example.com/jazz-night.jpg"],
    tags: ["jazz", "indoor", "intimate"],
    capacity: 150,
    ticketPrice: 35,
    organizerName: "Blue Note Productions",
    organizerEmail: "events@bluenote.com",
    status: "upcoming"
  },
  {
    name: "Coffeehouse Open Mic",
    description: "Weekly open mic night for local musicians",
    location: {
      venue: "The Daily Grind Cafe",
      address: "789 Coffee Lane",
      city: "Atlanta",
      state: "GA",
      country: "USA",
      zipCode: "30305"
    },
    date: "2025-06-10T00:00:00.000Z",
    startTime: "19:00",
    endTime: "22:00",
    images: ["https://example.com/open-mic.jpg"],
    tags: ["acoustic", "open-mic", "coffee-shop"],
    capacity: 50,
    ticketPrice: 0,
    organizerName: "Sarah Johnson",
    organizerEmail: "sarah@dailygrind.com",
    status: "upcoming"
  }
];

module.exports = {
  sampleBands,
  sampleEvents
};
