const router = require("koa-router")();

const redirect = async (ctx, next) => {
    
}
router.redirect('/', './index')

module.exports = router;