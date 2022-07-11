// console.log('Hello World');
const options = ['rock','paper','scissors']

function game(){
    playRound()
}

function playerChoice(){//lets the player make a choice
    let input = prompt("Pick your choice of rock, paper, or sicssors")
    while (input == null){
      input = prompt("Pick your choice of rock, paper, or sicssors")
    }
    input = input.toLowerCase()
}

function computerChoice(){//randomchoice from the computer
     return options[Math.floor(Math.random()*options.length)]
     console.log(computerChoice)
}

function playRound(){
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
    const winner = whoWon(playerSelection,computerSelection)
    console.log(winner)
    // for (let i = 0; i < 5; i++){

    // }
}

function whoWon(playersPick,computersPick){
    if(playersPick === computersPick){//player choice is the same as the computer then its a tie
    return "It's a Tie!"
}
else if ( playersPick === 'rock' && computersPick == 'sicssors'){//player picks rock and the computer picks sicssors then the player wins that round
    return "Player"
}
else if ( playersPick === 'paper' && computersPick == 'rock'){//player picks paper and the computer picks rock then the player wins that round
    return "Player"
}
else if ( playersPick === 'sicssors' && computersPick == 'paper'){//player picks sicssors and the computer picks paper then the player wins that round
    return "Player"
} 
else
return "Computer"//anything other option would lead to the computer winning 
}







game()




//player chooses rock and computer chooses rock its a tie
//player chooses paper and computer chooses paper its a tie
//player chooses sicssor and computer chooses sicssor its a tie
//player chooses rock and computer chooses paper the computer wins
//player chooses paper and computer chooses sicssor the computer wins
//player chooses sicssor and computer chooses rock the computer wins
//player chooses rock and computer chooses sicssor the player wins
//player chooses paper and computer chooses rock the player wins
//player choose sicssor and the computer chooses paper the player wins
