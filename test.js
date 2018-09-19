var mkdirp = require('mkdirp');

mkdirp('dist/0/330',function (err) {
    if (err) console.error(err)
    else console.log('pow!')})