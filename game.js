var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keypress(function(event) {
  if(event.key ==="a" && level ===0){
    $("h1").text("Level "+level);
    nextSequence();
  }
});
$(".btn").click(function(event){
  var userChosenColor = event.target.id;
  playAudio(userChosenColor);
  animatePress(event.target.id);
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

});

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColors = buttonColors[randomNumber];
  gamePattern.push(randomChosenColors);
  setTimeout(function () {
    $("#" + randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColors);

  },1000);
  level++;

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
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      $("h1").text("Level "+level);
      nextSequence();

    }

  }else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game Over, Press Any Key to Restart!");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);
    startOver();
  }
}
function startOver() {

  $(document).keypress(function(event) {
    level = 0;
    gamePattern = [];
    $("h1").text("Level "+level);
    nextSequence();
    console.log(gamePattern);
  });
}
