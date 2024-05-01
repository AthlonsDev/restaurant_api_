import algosdk from "algosdk"; 

const algodToken = "a".repeat(64); // algotoken stored as a string repeated 64 times
const server: string = "http://localhost"; // server stored as a string
const port: string = "4001"; // port stored as a string

const mnemonic: string ="cry pilot gospel poverty analyst improve sun spider degree hip like order note bracket proud proof family stuff catch amazing trumpet snap elbow abandon test" 

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port); // create a new client using the algodToken, server, and port
    return client; 
}

export function getAccount(): algosdk.Account { 
    let account = algosdk.mnemonicToSecretKey(mnemonic); // create a new account using the mnemonic
    return account;
}

// client and account are exported as functions to be used in other files, they are used to create a new client and account respectively