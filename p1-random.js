/*
    CIT 281 Project 1
    Name: Sasha Ostrow
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//gives getrandominterger the min (5) and max (25)
const length = getRandomInteger(5, 26); 
//provides the characters to choose from
const letters = 'abcdefghijklmnopqrstuvwxyz';
let result = '';
//runs through the amout of numbers the getrandominteget tell it to and grabs the letters
for (let i = 0; i < length; i++) {
    result += letters[getRandomInteger(0, letters.length)];
}
//prints
console.log(`${length} lowercase letters: ${result}`);