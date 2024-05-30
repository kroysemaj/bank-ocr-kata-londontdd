const subject = require('./save-decoded-accounts');
const saveAccounts = require('./save-accounts')

const decodedAccounts = "decoded accounts"

jest.mock('./save-accounts');

test('it should pass the decoded accounts off to be saved', () => {
    subject(decodedAccounts);
    expect(saveAccounts).toHaveBeenCalled();
});