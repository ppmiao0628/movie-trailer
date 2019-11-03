const rp = require('request-promise-native');
async function fetchMovie(item){
    const url = `https://douban.uieee.com/v2/movie/subject/${item.doubanId}`;
    const result = await rp(url);
    return result;
}

;(async ()=>{
    let movies = [
        {
            doubanId: 30384019,
            title: '看不见的客人(意大利版) 9.1',
            lposter: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2540551398.jpg'
        },
        {
            doubanId: 26331839,
            title: '保持沉默 5.4',
            lposter: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2565877341.jpg'
        }
    ];
    movies.map(async movie=>{
        let movieData = await fetchMovie(movie);
        try {
            movieData = JSON.parse(movieData);
            console.log(movieData.title);
            console.log(movieData.tags);
            console.log(movieData.summary);
        } catch (err){
            console.log(err);
        }
    })
})()