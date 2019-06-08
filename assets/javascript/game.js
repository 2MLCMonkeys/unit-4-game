

var userScore = 0;
$("#tallied").html(userScore);
var scoreWin = 0;
$("#wins").html(scoreWin);
var scoreLose = 0;
$("#lose").html(scoreLose);

var blueValue = myRandom(1, 12);
console.log(blueValue);
var whiteValue = myRandom(1, 12);
console.log(whiteValue);
var rainbowValue = myRandom(1, 12);
console.log(rainbowValue);
var purpleValue = myRandom(1, 12);
console.log(purpleValue);

function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var valueToFind = myRandom(19, 120);
$("#place-value").html(valueToFind);
console.log(valueToFind);


function reset() {

    valueToFind = myRandom(19, 120);
    $("#place-value").html(valueToFind);
    console.log(valueToFind);

    blueValue = myRandom(1, 12);
    console.log(blueValue);
    whiteValue = myRandom(1, 12);
    console.log(whiteValue);
    rainbowValue = myRandom(1, 12);
    console.log(rainbowValue);
    purpleValue = myRandom(1, 12);
    console.log(purpleValue);

    userScore = 0;
    $("#tallied").text(userScore);

};

function checkNumber(){

    valueToFind = parseInt(valueToFind);
    
    if (userScore == valueToFind) {
        scoreWin++;
        $("#wins").html(scoreWin);
        $("#text").text("Congrats! You Won!");
        reset();
    }
    if (userScore > valueToFind) {
        scoreLose++;
        $("#lose").html(scoreLose);
        $("#text").text("Might Need to Work on Your Math Skills....");
        reset();
    }
    };

var blue = $("#blue").on("click", function () {
    userScore = userScore + blueValue;
    console.log(userScore)
    $("#tallied").text(userScore);
    checkNumber();
});

var white = $("#white").on("click", function () {
    userScore = userScore + whiteValue;
    console.log(userScore)
    $("#tallied").text(userScore);
    checkNumber();
});

var rainbow = $("#rainbow").on("click", function () {
    userScore = userScore + rainbowValue;
    console.log(userScore)
    $("#tallied").text(userScore);
    checkNumber();
});

var purple = $("#purple").on("click", function () {
    userScore = userScore + purpleValue;
    console.log(userScore)
    $("#tallied").text(userScore);
    checkNumber();
});

