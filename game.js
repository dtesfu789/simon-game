var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  level++;
  return randomNumber;
}
function playAudio(audioColor){
  var audio = new Audio("sounds/"+audioColor+".mp3");
  audio.play();
}
function animatePress(userColor){
  $("#"+userColor).addClass("pressed");
  setTimeout(function () {
    $("#"+userColor).removeClass("pressed");
  },100);
}

$(document).keypress(function(event) {
  if(event.key ==="a"){
    $("h1").text("Level "+level);
    var randomChosenColors = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColors);
    $("#" + randomChosenColors).fadeIn().fadeOut().fadeIn();
    playAudio(randomChosenColors);
    console.log('gamePattern'+gamePattern);
  }
});
$(".btn").click(function(event){
  //$("button "+"#"+).addClass()
  //$("#"+event.target.id).addClass("pressed");
  var userChosenColor = event.target.id;
  playAudio(userChosenColor);
  animatePress(event.target.id);
  userClickedPattern.push(userChosenColor);
  console.log('userClickedPattern'+userClickedPattern);
  nextSequence();
  // if(gamePattern===userClickedPattern){
  //   nextSequence();
  // }else{
  //   $("h1").text("game over!");
  // }
});
