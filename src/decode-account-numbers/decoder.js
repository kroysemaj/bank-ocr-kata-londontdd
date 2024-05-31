const asciiNumbersLookup = {
    ' _ | ||_|': '0', // 0
    '     |  |': '1', // 1
    ' _  _||_ ': '2', // 2
    ' _  _| _|': '3', // 3
    '   |_|  |': '4', // 4
    ' _ |_  _|': '5', // 5
    ' _ |_ |_|': '6', // 6
    ' _   |  |': '7', // 7
    ' _ |_||_|': '8', // 8     
    ' _ |_| _|': '9', // 9
};

const extrapolator = (asciiString) => {
    const line1 = asciiString.substring(0, 27);
    const line2 = asciiString.substring(27, 54);
    const line3 = asciiString.substring(54);
    
    let asciiDigit, 
        digitString = "";

    for(let j = 0; j < 27; j+=3){
        asciiDigit = line1.substring(j, j+3) + line2.substring(j, j+3) + line3.substring(j, j+3);
        digitString += decoder(asciiDigit)
    }

    return digitString;

};

const decoder = (digitString) => asciiNumbersLookup[digitString]

module.exports = {
    extrapolator,
    decoder
};


