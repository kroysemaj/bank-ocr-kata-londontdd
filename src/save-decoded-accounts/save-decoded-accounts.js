const saveAccounts = require("./save-accounts");

module.exports = (decodedAccounts) => {
    saveAccounts(decodedAccounts);
};