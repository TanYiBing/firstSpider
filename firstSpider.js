const Crawler = require('crawler');
const jsdom = require('jsdom');
const fs = require('fs');

// let current_book = {};

// const c = new Crawler({
//     // encoding:null,
//     jQuery: true,// set false to suppress warning message.
//     // `maxConnections` 将被强制修改为 1
//     maxConnections : 100,

//     forceUTF8: true,
//     // incomingEncoding: 'gb2312',

//     // 两次请求之间将闲置1000ms
//     // rateLimit: 3000,

//     callback : function (error, res, done) {
//         if (error) {
//             console.log(error);
//         }else {
//             const $ = res.$;
//             const urls = $('#list a');
//             // console.log($(urls[0]).attr('href'));

//             current_book.title = $('#maininfo h1').text()
//             current_book.author = $('#info p').eq(0).text()
//             current_book.update_time = $('#info p').eq(2).text()
//             current_book.latest_chapter = $('#info p').eq(3).html()
//             current_book.intro = $('#intro').html()
//             current_book.chapters = [];
            
//             for(let i=0; i<urls.length; i++){
//                 let url = urls[i];

//                 let _url = $(url).attr('href')+'';
//                 let num = _url.replace('.html','');
//                 let title = $(url).text();

//                 current_book.chapters.push({
//                     num: num,
//                     title: title,
//                     url: _url
//                   })
//             }

//             // console.log(JSON.parse(current_book));
//         }
//         done();
//     }
// });

// c.queue({
//     uri: 'http://www.biquku.com/0/330/'
// });


function one (chapter){
    console.log(chapter);

    const c = new Crawler({
        jQuery: true,
        forceUTF8: true,
        incomingEncoding: 'GBK',
        // The global callback won't be called
        callback: function (error, res, done) {
            if(error) {
                console.log(error);
            }else{
                let $ = res.$;
                let content = $('#content').html();
                console.log(content)
            }
            done();
        }
    })

    c.queue('http://www.biquku.com/0/330/' + chapter.num + '.html',)
}

let chapter = { num: '4063307', title: '第一千两百五十二章 现世！', url: '4063307.html' }

one(chapter);