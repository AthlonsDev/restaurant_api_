import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";
import { FoodData } from "../types/global.js";
export const storeFoodData = async (data: FoodData): Promise<void> => {
try {
    const client = getClient(); // Create a new client
    const account = getAccount(); // Create a new account
    const suggestedParams = await client.getTransactionParams().do(); // Get suggested parameters for the transaction

    const note = algosdk.encodeObj(data); // Encode the data as a note using the encodeObj function

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: account.addr, 
        to: account.addr, // Sending the transaction to oneself
        amount: 1000, // Minimum amount
        note: note,
        suggestedParams: suggestedParams,
    });

    const signedTxn = txn.signTxn(account.sk);
    const sendTxn = await client.sendRawTransaction(signedTxn).do();    

        console.log("Transaction ID:", sendTxn.txId);
} catch (error) {
    console.error("Failed to store weather data:", error);
}
};