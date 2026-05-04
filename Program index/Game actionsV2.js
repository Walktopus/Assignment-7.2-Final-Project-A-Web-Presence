
//This is the FlipCoin function this rolls either 1 or 2 if 1 is rolled than it is heads if it rolls 2 than it is tails
function FlipCoin(){
    //This is the variable that connects the source in the html file
    var audio = document.getElementById("SFX");
    //This defines the picture that is displayed when tails is rolled
    var Tails = "Tails.png";
        //This defines the picture that is displayed when heads is rolled
    var Heads = "Heads.png";
        //This defines the picture that is displayed when the easter egg side is rolled
    var How = "How.png";
        //This rolls a random number from 1-100 when called
    var player1 = Math.ceil(Math.random() *100);
        //This if statement defines the conditions for heads
if (player1 >= 1 && player1 <= 49)
    {
        //this displays the picture when heads is rolled
             document.getElementById("coin").src = Heads;
             //This displays the result
    document.getElementById("result").innerHTML = "Heads you won!! Lucky";
    //This changes the color of the text to green
    document.body.style.color = "green";
    }
    //This defines the conditions for the easter egg
    else if (player1 >= 98 && player1 <= 100){
        //This displays the picture
                  document.getElementById("coin").src = How;
                  //this displays the result
  document.getElementById("result").innerHTML = "H-how have you managed this?";
  //this changes the text color to white
  document.body.style.color = "white";
    }
    //this defines the conditions for tails
    else{
        //this displays the picture
                  document.getElementById("coin").src = Tails;
                  //this displays the result
        document.getElementById("result").innerHTML = "Tails! Better luck next time.";
        //this changes the text to red
        document.body.style.color = "red";
    }
    //this sets the coin flip sound effect loop to false
    audio.loop = false;
    //this plays the flip sound
    audio.play();
}
//this opens the credits
function Credits(){
    //this displays the credits
document.getElementById("credits").innerHTML = "Original Heads image by jemastock on Freepik<br> Original Tails image by juicy_fish on Freepik<br>Original side ways coin image by freepik";
}

