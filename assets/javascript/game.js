function win() {
  $("#winLoss").html("You Win!")
  game()
}

function lose() {
  $("#winLoss").html("You Lose!")
  game()
}

var wins = 0;
var losses = 0;
var target =1
var container = 2

function game() {

      target = Math.floor(Math.random() * (101)) + 19;
      var crystal1 = Math.floor(Math.random() * 12) + 1;
      var crystal2 = Math.floor(Math.random() * 12) + 1;
      var crystal3 = Math.floor(Math.random() * 12) + 1;
      var crystal4 = Math.floor(Math.random() * 12) + 1;
      container = 0;
      
    
      $("#target").text(target);
      $("#container").html("Score: 0");

        $("#crystal1").on("click", function(){
            container += crystal1;
        })

        $("#crystal2").on("click", function(){
            container += crystal2;
        })

        $("#crystal3").on("click", function(){
            container += crystal3;
        })

        $("#crystal4").on("click", function(){
            container += crystal4;
        })

      $("#crystals").on("click", function(){
        $("#container").html("Score: "+container);
        winLoss();
      })

      function winLoss(){
      if (container===target) {
        win();
        wins = wins+1;
        $("#wins").html("wins: "+wins)
      }

      if (container>target) {
        lose();
        losses = losses+1;
        $("#losses").html("losses: "+losses)
      }
    }

}


$(document).ready(function(){
game()});