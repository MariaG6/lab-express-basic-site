const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('public',__dirname+'/public')

app.get('/homepage',(req,res)=>{
    res.sendFile(__dirname + '/views/homepage.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about.html')
})
app.get('/gallery',(req,res)=>{
    res.sendFile(__dirname + '/views/gallery.html')
})
app.get('/work',(req,res)=>{
    res.sendFile(__dirname + '/views/work.html')
})

app.listen(3000,()=>{console.log("server is running")})
