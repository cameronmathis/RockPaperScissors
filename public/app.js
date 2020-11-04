// cache the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// game functions
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function capitalizeWord(choice) {
    if (choice == "rock") return "Rock";
    if (choice == "paper") return "Paper";
    if (choice == "scissors") return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("greenGlow");
    setTimeout(() => userChoice_div.classList.remove("greenGlow"), 500);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${capitalizeWord(userChoice)} beats ${capitalizeWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("redGlow");
    setTimeout(() => userChoice_div.classList.remove("redGlow"), 500);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitalizeWord(computerChoice)} beats ${capitalizeWord(userChoice)}. You lose.`;
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("greyGlow");
    setTimeout(() => userChoice_div.classList.remove("greyGlow"), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    }
}

// listen for plays
function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    })

    paper_div.addEventListener('click', function () {
        game("paper");
    })

    scissors_div.addEventListener('click', function () {
        game("scissors");
    })
}

main();