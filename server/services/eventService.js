const dbInstance = require('../ds/dbInstance.js').dbInstance.getInstance
const Event = require('../models/event.js')

/**
 * This class handles business logic + database operations related to {@link Event}
 * 
 * It abstracts away the operation with DB from controllers, and allows create a class 
 * calling multiple services to accomplish more complicated operations.
 * 
 */
class EventService {
  constructor() {
  }

  /**
   * Get event given eventIds
   */
  async get(ctx, id) {
    return await dbInstance(ctx)('events').select('*').where('id', id).then(res => {
      var event = new Event({}).from(res[0]);
      return event;
    });
  }

  /**
   * create a event with the given json rawInput
   */
  async create(ctx, event) {
    // populate system default values for read only fields
    this._handleSystemFields(ctx, event);
    var obj = new Event(event);
    return await dbInstance(ctx)('events').insert(obj.toInput()).then(res => {
      return res;
    });
  }

  /**
   * update a event for the given Id with the member json input
   */
  async update(ctx, id, patch) {
    // populate system default values for read only fields
    this._handleSystemFields(ctx, patch);

    return await dbInstance(ctx)('events').select('*').where('id', id).then(res => {
      var event = new Event({}).from(res[0]);
      event.update(patch);
      return dbInstance(ctx)('events').where('id', id).update(event.toInput()).then(res => {
        return res;
      });
    });
  }

  _handleSystemFields(ctx, event) {
    delete event.createdAt;
    delete event.updatedAt;
    delete event.publishedAt;
    delete event.eventState;
    delete event.closedAt;
    delete event.deleteFrom
    // populate system default values for read only fields
    event.createdAt = dbInstance(ctx).fn.now();
    event.updatedAt = dbInstance(ctx).fn.now();
    event.publishedAt = dbInstance(ctx).fn.now();
    event.eventState = 'OPEN'; 
  }

}

/**
 * create a single instance of MemberService
 */
const eventService = new EventService();

module.exports = eventService