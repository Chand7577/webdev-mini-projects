buttonColours=["red","blue","green","yellow"];
gamePattern=[];
userClickedPattern=[];
var level=0;

var started=false;



function nextSequence(){
    userClickedPattern=[];  
    level++;
    $('h1').text('Level '+level); 
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
                                                                                                                                                                                                    
    
    playSound(randomChosenColour);
     
}
$('.btn').click(function(event){
    let userChosenColour=event.target.id;
     userClickedPattern.push(userChosenColour);
     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
     

});


function playSound(name){
     
   
     
    var sound= new Audio(`./sounds/${name}.mp3`);
    sound.play(); 
}

function animatePress(currentColour){
    
   $('#'+currentColour).addClass("pressed");

    setTimeout(function(){
        $('#'+currentColour).removeClass("pressed");
    },100)

     
}
$(document).keypress(function(){
    if(!started){
        $('#level-title').text('Level '+level);
        nextSequence();
        started=true;
    }
});


function checkAnswer(currentLevel){
    
         if(userClickedPattern[currentLevel]== gamePattern[currentLevel]){
            console.log('success');

             if(userClickedPattern.length==gamePattern.length){
                   setTimeout(function(){
                         nextSequence();
                   },1000);
             }


         }
         else{
               $('body').addClass('game-over');
               setTimeout(function(){
                     $('body').removeClass('game-over');
               },200);
               $('#level-title').text('GAME OVER! PRESS ANY KEY TO RESTART');
               startOver();
         }
        

}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}








