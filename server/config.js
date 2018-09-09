const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxd8621956e243710a',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    // mysql: {
    //     host: 'localhost',
    //     port: 3306,
    //     user: 'root',
    //     db: 'cAuth',
    //     pass: 'wxd8621956e243710a',
    //     char: 'utf8mb4'
    // },
    /**local environment mysql */
    mysql: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      db: 'liuwa_backend_db',
      pass: 'password',
      char: 'utf8mb4'
    },
    /**These are configured for local deployment, does not need them in real prod env.
     * see https://cloud.tencent.com/document/product/619/12794#.E5.A6.82.E4.BD.95.E4.BF.AE.E6.94.B9.E6.95.B0.E6.8D.AE.E5.BA.93.E5.AF.86.E7.A0.81
     * 
     */
    // 其他配置 ...
    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 腾讯云相关配置可以查看云 API 密钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1257466212',
    qcloudSecretId: 'AKIDzwnU3Y0FNNGuRnoJBvTp34ykNo6JuJB9',
    qcloudSecretKey: '3xlW5Zu8B3oRsAR4b2MVWQBoFVaYO452',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000,

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
