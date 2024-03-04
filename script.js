let pcPoints = 0;
let playerPoints = 0;
function getValueInt(){
  let a = Math.floor(Math.random() * 3);
  console.log(a);
  return a;
}


function getComputerChoice (){
  const random = getValueInt();
  if(random === 0){
    return "rock";
  } else if (random === 1){
    return "paper";
  } else {
    return "scissors"
  }
}
function getPlayerInput () {
  let a = String(prompt("What do you pick?"));
  if (a !== "" || a !== null || a !== undefined){
    a.toLowerCase();
  } else {
    return "";
  }
}
function playGame(computer, player){
  if(computer === player){
    printRound(null);
  } else if ((computer === "scissors" && player === "paper") ||
   (computer === "rock" && player === "scissors") ||
   (computer === "paper" && player === "rock") ){
    printRound(false, formatResult(computer), formatResult(player));
  } 
  else if ((computer === "rock" && player === "paper" ) ||
  (computer === "paper" && player === "scissors" ) ||
  (computer === "scissors" && player === "rock" )  ){
    printRound(true, formatResult(player), formatResult(computer));
  } else {
    console.log("Invalid user input")
  }
  if (pcPoints === 5 || playerPoints === 5) {
    announceWinner();
    pcPoints = 0;
    playerPoints = 0;
  }
}
function formatResult(stringInput) {
  let a = stringInput[0];
  return stringInput.replace(a, a.toUpperCase())
}
function printRound (outcome=null, winner, loser) {
  const responseDiv = document.getElementById('response');
  if (outcome === true) {
    responseDiv.textContent = `You win! ${winner} beats ${loser}`;
    playerPoints = playerPoints + 1;
  } else if (outcome === false) {
    responseDiv.textContent = `You lose! ${winner} beats ${loser}`;
    pcPoints = pcPoints + 1;
  } else {
    responseDiv.textContent = `It's a draw!`;
  }
}
function announceWinner() {
  const responseDiv = document.getElementById("response");
  if (pcPoints === 5) {
    alert(`Computer wins!`);
    responseDiv.textContent = `Computer wins!`;
  } else if (playerPoints === 5) {
    alert(`Player wins!`)
    responseDiv.textContent = `You win!`;
  }
}
let rock = document.getElementById("rock");
rock.addEventListener('click', () => {
  playGame(getComputerChoice(), "rock");
});

let paper = document.getElementById("paper");
paper.addEventListener('click', () => {
  playGame(getComputerChoice(), "paper");
});

let scissors = document.getElementById("scissors");
scissors.addEventListener('click', () => {
  playGame(getComputerChoice(), "scissors");
});




