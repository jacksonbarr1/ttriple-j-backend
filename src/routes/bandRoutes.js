const express = require('express');
const router = express.Router();
const {
  getBands,
  getBandById,
  createBand,
  updateBand,
  deleteBand,
} = require('../controllers/bandController');

router.route('/')
  .get(getBands)
  .post(
    /* #swagger.tags = ['Bands'] */
    /* #swagger.summary = 'Create a band' */
    /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Band payload',
          required: true,
          schema: { $ref: '#/definitions/Band' }
        } */
    createBand
  );

router.route('/:id')
  .get(getBandById)
  .put(
    /* #swagger.tags = ['Bands'] */
    /* #swagger.summary = 'Update a band' */
    /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Fields to update (partial allowed)',
          schema: { $ref: '#/definitions/Band' }
        } */
    updateBand
  )
  .delete(deleteBand);

module.exports = router;
