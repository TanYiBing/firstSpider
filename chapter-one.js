const Crawler = require('crawler');
const utils = require('./utils');

let current_book = {};

//创建目录
utils.mkdir('/0/330');
const c = new Crawler({
    // encoding:null,
    jQuery: true,// set false to suppress warning message.
    // `maxConnections` 将被强制修改为 1
    maxConnections : 100,

    forceUTF8: true,
    // incomingEncoding: 'gb2312',

    // 两次请求之间将闲置1000ms
    // rateLimit: 3000,

    callback : function (error, res, done) {
        if (error) {
            console.log(error);
        }else {
            const $ = res.$;
            const urls = $('#list a');
            // console.log($(urls[0]).attr('href'));

            current_book.title = $('#maininfo h1').text()
            current_book.author = $('#info p').eq(0).text()
            current_book.update_time = $('#info p').eq(2).text()
            current_book.latest_chapter = $('#info p').eq(3).text()
            current_book.intro = $('#intro').text()
            current_book.chapters = [];
            
            for(let i=0; i<urls.length; i++){
                let url = urls[i];

                let _url = $(url).attr('href')+'';
                let num = _url.replace('.html','');
                let title = $(url).text();

                current_book.chapters.push({
                    num: num,
                    title: title,
                    url: _url
                });
            }
            utils.write_config(current_book);
            for (let i = 0; i < current_book.chapters.length; i++) {
                one(current_book.chapters[i]);
            }
        }
        done();
    }
});

function one (chapter){
    c.queue({
        uri: 'http://www.biquku.com/0/330/' + chapter.num + '.html',
        jQuery: true,
        forceUTF8: true,
        // The global callback won't be called
        callback: function (error, res, done) {
            if(error) {
                console.log(error);
            }else{
                let $ = res.$;
                let content = $('#content').html();
                
                utils.write_chapter(chapter, content);
            }
            done();
        }
    })
}

c.queue('http://www.biquku.com/0/330/');
