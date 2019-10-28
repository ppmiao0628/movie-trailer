/**
 * Created by kellerme on 2019/10/27
 */

const Koa = require('koa2');
const app = new Koa();
const {htmlTpl, ejsTpl, pugTpl} = require('./tpl/index.js');
const ejs = require('ejs');
const pug = require('pug');

app.use(async(ctx, next) => {
    ctx.type = 'text/html;charset=utf-8';
    ctx.body = pug.render(pugTpl,{you:'ppm1',me:'keller1'});
});
console.log('listen port 4455');
app.listen(4455);