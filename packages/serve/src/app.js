const CONFIG = require('./config');

const Koa = require('koa');
const app = new Koa();

console.log('服务启动');
app.listen(CONFIG.port)