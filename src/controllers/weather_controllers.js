"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const weather_service_js_1 = require("../services/weather_service.js");
const express_validator_1 = require("express-validator");
const getWeatherData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
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
        let finalWeatherData = undefined;
        if (city === "london") {
            console.log((0, weather_service_js_1.generateLondonWeatherData)());
            finalWeatherData = (0, weather_service_js_1.generateLondonWeatherData)();
        }
        else if (city === "dublin") {
            finalWeatherData = (0, weather_service_js_1.generateDublinWeatherData)();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("City not found");
        }
        // We will return the weather data as JSON
        if (finalWeatherData) {
            res.status(200).json(finalWeatherData);
        }
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
});
exports.getWeatherData = getWeatherData;
