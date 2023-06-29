$(document).ready(function () {
    startTime();
    $('#startMenu').hide();
    $('#btnStart').click(function () {
        $('#startMenu').toggle();
        $(this).toggleClass('startClick');
    });

    $('#desktop').click(function () {
        $('#startMenu').hide();
        $('#btnStart').removeClass('startClick').addClass('startRest');
    })


    $('.desktopIcon').dblclick(function () {
        alert("Empty");
    });

});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var hd = h;
    $('#clock').html((hd = 0 ? "12" : hd) + ":" + m);
    t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}