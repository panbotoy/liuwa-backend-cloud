const AbstractModel = require('./abstractModel.js').AbstractModel

/**
 * This class defines the data object used in controller and services layer.
 * 
 * It provides convenient methods for converting db response to input method and 
 * converting from http request body to knex input to mysql
 */
const validRegistrationTypes = ['WECHAT', 'EMAIL', 'FACEBOOK'];

class Member extends AbstractModel {
  /**
   * convert from knex response to domain model
   */
  from(response) {
    this.id = response.id;
    this.firstName = response.first_name;
    this.lastName = response.last_name;
    this.nickName = response.nick_name;
    this.email = response.email;
    this.phoneNumber = response.phoneNumber;
    this.registrationId = response.registration_id;
    this.registrationType = response.registration_type;
    this.occupation = response.occupation;
    this.profileImage = response.profile_img;
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
    this.isSystemAdmin = response.is_system_admin;
    return this;
  }

  /**
   * Convert from domain model to knex input to DB
   */
  toInput() {
    this._validateEventTypes(this.registrationType);
    var dbInput = {};
    dbInput.id = this.id;
    dbInput.first_name = this.firstName;
    dbInput.last_name = this.lastName;
    dbInput.nick_name = this.nickName;
    dbInput.email = this.email;
    dbInput.phone_number = this.phoneNumber;
    dbInput.registration_id = this.registrationId;
    dbInput.registration_type = this.registrationType;
    dbInput.occupation = this.occupation;
    dbInput.profile_img = this.profileImage;
    dbInput.address1 = this.location.address1;
    dbInput.address2 = this.location.address2;
    dbInput.address3 = this.location.address3;
    dbInput.city = this.location.city;
    dbInput.state = this.location.state;
    dbInput.country = this.location.country;
    dbInput.zipcode = this.location.zipcode;
    dbInput.created_at = this.createdAt;
    dbInput.updated_at = this.updatedAt;
    dbInput.is_system_admin = this.isSystemAdmin;
    return dbInput;
  }

  _validateEventTypes(registrationType) {
    if (!validRegistrationTypes.includes(registrationType)) {
      throw new Error("Error trying to validate registration type " + registrationType + ". Valid registration types are " + validRegistrationTypes);
    }
  }
}
module.exports = Member;