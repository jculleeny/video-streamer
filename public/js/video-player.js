// ELEMENT CONSTANTS
const video_player = document.getElementsByTagName( "video" );
const media = document.querySelector( "video" );

// CONTROL CONSTANTS
const play_button = document.getElementById( "play" );
const pause_button = document.getElementById( "pause" );
const seven_twenty_resolution = document.getElementById( "720p" );
const four_eighty_resolution = document.getElementById( "480p" );
const three_sixty_resolution = document.getElementById( "360p" );
const volume_100 = document.getElementById( "v100" );
const volume_50 = document.getElementById( "v50" );
const volume_0 = document.getElementById( "v0" );

// CONTROL INFO
const current_timer = document.getElementById( "current-time" );

// CONTROL EVENTS
play_button.addEventListener( "click", () => {
    media.play();
});

pause_button.addEventListener( "click", () => {
    media.pause();
});

volume_100.addEventListener( "click", () => {
    media.volume = 1;
});

volume_50.addEventListener( "click", () => {
    media.volume = 0.5;
});

volume_0.addEventListener( "click", () => {
    media.volume = 0;
});

seven_twenty_resolution.addEventListener( "click", () => {
    video_player[0].setAttribute( "width", "1280" );
    video_player[0].setAttribute( "height", "720" );
});

four_eighty_resolution.addEventListener( "click", () => {
    video_player[0].setAttribute( "width", "852" );
    video_player[0].setAttribute( "height", "480" );
});

three_sixty_resolution.addEventListener( "click", () => {
    video_player[0].setAttribute( "width", "480" );
    video_player[0].setAttribute( "height", "360" );
});

