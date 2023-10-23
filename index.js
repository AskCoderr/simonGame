// setting nav margin
$('.nav').css('margin-top', '-' + $('body').css('margin-top'));
$('.nav').css('margin-left', '-' + $('body').css('margin-left'));
$('.nav').css('margin-right', '-' + $('body').css('margin-right'));

// main program
var pos = 0;
var len = 0;
var temp = null;
var arr = [];
var tempArr = ['a', 'b', 'c', 'd'];

function onKey() {
    $('.level').text('Level 1');
    $(document).off('keydown', onKey);
    assign();
    random();
}
function random() {
    pos = 0;
    var rand = Math.floor(Math.random() * 4);
    arr.push(rand);
    $('.' + tempArr[rand]).fadeOut('fast').fadeIn('fast')
    var sound = new Audio('sounds/' + rand + '.mp3');
    sound.play();
    len++;
    $('.level').text('Level ' + len);
}

function check() {
    if (arr[pos] === temp) {
        var sound = new Audio('sounds/' + temp + '.mp3');
        sound.play();
        pos++;
        if (pos === len) {
            setTimeout(random, 750);
        }
    }
    else {
        $('.level').text('Your score is ' + (len - 1) + ', click any key to continue');
        var sound = new Audio('sounds/wrong.mp3');
        sound.play();
        arr = [];
        pos = 0;
        len = 0;
        $(document).on('keydown', onKey);
        $('.clickables').off('click');
    }
}

function assign() {
    for (var i = 0; i < 4; i++) {
        assigning(i);
    }

    function assigning(index) {
        $('.' + tempArr[index]).click(function () {
            temp = index;
            $('.' + tempArr[index]).fadeOut('fast').fadeIn('fast');
            check();
        });
    }
}

$(document).on('keydown', onKey);
