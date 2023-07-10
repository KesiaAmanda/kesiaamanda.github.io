var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videoList = ['xb0cMDEyMzg', 'IZiGxs9hai8'];
var selectedVideo = videoList[Math.round(Math.random() * 1)];

var player;
var progressBar;
var videoTitleElement;
var playlistId = 'PLUO8mnyUG2EIpm1PymeZmMT7sH8UJky6c'; // ID da playlist do YouTube
// var playlistId = 'PL91KhE7INCB3pz2F4rriUbOeqVeWLA1cl'; // ID da playlist do YouTube

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        playerVars: {
            'listType': 'playlist',
            'list': playlistId,
            'loop': 1,
            'shuffle': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    progressBar = document.getElementById("progress-bar");
    videoTitleElement = document.getElementsByClassName("videoTitle");

    var close = document.getElementById("music-player-cls");

    var playButton = document.getElementById("play-button");
    var pauseButton = document.getElementById("pause-button");
    var stopButton = document.getElementById("stop-button");
    var volumeButton = document.getElementById("volume-input");
    var volumeElement = document.getElementById("volume-amount");
    var previousButton = document.getElementById("previous-button");
    var nextButton = document.getElementById("next-button");

    getVideoTitle();
    player.unMute();
    player.setVolume(2);

    close.addEventListener("click", function () {
        player.stopVideo();
    });

    playButton.addEventListener("click", function () {
        player.playVideo();
    });

    pauseButton.addEventListener("click", function () {
        player.pauseVideo();
    });

    stopButton.addEventListener("click", function () {
        player.stopVideo();
    });

    volumeButton.addEventListener("click", function () {
        player.setVolume(volumeElement.value);
    });

    nextButton.addEventListener("click", function () {
        player.nextVideo();
    });

    previousButton.addEventListener("click", function () {
        player.previousVideo();
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        setInterval(updateProgressBar, 100);
    }
    getVideoTitle();
}

function updateProgressBar() {
    var currentTime = player.getCurrentTime();
    var duration = player.getDuration();
    var progress = (currentTime / duration) * 100;
    progressBar.style.marginLeft = progress + "%";
}

function getVideoTitle() {
    var videoData = player.getVideoData();
    for (let i = 0; i < videoTitleElement.length; i++) {
        videoTitleElement[i].innerHTML = videoData.title;
    }
}
