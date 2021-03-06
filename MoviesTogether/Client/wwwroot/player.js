var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var startingTimestamp;
function onYouTubeIframeAPIReady(id, timestamp) {
    console.log("Making player");
    player = new YT.Player('ytplayer', {
        videoId: id,
        events: {
            'onStateChange': onPlayerStateChange,
            'onReady': intializeTimestamp
        }
    });
    if (timestamp > 0) startingTimestamp = timestamp;
}

function intializeTimestamp() {
    if (startingTimestamp > 0) player.seekTo(startingTimestamp);
    startingTimestamp = -1;
}

function onPlayerStateChange(event) {
    console.log("State Change - New Player State: " + currentState);
    var currentTimestamp = getTimestamp();
    var duration = getDuration();
    var currentState = player.getPlayerState()
    //-1 is "Unstarted" but there is no YT.PlayerState constant for Unstarted.
    if (currentTimestamp == duration && duration > 0 && currentState != -1 && currentState != undefined) {
        console.log("player.js - Calling jsNextVideo");
        DotNet.invokeMethodAsync('OpenSync.Client', 'jsNextVideo');
    }
    else if (currentState == YT.PlayerState.PLAYING || currentState == YT.PlayerState.PAUSED) {
        console.log("player.js - Calling jsSync");
        DotNet.invokeMethodAsync('OpenSync.Client', 'jsSync');
    }
}

function getDuration() {
    return Math.round(player.getDuration());
}

function getTimestamp() {
    return Math.round(player.getCurrentTime());
}