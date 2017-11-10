$(document).ready(readyNow);

var randomNumber = Math.floor(Math.random() * 10 + 1);

function readyNow() {
    //header
    $
    $('.container').append('<h2>Guess a number between 1 and 10!</h2>');
    //input box
    $inputBox = $('<input type="text" id="numberGuess"/>');
    $('.container').append($inputBox);
    //button
    $('.container').append('<button id="submitButton">Submit</button>');
    //event listener
    $('#submitButton').on('click', compareNumbers);

}

function compareNumbers(numberGuess){
    var guessedNumber = $('#numberGuess').val();

    if (guessedNumber < randomNumber){
        $('.container').append('<p>HIGHER</p>');
        $('.container').css('background-color', 'orange');
    }
    else if (guessedNumber > randomNumber){
        $('.container').append('<p>LOWER</p>');
        $('.container').css('background-color', 'yellow');
    }
    else if (guessedNumber == randomNumber){
        $('.container').append('<p>CORRECT :)</p>');
        $('.container').css('background-color', '#57f900');
        $('#submitButton').replaceWith('<button id="newGame">New Game?</button>');
        $('#newGame').on('click', newGame);
    }
    else{
        $('.container').append('<p>Follow directions better, please!</p>')
        $('.container').css('background-color', '#ff93a7');
    }
}

function newGame(){
    $('.container').removeAttr('style');
    $('.container').empty();
    readyNow();
    randomNumber = Math.floor(Math.random() * 10 + 1);
}