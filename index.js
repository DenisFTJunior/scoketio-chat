const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs')
app.get('/',(req,res) =>{
    res.render('index')
})


// io emit
io.on('connection',socket =>{
    socket.on('disconnect',()=>{
    })
    socket.on('msg',(data)=>{
        //socket.broadcast.emit => envia para todos menos que mandou
        //enviar para todos
        io.emit('frontMsg',data)
    })

})

http.listen( 3000 , () =>{console.log('server on')})