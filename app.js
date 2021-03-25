import { compareNumbers, resetButtons, resetGame } from './utils.js';

let correctNumber = Math.floor(Math.random() * 101);
const userGuess = document.getElementById('user-number-input');
const displayGuessResult = document.getElementById('display-guess-result');
const guessesRemainingCounter = document.getElementById('guesses-remaining');
const showGameTally = document.getElementById('games-won-lost');
const button = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

let guessesRemaining = 4;
guessesRemainingCounter.textContent = `You have ${guessesRemaining} guesses.`;
const gameTally = {
    wins: 0,
    losses: 0,
};

button.addEventListener('click', () => {
    console.log('Computer number = ' + correctNumber);
    console.log('user number = ' + userGuess.value);

    let guessResult = compareNumbers(userGuess.value, correctNumber);
    displayGuessResult.textContent = guessResult;
    guessesRemaining--;
    guessesRemainingCounter.textContent = `You have ${guessesRemaining} guesses left.`;

    if (guessesRemaining > 0 && guessResult === 'You win!'){
        gameTally.wins++;
        showGameTally.textContent = `Wins: ${gameTally.wins} / Losses: ${gameTally.losses}`;
        const playAgain = confirm('You win! Play again?');
        if (!playAgain){
            clearGame();
            return;
        } else {
            correctNumber = Math.floor(Math.random(1) * 101);
            guessesRemaining = 4;
            resetGame(guessesRemaining, guessesRemainingCounter, displayGuessResult);
            userGuess.value = '';
        }
    } 

    if (guessesRemaining === 0){
        gameTally.losses++;
        showGameTally.textContent = `Wins: ${gameTally.wins} / Losses: ${gameTally.losses}`;
        const playAgain = confirm('You lose! Play again?');
        if (!playAgain){
            clearGame();
            return;
        } else {
            correctNumber = Math.floor(Math.random(1) * 101);
            guessesRemaining = 4;
            resetGame(guessesRemaining, guessesRemainingCounter, displayGuessResult);
            userGuess.value = '';
        }
    }
});

resetButton.addEventListener('click', () => {
    resetButtons(resetButton, button);
});

function clearGame(){
    correctNumber = Math.floor(Math.random(1) * 101);
    guessesRemaining = 4;
    resetGame(guessesRemaining, guessesRemainingCounter, displayGuessResult);
    displayGuessResult.textContent = '';
    guessesRemainingCounter.textContent = 'Your win/loss ratio:';
    userGuess.value = '';
}