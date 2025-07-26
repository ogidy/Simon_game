'use strict';

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;


$(document).on("keypress", function() {
    if (!gameStarted) {
        $("level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
};

var randomChosenColour = buttonColours[nextSequence()];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

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


// $("#level-title").text("Level 0");


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000);
        userClickedPattern = [];
        }
    } else {
        console.log("wrong");
        // playSound("wrong");
        // $("body").addClass("game-over");
        // setTimeout(function() {
        //     $("body").removeClass("game-over");
        // }, 200);
        // $("#level-title").text("Game Over, Press Any Key to Restart");
        // startOver();
    }
}

$(".btn").on("click", checkAnswer(userClickedPattern.length - 1));


