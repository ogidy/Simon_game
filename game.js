
const gamePattern = [];
gamePattern.push(randomChosenColour);

const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
};

const randomChosenColour = buttonColours[nextSequence()];
