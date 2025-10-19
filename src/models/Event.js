const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Event name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    location: {
      venue: {
        type: String,
        trim: true,
      },
      address: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      country: {
        type: String,
        trim: true,
      },
      zipCode: {
        type: String,
        trim: true,
      },
      // For more precise filtering later
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    date: {
      type: Date,
    },
    startTime: {
      type: String, // e.g., "19:00"
    },
    endTime: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },
    // Tags for filtering/categorization (event type, music genre, etc.)
    tags: {
      type: [String],
      default: [],
    },
    // References to bands confirmed to perform at this event
    confirmedBands: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Band',
      },
    ],
    capacity: {
      type: Number,
    },
    ticketPrice: {
      type: Number,
    },
    organizerName: {
      type: String,
      trim: true,
    },
    organizerEmail: {
      type: String,
      trim: true,
    },
    organizerPhone: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
      default: 'upcoming',
    },
  },
  {
    timestamps: true,
  }
);

eventSchema.index({ 'location.city': 1 });
eventSchema.index({ 'location.state': 1 });
eventSchema.index({ tags: 1 });
eventSchema.index({ date: 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Event', eventSchema);
