$(document).ready(function() {
    $(".loader-container").fadeOut("slow")
  });
  
  new TypeIt('#typeit', {
     strings: ["Software Developer", "Movie Critic"],
     speed: 125,
     breakLines: false,
     autoStart: true,
     loop: true
  });