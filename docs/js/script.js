let pages = [$("#hello"), $("#about-me"), $("#music-player")];
let buttons = [$("#start-btn"), $("#hello-btn"), $("#about-me-btn"), $("#music-player-me-btn")];

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var elements = document.getElementsByClassName('header');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mousedown', filter, false);
    elements[i].addEventListener('touchstart', filterCellPhone, false);
}

$(document).ready(function () {
    initText();
    startTime();
    moveCat();
    $('#hello-btn').addClass('startClick');
    $('#music-player-btn').slideUp(100);

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
        $('#start-menu').addClass('hidden');
    }

    function swapButtons(button) {
        $(buttons).map(function () {
            if (this.selector != button) {
                $(this).removeClass('startClick');
            }
        });
    }

    $('#start-btn').click(function () {
        swapButtons('#start-btn');
        $('#start-menu').toggleClass("hidden");
        $(this).toggleClass('startClick');
    });

    $('#desktop').click(function (e) {
        if (e.target.id == 'desktop') {
            swapButtons();
        }
        $('#start-menu').addClass('hidden');
        $('#start-btn').removeClass('startClick').addClass('startRest');
    });

    $('#about-me-content').click(function (e) {
        swapPage('#about-me', '#about-me-btn');

        if (e.target.id == 'about-me-min') {
            $('#about-me').addClass('hideContent');
            $('#about-me-btn').removeClass('startClick');
        } else if (e.target.id == 'about-me-max') {
            $(this).toggleClass('maximize');
        } else {
            $('#about-me-btn').addClass('startClick');
        }
    })

    $('#about-me-menu-icon').click(function () {
        swapPage('#about-me', '#about-me-btn')
        $('#about-me').removeClass('hideContent').addClass('index');
        $('#start-menu').addClass('hidden');
        $('#start-btn').removeClass('startClick').addClass('startRest');
        $('#about-me-btn').addClass('startClick').slideDown(100);
    });

    $('#about-me-btn').click(function () {
        swapPage('#about-me', '#about-me-btn')
        if (this.classList.contains('startClick')) {
            $('#about-me').addClass('hideContent').addClass('index');
            $(this).removeClass('startClick');
        } else if (!this.classList.contains('startClick')) {
            $('#about-me').removeClass('hideContent');
            $(this).addClass('startClick');
        }
    });

    $('#aboutMeIcon').dblclick(function () {
        swapPage('#about-me', '#about-me-btn')
        $('#about-me').removeClass('hideContent').addClass('index');
        $('#about-me-btn').addClass('startClick').slideDown(100);
    });

    $('#about-me-cls').click(function () {
        $('#about-me').addClass('hideContent');
        $('#about-me-btn').removeClass('startClick').slideUp(100);
    });

    $('#hello-content').click(function (e) {
        swapPage('#hello', '#hello-btn');

        if (e.target.id == 'hello-min') {
            $('#hello').addClass('hideContent');
            $('#hello-btn').removeClass('startClick');
        } else if (e.target.id == 'hello-max') {
            $(this).toggleClass('maximize');
            $('#hello-btn').addClass('startClick');
        } else {
            $('#hello-btn').addClass('startClick');
        }
    })

    $('#hello-menu-icon').click(function () {
        swapPage('#hello', '#hello-btn')
        $('#hello').removeClass('hideContent').addClass('index');
        $('#start-menu').addClass('hidden');
        $('#start-btn').removeClass('startClick');
        $('#hello-btn').addClass('startClick').slideDown(100);
    });

    $('#hello-btn').click(function () {
        swapPage('#hello', '#hello-btn');
        if (this.classList.contains('startClick')) {
            $('#hello').addClass('hideContent');
            $(this).removeClass('startClick');
        } else {
            $('#hello').removeClass('hideContent').addClass('index');
            $(this).addClass('startClick');
        }
    });

    $('#hello-icon').dblclick(function () {
        swapPage('#hello', '#hello-btn')
        $('#hello-btn').addClass('startClick').slideDown(100);
        $('#hello').removeClass('hideContent').addClass('index');
    });

    $('#hello-cls').click(function () {
        $('#hello').addClass('hideContent');
        $('#hello-btn').removeClass('startClick').slideUp(100);
    });

    // 

    $('#music-player-content').click(function (e) {
        swapPage('#music-player', '#music-player-btn');

        if (e.target.id == 'music-player-min') {
            $('#music-player').addClass('hideContent');
            $('#music-player-btn').removeClass('startClick');
        } else if (e.target.id == 'music-player-max') {
            $(this).toggleClass('maximize');
            $('#music-player-btn').addClass('startClick');
        } else {
            $('#music-player-btn').addClass('startClick');
        }
    })

    $('#music-player-menu-icon').click(function () {
        swapPage('#music-player', '#music-player-btn')
        $('#music-player').removeClass('hideContent').addClass('index');
        $('#start-menu').addClass('hidden');
        $('#start-btn').removeClass('startClick');
        $('#music-player-btn').addClass('startClick').slideDown(100);
    });

    $('#music-player-btn').click(function () {
        swapPage('#music-player', '#music-player-btn');
        if (this.classList.contains('startClick')) {
            $('#music-player').addClass('hideContent');
            $(this).removeClass('startClick');
        } else {
            $('#music-player').removeClass('hideContent').addClass('index');
            $(this).addClass('startClick');
        }
    });

    $('#music-player-icon').dblclick(function () {
        swapPage('#music-player', '#music-player-btn')
        $('#music-player-btn').addClass('startClick').slideDown(100);
        $('#music-player').removeClass('hideContent').addClass('index');
    });

    $('#music-player-cls').click(function () {
        $('#music-player').addClass('hideContent');
        $('#music-player-btn').removeClass('startClick').slideUp(100);
    });

});

