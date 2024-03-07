"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_routes_js_1 = __importDefault(require("./routes/weather_routes.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use("/api/weather", weather_routes_js_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
