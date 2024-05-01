import { Request, Response } from "express";
import {
    generateLasagnaData,
    generateBologneseData,
    generateCarbonaraData,
    generatePizzaData,
    generateRavioliData,
    generateSaladData
} from "../services/restaurant_service.js";
import { validationResult } from "express-validator";
import { FoodData } from "../types/global.js";

export const getFoodData = async (req: Request, res: Response) => {
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
        const { food } = req.params;
        console.log(food);

        let finalFoodData: FoodData | undefined = undefined;

        if (food === "lasagna") {
            console.log(generateLasagnaData());
            finalFoodData = generateLasagnaData();
        } else if (food === "pizza") {
            finalFoodData = generatePizzaData();
        }
        else if (food === "bolognese"){
            finalFoodData = generateBologneseData();
        }
        else if (food === "carbonara"){
            finalFoodData = generateCarbonaraData();
        }
        else if (food === "salad"){
            finalFoodData = generateSaladData();
        }
        else if (food === "ravioli"){
            finalFoodData = generateRavioliData();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("Food not Available");
        }

        // We will return the data as JSON
        if (finalFoodData) {
            res.status(200).json(finalFoodData);
        }

    } catch (error) {
        res.status(500).send("Internal server error");
    }
};