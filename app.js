console.time("mahdi");
import express from "express";
import axios from "axios";
import dotenv from 'dotenv';
import os from "os";
 import fs from "fs";
dotenv.config()
import promptSync from 'prompt-sync';
 const prompt = promptSync({ sigint: true });
console.log(os.freemem());
import { json } from 'stream/consumers';

//const port=process.env.PORT || 3000;
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
fs.writeFile("data.json",raw, (err,data)=>{
    if (err) {console.log(err); return;}
    else{console.log(data);}
})

 app.get("/", (req, res)=>{
    res.send(raw);
 })
  app.listen(port, ()=>{
  console.log(`the program is runnig on port:${port}`)   
  })
fs.writeFile("data.txt",raw,(err)=>{
    if (err) {console.log(err);}
    else {console.log("saved");}
})
console.log("this is new version");



//------------------------------------------------------------

const userOfdData=[]
while (true) {
    const inputName=prompt("enter your name");
    if (inputName) {
        if (inputName==="exit") {break;}
        else{
            const inputPhone=prompt("enter your phone");
           
            userOfdData.push(inputName);
            userOfdData.push(inputPhone);
        }
    }

}
const output=JSON.stringify(userOfdData,null,2)

fs.writeFile("user.json",output, (err,data)=>{
    if (err) {console.log(err);}
    else{console.log(data);}
})

fs.writeFile("user.txt",output,(err)=>{
    if(err) {console.log(`this is:${err}`)}
})

//---------------------------------------------------------
// app.get("/", (req,res)=>{
//     res.send(output);
// })
// app.listen(port, ()=>{
//     console.log(`the program is running on port :${port}`);
// })
//.............................

// const customerOfjson=JSON.stringify(customer,null,2)
// console.log(customerOfjson);
// app.get("/", (req, res)=>{
//     res.send(customerOfjson);
// })
// app.listen(port, ()=>{
//     console.log(`the prohram is running on port`);;
// })

//-------------------------------------------------------------------------




// const API_KEY = "6351130fc60eeb5af150f6ea411eba42";

// app.get("/weather/:city", async (req, res) => {
//   const city = req.params.city;

//   try {
//     const url =`http://api.openweathermap.org/data/2.5/weather? q=${city}&appid=${API_KEY}&units=metric&lang=fa`

//     const response = await axios.get(url);

//     const data = response.data;

//     res.json({
//       city: data.name,
//       temp: data.main.temp,
//       feels_like: data.main.feels_like,
//       humidity: data.main.humidity,
//       description: data.weather[0].description,
//       wind: data.wind.speed
//     });

//   } catch (err) {
//     res.json({ error: "شهر پیدا نشد یا مشکلی در API وجود دارد" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Weather API is running on http://localhost:${port})`);})

//-----------------------------------------------------------------------------------

// import TelegramBot from "node-telegram-bot-api";

// const token = "8638909410:AAG8M8Q2pKf7MFxM9941MJe1_GDUZumQjuc";

// // فعال کردن Long Polling
// const bot = new TelegramBot(token, { polling: true });

// // وقتی کاربر /start بزند
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, "سلام");
// });

//-----------------------------------------------




console.timeEnd("mahdi");