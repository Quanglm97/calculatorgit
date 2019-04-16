const nunjucks      = require('nunjucks');
const Router        = require('koa-router');
let router          = new Router();
const configuration = require ('./knex');
const knex          = require ('knex') (configuration);

router.get('/search/:name', async (context,next) =>{
let items    = await knex.select('*').from('nhanvien').where('tennv', 'like', '%' +  context.params.name + '%');
context.body = nunjucks.render('index.html',{items});
});

module.exports = router;
