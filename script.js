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
  return prompt("What do you pick?").toLowerCase();
}
function calculateRound(computer, player){
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
}
function formatResult(stringInput) {
  let a = stringInput[0];
  return stringInput.replace(a, a.toUpperCase())
}
function printRound (outcome=null, winner, loser) {
  if(outcome === true){
    console.log(`You win!${winner} beats ${loser}`);
  } else if (outcome === false){
    console.log(`You lose!${winner} beats ${loser}`);
  } else {
    console.log(`It's a draw!`);
  } 
}
function playGame(){
    calculateRound(getComputerChoice(), getPlayerInput());
  }
playGame();
playGame();
playGame();
playGame();
playGame();