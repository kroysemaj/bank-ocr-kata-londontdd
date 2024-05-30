const decoder = require('../decode-account-numbers/decode-account-numbers');
const accountReader = require('../account-reader/account-reader');

module.exports = (fileLocation) => {
    const accounts = accountReader(fileLocation);
    decoder(accounts);
};