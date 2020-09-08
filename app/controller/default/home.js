'use strict'
const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('blog_content', {})
    console.log(result)
    this.ctx.body = result
  }

  async getArticleById() {
    //先配置路由的动态传值，然后再接收值
    const id = this.ctx.params.id

    const sql = 'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'article.article_content as article_content,' +
        'FROM_UNIXTIME(article.addTime,\'%Y-%m-%d %H:%i:%s\' ) as addTime,' +
        'article.view_count as view_count ,' +
        'type.typeName as typeName ,' +
        'type.id as typeId ' +
        'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
        'WHERE article.id=' + id


    const result = await this.app.mysql.query(sql)


    this.ctx.body = { data: result }
  }

  async getArticleList() {

    const sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'FROM_UNIXTIME(article.addTime,\'%Y-%m-%d %H:%i:%s\' ) as addTime,' +
            'article.view_count as view_count ,' +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.Id'

    const results = await this.app.mysql.query(sql)

    this.ctx.body = {
      data: results,
    }
  }

  //获得文章列表
  async getArticleListById() {
    const sql = 'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'article.view_count as view_count,' +
        'FROM_UNIXTIME(article.addTime,\'%Y-%m-%d\' ) as addTime,' +
        'type.typeName as typeName ' +
        'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
        'WHERE article.type_id=' + this.ctx.params.id

    const resList = await this.app.mysql.query(sql)
    this.ctx.body = { list: resList }
  }

  async getTypeInfo() {
    const result = await this.app.mysql.select('type')
    this.ctx.body = { data: result }
  }
}

module.exports = HomeController

