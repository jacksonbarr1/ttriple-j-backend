const express = require('express');
const router = express.Router();
const {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');


router.route('/')
  .get(getEvents)
  .post(
    /* #swagger.tags = ['Events'] */
    /* #swagger.summary = 'Create an event' */
    /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Event payload',
          required: true,
          schema: { $ref: '#/definitions/Event' }
        } */
    createEvent
  );

router.route('/:id')
  .get(getEventById)
  .put(
    /* #swagger.tags = ['Events'] */
    /* #swagger.summary = 'Update an event' */
    /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Fields to update (partial allowed)',
          schema: { $ref: '#/definitions/Event' }
        } */
    updateEvent
  )
  .delete(deleteEvent);

module.exports = router;
