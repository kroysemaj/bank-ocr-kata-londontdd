const asciiNumbersLookup = {
    ' _ | ||_|':0, // 0
    '     |  |':1, // 1
    ' _  _||_ ':2, // 2
    ' _  _| _|':3, // 3
    '   |_|  |':4, // 4
    ' _ |_  _|':5, // 5
    ' _ |_ |_|':6, // 6
    ' _   |  |':7, // 7
    ' _ |_||_|':8, // 8     
    ' _ |_| _|':9, // 9
};

const extrapolator = (asciiString) => {
    const line1 = asciiString.substring(0, 27);
    const line2 = asciiString.substring(27, 54);
    const line3 = asciiString.substring(54);
    const lines = [line1, line2, line3];
    const asciiDigit = lines.map((line) => line.substring(0,3));
    asciiDigitString = asciiDigit.join('');
    return decoder(asciiDigitString).toString();;
    


    /*
        newStr = str.split(''); // or newStr = [...str];
        newStr.splice(2,5);
        newStr = newStr.join('');
    */

};

const decoder = (digitString) => asciiNumbersLookup[digitString]

module.exports = {
    extrapolator,
    decoder
};