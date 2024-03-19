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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeWeatherData = void 0;
const algosdk_1 = __importDefault(require("algosdk"));
const config_js_1 = require("../config/config.js");
const storeWeatherData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = (0, config_js_1.getClient)();
        const account = (0, config_js_1.getAccount)();
        const suggestedParams = yield client.getTransactionParams().do();
        const note = algosdk_1.default.encodeObj(data);
        const txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = yield client.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", sendTxn.txId);
    }
    catch (error) {
        console.error("Failed to store weather data:", error);
    }
});
exports.storeWeatherData = storeWeatherData;
