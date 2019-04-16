const Koa = require('koa');
const app = new Koa();
const router = require('./user');

app.use(router.routes());
app.listen(4000);