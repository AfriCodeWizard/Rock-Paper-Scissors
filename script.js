let humanScore = 0
let comupterScore = 0

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Choose your weapon: rock, paper, or scissors");
    return choice.toLowerCase();
}
console.log(getHumanChoice());

function playRound(computorChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computorChoice) {
        console.log("We have a tie!")        
    } else if (
        (humanChoice === "rock" && computorChoice === "scissors") ||
        (humanChoice === "scissors") && computorChoice === "paper" ||
        (humanChoice === "paper" && computorChoice === "rock")        
    ) {
        console.log( `You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`)
        comupterScore += 1;    
    }    
}