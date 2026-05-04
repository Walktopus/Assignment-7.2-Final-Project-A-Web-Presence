//This function is what runs when the submit button is pressed
function Verify() {
    //This is the variable that holds the image that shows up when verified
    var Happy = "Happy.png";
    //This is a constant this changes depending on what is put in it these contants
    //  are being used to keep track of first and last names and zipcode that are input into the program
  var First = document.getElementById("FirstName").value;
  //More contants
    var Last = document.getElementById("LastName").value;
    //another constant
      var Zip = document.getElementById("ZipCode").value;
      //This is a console log operation this sends a meassage to the console if it runs it is being used
      //  as a signal for when the program runs if this doesn't run then the verifiaction failed
  console.log(First);
  //This consant is adding the First and Last names together into one string
  var result = First + " " + Last;
  //This is a second test signal
 console.log(result);
 //This if statment is what varifies the inputs
if (result.length < 20 && Zip.length == 5){
    //This changes the header text
    document.getElementById("Header").innerHTML = "Thankyou for verifying<br>I like bacon";
    //This changes the text color
    document.body.style.color = "green";
    //This changes the image displayed
            document.getElementById("-_-").src = Happy;
    }
}
