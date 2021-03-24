export function compareNumbers(userGuess, correctNumber){
    if (userGuess > correctNumber) return 'Too high';
    if (userGuess < correctNumber) return 'Too low';
    return 'You win!';
}

export function resetGame(showGameTally, gameTally, displayGuessResult, guessesRemainingCounter){
    showGameTally.textContent = `Wins: ${gameTally.wins} / Losses: ${gameTally.losses}`;
    displayGuessResult.textContent = 'Start a new game!';
    guessesRemainingCounter.textContent = 'Guesses Remaining';
}

export function resetButtons(buttonOne, buttonTwo){
    buttonOne.style.display = 'none';
    buttonTwo.style.display = 'block';
}
