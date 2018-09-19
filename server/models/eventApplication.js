const AbstractModel = require('./abstractModel.js').AbstractModel
/**
 * The domain model for EventApplications
 * 
 */
class EventApplication extends AbstractModel {
  from(response) {
    this.id = response.id;
    this.memberId = response.member_id;
    this.eventId = response.event_id;
    this.applicationStatus = response.application_status;
    this.adultCount = response.adult_count;
    this.babyCount = response.baby_count;
    this.createdAt = response.created_at;
    this.updatedAt = response.updated_at;
    return this;
  }

  /**
   * set the actual event of this application. This is useful when 
   * we want to decorate the application with events so clients don't have to 
   * make another call
   */
  setEvent(event) {
    this.event = event;
    return this;
  }

  toInput() {
    var dbInput = {};
    dbInput.id = this.id;
    dbInput.member_id = this.memberId;
    dbInput.event_id = this.eventId;
    dbInput.application_status = this.applicationStatus;
    dbInput.adult_count = this.adultCount;
    dbInput.baby_count = this.babyCount;
    dbInput.created_at = this.createdAt;
    dbInput.updated_at = this.updatedAt;
    return dbInput;
  }
}
module.exports = EventApplication;