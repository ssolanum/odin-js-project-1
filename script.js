


//a function that takes two parameters, the computer choice and the player choice, compares them and declares the winner or a tie. 
//if the choices are equal, it returns the tie. after that we compare the other choices
//if playerChoice rock && computerChoice 'scissors' OR 
//playerChoice paper && computerChoice rock OR 
//playerChoice 'scissors' && computerChoice paper PLAYER WINS
//if none of those conditions return true, PLAYER LOSES


//a function called playGame that plays a five round game and keeps score and reports a winner or loser at the end. 
//the function will be called 5 times so it plays five rounds, depending on the winner of each round, a variable for each the computer and the user set at 1, will go up by 1 using the ++ operation. 
//the score then has to go trough a conditional that states if user score === computer score then return tie, if user score > computer score return user win, else computer win 
function getPlayerChoice() {
    let playerChoice = prompt('Write your choice')
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function getComputerChoice() {
    //generates a random number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    
        if (computerChoice === 0) {
            return "rock"
        } 
        if (computerChoice === 1) {
            return "paper"
        }
        if (computerChoice === 2) {
            return "scissors"
        }
} 


let userScore = 0;
let computerScore = 0;

function playGame(userScore, computerScore) {

    function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    
        if (playerSelection === computerSelection) {
            alert("Tie!");
        } 
        else if (
                (playerSelection === 'rock' && computerSelection === 'scissors') || 
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')
                ) {
                    ++userScore;
                    alert("Player wins!");
                }
        else {
            ++computerScore;
            alert("Computer wins!");
        }
    }

    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());

    if (userScore === computerScore) {
        alert('Tie!'); 
    }
    else if(userScore > computerScore) {
        alert('Player wins!') 
    }
    else {
        alert('Computer wins!') 
    }
    
}

playGame(userScore, computerScore)