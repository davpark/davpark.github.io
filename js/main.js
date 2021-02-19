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


var incremental = 1;
var attacked = false;
var health = 5;
// var userInput = document.getElementById("userInput").value;
var rabbitHealth = 5;

async function counter() {

   while (incremental < 7) {
      // console.log(counter);
      document.getElementById("counter").innerHTML = incremental;
      incremental++;
      await timer(1000);
      if (incremental === 6) {
         incremental = 1;
      }
   }

  }
counter();

async function rabbitFight() {
   for (rabbitHealth === 5; ; ) {
      await timer(1000);
      if (incremental === 6 && attacked === false) {
         document.getElementById("rabbitFight").innerHTML = "Rabbit attacked for 4 dmg";
         health = health - 4;
         console.log("you've been hit, hp is: ", health);
         if (health < 1) {
            document.getElementById("rabbitFight").innerHTML = "ur ded lole";
         }
      }
      if (incremental === 6 && attacked === true && rabbitHealth > 0) {
         document.getElementById("rabbitFight").innerHTML = "Rabbit ran away";
      }
      if (rabbitHealth < 1) {
         document.getElementById("rabbitFight").innerHTML = "You killed the rabbit";
      }

   }


}
rabbitFight()

// input.addEventListener("keyup", function(event) {
//    if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("submitUserInput").click();
//    }
//  });

function playerAction() {
   var action = document.getElementById("performAction").value;
   console.log(action);
   if (action === 'heal' ) {
      health = health + 3;
      console.log("you healed, your hp is now: ", health);
   }
   if (action === 'attack') {
      rabbitHealth = rabbitHealth - 3;
      console.log(rabbitHealth);
      attacked = true;
   }
}
playerAction();