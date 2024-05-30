const subject = require('./bank-ocr');
const saveDecodedAccounts = require('../save-decoded-accounts/save-decoded-accounts');

const fileLocation = 'path/to/file';
const decodedAccounts = 'decoded accounts';

jest.mock('../decode-account-numbers/decode-account-numbers', () => jest.fn(() => decodedAccounts) )
jest.mock('../save-decoded-accounts/save-decoded-accounts');

test('It should orchestrate the fetching and decode actions for accounts from a file', () => {
    subject(fileLocation);
    expect(saveDecodedAccounts).toHaveBeenCalledWith(decodedAccounts);
});