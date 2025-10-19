const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Band name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    location: {
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
      // For more precise filtering later
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    // Array of image URLs
    images: {
      type: [String],
      default: [],
    },
    // Tags for filtering/categorization (genres, styles, etc.)
    tags: {
      type: [String],
      default: [],
    },
    // References to previous events this band has performed at
    previousEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    contactEmail: {
      type: String,
      trim: true,
    },
    contactPhone: {
      type: String,
      trim: true,
    },
    socialLinks: {
      website: String,
      facebook: String,
      instagram: String,
      twitter: String,
      spotify: String,
      youtube: String,
    },
  },
  {
    timestamps: true,
  }
);

bandSchema.index({ 'location.city': 1 });
bandSchema.index({ 'location.state': 1 });
bandSchema.index({ tags: 1 });
bandSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Band', bandSchema);
