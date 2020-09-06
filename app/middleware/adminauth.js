'use strict'
module.exports = options => {

  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId)
    if(ctx.session.openId) {
      //刷新置空
      //ctx.session = null
      await next()
    }else{
      ctx.body = { data: '没有登录' }
    }
  }
}
