const  {decoder, extrapolator} = require('./decoder');

describe('Account Decoder', () => {
    describe('digit decoder', () => {
        it('should be able to decode the number zero (0)', () => {
            expect(decoder(' _ '+
                           '| |'+
                           '|_|')).toBe('0');
        });
        it('should be able to decode the number one (1)', () => {
            expect(decoder('   '+
                           '  |'+
                           '  |')).toBe('1');
        });
        it('should be able to decode the number two (2)', () => {
            expect(decoder(' _ '+
                           ' _|'+
                           '|_ ')).toBe('2');
        });
        it('should be able to decode the number three (3)', () => {
            expect(decoder(' _ '+
                           ' _|'+
                           ' _|')).toBe('3');
        });
        it('should be able to decode the number four (4)', () => {
            expect(decoder('   '+
                           '|_|'+
                           '  |')).toBe('4');
        });
        it('should be able to decode the number five (5)', () => {
            expect(decoder(' _ '+
                           '|_ '+
                           ' _|')).toBe('5');
        });
        it('should be able to decode the number six (6)', () => {
            expect(decoder(' _ '+
                           '|_ '+
                           '|_|')).toBe('6');
        });
        it('should be able to decode the number seven (7)', () => {
            expect(decoder(' _ '+
                           '  |'+
                           '  |')).toBe('7');
        });
        it('should be able to decode the number eight (8)', () => {
            expect(decoder(' _ '+
                           '|_|'+
                           '|_|')).toBe('8');
        });
        it('should be able to decode the number nine (9)', () => {
            expect(decoder(' _ '+
                           '|_|'+
                           ' _|')).toBe('9');
        });
    })

    describe('digit extractor', () => {
        it('should extract a zero as the first digit when passed an ASCII string', () => {
            expect(extrapolator(
                    ' _  _  _  _  _  _  _  _  _ | || || || || || || || || ||_||_||_||_||_||_||_||_||_|'
                ))
                .toBe('000000000')
        });
        it('should extract a 1 and 2 as the first and second digit when passed an ASCII string', () => {
            expect(extrapolator(
                    '    _  _     _  _  _  _  _   | _| _||_||_ |_   ||_||_|  ||_  _|  | _||_|  ||_| _|'
                ))
                .toBe('123456789')
        });
        it('should extract a 1 and 2 as the first and second digit when passed an ASCII string', () => {
            expect(extrapolator(
                    '                             |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |'
                ))
                .toBe('111111111')
        });
        it('should extract a 1 and 2 as the first and second digit when passed an ASCII string', () => {
            expect(extrapolator(
                    ' _  _  _  _  _  _  _  _  _  _| _| _| _| _| _| _| _| _||_ |_ |_ |_ |_ |_ |_ |_ |_ '
                ))
                .toBe('222222222')
        });
    });
});