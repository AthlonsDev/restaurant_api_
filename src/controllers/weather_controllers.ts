import { Request, Response } from "express";
import {
generateDublinWeatherData,
generateLondonWeatherData,
} from "../services/weather_service.js";
import { validationResult } from "express-validator";

export const getWeatherData = async (req: Request, res: Response) => {
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }

    // We will use a try catch block to catch any errors
    try {
    // Get the city param from the request
        const { city } = req.params;
        console.log(city);

        let finalWeatherData: WeatherData | undefined = undefined;

        if (city === "london") {
            console.log(generateLondonWeatherData());
            finalWeatherData = generateLondonWeatherData();
        } else if (city === "dublin") {
            finalWeatherData = generateDublinWeatherData();
        } else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("City not found");
        }

        // We will return the weather data as JSON
        if (finalWeatherData) {
            res.status(200).json(finalWeatherData);
        }

    } catch (error) {
        res.status(500).send("Internal server error");
    }
};