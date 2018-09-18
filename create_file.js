const fs = require('fs');

function write_chapter(chapter, content) {
    content = content.replace('[笔趣阁手机版 m.biquku.com]', '');

    fs.writeFile(`dist/i am mkdir folder/${chapter}.html`, content, err => {
        if (err) throw err;
        console.log('It\'s saved!');
    })
}

let content = 'xxxxxxxx';

write_chapter('1', content);