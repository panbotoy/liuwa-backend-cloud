class AbstractModel {
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
    return this;
  }

  toInput() {
    return dbInput;
  }
}
module.exports.AbstractModel = AbstractModel;