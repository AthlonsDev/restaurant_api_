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
exports.getFoodData = void 0;
const restaurant_service_js_1 = require("../services/restaurant_service.js");
const express_validator_1 = require("express-validator");
const getFoodData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const { food } = req.params;
        console.log(food);
        let finalFoodData = undefined;
        if (food === "lasagna") {
            console.log((0, restaurant_service_js_1.generateLasagnaData)());
            finalFoodData = (0, restaurant_service_js_1.generateLasagnaData)();
        }
        else if (food === "pizza") {
            finalFoodData = (0, restaurant_service_js_1.generatePizzaData)();
        }
        else if (food === "bolognese") {
            finalFoodData = (0, restaurant_service_js_1.generateBologneseData)();
        }
        else if (food === "carbonara") {
            finalFoodData = (0, restaurant_service_js_1.generateCarbonaraData)();
        }
        else if (food === "salad") {
            finalFoodData = (0, restaurant_service_js_1.generateSaladData)();
        }
        else if (food === "ravioli") {
            finalFoodData = (0, restaurant_service_js_1.generateRavioliData)();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("Food not Available");
        }
        // We will return the weather data as JSON
        if (finalFoodData) {
            res.status(200).json(finalFoodData);
        }
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
});
exports.getFoodData = getFoodData;
