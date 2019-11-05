
const doSync = (sth, time)=> {
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log(`${sth}用了${time}毫秒`);
            resolve();
        }, time);
    });
};
const doAsync = (sth, time ,cb)=>{
    setTimeout(() => {
        console.log(`${sth}用了${time}毫秒`);
        cb && cb();
    }, time);
}
const doElse = (sth)=>{
    console.log(sth);
}

const PPM = {doSync, doAsync};
const keller = {doAsync, doSync, doElse};
;(async()=>{
    console.log('case1:keller来到门口');
    await PPM.doSync('PPM 刷牙', 1000);
    console.log('keller在一直等着');
    await keller.doSync('keller使用洗手间', 2000);
    keller.doElse('keller去做别的事');

    console.log('case3:keller来到门口');
    PPM.doAsync('PPM 刷牙', 1000,()=>{
        console.log('通知kellerPPM刷完牙了');
        keller.doAsync('keller 使用卫生间',2000);
    });
    keller.doElse('keller忙别的');
})()