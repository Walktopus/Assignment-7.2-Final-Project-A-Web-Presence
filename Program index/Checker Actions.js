//This is the primary function of the program
function checker(){
    //this variable connects the audio import from the html file to the java for use
      var yes = document.getElementById("yesSFX");
       //this variable connects the audio import from the html file to the java for use
        var no = document.getElementById("noSFX");
    //This holds the confirm picture
    var Confirm = "Confirm.png";
//this holds the deny picture
    var Deny = "Deny.png";
//this variable holds the first input
var input1 = document.getElementById("input1").value;
//this holds the second input
var input2 = document.getElementById("input2").value;
//this splits the first input
var revinput = input1.split("");
//this reverses the input
revinput = revinput.reverse();
//this removes the spaces
revinput = revinput.join("");
//this defines the not a palindrome condition
if (revinput != input2)
{
    //displays the result
    document.getElementById("results").innerHTML = "Not a Palindrome";
    //this changes the picture
             document.getElementById("Result").src = Deny;
               //this sets the sound effect loop to false
    no.loop = false;
    //this plays the deny sound
    no.play();
}
//this defines the is a palindrome condition
else
{
     //displays the result
    document.getElementById("results").innerHTML = "Is a Palinedrome";
    //This changes the picture
             document.getElementById("Result").src = Confirm;
               //this sets the sound effect loop to false
    yes.loop = false;
    //this plays the confirm sound
    yes.play();
}
    }
//this function changes the prompt text to say thank you
function finished(){
    //this changes the prompt text to say thank you
document.getElementById("finish").innerHTML = "Thank you";
}