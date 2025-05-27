let humanScore = 0;
let computerScore = 0; // ✅ Fix typo: from `comupterScore` to `computerScore`

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

function playRound(computerChoice, humanChoice) { // ✅ Fix typo: `computorChoice` to `computerChoice`
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("We have a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1; // ✅ Fix typo: from `comupterScore` to `computerScore`
    }
}
