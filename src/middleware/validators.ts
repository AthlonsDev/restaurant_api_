import { param } from "express-validator";

export const validateCityName = param("food")
    .isString()
    .isIn(["lasagna", "pizza", "bolognese", "carbonara", "salad", "ravioli"])
    .withMessage("The selected dish is not available");