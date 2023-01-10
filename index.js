
//detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
     makesound(buttoninnerhtml);
     addanimations(buttoninnerhtml);
    
  });
}
//detecting keypress
document.addEventListener("keydown",function(event){
  makesound(event.key);
  addanimations(event.key);

})
//  master function 
function makesound(key){
switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

        break;
      case "a":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();

        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();

        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();

        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();

        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();

        break;

      default:
        console.log(buttoninnerhtml);
        break;
    }
}

function addanimations(currentkey){
  var thisbutton= document.querySelector("."+currentkey);
  thisbutton.classList.add("pressed");
  setTimeout(function() {
    thisbutton.classList.remove("pressed");
    
  },100);
}