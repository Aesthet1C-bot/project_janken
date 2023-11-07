function getComputerChoice() {
const hand = ["rock", "paper", "scissor"];
const random = Math.floor(Math.random() * 3);
return hand[random];
}

const playerSelection = prompt("write your plating hand", "type it here").toLowerCase();
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "paper":
                return "you lose! rock beaten by paper";
                break;
            case "scissor":
                return "you win! rock beat scissor";
                break;
            case "rock":
                return "draw! both player pick rock"
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "scissor":
                return "you lose! paper beaten by scissor";
                break;
            case "rock":
                return "you win! paper beat rock";
                break;
            case "paper":
                return "draw! both player pick paper"
                break;
        }
    } else if (playerSelection == "scissor") {
        switch (computerSelection) {
            case "rock":
                return "you lose! scissor beaten by scissor";
                break;
            case "paper":
                return "you win! scissor beat paper";
                break;
            case "scissor":
                return "draw! both player pick scissor";
                break;
        }
    } else {
        return "please pick your playing hand"
    }
}

function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}

console.log("player pick" + " " + playerSelection);
console.log("computer pick" + " " + computerSelection);
game()