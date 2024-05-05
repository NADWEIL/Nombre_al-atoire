import { prompt } from "./prompt.js";

/**
 * générer un nombre aléatoire entre 0 et 100
 * tester si le nombre ets valide, dan sce cas, afficher une erreur
 * vérifier si la valeur est trop grande ou trop petite
 */



const getRandomIntInclusive = (min, max)=>  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isValidNumber = (number) => {
  return !Number.isNaN(Number(number)) && number >= 0 && number <= 100;
}

const game = () => {
  const targetNumber = getRandomIntInclusive(0, 100);
  let attemptCount = 0;
  console.log({targetNumber})
  
  const playGuessingGame = () => {
    const userGuess = Number(prompt("Enter a number between 0 and 100: "));
    attemptCount += 1;

  if (!isValidNumber(userGuess)) {
    console.log("🛑 The entered number is invalid. It must be between 0 and 100.\n\n");
   return playGuessingGame();
  }

  if (userGuess > targetNumber) {
    console.log("📈 The entered number is too high.\n\n");
    return playGuessingGame();
  }

  if (userGuess < targetNumber) {
    console.log("📉 The entered number is too low.\n\n");
    return playGuessingGame();
  }

  // If this point is reached, the user has correctly guessed the number
  console.log(`🟢 Well done! The random number was indeed ${userGuess}.`);
  console.log(`✨ You succeeded in ${attemptCount} attempts.`);
  };

  const restartGame = () => {
    const answer = prompt("Do you want to play again? (y/n): ");
    if (answer.toUpperCase() === "Y") {
      console.log("\n\n");
      game();
    }else if(answer.toUpperCase() === "N") {
      console.log("Thank you for playing! Goodbye.");
    }else{
      console.log("Invalid choice. Please enter Y or N.");
      restartGame();
    }
  };

  playGuessingGame();

  restartGame();
 
};


console.log(`
Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀`);
game();