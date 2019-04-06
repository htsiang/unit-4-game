$(document).ready( function() {

var goalScore = 0; // score that player is trying to match
var playerScore = 0; // player's score that increments each time a rupee is clicked
var winCount = 0; // track the # of wins
var lossCount = 0; // track the # of losses

newGame();

$(".rupee-div").click(function () {
    console.log($(this).attr("value"));

    // increment playerScore by the rupee value chosen
    playerScore += parseInt($(this).attr("value"));
    $("#your-score").text(playerScore);
    console.log("player's score: " + playerScore);

    if (goalScore===playerScore) {
        winCount++;
        console.log("wins: " + winCount);
        $("#wins").text(winCount);

        alert("You won!");
        
        newGame();
    }
    else if (playerScore>goalScore) {
        lossCount++;
        console.log("losses: " + lossCount);
        $("#losses").text(lossCount);
        
        alert("You lost...");
        
        newGame();
    };
    
});


function newGame() {
    console.log("New Game");
    // reset goal score & player's score
    goalScore = Math.floor(Math.random()*101)+19
    console.log("goalScore: " + goalScore);
    playerScore = 0;
    console.log("player's score: " + playerScore);

    // assign random number between 1-12 to each rupee
    $("#rupee1").attr("value", Math.floor(Math.random()*12)+1);
    $("#rupee2").attr("value", Math.floor(Math.random()*12)+1);
    $("#rupee3").attr("value", Math.floor(Math.random()*12)+1);
    $("#rupee4").attr("value", Math.floor(Math.random()*12)+1);

    console.log("rupee1: " + $("#rupee1").attr("value"));
    console.log("rupee2: " + $("#rupee2").attr("value"));
    console.log("rupee3: " + $("#rupee3").attr("value"));
    console.log("rupee4: " + $("#rupee4").attr("value"));

    // show goalScore on html page
    $("#goal-num").text(goalScore);
    
    // reset player score to zero on html page
    $("#your-score").text("0");
}

});

