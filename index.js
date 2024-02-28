const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=4000
/////////////////////////
app.use(bodyparser())
app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("this is node js server !!!")
// })
// app.post("/",(req,res)=>{
//     const {message}=req.body
//     res.send(`welcome Mr ${message}`)
// })
app.get("/home",(req,res)=>{
    res.send("this is page home in node js")
})
const qrcode = require('qrcode-terminal');


// const fs=require('fs');
const { Client ,LocalAuth} = require('whatsapp-web.js');
// const session="./session.json"
// let sessionConf
// if(fs.existsSync(session)){
//     sessionConf=require(session)
// }
const client = new Client({puppeteer:{headless:true},authStrategy:new LocalAuth()});

client.on('qr', (qr) => {
       qrcode.generate(qr, { small: true });
        console.log("this is qr ",qr) 
  
})
client.on("ready",()=>{
    console.log("ready sir")
});
client.on('ready', () => {
    console.log('Client is ready!');
 client.sendMessage("201027741310@c.us","بحبك")

});
client.initialize();

app.listen(port,()=>{
    console.log("example app")
})