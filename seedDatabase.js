require('dotenv').config();
const mongoose = require('mongoose');
const Band = require('./src/models/Band');
const Event = require('./src/models/Event');
const { sampleBands, sampleEvents } = require('./sampleData');

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Band.deleteMany({});
    await Event.deleteMany({});
    console.log('Cleared existing data');

    const bands = await Band.insertMany(sampleBands);
    console.log(`✓ Created ${bands.length} bands`);

    const events = await Event.insertMany(sampleEvents);
    console.log(`✓ Created ${events.length} events`);

    if (bands.length > 0 && events.length > 0) {
      await Band.findByIdAndUpdate(bands[0]._id, {
        $push: { previousEvents: events[0]._id }
      });
      console.log(`✓ Linked "${bands[0].name}" to "${events[0].name}" as previous event`);

      await Event.findByIdAndUpdate(events[0]._id, {
        $push: { confirmedBands: bands[0]._id }
      });
      console.log(`✓ Added "${bands[0].name}" to "${events[0].name}" confirmed bands`);
    }

    console.log('\n✅ Database seeded successfully!');
    console.log('\nSummary:');
    console.log(`- ${bands.length} bands created`);
    console.log(`- ${events.length} events created`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
