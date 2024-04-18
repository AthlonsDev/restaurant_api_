"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
const algosdk_1 = __importDefault(require("algosdk"));
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "cry pilot gospel poverty analyst improve sun spider degree hip like order note bracket proud proof family stuff catch amazing trumpet snap elbow abandon test";
// "spawn cheese involve stomach drive else side can glad chaos fame embody move harbor boy group game forget demise trouble first lonely card absent valid";
function getClient() {
    let client = new algosdk_1.default.Algodv2(algodToken, server, port);
    return client;
}
exports.getClient = getClient;
function getAccount() {
    let account = algosdk_1.default.mnemonicToSecretKey(mnemonic);
    return account;
}
exports.getAccount = getAccount;