function initText() {
    var spr1 = " _______         __                   _______  __           <br>|     __|.-----.|  |--..----..-----. |   |   ||__|.--------.<br>|__     ||  _  ||  _  ||   _||  -__| |       ||  ||        |<br>|_______||_____||_____||__|  |_____| |__|_|__||__||__|__|__|"
    $('#about-me-title').html(spr1);
}

function moveCat() {
    var today = new Date();
    var s = today.getSeconds();
    var spr1 = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣷⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>    ⠀⠀⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣦⣀⡀⠀⢀⣴⣇⠀⠀⠀⠀<br>    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀<br>    ⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀<br>    ⠀⠀⠀⣴⣿⣿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀<br>    ⠀⠀⣾⣿⣿⣿⣿⣿⣶⣿⣯⣭⣬⣉⣽⣿⣿⣄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀<br>    ⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄<br>    ⢸⣿⣿⣿⣿⠟⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⣿⣿⣿⣿⡿⠛⠉⠉⠉⠉⠁<br>    ⠘⠛⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀";
    var spr2 = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>                        ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⡀⣠⣾⡇⠀⠀⠀⠀<br>                        ⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀<br>                        ⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀<br>                        ⠀⣶⣿⣦⣜⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⡿⢿⡏⣴⣺⣦⣙⣿⣷⣄⠀⠀⠀<br>                        ⠀⣯⡇⣻⣿⣿⣿⣿⣷⣾⣿⣬⣥⣭⣽⣿⣿⣧⣼⡇⣯⣇⣹⣿⣿⣿⣿⣧⠀⠀<br>                        ⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷⠀<br><br><br>";
    $('#about-me-footer').html(s % 2 == 0 ? spr1 : spr2);
    t = setTimeout(function () { moveCat() }, 500);
}

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

function filter(e) {
    let target = e.target.parentNode;
    let father = e.target.parentNode.parentNode;

    if (!target.id.toString().includes('content')) {
        target = e.target.parentNode.parentNode;
        father = e.target.parentNode.parentNode.parentNode;
    }

    if (!target.id.toString().includes('content')) {
        target = e.target.parentNode.parentNode.parentNode;
        father = e.target.parentNode.parentNode.parentNode.parentNode;
    }

    if (target.classList.contains('maximize')) {
        return;
    }

    $(pages).map(function () {
        if (this.selector != "#" + father.id) {
            $(this).removeClass('index');
        }
    });

    father.classList.add('index');

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

function filterCellPhone(e) {
    if (!e.target.parentNode.parentNode.classList.contains("index")) {
        return;
    }
    filter(e);
}
