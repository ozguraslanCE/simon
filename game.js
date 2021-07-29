var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
 
var userClickedPattern = [];

var started = false ;

var level = 0;

$(document).keypress(function(){
   
    if (!started) {

        nextSquence();

        $("#level-title").text("Level " + level);
        

        started = true;
    };
});
  //click event//
$(".btn").click( function(){
        
    var userChosenColour = $(this).attr("id");   //this is so important cuz select id which one we chose//
    
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    playAnimationn (userChosenColour);

    checkAnswer(userClickedPattern.length-1);


    // $("#" + userChosenColour).fadeOut(100).fadeIn(100);

    // var audio = new Audio("sounds/" + userChosenColour+ ".mp3");
    
    // audio.play();
});
    //click event//


function nextSquence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

  
    var  randomNumber =  Math.round(Math.random()*3)
  
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
    playSound(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    // $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
};


function playSound(name){
    
    var audio = new Audio("sounds/" + name+ ".mp3");

    audio.play();
};

function playAnimationn(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
};

function checkAnswer(currentLevel){
   
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        
        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                nextSquence();
            },1000)
        }
    }
    else{
        playSound("wrong");

        $("body").addClass("game-over");

        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200);

        startOver();
    }
    
}

function startOver(){
    level= 0;
   gamePattern = [];
   started = false;
}
  

