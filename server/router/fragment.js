const Router = require('koa-router')
const router = new Router({ prefix: '/fragment' })
const { fetchFragmentList, addFragmentList } = require('../controllers/fragment')

router.get('/', fetchFragmentList) // 创建评论或者回复 articleId 文章 id
//   .delete('/comment/:commentId', deleteComment) // 删除一级评论
//   .delete('/reply/:replyId', deleteReply) // 删除回复
router.post('/add', addFragmentList)

module.exports = router
