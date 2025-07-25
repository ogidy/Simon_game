'use strict';

const userClickedPattern = [];
const gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
};

const randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

const sound = new Audio("./sounds/" + randomChosenColour + ".mp3");
sound.play();

$(".btn").on("click", function() {
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    
});