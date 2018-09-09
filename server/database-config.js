const hostname = require('os').hostname();
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

const CURRENT_ENV = function () {
  // local env on mac ...
  if (hostname.includes("macbook")) {
    return DEV;
  } else if (hostname.includes("qcloud.la")) {
    return EI;
  } else {
    return EI;
  }
}


module.exports = { DEV, EI, CURRENT_ENV}
