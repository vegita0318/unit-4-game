var compRandNum = 18 + Math.floor(Math.random() *120);

$('#numGuess').text(compRandNum);
console.log(compRandNum);

var blue_Crystal = 1 + Math.floor(Math.random() *12); 
var red_Crystal = 1 + Math.floor(Math.random() * 12);
var purple_Crystal = 1 + Math.floor(Math.random() * 12);
var clear_Crystal = 1 + Math.floor(Math.random() * 12);

var scoreTracker = 0;
var wins = 0;
var losses = 0;

$('#yourScore').text(scoreTracker);
$('#wins').text(wins);
$('#losses').text(losses);

var reset = function() {
    scoreTracker = 0;
    compRandNum = 18 + Math.floor(Math.random() *120);
    blue_Crystal = 1 + Math.floor(Math.random() *12);
    red_Crystal = 1 + Math.floor(Math.random() * 12);
    purple_Crystal = 1 + Math.floor(Math.random() * 12);
    clear_Crystal = 1 + Math.floor(Math.random() * 12);
    $('#numGuess').text(compRandNum);
    $('#yourScore').text(scoreTracker);
    $('#wins').text(wins);
    $('losses').text(losses);
};

var gameplay = function () {
    if (scoreTracker == compRandNum) {
    wins++;
    $('#wins').text(wins);
    reset();
} else if (scoreTracker > compRandNum) {
    losses++;
    $('#losses').text(losses);
    reset();
}
};

$('#blue').on('click', function() {
    scoreTracker = scoreTracker + blue_Crystal;
    console.log(scoreTracker);
    $('#yourScore').text(scoreTracker);
    gameplay ();
});

$('#red').on('click', function() {
    scoreTracker = scoreTracker + red_Crystal;
    console.log(scoreTracker);
    $('#yourScore').text(scoreTracker);
    gameplay ();
});

$('#purple').on('click', function() {
    scoreTracker = scoreTracker + purple_Crystal;
    console.log(scoreTracker);
    $('#yourScore').text(scoreTracker);
    gameplay ();
});

$('#clear').on('click', function() {
    scoreTracker = scoreTracker + clear_Crystal;
    console.log(scoreTracker);
    $('#yourScore').text(scoreTracker);
    gameplay ();
});
