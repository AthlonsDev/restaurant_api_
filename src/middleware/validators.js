"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCityName = void 0;
const express_validator_1 = require("express-validator");
exports.validateCityName = (0, express_validator_1.param)("food")
    .isString()
    .isIn(["lasagna", "pizza", "bolognese", "carbonara", "salad", "ravioli"])
    .withMessage("The selected dish is not available");
