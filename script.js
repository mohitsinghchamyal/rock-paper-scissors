let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const computer_score = document.querySelector("#computer-score");

const computer_choice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random()*3);
  return options[random];
};

const drawGame = () => {
  msg.innerText = "Game Draw! play again";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    computerScore++;
    computer_score.innerText = computerScore;
    msg.innerText = `You Lost! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const computerChoice = computer_choice();

  if (userChoice === computerChoice) {
    drawGame(); 
  }
  else {
    if (userChoice == "rock" && computerChoice == "scissors")
    { userWin = true; }

    else if (userChoice == "paper" && computerChoice == "rock")
    { userWin = true; }

    else if (userChoice == "scissors" && computerChoice == "paper")
    { userWin = true; }
    
    else { userWin = false; }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});