var images = new Array();
var loadingScreenHidden = false;
var verses = new Array();
var references = new Array();

$(document).ready(function() {
    preloadVerses(1);
    // document.getElementById("imageDiv").style.backgroundImage = 'url("https://unsplash.it/' + screen.width  + '/' + screen.height + '/?random"';
    preloadImages(4);
    // setInterval(function(){
    //   showNextImage();
    // }, 10000);
 });

 function preloadImages(count){
   for (i = 0; i < count; i++){
     var imageToAdd = new Image();
     imageToAdd.src = 'https://unsplash.it/' + screen.width  + '/' + screen.height + '/?image='+ Math.floor((Math.random() * 200));
     images.unshift(imageToAdd);
   }
 }

 function preloadVerses(count){
   for (i = 0; i < count; i++){
     requestVerse();
   }
 }

function requestVerse(){
    $.ajax({
      url: "http://labs.bible.org/api/?passage=random&type=json&callback=receivedVerse",
      jsonp: "parseVerse",
      dataType: "jsonp"
    });
}

function receivedVerse(data){
  var verse = data[0].text.split(".")[0];
  var reference = data[0].bookname + " " + data[0].chapter + ":" + data[0].verse;
  verses.unshift(verse);
  references.unshift(reference);
  console.log(verses);
  if(!loadingScreenHidden){
    updateScreen();
  }
}

function updateScreen(){
  if (!loadingScreenHidden){
    $("#loadingScreen").fadeOut("slow", function(){
      document.body.style.backgroundColor = "black";
      document.getElementById("loadingScreen").style.display = "none";
      loadingScreenHidden = true;
    });
  }
  document.getElementById("verseDiv").innerHTML = verses.pop();
  document.getElementById("referenceDiv").innerHTML =  references.pop();
  if (verses.length <= 1){
    preloadVerses(1);
  }

  var poppedImage = popImage();
  while(poppedImage.width == ""){ //catch and skip urls that do not return image
    poppedImage = popImage();
  }

  document.getElementById("imageDiv").style.backgroundImage = 'url(' + poppedImage.src +')';
  $("#imageDiv").fadeIn(300);
  $("#verseDiv").fadeIn(300);
  $("#referenceDiv").fadeIn(300);
}


function popImage(){
   var poppedImage = images.pop();
   if (images.length <= 2){
     preloadImages(4);
   }
   return poppedImage;
}

function showNextImage(){
  $("#verseDiv").fadeOut(300);
  $("#referenceDiv").fadeOut(300);
  $("#imageDiv").fadeOut(300,function(){
    updateScreen();
  });
  // document.getElementById("loadingScreen").style.visibility = "hidden";


}

 function playVideo(){
   var videoFrameHTML = '<iframe onclick = "window.reload()" class = "videoFrame" scrolling="no" frameborder="0" style="pointer-events: none;" src="https://www.youtube.com/embed/QeY8lndPsdE?rel=0&amp?version=3&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1​"></iframe>';
   var musicFrameHTML1 = '<iframe frameborder="0" style="pointer-events: none;" src="https://www.youtube.com/embed/osgbIChguVQ?rel=0?version=3&start=273&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1​&playlist=osgbIChguVQ" width="0" height="0"></iframe>';
   var musicFrameHTML2 = '<iframe frameborder="0" style="pointer-events: none;" src="https://www.youtube.com/embed/9IGDAKBJMtU?rel=0?version=3&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1​" width="0" height="0"></iframe>';

   document.getElementById("imageDiv").style.backgroundImage = '';
   document.getElementById("musicDiv").innerHTML = musicFrameHTML1;

   setTimeout(function(){
     document.getElementById("imageDiv").style.visibility = "hidden";
     document.getElementById("imageDiv").innerHTML = videoFrameHTML;
     setTimeout(function(){
       document.getElementById("imageDiv").style.visibility = "visible";
     }, 4000);
   }, 7500);

   setTimeout(function(){
      location.reload();
   }, 430000);

   setTimeout(function(){
      showVerses(2);
   }, 400000);

   showVerses(1);
 }

 function showVerses(input){
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
    if (input == 1){
      var index = 15;
      var max = 18;
    }else if (input == 2){
      var index = 18;
      var max = verseArray.length;
    }

   document.getElementById("verseDiv").innerHTML = "";
   document.getElementById("referenceDiv").innerHTML = "";

   setInterval(function(){
     setTimeout(function(){
       if (index < max){
         document.getElementById("verseDiv").innerHTML = '<p class="animated fadeIn presetVerse">' + verseArray[index++] + "</p>";
       }
       else{
         document.getElementById("verseDiv").innerHTML = '';
       }
     }, 3000);
   }, 5000);
 }
