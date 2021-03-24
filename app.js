import { compareNumbers } from './utils.js';

const correctNumber = Math.floor(Math.random() * 101);
let userGuess = document.getElementById('user-number-input');
let displayGuessResult = document.getElementById('display-guess-result');
const button = document.getElementById('submit-button');

button.addEventListener('click', () => {
    console.log('Computer number = ' + correctNumber);
    console.log('user number = ' + userGuess.value);
    let guessResult = compareNumbers(userGuess.value, correctNumber);
    displayGuessResult.textContent = guessResult;
});



// set event listeners to update state and DOM