function getComputerChoice() 
{
    let num = Math.random()
    if(num<=0.33)
            return "rock";
    else if(num<=0.66)
            return "paper";
    else return "scissors";
}

function getHumanChoice()
{
    return prompt("Choose one: Rock, Paper, Scissors: ");
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice + " " + computerChoice)
    if(humanChoice == computerChoice)
        return console.log(`Tie! You both chose ${humanChoice}`);
    
    let result;

    switch(humanChoice)
    {
        case "rock": 
            if(computerChoice == "scissors")
                 result = 1;
            else result = 2;
            break;
        case "paper":
            if(computerChoice == "rock")
                 result = 1;
            else result = 2;
            break;
        case "scissors": 
            if(computerChoice == "paper")
                 result = 1;
            else result = 2;
            break;
        default: return console.log("Invalid input")
    }

    if(result == 1)
    {
        ++humanScore;
        return console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
    }
    else if(result == 2)
    {
        ++computerScore;
        return console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}.`)
    }

}


let humanScore = 0;
let computerScore = 0;

function playGame()
{
    for( let i = 0; i < 5; ++i)
        playRound(getHumanChoice(), getComputerChoice());
}

playGame();
console.log(`Human: ${humanScore}\nComputer: ${computerScore}`)