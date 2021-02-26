const Joi = require('joi')
const { fragment: FragmentModel, sequelize } = require('../models')
class FragmentController {
  static async fetchFragmentList(ctx) {
    const data = await FragmentModel.findAndCountAll({
      attributes: ['id', 'author', 'content', 'createdAt'],
      row: true,
      order: [['createdAt', 'DESC']],
    })
    console.log(data)
    ctx.body = data
  }
  static async addFragmentList(ctx) {
    const data = await FragmentModel.create({
      content: ctx.request.body.content,
      author: ctx.request.body.author,
      // createdAt: new Date()
    })
    ctx.body = data
  }
}
module.exports = FragmentController
