const koa = require("koa");
const koaStatic = require('koa-static')
const router = require('koa-router')()
const path = require('path');

let app = new koa();
app.use(koaStatic(
    path.join(__dirname, './static')
))


app.listen(8081)