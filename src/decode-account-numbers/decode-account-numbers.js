const saveDecodedAccounts = require("../save-decoded-accounts/save-decoded-accounts");
const decoder = require("./decoder");

module.exports = (accounts) => {
    const decodedAccounts = decoder(accounts);
    saveDecodedAccounts(decodedAccounts);
};