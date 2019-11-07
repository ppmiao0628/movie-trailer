/**
 * Created by kellerme on 2019/10/30
 */
const puppeteer = require('puppeteer');

const base = 'https://movie.douban.com/subject/';
const doubanId = `26709258`;
const videoBase = `https://movie.douban.com/trailer/251878`;

const sleep = time => new Promise(resolve=>{
    setTimeout(resolve, time);
});

(async ()=>{
    const browser = await puppeteer.launch({
    args:['--no-sandbox'],
    dumpio: false
});
const page = await browser.newPage();
await page.goto(base+doubanId,{waitUntil:'networkidle2'});
console.log('正在下载页面...');
const result = await page.evaluate(()=>{
    let $ = window.$;
    let it = $('.related-pic-video');
    if(it && it.length>0) {
        let link = it.attr('href');
        let cover = it.attr('style').replace('background-image:url(https:','https:');
        console.log('查看cover');
        console.log(cover);
        return {
            link,cover
        }
    }
    return {};
});
let video;
if(result.link) {
    await page.goto(result.link,{waitUntil:'networkidle2'});
    await sleep(2000);
    video = await page.evaluate(()=>{
        let it = $('source');
        if(it && it.length>0){
            return it.attr('src');
        }
        return '';
    })
}
const data = {
    video,doubanId,'cover': result.cover
};
await browser.close();
process.send(data);
process.exit(0);
})();