## Design Interface
1) Create header
2) Within Main create container
3) grid - 3 columns, 2 rows

## Setup DOM
1) Row 1 Column 1 Input # field
2) Row 2 Column 2 Submit Button
3) Row 1 Column 2 Instructions span 2 columns
4) Row 2 Column 2 Div number status (high, low, match)
4) Row 2 Column 3 Div guesses left; Div score

## Logic
1) Have Math.random() generate a random number from 1-100
2) Track global State of Wins and Losses in showScore function
    - How? let score = { wins: 0, losses: 0}; An object where wins and losses are tracked. Display in Div score. 
    - Why? To keep a record of their win/losses
3) Create a trackGuess function
    -What? Tracks the number of guesses remaining, displays to user. When guesses = 0, display to user in Div guesses-left. 
    Stop game. Show score by running the score function
    -How? Make a let that starts at 4. Each time the user makes a guess reduce it by 1. Display this in Div guesses left. 
    -Why? To put a limit on the number of guesses 
4) Create compareNumbers function that tells user whether guess is high, low, or match. 
    -How? If guess > number return 'high'. If guess < number return 'low'. return 'match'. alert user when fail or win.
    Accepts userGuess and correctNumber
    -Why? To detmine whether the guess is right or wrong, and to end game if it's right.

## TDD
1) test win loss function