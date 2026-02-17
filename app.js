import express from "express";
import axios from "axios";
import dotenv from 'dotenv';
import os from "os";
 import fs from "fs";
dotenv.config()

// const port=process.env.PORT || 3000;
const port=3000;
const app = express();
//const API_KEY="6351130fc60eeb5af150f6ea411eba42";
fs.readFile("mahdi.txt","utf-8", (err, data)=> {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})
const user={
    username:"mahdi keshavarz",
    password:"12345",
    age:23,
}
const raw=JSON.stringify(user,null,2);
fs.writeFile("data.json",raw, (err,)=>{
    if (err) {console.log(err); return;}
})
console.log(raw);
app.get("/", (req, res)=>{
    res.send(raw);
})
app.listen(port, ()=>{
 console.log(`the program is runnig on port:${port}`)   
})
fs.writeFile("data.txt",raw,(err)=>{
    if (err) {console.log()}
    else {console.log("saved");}
})
console.log("this is new version");


//------------------------------------------------------------


import TelegramBot from "node-telegram-bot-api";

const token = "8514695680:AAHuSI9xRCCVDeKJpCTuo-EkdKMOE4CFTws"; 

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "سلام مهدی! رباتت الان فعاله 😎");
});