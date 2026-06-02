function getComputerChoice() 
{
    let num = Math.random()
    if(num<=0.33)
            return "rock";
    else if(num<=0.66)
            return "paper";
    else return "scissor";
}

function getHumanChoice()
{
    return prompt("Choose one: Rock, Paper, Scissor: ");
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    h_CompChoice.textContent = computerChoice;
    if(humanChoice == computerChoice)
        return h_result.textContent = `Tie! You both chose ${humanChoice}`;
    
    let result;

    switch(humanChoice)
    {
        case "rock": 
            if(computerChoice == "scissor")
                 result = 1;
            else result = 2;
            break;
        case "paper":
            if(computerChoice == "rock")
                 result = 1;
            else result = 2;
            break;
        case "scissor": 
            if(computerChoice == "paper")
                 result = 1;
            else result = 2;
            break;
        default: return h_result.textContent = "Invalid input";
    }

    if(result == 1)
    {
        ++humanScore;
        h_playerScore.textContent = humanScore;
        return h_result.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
    }
    else if(result == 2)
    {
        ++computerScore;
        h_computerScore.textContent = computerScore;
        return h_result.textContent = `Computer Wins! ${computerChoice} beats ${humanChoice}.`;
    }

}

let humanScore = 0;
let computerScore = 0;

let buttons = document.getElementsByClassName("buttons")[0]; 
let scores = document.getElementsByClassName("scores")[0]

let h_CompChoice = document.getElementById("computer-choice")
let h_result = document.getElementById("result")
let h_playerScore = document.getElementsByClassName("player")[0];
let h_computerScore = document.getElementsByClassName("computer")[0];

h_playerScore.textContent = humanScore;
h_computerScore.textContent = computerScore;

function playGame()
{
    while(humanScore < 5 || computerScore < 5)
    {
        buttons.addEventListener("click", 
            (event) => playRound(event.target.id, getComputerChoice())
        )
    }
    if(humanScore >= 5) h_result.textContent = "You Win!"
    else if(computerScore >= 5) h_result.textContent = "You lose!"
}

playGame();
