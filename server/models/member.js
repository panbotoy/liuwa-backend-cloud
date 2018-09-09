class Member {
  constructor(obj) {
    // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
    for (var prop in obj) this[prop] = obj[prop];
  }
  // update the object with fields in the patch
  update(obj) {
    for (var prop in obj) this[prop] = obj[prop];
    return this;
  }

  from(response) {
    this.id = response.id;
    this.firstName = response.first_name;
    this.lastName = response.last_name;
    this.nickName = response.nick_name;
    this.email = response.email;
    this.phoneNumber = response.phoneNumber;
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

  toInput() {
    var dbInput = {};
    dbInput.id = this.id;
    dbInput.first_name = this.firstName;
    dbInput.last_name = this.lastName;
    dbInput.nick_name = this.nickName;
    dbInput.email = this.email;
    dbInput.phone_number = this.phoneNumber;
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
}
module.exports.Member = Member;