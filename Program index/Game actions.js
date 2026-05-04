function verification(){
    
}
//This is the FlipCoin function this rolls either 1 or 2 if 1 is rolled than it is heads if it rolls 2 than it is tails
function FlipCoin(){
    var Tails = "Tails.png";
    var Heads = "Heads.png";
    var How = "How.png";
    var player1 = Math.ceil(Math.random() *100);
if (player1 >= 1 && player1 <= 49)
    {
             document.getElementById("coin").src = Heads;
    document.getElementById("result").innerHTML = "Heads you won!! Lucky";
    document.body.style.color = "green";
    }
    else if (player1 >= 98 && player1 <= 100){
                  document.getElementById("coin").src = How;
  document.getElementById("result").innerHTML = "H-how have you managed this?";
  document.body.style.color = "white";
    }
    else{
                  document.getElementById("coin").src = Tails;
        document.getElementById("result").innerHTML = "Tails! Better luck next time.";
        document.body.style.color = "red";
    }

}
function Credits(){
document.getElementById("credits").innerHTML = "Original Heads image by jemastock on Freepik<br> Original Tails image by juicy_fish on Freepik<br>Original side ways coin image by freepik";
}
