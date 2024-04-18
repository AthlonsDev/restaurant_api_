import { faker } from "@faker-js/faker";
import { storeFoodData } from "../helpers/helpers";
import { FoodData } from "../types/global";

export const generateLasagnaData = (): FoodData => {
    const generatedFoodData = {
        food: "Lasagna",
        weight: faker.number.int({ min: 100, max: 300 }),
        calories: faker.number.int({ min: 79, max: 250 }),
        price: faker.number.int({ min: 10, max: 21 }),
        availability: faker.number.int({ min: 0, max: 15 }),
        delivery: "Yes",
        time_to_prepare: faker.number.int({ min: 15, max: 45 }),
    };

    storeFoodData(generatedFoodData).catch(console.error)

    return generatedFoodData;
}

export const generatePizzaData = (): FoodData => {
    const generatedFoodData = {
        food: "Pizza",
        weight: faker.number.int({ min: 100, max: 240 }),
        calories: faker.number.int({ min: 99, max: 280 }),
        price: faker.number.int({ min: 13, max: 23 }),
        availability: faker.number.int({ min: 0, max: 15 }),
        delivery: "Yes",
        time_to_prepare: faker.number.int({ min: 11, max: 25 }),
    };

    storeFoodData(generatedFoodData).catch(console.error)

    return generatedFoodData;
}

export const generateBologneseData = (): FoodData => {
    const generatedFoodData = {
        food: "Bolognese",
        weight: faker.number.int({ min: 50, max: 150 }),
        calories: faker.number.int({ min: 49, max: 120 }),
        price: faker.number.int({ min: 9, max: 16 }),
        availability: faker.number.int({ min: 0, max: 15 }),
        delivery: "No",
        time_to_prepare: faker.number.int({ min: 8, max: 15 }),
    };

    storeFoodData(generatedFoodData).catch(console.error)

    return generatedFoodData;
}

export const generateCarbonaraData = (): FoodData => {
    const generatedFoodData = {
        food: "Carbonara",
        weight: faker.number.int({ min: 100, max: 300 }),
        calories: faker.number.int({ min: 100, max: 325 }),
        price: faker.number.int({ min: 15, max: 25 }),
        availability: faker.number.int({ min: 0, max: 15 }),
        delivery: "No",
        time_to_prepare: faker.number.int({ min: 15, max: 45 }),
    };

    storeFoodData(generatedFoodData).catch(console.error)

    return generatedFoodData;
}

export const generateSaladData = (): FoodData => {
    const generatedFoodData = {
        food: "Salad",
        weight: faker.number.int({ min: 50, max: 150 }),
        calories: faker.number.int({ min: 40, max: 99 }),
        price: faker.number.int({ min: 5, max: 12 }),
        availability: faker.number.int({ min: 0, max: 15 }),
        delivery: "Yes",
        time_to_prepare: faker.number.int({ min: 5, max: 12 }),
    };

    storeFoodData(generatedFoodData).catch(console.error)

    return generatedFoodData;
}

export const generateRavioliData = (): FoodData => {
    const generatedFoodData = {
        food: "Ravioli",
        weight: faker.number.int({ min: 100, max: 300 }),
        calories: faker.number.int({ min: 95, max: 250 }),
        price: faker.number.int({ min: 10, max: 26 }),
        availability: faker.number.int({ min: 0, max: 15 }),
        delivery: "No",
        time_to_prepare: faker.number.int({ min: 15, max: 35 }),
    };

    storeFoodData(generatedFoodData).catch(console.error)

    return generatedFoodData;
}