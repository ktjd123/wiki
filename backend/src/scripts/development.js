process.env.NODE_ENV = 'development';

var nodemon = require('nodemon');

nodemon('--exec babel-node --presets=es2015 ./src/index.js --watch ./src/');

nodemon.on('start', function(){
    console.log('[nodemon] App has started');
}).on('quit', function(){
    console.log('[nodemon] App has quit');
    process.exit();
}).on('restart', function(files){
    console.log('[nodemon] App restarted due to: ', files);
})