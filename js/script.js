// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var randomNumber= 0;
var computerChoice = '';
var winner = '';
var userChoice = "";
$("#shoot").click(function () {
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber = Math.random();
    if(randomNumber > 0.6) {
        computerChoice ="Rock";
        $("#computerChoice").html(computerChoice);
    } 
    
    else if(randomNumber > 0.3) {
        computerChoice ="Paper";
        $("#computerChoice").html(computerChoice);
    }
    
    else {
        computerChoice ="Scissors";
        $("#computerChoice").html(computerChoice);
     }
    computerChoice = computerChoice.toLowerCase();
    userChoice = userChoice.toLowerCase();
    if(userChoice === computerChoice){
        $("#result").html("Draw")
    }
    
    else if(userChoice ==="scissors" && computerChoice==="paper"){
        $("#result").html("User Wins")
    }
    else if(userChoice === "scissors" && computerChoice==="rock"){
        $("#result").html("Computer Wins")
    }
    else if(userChoice ==="paper" && computerChoice==="rock"){
        $("#result").html("User Wins")
    } 
     else if(userChoice ==="paper" && computerChoice==="scissors"){
        $("#result").html("Computer Wins")
    }
     else if(userChoice ==="rock" && computerChoice==="scissors"){
        $("#result").html("User Wins")
    }
     else if(userChoice ==="rock"  && computerChoice==="paper"){
        $("#result").html("Computer Wins")
    }
    else{
        $("#result").html("Invalid")
    }
});

