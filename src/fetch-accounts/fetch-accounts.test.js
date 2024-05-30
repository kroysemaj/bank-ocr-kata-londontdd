const subject = require('./fetch-accounts');
const decodeAccountNumbers = require('../decode-account-numbers/decode-account-numbers');

const fileLocation = "path/to/file";
const accounts = 'accounts';

jest.mock('../decode-account-numbers/decode-account-numbers');
jest.mock('../account-reader/account-reader', () => jest.fn(()=>accounts));

test('it should fetch accounts from a file', () => {
    subject(fileLocation);
    expect(decodeAccountNumbers).toHaveBeenCalledWith(accounts);
});