var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

/***********************router work */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**************socket work*******/
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message: ' + msg);
      });
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
})

http.listen(3000, function () {
    console.log(`listening on*: 3000`)
});