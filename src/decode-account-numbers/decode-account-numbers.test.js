const subject = require('./decode-account-numbers');
const {decoder} = require('./decoder');

const accounts = 'accounts';

jest.mock('./decoder');

test('it should accept accounts and pass them to the decoder', () => {
    subject(accounts);
    expect(decoder).toHaveBeenCalledWith(accounts);
});