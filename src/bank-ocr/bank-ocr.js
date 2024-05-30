const fetchAccounts = require('../fetch-accounts/fetch-accounts');
const decoder = require('../decode-account-numbers/decode-account-numbers');
const saveDecodedAccounts = require('../save-decoded-accounts/save-decoded-accounts');

module.exports = (fileLocation) => {
    const accounts = fetchAccounts(fileLocation);
    const decodedAccounts = decoder(accounts);
    saveDecodedAccounts(decodedAccounts);
};