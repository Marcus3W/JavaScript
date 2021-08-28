$(document).ready(function() {
    // THESE WILL RUN IN ORDER - Delay added into each where appropriate to ensure smooth and correctly timed transitions.
    /*
    It will run through a series of 5 self contained functions to produce the required result.
    I decided on a modular approach to make it more reusable if amendments needed to be made.
    */
    colourChange();
    moveToCentre();
    rotate45();
    clockwiseTurn();
    antiClockwiseTurn();
    fade();
});

// Function updates the border and main body colours of the shapes
function colourChange() {
    $('#squareLeft').animate({
        'backgroundColor': "red", 'borderColor': "red"
    }, 1000);
    $('#squareRight').animate({
        'backgroundColor': "red", 'borderColor': "red"
    }, 1000);
}

// function moves the two shapes to the centre
function moveToCentre() {
    $('#squareLeft').animate({
        'right': "50%", 'left': "50%", 'margin': "auto", 'backgroundColor': "red"
    }, 1000);
    $('#squareRight').animate({
        'right': "50%", 'left': "50%", 'margin': "auto", 'backgroundColor': "red"
    }, 1000);
}

// Function rotates one of the shapes (right) 45 degrees.
function rotate45(clockwiseTurn, antiClockwiseTurn) {
    $('#squareRight').animate({
            deg: 45
        }, {
            duration: 1000,
            step: function (now) {
                $('#squareRight').css({transform: 'rotate(' + now + 'deg)'});

            }
        }
    );
}

// Function rotates both shapes clockwise for 10 seconds (10000 duration)
function clockwiseTurn() {
    $('#squareLeft').delay(2000).animate({  // the 2000 delay is important to ensure an even spin
        deg: 1035  // number is 45degrees less due to 'rotate45' function.
    }, {
        duration: 10000,
        step: function (now) {
            $('.boxLeft').css({transform: 'rotate(' + now + 'deg)'});

        }
    });
    $('#squareRight').delay(1000).animate({  // the 1000 delay is important to ensure an even spin
        deg: 1080
    }, {
        duration: 10000,
        step: function (now) {
            $('.boxRight').css({transform: 'rotate(' + now + 'deg)'});
        }
    });
}

// Function rotates both shapes anti-clockwise for 10 seconds (10000 duration)
function antiClockwiseTurn() {
    $('#squareLeft').delay(1000).animate({  // different delay no longer required
        deg: -1080
    }, {
        duration: 10000,
        step: function (now) {
            $('.boxLeft').css({transform: 'rotate(' + now + 'deg)'});
        }
    });
    $('#squareRight').delay(1000).animate({
        deg: -1035
    }, {
        duration: 10000,
        step: function (now) {
            $('.boxRight').css({transform: 'rotate(' + now + 'deg)'});
        }
    });
}

// Function fades both shapes to white (therefore fading them out - I will note that if the background is amended i would update -
// the code so the background colour is amended to match the current 'background' of the page - therefore it will always fade to the 'nothing').
function fade() {
    $('#squareLeft').delay(1000).animate({
        'backgroundColor': "white", 'borderColor': "white"
    }, 1000);
    $('#squareRight').delay(1000).animate({
        'backgroundColor': "white", 'borderColor': "white"
    }, 1000);
}