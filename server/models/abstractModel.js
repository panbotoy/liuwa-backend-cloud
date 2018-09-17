class AbstractModel {
  /**
   * Create the model based on a given json input. For example, if it's a create/update request,
   * this constructor will be conveniently convert the json input into our domain model and operate on top of that.
   * 
   * It can also be used to convert the object fetched from knex to domain model.
   */
  constructor(obj) {
    // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
    for (var prop in obj) this[prop] = obj[prop];
  }

  /**
   * with the given object, update the fields if it shows up in the input obj
   * 
   * This method is convenient in update methods.
   */
  // update the object with fields in the patch
  update(obj) {
    for (var prop in obj) this[prop] = obj[prop];
    return this;
  }

  /**
   * Convert from knex mysql response to domain model
   */
  from(response) {
    return this;
  }

  /**
   * Convert from domain model to knex mysql input
   * 
   */
  toInput() {
    return dbInput;
  }
}
module.exports.AbstractModel = AbstractModel;