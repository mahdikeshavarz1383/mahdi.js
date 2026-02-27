
//...................................................................
import express from "express";
import axios from "axios";
const app = express();
const port=3000;

const API_KEY = "6351130fc60eeb5af150f6ea411eba42";

 app.get("/weather/:city", async (req, res) => {
   const city = req.params.city;

  try {
     const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fa`

    const response = await axios.get(url);

    const data = response.data;

    res.json({
       city: data.name,
       temp: data.main.temp,
       feels_like: data.main.feels_like,
       humidity: data.main.humidity,
       description: data.weather[0].description,
       wind: data.wind.speed
     });

  } catch (err) {
     res.json({ error: "شهر پیدا نشد یا مشکلی در API وجود دارد" });
   }
 });

 app.listen(port, () => {
  console.log(`Weather API is running on http://localhost:${port})`);})