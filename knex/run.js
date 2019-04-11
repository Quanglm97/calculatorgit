const Koa = require('koa');

const app = new Koa();

const knex = require('./knex.js');
const showUserById = require ('./showUserById');


app.use(showUserById);
app.listen(4000);