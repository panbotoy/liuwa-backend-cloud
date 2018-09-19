const dbInstance = require('../ds/dbInstance.js').dbInstance.getInstance
const Member = require('../models/member.js')

/**
 * This class handles business logic + database operations related to {@link Member}
 * 
 * It abstracts away the operation with DB from controllers, and allows create a class 
 * calling multiple services to accomplish more complicated operations.
 * 
 */
class MemberService {
  constructor() {
  }

  /**
   * Get a member given a memberId
   */
  async get(ctx, id) {
    return await dbInstance(ctx)('member').select('*').where('id', id).then(res => {
      var member = new Member({}).from(res[0]);
      return member;
    });
  }

  /**
   * create a member with the given member json rawInput
   */
  async create(ctx, member) {
    // populate system default values for read only fields
    member.createdAt = dbInstance(ctx).fn.now();
    member.updatedAt = dbInstance(ctx).fn.now();
    member.isSystemAdmin = 'N';
    var memberObj = new Member(member);
    return await dbInstance(ctx)('member').insert(memberObj.toInput()).then(res => {
      return res;
    });
  }

  /**
   * update a member for the given Id with the member json input
   */
  async update(ctx, id, memberPatch) {
    // remove system default values
    delete memberPatch.isSystemAdmin;
    delete memberPatch.createdAt;
    delete memberPatch.registrationId;
    delete memberPatch.registrationType;
    // populate system default values for read only fields
    memberPatch.updatedAt = dbInstance(ctx).fn.now();
    return await dbInstance(ctx)('member').select('*').where('id', id).then(res => {
      var member = new Member({}).from(res[0]);
      member.update(memberPatch);
      return dbInstance(ctx)('member').where('id', id).update(member.toInput()).then(res => {
        return res;
      });
    });
  }
}

/**
 * create a single instance of MemberService
 */
const memberService = new MemberService();

module.exports = memberService