/**
 * Created by kellerme on 2019/10/30
 */
const puppeteer = require('puppeteer');

const url = 'https://movie.douban.com/explore#!type=movie&tag=%E6%82%AC%E7%96%91&sort=recommend&page_limit=20&page_start=0';

const sleep = time => new Promise(resolve=>{
    setTimeout(resolve, time);
});

(async ()=>{
    const browser = await puppeteer.launch({
    args:['--no-sandbox'],
    dumpio: false
});
const page = await browser.newPage();
await page.goto(url,{waitUntil:'networkidle2'});
console.log('正在下载页面...');
await sleep(3000);
await page.waitForSelector('.more');
for (let i=0;i<2;i++) {
    await sleep(3000);
    console.log('点击加载更多...');
    await page.click('.more');
}
const result = await page.evaluate(()=>{
    let $ = window.$;
let items = $('.list-wp a');
let links = [];
if (items.length>1){
    items.each((index, item)=>{
        let it = $(item);
        let doubanId = it.find('div').data('id');
        let title = it.find('p').context.innerText;
        let sposter = it.find('img').attr('src');
        let lposter = sposter && sposter.replace('s_ratio','l_ratio')
        links.push({
            doubanId,
            title,
            lposter
        })
    })
}
return links;
});
// await page.$('#gaia');
// await page.pdf({path:'aaa.pdf',format:'A4'});
await browser.close();
// console.log(result);
process.send({result});
process.exit(0);
})();