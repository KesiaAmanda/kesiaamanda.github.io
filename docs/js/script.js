let pages = [$("#welcome"), $("#about-me"), $("#training"), $("#skills"), $("#music-player")];
let buttons = [$("#start-btn"), $("#welcome-btn"), $("#about-me-btn"), $("#training-btn"), $("#skills-btn"), $("#music-player-btn")];

const colorButtom = document.getElementById('dark-mode-icon-text');

if (!(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    colorButtom.innerHTML = 'Modo claro';
}

document.addEventListener("DOMContentLoaded", function () {
    const trainingBody = document.querySelector("#training-body");
    const training = document.querySelector("#training-content");
    let firstWidth;

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (!trainingBody.classList.contains('unlockHeight')) {
                if (entry.target === trainingBody) {
                    const newWidth = entry.contentRect.width;
                    const newHeigth = entry.contentRect.height;
                    const screenWidth = window.innerWidth;

                    if (!firstWidth && (training.offsetWidth == Math.round(screenWidth * 0.9) || newWidth == 856)) {
                        firstWidth = newWidth;
                        trainingBody.setAttribute('style', 'width: ' + (newWidth + 44) + 'px; height: ' + (newHeigth + 44) + 'px;');
                    } else if (newWidth > firstWidth || newWidth < firstWidth) {
                        trainingBody.classList.add('unlockHeight');
                        return;
                    }
                }
            }
        }
    });

    resizeObserver.observe(trainingBody);
});

$(document).ready(function (e) {
    initText();
    startTime();
    moveCat();
    $('#welcome-btn').addClass('startClick');
    $('#music-player-btn').slideUp(100);

    function swapButtons(button) {
        $(buttons).map(function () {
            if (this.selector != button) {
                $(this).removeClass('startClick');
            }
        });
    }

    $('#dark-mode-icon').dblclick(function () {
        $(':root').toggleClass("switchColor");
        if (colorButtom.textContent == 'Modo escuro') {
            colorButtom.innerHTML = 'Modo claro';
        } else {
            colorButtom.innerHTML = 'Modo escuro';
        }
    });

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

    $('.expander').click(function (e) {
        $(e.target.parentNode.parentNode.parentNode).toggleClass('retract');
    });

    $(':root').on("keypress", function (e) {
        e.preventDefault();
        if (e.keyCode == 13) {
            if ($('#training').hasClass('index')) {
                seeMoreContent();
            }
        }
    });

    $(':root').on("touchstart", function (e) {
        if ($('#training').hasClass('index')) {
            seeMoreContent();
        }
    });

    $(window).on("resize", function (e) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
});

swapPageElements('#about-me');
swapPageElements('#welcome');
swapPageElements('#training');
swapPageElements('#skills');
swapPageElements('#music-player');

function swapPageElements(page) {
    let content = page + '-content';
    let buttom = page + '-btn';
    let menuIcon = page + '-menu-icon';
    let desktopIcon = page + '-icon';
    let close = page + '-cls';

    $(content).click(function (e) {
        swapPage(page, buttom);

        if (e.target.classList.contains('min')) {
            $(page).addClass('hideContent');
            $(buttom).removeClass('startClick');
        } else if (e.target.classList.contains('max')) {
            $(this).toggleClass('maximize');
        } else {
            $(buttom).addClass('startClick');
        }
        typeText(page);
    });

    $(menuIcon).click(function () {
        swapPage(page, buttom);

        $(page).removeClass('hideContent').addClass('index');
        $(buttom).addClass('startClick').slideDown(100);
        $('#start-menu').addClass('hidden');
        $('#start-btn').removeClass('startClick').addClass('startRest');
        typeText(page);
    });

    $(buttom).click(function () {
        swapPage(page, buttom);

        if (this.classList.contains('startClick')) {
            $(page).addClass('hideContent').addClass('index');
            $(this).removeClass('startClick');
        } else if (!this.classList.contains('startClick')) {
            $(page).removeClass('hideContent');
            $(this).addClass('startClick');
        }
        typeText(page);
    });

    $(desktopIcon).dblclick(function () {
        swapPage(page, buttom);

        $(page).removeClass('hideContent').addClass('index');
        $(buttom).addClass('startClick').slideDown(100);
        typeText(page);
    });

    $(close).click(function () {
        $(page).addClass('hideContent');
        $(buttom).removeClass('startClick').slideUp(100);
    });
}

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

function typeText(page) {
    if (page == "#training") {
        if (!$(page).hasClass('hideContent')) {
            textWriter();
        } else {
            textClear();
        }
    }
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

const headers = document.getElementsByClassName('header');
Array.from(headers).forEach(header => {
    header.addEventListener('mousedown', filter);
    header.addEventListener('touchstart', filter);
});

var elements = document.getElementsByClassName('header');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mousedown', filter, false);
    elements[i].addEventListener('touchstart', filter, false);
}

function filter(e) {
    let father = e.target;
    let target = null;

    while (father && !(target?.id?.includes('content'))) {
        target = father;
        father = target.parentNode;
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

