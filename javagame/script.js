// console.log('Hello World');


//create a game function that will help with starting the game as well with making a button so that the game can also be triggered through that

//create a fuction that will have the amount of match(5)

// a prompt that will allow the player to type what they want to pick

//also a function that will be able to randomize the choices that the computer will pick

//player chooses rock and computer chooses rock its a tie
//player chooses paper and computer chooses paper its a tie
//player chooses sicssor and computer chooses sicssor its a tie

//don't have to type out all of the 'computer wins' once the players wins section is compeleted because if either of the players choice are met with the condition then it will stop but if it doesn't then that either means that there is a tie or that the computer has one

//player chooses rock and computer chooses sicssor the player wins
//player chooses paper and computer chooses rock the player wins
//player choose sicssor and the computer chooses paper the player wins
//player chooses rock and computer chooses paper the computer wins
//player chooses paper and computer chooses sicssor the computer wins
//player chooses sicssor and computer chooses rock the computer wins

//figure out a way to that who won and how many rounds there are

const options = ['rock','paper','scissors']
let winners = []

function game(){
    for (let i = 0; i < 5; i++){//set 5 rounds
    playRound(i)
    }
    document.querySelector('button').textContent = 'play new game'
    
}

 
function playerChoice() {
  let input = prompt("What will you pick? Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("What will you pick? Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  return input;
}


function validateInput(options) {
  return options.includes(options);
}

function computerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(round){
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
    const winner = whoWon(playerSelection,computerSelection)
    winners.push(winner)
    logRounds(round, winner)
}

function whoWon(playersPick,computersPick){
  if (playersPick === computersPick) {
    return 'Tie'
  }
  else if (playersPick === 'rock' && computersPick== 'sicssors'){
    return 'Player wins'
  }
  else if (playersPick === 'paper' && computersPick == 'rock'){
    return 'Player wins'
  }
  else if (playersPick === 'sicssors' && computersPick == 'paper'){
    return 'Player'
  }
  else{
    return 'Computer'
  }
}

    function logRounds(round, winner){
        console.log("Round:", round) 
       console.log(winner, "won this match!")
    }

//game()
