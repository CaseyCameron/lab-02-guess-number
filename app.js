import { compareNumbers, resetGame, resetButtons } from './utils.js';

let correctNumber = Math.floor(Math.random() * 101);
const userGuess = document.getElementById('user-number-input');
const displayGuessResult = document.getElementById('display-guess-result');
const guessesRemainingCounter = document.getElementById('guesses-remaining');
const showGameTally = document.getElementById('games-won-lost');
const button = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

let guessesRemaining = 4;
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
    guessesRemainingCounter.textContent = `You have ${guessesRemaining} tries left.`;
    console.log(guessesRemainingCounter);

    if (guessesRemaining > 0 && guessResult === 'You win!'){
        gameTally.wins++;
        showGameTally.textContent = `Wins: ${gameTally.wins} / Losses: ${gameTally.losses}`;
        const playAgain = confirm('You win! Play again?');
        if (!playAgain) return;

        // else continue playing

        correctNumber = Math.floor(Math.random(1) * 101);
        guessesRemaining = 4;
        guessesRemainingCounter.textContent = `You have ${guessesRemaining} tries left.`;
        displayGuessResult.textContent = 'Your guess results appear here.';

    } 
    if (guessesRemaining === 0){
        gameTally.losses++;
        showGameTally.textContent = `Wins: ${gameTally.wins} / Losses: ${gameTally.losses}`;
        const playAgain = confirm('You lose! Play again?');
        if (!playAgain) return;

        // else continue playing

        correctNumber = Math.floor(Math.random(1) * 101);
        guessesRemaining = 4;
        guessesRemainingCounter.textContent = `You have ${guessesRemaining} tries left.`;
        displayGuessResult.textContent = 'Your guess results appear here.';
    }
});

resetButton.addEventListener('click', () => {
    resetButtons(resetButton, button);
});
