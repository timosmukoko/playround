function play(){
    var player1Choice = prompt("Player 1 - Please choose: Rock, Paper or Scissors");
    var player2Choice = prompt("Player 2 - Please choose: Rock, Paper or Scissors");

    player1Choice = player1Choice.toLocaleLowerCase();
    player2Choice = player2Choice.toLocaleLowerCase();


    if((player1Choice === "rock" && player2Choice === "scissors") || 
      (player1Choice === "scissors" && player2Choice === "paper") ||
      (player1Choice === "paper" && player2Choice === "rock")){
        alert("Player 1 Wins");
        document.getElementById("display").innerHTML = " PLAYER 1";
      }else if ((player2Choice === "rock" && player1Choice === "scissors") || 
      (player2Choice === "scissors" && player1Choice === "paper") ||
      (player2Choice === "paper" && player1Choice === "rock")){
        alert("Player 2 wins")
        document.getElementById("display").innerHTML = " PLAYER 2";
      }
      else if(player1Choice === player2Choice){
        alert("it's a Tie");
      }else{
        alert("Oops!!! one or two words misspelling: You should type ( Rock, Paper or Scissors )");
      }
      document.getElementById("button");
}