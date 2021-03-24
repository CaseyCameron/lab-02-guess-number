export function compareNumbers(userGuess, correctNumber){
    if (userGuess > correctNumber) return 'Too high';
    if (userGuess < correctNumber) return 'Too low';
    return 'You win!';
}