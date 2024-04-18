import express from "express";
import { getFoodData } from "../controllers/weather_controllers.js";
import { validateCityName } from "../middleware/validators.js";

const router = express.Router();

router.get("/:food", validateCityName, getFoodData);

export default router;