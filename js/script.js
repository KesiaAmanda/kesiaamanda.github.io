let pages = [$("#hello"), $("#about-me")];
let buttons = [$("#hello-btn"), $("#about-me-btn")];

$(document).ready(function () {
    startTime();
    $('#startMenu').hide();
    $('#hello').addClass('index');
    $('#hello-btn').addClass('startClick');
    $('#about-me').addClass('hidden');

    function swapPage(page, button) {
        $(pages).map(function () {
            $(this.selector).removeClass('index');
        });
        $(page).addClass('index');
        $(buttons).map(function () {
            if (this.selector != button) {
                $(this).removeClass('startClick');
            }
        });
    }

    $('#btnStart').click(function () {
        $('#startMenu').slideToggle(100);
        $(this).addClass('startClick');
    });

    $('#desktop').click(function () {
        $('#startMenu').slideUp(100);
        $('#btnStart').removeClass('startClick').addClass('startRest');
    })

    $('#about-me-content').click(function () {
        swapPage('#about-me', '#about-me-btn');
        $('#about-me-btn').addClass('startClick');
    })

    $('#about-me-menu').click(function () {
        swapPage('#about-me', '#about-me-btn')
        $('#about-me').removeClass('hidden').addClass('index');
        $('#startMenu').slideUp(100);
        $('#btnStart').removeClass('startClick').addClass('startRest');
        $('#about-me-btn').addClass('startClick').slideDown(100);
    });

    $('#about-me-btn').click(function () {
        swapPage('#about-me', '#about-me-btn')
        if (this.classList.contains('startClick')) {
            $('#about-me').addClass('hidden').addClass('index');
            $(this).removeClass('startClick');
        } else if (!this.classList.contains('startClick')) {
            $('#about-me').removeClass('hidden');
            $(this).addClass('startClick');
        }
    });

    $('#about-me-min').click(function () {
        $('#about-me').addClass('hidden');
        $('#about-me-btn').removeClass('startClick');
    });

    $('#aboutMeIcon').dblclick(function () {
        swapPage('#about-me', '#about-me-btn')
        $('#about-me').removeClass('hidden').addClass('index');
        $('#about-me-btn').addClass('startClick').slideDown(100);
    });

    $('#about-me-cls').click(function () {
        $('#about-me').addClass('hidden');
        $('#about-me-btn').removeClass('startClick').slideUp(100);
    });

    $('#hello-content').click(function () {
        swapPage('#hello', '#hello-btn');
        $('#hello-btn').addClass('startClick');
    })

    $('#hello-menu').click(function () {
        swapPage('#hello', '#hello-btn')
        $('#hello').removeClass('hidden').addClass('index');
        $('#startMenu').slideUp(100);
        $('#btnStart').removeClass('startClick');
        $('#hello-btn').addClass('startClick').slideDown(100);
    });

    $('#hello-btn').click(function () {
        swapPage('#hello', '#hello-btn')
        if (this.classList.contains('startClick')) {
            $('#hello').addClass('hidden');
            $(this).removeClass('startClick');
        } else {
            $('#hello').removeClass('hidden').addClass('index');
            $(this).addClass('startClick');
        }
    });

    $('#hello-min').click(function () {
        $('#hello').addClass('hidden');
        $('#hello-btn').removeClass('startClick');
    });

    $('#hello-icon').dblclick(function () {
        swapPage('#hello', '#hello-btn')
        $('#hello-btn').addClass('startClick').slideDown(100);
        $('#hello').removeClass('hidden').addClass('index');
    });

    $('#hello-cls').click(function () {
        $('#hello').addClass('hidden');
        $('#hello-btn').removeClass('startClick').slideUp(100);
    });

});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    $('#clock').html(checkTime(h) + ":" + checkTime(m));
    t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var elements = document.getElementsByClassName('header');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mousedown', filter, false);
    // elements[i].addEventListener('mouseup', filter, false);
}

function filter(e) {
    let target = e.target.parentNode.parentNode;

    if (!target.classList.contains("index")) {
        return;
    }

    $(pages).map(function () {
        if (this.selector != "#" + target.id) {
            $(this).removeClass('index');
        }
    });

    target.classList.add('index');

    target.moving = true;

    if (e.clientX) {
        target.oldX = e.clientX;
        target.oldY = e.clientY;
    } else {
        target.oldX = e.touches[0].clientX;
        target.oldY = e.touches[0].clientY;
    }

    target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
    target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;

    document.onmousemove = dr;
    document.ontouchmove = dr;

    function dr(event) {
        event.preventDefault();

        if (!target.moving) {
            return;
        }

        if (event.clientX) {
            target.distX = event.clientX - target.oldX;
            target.distY = event.clientY - target.oldY;
        } else {
            target.distX = event.touches[0].clientX - target.oldX;
            target.distY = event.touches[0].clientY - target.oldY;
        }

        target.style.left = target.oldLeft + target.distX + "px";
        target.style.top = target.oldTop + target.distY + "px";
    }

    function endDrag() {
        target.moving = false;
    }
    target.onmouseup = endDrag;
    target.ontouchend = endDrag;
}