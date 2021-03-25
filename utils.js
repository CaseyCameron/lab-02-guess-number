export function compareNumbers(userGuess, correctNumber){
    if (userGuess > correctNumber) return 'Too high';
    if (userGuess < correctNumber) return 'Too low';
    return 'You win!';
}

export function resetGame(guessesRemaining, guessesRemainingCounter, displayGuessResult, userGuess){
    guessesRemainingCounter.textContent = `You have ${guessesRemaining} tries left.`;
    displayGuessResult.textContent = 'Your guess results appear here.';
}

export function resetButtons(buttonOne, buttonTwo){
    buttonOne.style.display = 'none';
    buttonTwo.style.display = 'block';
    return 4;
}