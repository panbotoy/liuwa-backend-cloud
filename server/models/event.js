const AbstractModel = require('./abstractModel.js').AbstractModel
/**
 * The domain model for events
 */
const validEventTypes = ['CLASS', 'DISCOUNT', 'PARTY'];
const validEventStates = ['DRAFT', 'OPEN', 'FINISHED'];
class Event extends AbstractModel {
  from(response) {
    this.id = response.id;
    this.memberId = response.member_id;
    this.title = response.title;
    this.description = response.description;
    this.images = response.images != null ? response.images.split(','): null; // handle the conversion between list of images to a string
    this.wechatGroupLink = response.wechat_group_link;
    this.attendeeNumber = response.attendee_number;
    this.needApproval = response.need_approval;
    this.eventType = response.event_type;
    this.minAge = response.min_age;
    this.maxAge = response.max_age;
    this.eventState = response.event_state;
    this.startAt = response.start_at; // discuss with paopao to see if we want time or timestamp
    this.endAt = (response.end_at == null) ? null : response.end_at;
    this.enrollmentEndAt =  (response.enrollment_end_at == null) ? null : response.enrollment_end_at;
    this.publishedAt = (response.published_at == null) ? null : response.published_at;
    this.closedAt = (response.closed_at == null) ? null : response.closed_at;
    this.location = {};
    this.location.address1 = response.address1;
    this.location.address2 = response.address2;
    this.location.address3 = response.address3;
    this.location.city = response.city;
    this.location.state = response.state;
    this.location.country = response.country;
    this.location.zipcode = response.zipcode;
    this.createdAt = response.created_at;
    this.updatedAt = response.updated_at;
    return this;
  }

  toInput() {
    this._validateEventType(this.eventType);
    this._validateEventState(this.eventState);

    var dbInput = {};
    dbInput.id = this.id;
    dbInput.member_id = this.memberId;
    dbInput.title = this.title;
    dbInput.description = this.description;
    dbInput.images = this.images != null ? this.images.join(','): null; // handle the conversion between list of images to a string
    dbInput.wechat_group_link = this.wechatGroupLink;
    dbInput.attendee_number = this.attendeeNumber;
    dbInput.need_approval = this.needApproval;
    dbInput.event_type = this.eventType;
    dbInput.min_age = this.minAge;
    dbInput.max_age = this.maxAge;
    dbInput.event_state = this.eventState;
    dbInput.start_at = new Date(this.startAt);
    dbInput.end_at = new Date(this.endAt);
    dbInput.enrollment_end_at = new Date(this.enrollmentEndAt);
    dbInput.published_at = this.published_at == null ? null: new Date(this.publishedAt);
    dbInput.closed_at = this.closed_at == null? null: new Date(this.closedAt);
    dbInput.address1 = this.location.address1;
    dbInput.address2 = this.location.address2;
    dbInput.address3 = this.location.address3;
    dbInput.city = this.location.city;
    dbInput.state = this.location.state;
    dbInput.country = this.location.country;
    dbInput.zipcode = this.location.zipcode;
    dbInput.created_at = this.createdAt;
    dbInput.updated_at = this.updatedAt;
    return dbInput;
  }

  _validateEventType(eventType) {
    if (!validEventTypes.includes(eventType)) {
      throw new Error("Error trying to validate event type " + eventType + ". Valid event types are " + this.validEventTypes);
    }
  }

  _validateEventState(eventState) {
    if (!validEventStates.includes(eventState)) {
      throw new Error("Error trying to validate event state " + eventState + ". Valid event states are " + this.validEventStates);
    }
  }
}
module.exports = Event;