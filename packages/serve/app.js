const CONFIG = require('./src/config');
const static = require("koa-static");
const path = require('path');
const router = require('./src/routers/index')

const Koa = require('koa');
const app = new Koa();

app.use(static(path.join(__dirname) + '/lib/'));
app.use(router.routes());
console.log('服务启动');
app.listen(CONFIG.port)