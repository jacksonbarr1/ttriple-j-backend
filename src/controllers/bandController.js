const Band = require('../models/Band');

const getBands = async (req, res) => {
  try {
    const { city, state, tags, search } = req.query;
    let query = {};

    if (city) {
      query['location.city'] = new RegExp(city, 'i');
    }
    if (state) {
      query['location.state'] = new RegExp(state, 'i');
    }

    if (tags) {
      const tagsArray = tags.split(',').map(tag => tag.trim());
      query.tags = { $in: tagsArray };
    }

    if (search) {
      query.$text = { $search: search };
    }

    const bands = await Band.find(query).populate('previousEvents');

    res.status(200).json({
      success: true,
      count: bands.length,
      data: bands,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBandById = async (req, res) => {
  try {
    const band = await Band.findById(req.params.id).populate('previousEvents');

    if (!band) {
      return res.status(404).json({
        success: false,
        message: 'Band not found',
      });
    }

    res.status(200).json({
      success: true,
      data: band,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createBand = async (req, res) => {
  try {
    const band = await Band.create(req.body);

    res.status(201).json({
      success: true,
      data: band,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBand = async (req, res) => {
  try {
    const band = await Band.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!band) {
      return res.status(404).json({
        success: false,
        message: 'Band not found',
      });
    }

    res.status(200).json({
      success: true,
      data: band,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBand = async (req, res) => {
  try {
    const band = await Band.findByIdAndDelete(req.params.id);

    if (!band) {
      return res.status(404).json({
        success: false,
        message: 'Band not found',
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: 'Band deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getBands,
  getBandById,
  createBand,
  updateBand,
  deleteBand,
};
