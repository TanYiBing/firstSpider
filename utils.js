const fs = require('fs');
const mkdirp =require('mkdirp');

exports.mkdir = function (folder) {
    mkdirp('dist'+folder, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
    });
}

exports.write_chapter = function (chapter, content) {

    fs.writeFile(`dist/0/330/${chapter.num}.html`, content, err => {
        if (err) throw err;
        console.log('It\'s saved!');
    })
}

exports.write_config = function(book) {
    let content = JSON.stringify(book, null ,4);

    fs.writeFile(`dist/0/330/book.json`, content, err => {
        if (err) throw err;
        console.log('It\'s saved!');
    })
}