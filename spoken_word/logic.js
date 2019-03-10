var audio;
var video;
var isPlaying = false;

// $(document).ready(function() {
    audio = document.getElementById('audioPlayer');
    video = document.getElementById('videoPlayer');
    audio.addEventListener('loadedmetadata', function() {
        audio.currentTime = 273;
        audio.volume = 0.7;
        audio.play();
    }, false);

    setTimeout(function() {
        // video.style.visibility = "visible";
        video.play().catch(error=>console.log(error));
        audio.currentTime = 273;
        audio.volume = 0.7;
        audio.play();
        console.log('playing');
        isPlaying = true;
    }, 5000);

// });

function toggle(){
  if (isPlaying){
    audio.pause();
    video.pause();
    isPlaying = false;
  }else{
    audio.play();
    video.play();
    isPlaying = true;
  }
}