function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const computerChoice = getComputerChoice();
console.log("Computer's choice:", computerChoice);