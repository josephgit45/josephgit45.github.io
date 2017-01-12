$(document).ready(function() {
    console.log('url("https://unsplash.it/' + screen.width  + '/' + screen.height + '/?random"');
    document.getElementById("imageDiv").style.backgroundImage = 'url("https://unsplash.it/' + screen.width  + '/' + screen.height + '/?random"';
 });

 function playVideo(){
   var videoFrameHTML = '\
          <iframe class = "animated fadeIn" frameborder="0" style="pointer-events: none;" src="https://www.youtube.com/embed/QeY8lndPsdE?rel=0?version=3&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop​" width="'+ screen.width +'"height =' + screen.height +'">\
         </iframe>\
         <iframe frameborder="0" style="pointer-events: none;" src="https://www.youtube.com/embed/osgbIChguVQ?rel=0?version=3&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1​" width="0" height="0">\
         </iframe>'
   document.getElementById("imageDiv").innerHTML = videoFrameHTML;
 }
