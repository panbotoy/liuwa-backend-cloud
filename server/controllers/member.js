const bodyParser = require('body-parser')
const Member = require('../models/member.js').Member
const memberService = require('../services/memberService.js')

/**
 * Get member data for an Id. The id is in the query params.
 */
async function get(ctx, next) {
  var id = parseFloat(ctx.params.id);
  console.log(`Trying to fetch member with id ` + id)
  await memberService.get(ctx, id).then(member => {
    ctx.state.data = {
      'member': member
    };
  });
}

/**
 * Create a member in the system. The memberId will be system auto-generated.
 */
async function create(ctx, next) {
  console.log('trying to create member: ' + JSON.stringify(ctx.request.body));
  var member = ctx.request.body;
  await memberService.create(ctx, member).then(res => {
    ctx.state.data = { msg: 'member is ' + JSON.stringify(res) };
  });
}

/**
 * Update a member given memberId with the patch data provided in the Http request body.
 */
async function update(ctx, next) {
  var id = parseFloat(ctx.params.id);
  console.log('trying to update member : ' + id + " with patch: " + JSON.stringify(ctx.request.body));
  var memberPatch = ctx.request.body;
  
  await memberService.update(ctx, id, memberPatch).then(res => {
    var member = new Member({}).from(res[0]);
    ctx.state.data = { msg: 'member is ' + JSON.stringify(res) };
  });
}

async function test (ctx, next) {
  ctx.state.data = { msg: 'Hello World ' + JSON.stringify(parseFloat(ctx.params.id)) }
}
module.exports = { get, create, test, update}