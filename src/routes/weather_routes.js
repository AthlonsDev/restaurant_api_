"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_controllers_js_1 = require("../controllers/weather_controllers.js");
const validators_js_1 = require("../middleware/validators.js");
const router = express_1.default.Router();
router.get("/:city", validators_js_1.validateCityName, weather_controllers_js_1.getWeatherData);
exports.default = router;
