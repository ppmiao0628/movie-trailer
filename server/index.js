/**
 * Created by kellerme on 2019/10/27
 */

const Koa = require('koa2');
const app = new Koa();
const {normal} = require('./tpl/index.js');

app.use(async(ctx, next) => {
    ctx.type = 'text/html;charset=utf-8';
    ctx.body = normal;
});
console.log('listen port 4455');
app.listen(4455);