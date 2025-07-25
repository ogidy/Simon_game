'use strict';

const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
};

const randomChosenColour = buttonColours[nextSequence()];

const gamePattern = [];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

const sound = new Audio("./sounds/" + randomChosenColour + ".mp3");
sound.play();