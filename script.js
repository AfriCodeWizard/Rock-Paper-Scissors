function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

    let humanScore = 0;
    let computerScore = 0; 
    const resultEl = document.getElementById("roundResult");
    const scoreEl = document.getElementById("score");
    const buttons = document.querySelectorAll("button");



    function endGame(winner) {
        resultEl.textContent = winner === 'human' 
            ? "🏆 You won the game! Congratulations!" 
            : "💀 You lost the game! Better luck next time.";

        buttons.forEach(button => button.disabled = true);
    }

    function playRound(humanChoice, computerChoice) { 
        humanChoice = humanChoice.toLowerCase();
  
        if (humanChoice === computerChoice) {
            resultEl.textContent = "🤝We have a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            resultEl.textContent = `🎉You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else {
            resultEl.textContent = `😞You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1; 
        }
        scoreEl.textContent = `Score → Human: ${humanScore} | Computer: ${computerScore}`;

        if (humanScore === 5) {
            endGame('human');
        } else if (computerScore === 5) {
            endGame('computer');
        }
    
    }



function playGame() {

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice()); 
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
}

playGame()