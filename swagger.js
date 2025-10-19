const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Band & Event Matching API',
    description: 'REST API for matching amateur musicians/bands with events',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
      description: 'API key for authentication',
    },
  },
  security: [{ apiKeyAuth: [] }],
  definitions: {
    Band: {
      name: 'The Band Name',
      description: 'A description of the band',
      location: {
        city: 'Atlanta',
        state: 'GA',
        country: 'USA',
        coordinates: {
          latitude: 33.7490,
          longitude: -84.3880,
        },
      },
      images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
      tags: ['rock', 'indie', 'alternative'],
      previousEvents: [],
      contactEmail: 'band@example.com',
      contactPhone: '555-0123',
      socialLinks: {
        website: 'https://example.com',
        spotify: 'https://spotify.com/artist/example',
      },
    },
    Event: {
      name: 'Summer Music Festival',
      description: 'An outdoor music festival',
      location: {
        venue: 'Central Park Amphitheater',
        address: '123 Main St',
        city: 'Atlanta',
        state: 'GA',
        country: 'USA',
        zipCode: '30303',
        coordinates: {
          latitude: 33.7490,
          longitude: -84.3880,
        },
      },
      date: '2025-07-15T00:00:00.000Z',
      startTime: '18:00',
      endTime: '23:00',
      images: ['https://example.com/event1.jpg'],
      tags: ['festival', 'outdoor', 'rock'],
      confirmedBands: [],
      capacity: 500,
      ticketPrice: 25,
      organizerName: 'John Doe',
      organizerEmail: 'organizer@example.com',
      status: 'upcoming',
    },
  },
};

const outputFile = './swagger-output.json';
// Scan app + route files so swagger-autogen picks up the inline comments
const endpointsFiles = ['./src/app.js', './src/routes/bandRoutes.js', './src/routes/eventRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger documentation generated successfully!');
});
