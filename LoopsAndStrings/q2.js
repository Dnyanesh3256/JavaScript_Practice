let gameNum = 18;

let userNum = prompt("Guess the number...");

while(userNum != gameNum){
    userNum = prompt("You guessed the wrong number. Please guess again!!");
}

console.log("Congratulations you guessed the right number!!");