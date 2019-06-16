//Global Variables
var team1Name = "nametest1";
var team2Name = "t2";
var team3Name = "test3";
var team4Name = "test4";
var team1Score = 0;
var team2Score = 0;
var team3Score = 0;
var team4Score = 0;
var turnCount = 0;

function teamTurn(){
    if (turnCount === 0){
        $("#team4").html(team4Name+ "<p>"+team4Score+"</p>");
        $("#team1").html("->"+ team1Name + "<p>"+team1Score+"</p>");
        turnCount++;
    }
    else if (turnCount === 1){
        $("#team1").html(team1Name + "<p>"+team1Score+"</p>");
        $("#team2").html("->"+ team2Name + "<p>"+team2Score+"</p>");
        turnCount++;
    }
    else if (turnCount === 2){
        $("#team2").html(team2Name+ "<p>"+team2Score+"</p>");
        $("#team3").html("->"+ team3Name + "<p>"+team3Score+"</p>");
        turnCount++;
    }
    else if (turnCount === 3){
        $("#team3").html(team3Name + "<p>"+team3Score+"</p>");
        $("#team4").html("->"+ team4Name + "<p>"+team4Score+"</p>");
        turnCount = 0;
    }
}
$(document).ready(function () {
    $("#cat1").on("click", function () {
       teamTurn(); 
    });
});
