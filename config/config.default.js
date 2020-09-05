/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599062643413_5160'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'cmz214164051',
      database: 'react_blog',
    },
    app: true,
    agent: false,
  }

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  }
  config.cors = {
    origin: 'http://localhost:3000', //允许这个地址进行跨域
    credentials: true, //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    /*
    * origin: 'http://localhost:3000', //只允许这个域进行访问接口
      credentials: true,   // 开启认证
    * */
  }

  return {
    ...config,
    ...userConfig,
  }
}

