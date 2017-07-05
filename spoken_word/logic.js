var audio;
var video;
var isPlaying = false;

$(document).ready(function() {
    audio = document.getElementById('audioPlayer');
    video = document.getElementById('videoPlayer');
    audio.addEventListener('loadedmetadata', function() {
        audio.currentTime = 273;
        audio.play();
    }, false);

    setTimeout(function() {
        document.getElementById("videoPlayer").style.visibility = "visible";
        video.play();
    }, 500);

    isPlaying = true;
    showVerses(1);
});

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


function showVerses(input) {
    verseArray = [
        "But we have this treasure in jars of clay",
        "to show that the surpassing power belongs to God and not to us.",
        "We are afflicted in every way, but not crushed",
        "perplexed - but not driven to despair",
        "persecuted - but not forsaken",
        "struck down - but not destroyed",
        "always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.",
        "For we who live are always being given over to death for Jesus' sake",
        "so that the life of Jesus also may be manifested in our mortal flesh.",
        "So death is at work in us, but life in you.",

        "Since we have the same spirit of faith according to what has been written, “I believed, and so I spoke,”",
        "we also believe, and so we also speak",
        "knowing that he who raised the Lord Jesus will raise us also with Jesus and bring us with you into his presence.",
        "For it is all for your sake, so that as grace extends to more and more people it may increase thanksgiving",
        "to the glory of God.",

        "So we do not lose heart.",
        "Though our outer self is wasting away",
        "our inner self is being renewed day by day.",
        "For this light momentary affliction is preparing for us",
        "an eternal weight of glory beyond all comparison",
        "as we look not to the things that are seen",
        "but to the things that are unseen."
    ];
    if (input == 1) {
        var index = 15;
        var max = 18;
    } else if (input == 2) {
        var index = 18;
        var max = verseArray.length;
    }

    document.getElementById("verseDiv").innerHTML = "";

    setInterval(function() {
        setTimeout(function() {
            if (index < max) {
                document.getElementById("verseDiv").innerHTML = '<p class="animated fadeIn presetVerse">' + verseArray[index++] + "</p>";
            } else {
                document.getElementById("verseDiv").innerHTML = '';
            }
        }, 3000);
    }, 5000);
}
