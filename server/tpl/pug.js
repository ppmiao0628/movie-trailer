/**
 * Created by kellerme on 2019/10/29
 */
module.exports = `
doctype html
html
 head
  meta(charset='utf-8')
  meta(name='viewport',content='width=device-width,initial-scale=1')
  title Koa Server Pug
  link(href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css",integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",crossorigin="anonymous")
  script(src="https://code.jquery.com/jquery-3.4.1.min.js")
  script(src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js",integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa",crossorigin="anonymous")
 body
  .container
   .row
    .col-md-8
     h1 Hi #{you}
     this is #{me}
    .col-md-4
     p 测试动态pug模板引擎
`