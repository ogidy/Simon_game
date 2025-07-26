'use strict';

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;


$(document).on("keypress", function() {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
    }
});

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};


$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)

});

function playSound(name) {
    var sound = new Audio("./sounds/" + name + ".mp3");
sound.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
    userClickedPattern = [];
};

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over! Press Any Key to Restart");
        startOver();
}
};

