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

const timer = ms => new Promise(res => setTimeout(res, ms))

async function counter() {

   var counter = 1;
   while (counter < 7) {
      // console.log(counter);
      document.getElementById("counter").innerHTML = counter;
      counter++;
      await timer(1000);
      if (counter === 6) {
         counter = 1;
      }
   }

  }
  counter();

