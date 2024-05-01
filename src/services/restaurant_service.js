"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRavioliData = exports.generateSaladData = exports.generateCarbonaraData = exports.generateBologneseData = exports.generatePizzaData = exports.generateLasagnaData = void 0;
const faker_1 = require("@faker-js/faker");
const helpers_1 = require("../helpers/helpers");
const generateLasagnaData = () => {
    const generatedFoodData = {
        food: "Lasagna",
        weight: faker_1.faker.number.int({ min: 100, max: 300 }),
        calories: faker_1.faker.number.int({ min: 79, max: 250 }),
        price: faker_1.faker.number.int({ min: 10, max: 21 }),
        availability: faker_1.faker.number.int({ min: 0, max: 15 }),
        delivery: "Yes",
        time_to_prepare: faker_1.faker.number.int({ min: 15, max: 45 }),
    };
    (0, helpers_1.storeFoodData)(generatedFoodData).catch(console.error);
    return generatedFoodData;
};
exports.generateLasagnaData = generateLasagnaData;
const generatePizzaData = () => {
    const generatedFoodData = {
        food: "Pizza",
        weight: faker_1.faker.number.int({ min: 100, max: 240 }),
        calories: faker_1.faker.number.int({ min: 99, max: 280 }),
        price: faker_1.faker.number.int({ min: 13, max: 23 }),
        availability: faker_1.faker.number.int({ min: 0, max: 15 }),
        delivery: "Yes",
        time_to_prepare: faker_1.faker.number.int({ min: 11, max: 25 }),
    };
    (0, helpers_1.storeFoodData)(generatedFoodData).catch(console.error);
    return generatedFoodData;
};
exports.generatePizzaData = generatePizzaData;
const generateBologneseData = () => {
    const generatedFoodData = {
        food: "Bolognese",
        weight: faker_1.faker.number.int({ min: 50, max: 150 }),
        calories: faker_1.faker.number.int({ min: 49, max: 120 }),
        price: faker_1.faker.number.int({ min: 9, max: 16 }),
        availability: faker_1.faker.number.int({ min: 0, max: 15 }),
        delivery: "No",
        time_to_prepare: faker_1.faker.number.int({ min: 8, max: 15 }),
    };
    (0, helpers_1.storeFoodData)(generatedFoodData).catch(console.error);
    return generatedFoodData;
};
exports.generateBologneseData = generateBologneseData;
const generateCarbonaraData = () => {
    const generatedFoodData = {
        food: "Carbonara",
        weight: faker_1.faker.number.int({ min: 100, max: 300 }),
        calories: faker_1.faker.number.int({ min: 100, max: 325 }),
        price: faker_1.faker.number.int({ min: 15, max: 25 }),
        availability: faker_1.faker.number.int({ min: 0, max: 15 }),
        delivery: "No",
        time_to_prepare: faker_1.faker.number.int({ min: 15, max: 45 }),
    };
    (0, helpers_1.storeFoodData)(generatedFoodData).catch(console.error);
    return generatedFoodData;
};
exports.generateCarbonaraData = generateCarbonaraData;
const generateSaladData = () => {
    const generatedFoodData = {
        food: "Salad",
        weight: faker_1.faker.number.int({ min: 50, max: 150 }),
        calories: faker_1.faker.number.int({ min: 40, max: 99 }),
        price: faker_1.faker.number.int({ min: 5, max: 12 }),
        availability: faker_1.faker.number.int({ min: 0, max: 15 }),
        delivery: "Yes",
        time_to_prepare: faker_1.faker.number.int({ min: 5, max: 12 }),
    };
    (0, helpers_1.storeFoodData)(generatedFoodData).catch(console.error);
    return generatedFoodData;
};
exports.generateSaladData = generateSaladData;
const generateRavioliData = () => {
    const generatedFoodData = {
        food: "Ravioli",
        weight: faker_1.faker.number.int({ min: 100, max: 300 }),
        calories: faker_1.faker.number.int({ min: 95, max: 250 }),
        price: faker_1.faker.number.int({ min: 10, max: 26 }),
        availability: faker_1.faker.number.int({ min: 0, max: 15 }),
        delivery: "No",
        time_to_prepare: faker_1.faker.number.int({ min: 15, max: 35 }),
    };
    (0, helpers_1.storeFoodData)(generatedFoodData).catch(console.error);
    return generatedFoodData;
};
exports.generateRavioliData = generateRavioliData;
