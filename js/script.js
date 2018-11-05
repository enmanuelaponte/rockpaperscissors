// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var randomNumber= 0;
var computerChoice = '';
$("#shoot").click(function () {
    $("#userChoice").text($("#input").val());
    randomNumber = Math.floor(Math.random() * 3 );
    var userChoice = $("#input").val();
   

});
var winner = '';