/**
 * Created by kellerme on 2019/10/27
 */

const Koa = require('koa2');
const app = new Koa();
const {htmlTpl, ejsTpl, pugTpl} = require('./tpl/index.js');
const views = require('koa-views');
const {resolve} = require('path');

app.use(views(resolve(__dirname, './views'),{extension:'pug'}));
app.use(async(ctx, next) => {
    // ctx.type = 'text/html;charset=utf-8';
    // ctx.body = pug.render(pugTpl,);
    await ctx.render('index',{you:'ppm1',me:'keller1'})
});
console.log('listen port 4455');
app.listen(4455);