function getComputerChoice() {
const hand = ["rock", "paper", "scissor"];
const random = Math.floor(Math.random() * 3);
return hand[random];
}

console.log(getComputerChoice())