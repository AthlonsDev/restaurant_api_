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
    // Get the food param from the request
        const { food } = req.params;
        console.log(food);

        let finalFoodData: FoodData | undefined = undefined; // We will store the final data here

        if (food === "lasagna") { // If the food is lasagna, we will generate lasagna data
            console.log(generateLasagnaData()); // Log the data to the console
            finalFoodData = generateLasagnaData(); // Store the data in finalFoodData
        } else if (food === "pizza") {
            finalFoodData = generatePizzaData(); // otherwise if the food is pizza, we will generate pizza data
        }
        else if (food === "bolognese"){
            finalFoodData = generateBologneseData(); // if the food is bolognese, we will generate bolognese data
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
            // If input is not recognized, it will throw an error
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