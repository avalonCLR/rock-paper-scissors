var userChoice;
var cpuChoice;

function startGame(){

function getUserRandom() {
    userChoice = prompt("Choose between: Rock, Paper, Scissors"); 
    console.log("User choice: "+ userChoice);
    return userChoice;
} 

getUserRandom();

function getCpuRandom(){
        
     cpuChoice = Math.random();
    
        if(cpuChoice <= 0.33){
            cpuChoice= "Rock";
        } else if(cpuChoice <= 0.66){
            cpuChoice="Paper";
        } else{
            cpuChoice="Scissors";
        }
   console.log("CPU choice: "+ cpuChoice);
   return cpuChoice;
}

getCpuRandom();

function compare(){

var u=userChoice;
var c=cpuChoice;

//console.log(u);
//console.log(c);

if(u==c){
    window.alert("IT'S A DRAW!");
}

if((u==="Rock" && c==="Scissors")||(c==="Rock" && u==="Scissors")){
      if(u==="Rock"){
        window.alert("YOU WIN");
      }else{
        window.alert("YOU LOSE");
      }
    }
if((u==="Paper" && c==="Rock")||(c==="Paper" && u==="Rock")){
        if(u==="Paper"){
            window.alert("YOU WIN");
        }else{
            window.alert("YOU LOSE");
        }
      }
if((u==="Scissors" && c==="Paper")||(c==="Scissors" && u==="Paper")){
        if(u==="Scissors"){
            window.alert("YOU WIN");
        }else{
            window.alert("YOU LOSE");
        }
      }
}

compare();

}

startGame();

function playAgain() {
    let isContinuable = prompt("Play again?", "YES [Y] / NO [N]");    
    if (isContinuable.toUpperCase() === "Y") {
        startGame();
        //compChoices();
    } if (isContinuable.toUpperCase() === "N") {
        console.log("OK! Byeeee ~!")
    } else {
        playAgain();
    }    
}

playAgain(); 
