const rockIcon = '\u{1FAA8}';
const paperIcon = '\u{1F4F0}';
const scisrrosIcon = '\u{2700}';
const closeIcon = '\u{2A32}';
const winnerIcon = `\u{1F3C6}`;
const drawSong = `https://audio.jukehost.co.uk/pqzsVESiIzNoU8v0kEifHs0efT6hVl4Z`;
const loseSong = `https://audio.jukehost.co.uk/rzo8n8bBQ76i967Lu6Ik3B4eVbijX4w9`;
const winSong = `https://audio.jukehost.co.uk/OlHZe356fE3CbKBwB2BQc8Hik3KMb63P`;
const gameChoices = ["rock","paper","scissors"];
const redStyle = "color: red; font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;";
const greenStyle = "color: green; font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;";
const pinkStyle = "color:pink; font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;";
const consoleStyle = "font-family:sans-serif;font-size:1em;font-weight:bolder;text-shadow:#000 1px 1px;";
let userWins = 0; computerWins = 0; draws = 0; userInput = ''; result = '';
const gameOptions=['#rock','#paper','#scissors'];
const options = document.querySelectorAll(gameOptions);
function greetings()
{
    alert("Rock paper scissors is a hand game originating from china.\nYou will face the machine for 5 Rounds\n Be Strong !Winning is only half of it. Having fun is the other half.  ");
}
function computerPlay()
{
    return randomItem = gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection) 
    {
        console.log("%c Draw !", "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
        return "draw";
    }
    else 
    {
        if (computerSelection == "rock") 
        {
            if (playerSelection == "rock") 
            {
                console.log("%c Draw !", "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "draw";
            }
            if (playerSelection == "paper") 
            {
                console.log(`%c ${paperIcon} beats ${rockIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "win";
            }
            if (playerSelection == "scissors") 
            {
                console.log(`%c ${rockIcon} beats ${scisrrosIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "lose";
            }
        }
        if (computerSelection == "paper") 
        {
            if (playerSelection == "rock") 
            {
                console.log(`%c ${paperIcon} beats ${rockIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "lose";
            }
            if (playerSelection == "paper")
             {
                console.log("%c", "font-family:sans-serif;font-size:1em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "draw";
            }
            if (playerSelection == "scissors")
             {
                console.log(`%c  ${scisrrosIcon} beats ${paperIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "win";
            }
        }
        if (computerSelection == "scissors") 
        {
            if (playerSelection == "rock") 
            {
                console.log(`%c ${rockIcon} beats ${scisrrosIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "win";
            }
            if (playerSelection == "paper")
             {
                console.log(`%c  ${scisrrosIcon} beats ${paperIcon}`, "font-family:sans-serif;font-size:2em;font-weight:bolder;text-shadow:#000 1px 1px;");
                return "lose";
            }
            if (playerSelection == "scissors")
             {
                console.log("%c", consoleStyle);
                return "draw";
            }
        }
    }
}
function displayRoundResult(result)
{
    if (result == 'win') {
        userWins++;
        console.log(`Round  %c : Win`, greenStyle);
    }
    if (result == "lose") {
        computerWins++;
        console.log(`Round  %c : Lose`, redStyle);
    }
    if (result == "draw") {
        draws++;
        console.log(`Round  %c : Draw`, pinkStyle);
    }
}

function userChoose()
{
  options.forEach((option) =>
 {
         option.addEventListener("click", function () {
          let playerSelection = option.id;
          let computerSelection = computerPlay();
          let result = playRound(playerSelection, computerSelection);
          displayRoundResult(result);
          updateImages(playerSelection, computerSelection);
          updateScore();
          if(checkWinner())
          {
              userWins = computerWins= draws=0;
              updateScore();
          }
        });
});
}
function updateImages(playerInput, computerInput)
 {
    document.getElementById("playerImage").src = `./images/${playerInput}.png`;
    document.getElementById("computerImage").src = `./images/${computerInput}.png`;
}
function updateScore() 
{
    document.getElementById("playScore").textContent = userWins;
    document.getElementById("computerScore").textContent = computerWins;
}
function checkWinner() 
 {
  const winner='';
  if(userWins==5)
  {
    var winAudio = new Audio(winSong);
    winAudio.play();
    alert("You win the game! Congratulations!")
  }
  if(computerWins==5)
  {
    var loseAudio = new Audio(loseSong);
    loseAudio.play();
    alert("Computer wins the game! Try again next time!")
  }
}
function game()
{
  userChoose();
}
game();