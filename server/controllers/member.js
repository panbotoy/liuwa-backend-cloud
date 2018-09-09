// const { mysql } = require('../qcloud')
const bodyParser = require('body-parser')
const Member = require('../models/member.js').Member
const dbInstance = require('../ds/dbInstance.js').dbInstance.getInstance
const os = require('os');

async function get(ctx, next) {
  var id = parseFloat(ctx.params.id);
  console.log(`Trying to fetch member with id ` + id + " process is : " + JSON.stringify(process.env))
  await dbInstance(ctx)('member').select('*').where('id', id).then(res => {
    var member = new Member({}).from(res[0]);
    ctx.state.data = {
      'member': member
    };
  });
}

async function create(ctx, next) {
  console.log('trying to create member: ' + JSON.stringify(ctx.request.body));
  var member = ctx.request.body;
  // populate system default values for read only fields
  member.createdAt = dbInstance(ctx).fn.now();
  member.updatedAt = dbInstance(ctx).fn.now();
  member.isSystemAdmin = 'N';
  var memberObj = new Member(member);
  await dbInstance(ctx)('member').insert(memberObj.toInput()).then(res => {
    ctx.state.data = { msg: 'member is ' + JSON.stringify(res) };
  });
}

async function update(ctx, next) {
  var id = parseFloat(ctx.params.id);
  console.log('trying to update member : ' + id + " with patch: " + JSON.stringify(ctx.request.body));
  var memberPatch = ctx.request.body;
  // remove system default values
  delete memberPatch.isSystemAdmin;
  delete memberPatch.createdAt;
  // populate system default values for read only fields
  memberPatch.updatedAt = dbInstance(ctx).fn.now();

  await dbInstance(ctx)('member').select('*').where('id', id).then(res => {
    var member = new Member({}).from(res[0]);
    member.update(memberPatch);
    dbInstance(ctx)('member').where('id', id).update(member.toInput()).then(res => {
      ctx.state.data = { msg: 'member is ' + JSON.stringify(res) };
    });
  });
}

async function test (ctx, next) {
  ctx.state.data = { msg: 'Hello World ' + JSON.stringify(parseFloat(ctx.params.id)) }
}
module.exports = { get, create, test, update}