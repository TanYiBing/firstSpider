const fs = require('fs');

function write_json(book) {
    let content = JSON.stringify(book, null ,4);

    fs.writeFile(`dist/i am mkdir folder/book.json`, content, err => {
        if (err) throw err;
        console.log('It\'s saved!');
    })
}