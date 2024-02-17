function getComputerChoice() {
    // 随机功能没做，电脑固定出 Rock
    return "Rock";
}

// 一局游戏根据玩家选择和电脑选择判断输赢
function playRound(playerSelection, computerSelection) {
    // 将玩家选择和电脑选择转为小写
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beat Paper"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beat Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    }
}

// 玩家和电脑的分数
let playerScore = 0;
let computerScore = 0;

// 玩多局游戏并计算分数
function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Input Rock, Scissors or Paper");
        console.log(playRound(playerChoice, getComputerChoice()));
        console.log(`Score: Player ${playerScore} : Computer ${computerScore}`);
    }
    console.log("Game over");
    if (playerScore > computerScore) {
        console.log("Player Win!")
    } else if (playerScore < computerScore) {
        console.log("Computer Win!")
    } else {
        console.log("Tie!")
    }
}