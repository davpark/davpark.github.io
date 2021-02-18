$(document).ready(function() {
    $(".loader-container").fadeOut("slow")
  });
  
  new TypeIt('#typeit', {
     strings: ["Software Developer", "Ukulele Player"],
     speed: 75,
     breakLines: false,
     autoStart: true,
     loop: true
  });