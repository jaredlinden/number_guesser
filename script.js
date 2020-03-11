let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// step 3
 const generateTarget = () => {
    return Math.floor(Math.random() * 10) 
 }

 // step 4
 const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
    const humanDifference = Math.abs(generateTarget - humanGuess)
    const computerDifference = Math.abs(generateTarget - computerGuess)
    return humanDifference <= computerDifference;
     }
 
 // step 5

 const updateScore = winner => {
     if (winner === 'human') {
        humanScore++;
     }  else if (winner === 'computer') {
             computerScore++;
     }
    }
 // step 6

 const advanceRound = () => currentRoundNumber++; 