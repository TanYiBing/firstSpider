let mkdirp = require('mkdirp')

function mkdir (folder) {
    mkdirp('dist/'+folder, (err)=>{
        if(err) console.log(err);
        else console.log('pow');
    })
}

mkdir ('i am mkdir folder');