const dbInstance = require('../ds/dbInstance.js').dbInstance.getInstance
const EventApplication = require('../models/eventApplication.js')

/**
 * This class handles business logic + database operations related to {@link Event}
 * 
 * It abstracts away the operation with DB from controllers, and allows create a class 
 * calling multiple services to accomplish more complicated operations.
 * 
 */
class ApplicationService {
  constructor() {
  }

  /**
   * Get application with given applicationId
   */
  async get(ctx, id) {
    return await dbInstance(ctx)('applications').select('*').where('id', id).then(res => {
      var application = new EventApplication({}).from(res[0]);
      return application;
    });
  }

  /**
   * create a application with the given json rawInput
   */
  async create(ctx, application) {
    // populate system default values for read only fields
    application.createdAt = dbInstance(ctx).fn.now();
    application.updatedAt = dbInstance(ctx).fn.now();
    var obj = new EventApplication(application);
    return await dbInstance(ctx)('applications').insert(obj.toInput()).then(res => {
      return res;
    });
  }

  /**
   * update a application for the given Id with the member json input
   */
  async update(ctx, id, patch) {
    delete patch.createdAt;
    // populate system default values for read only fields
    patch.updatedAt = dbInstance(ctx).fn.now();
    return await dbInstance(ctx)('applications').select('*').where('id', id).then(res => {
      var application = new EventApplication({}).from(res[0]);
      application.update(patch);
      return dbInstance(ctx)('applications').where('id', id).update(application.toInput()).then(res => {
        return res;
      });
    });
  }
}

/**
 * create a single instance of MemberService
 */
const applicationService = new ApplicationService();

module.exports = applicationService