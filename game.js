'use strict';

let started = false;
let level = 0;
let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    $("#level-title").text("Level " + level);
    level++;

    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;

};

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



$(".btn").on("click", function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

});

function playSound(name) {
    let sound = new Audio("./sounds/" + name + ".mp3");
sound.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).on("keypress", function() {
    if (!started) {
        started = true;
        nextSequence();
    }
});


// $("#level-title").text("Level 0");