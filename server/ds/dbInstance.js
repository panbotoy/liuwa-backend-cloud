const knex = require('knex');

/**
 * In order to figure out which environment current app is running without having to 
 * 
 */
const dbInstance = (function() {
  var instance;
  function createInstance(hostname) {
    // local instance queried with localhost or macbook as hostname...
    if (hostname.includes('localhost') || hostname.includes('macbook')) {
      return knex(DEV);
    } else if (hostname.includes('mmfb2gna.qcloud.la')) {
      return knex(EI);
    } else {
      console.log('unknown hostname, cannot start knex instance.');
      throw new Error('unknown hostname, cannot start knex instance.');
    }
  }

  return {
    getInstance: function (ctx) {
      if (!instance) {
        instance = createInstance(ctx.request.header.host);
      }
      return instance;
    }
  };
})();

const EI = {
      /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'cAuth',
        password: 'wxd8621956e243710a',
        char: 'utf8mb4'
    }
}

const DEV = {
  /**local environment mysql */
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'liuwa_backend_db',
    password: 'password',
    char: 'utf8mb4'
  }
}
module.exports = { dbInstance }
