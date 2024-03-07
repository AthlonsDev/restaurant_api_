import express from "express";
import weatherRoute from "./routes/weather_routes.js";

const app = express();
const PORT = 3000;
app.use("/api/weather", weatherRoute);
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});