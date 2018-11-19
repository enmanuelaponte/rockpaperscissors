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
        computerChoice ="rock";
        $("#computerChoice").html(computerChoice);
    } 
    
        else if(randomNumber > 0.3) {
        computerChoice ="paper";
        $("#computerChoice").html(computerChoice);
    }
    
        else {
        computerChoice ="scissors";
        $("#computerChoice").html(computerChoice);

        }
    

});
  //  randomNumber = Math.floor(Math.random() * 3 );
