$(document).ready(function() {
    console.log('url("https://unsplash.it/' + screen.width  + '/' + screen.height + '/?random"');
    document.getElementById("imageDiv").style.backgroundImage = 'url("https://unsplash.it/' + screen.width  + '/' + screen.height + '/?random"';
 });

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
   }, 405000);

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
     "as we look not to the things that are seen - but to the things that are unseen.",
     "For the things that are seen are transient, but the things that are unseen are eternal."
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
