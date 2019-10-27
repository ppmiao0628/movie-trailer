/**
 * Created by kellerme on 2019/10/27
 */

const Koa = require('koa2');
const app = new Koa();

app.use(async(ctx, next) = > {
    ctx.body = '首页'
})
app.listen(4455)