import express from "express";
import axios from "axios";
import dotenv from 'dotenv';
import os from "os";
 import fs from "fs";
dotenv.config()

// const port=process.env.PORT || 3000;
const port=process.env.PORT || 3000;
const app = express();
//const API_KEY="6351130fc60eeb5af150f6ea411eba42";


//weather application
// app.get("/weather", async (req, res) => {
//     const city = req.query.city;

//     if (!city) {
//         return res.status(400).json({ error: "City is required" });
//     }

//     try {
//         const url =` https://api.openweathermap.org/data/2.5/weather/q=${city}&appid=${API_KEY}&units=metric`

//         const response = await axios.get(url);

//         const temp = response.data.main.temp;

//         res.json({
//             city,
//             temperature: temp,
//             unit: "Celsius"
//         });

//     } catch (error) {
//         res.status(500).json({ error: "City not found or API error" });
//     }
// });
// fs.readdir("./",async (err, files) => {
//     if(err) {console.log(err);}
//     else{
//         console.log(files);
//     }
// })
app.get("./", (req, res) => {
    res.send("hello woeld");
})
app.listen(port, () => {
    console.log(`program is running on port:${port} `);
})
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