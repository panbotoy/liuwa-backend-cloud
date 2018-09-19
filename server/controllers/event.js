const bodyParser = require('body-parser')
const Event = require('../models/event.js')
const eventService = require('../services/eventService.js')

/**
 * Get event data for an Id. The id is in the query params.
 */
async function get(ctx, next) {
  var id = parseFloat(ctx.params.id);
  console.log(`Trying to fetch event with id ` + id)
  await eventService.get(ctx, id).then(event => {
    ctx.state.data = {
      'event': event
    };
  });
}

/**
 * Create a event in the system. The eventId will be system auto-generated.
 */
async function create(ctx, next) {
  console.log('trying to create event: ' + JSON.stringify(ctx.request.body));
  var event = ctx.request.body;
  await eventService.create(ctx, event).then(res => {
    ctx.state.data = { msg: 'event is ' + JSON.stringify(res) };
  });
}

/**
 * Update a event given eventId with the patch data provided in the Http request body.
 */
async function update(ctx, next) {
  var id = parseFloat(ctx.params.id);
  console.log('trying to update event : ' + id + " with patch: " + JSON.stringify(ctx.request.body));
  var patch = ctx.request.body;
  
  await eventService.update(ctx, id, patch).then(res => {
    var event = new Event({}).from(res[0]);
    ctx.state.data = { msg: 'event is ' + JSON.stringify(res) };
  });
}

/**
 * Find all events posted by the given member or for a member
 */
async function query(ctx, next) {
  if (ctx.query.posterId != null) {
    // query for poster
    var posterId = parseFloat(ctx.query.posterId);
    console.log('trying to fetch events posted by member : ' + posterId);
  } else if (ctx.query.memberId != null) {
    var memberId = parseFloat(ctx.params.memberId);
    console.log('trying to fetch events for member: ' + memberId);
  } else {
    ctx.state.data = { msg: 'unknown query parameters: ' +  JSON.stringify(ctx.query)};
  }
}

module.exports = { get, create, update, query}