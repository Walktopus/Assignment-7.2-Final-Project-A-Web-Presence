/*Walker Wilson
5/2/2026
Version 1
Table actions*/

//New planet addition function
function NewPlanet(){
    //Variables used to hold the user submition 
    var planetName = document.getElementById("Planet").value;
    var grav = document.getElementById("Grav").value;
    var psi = document.getElementById("Pressure").value;
    var Mass = document.getElementById("mass").value;

    //Variable used to update the table
    var table = document.getElementById("Planetlog");

    //variable used to add a new row to the table
    var PlanetRow = table.insertRow(-1);

    //variables used to insert new cells
    var cell1 = PlanetRow.insertCell(0);
    var cell2 = PlanetRow.insertCell(1);
    var cell3 = PlanetRow.insertCell(2);
    var cell4 = PlanetRow.insertCell(3);

//This part of the script updates the values added to the table
    cell1.innerHTML = planetName;
    cell2.innerHTML = grav;
    cell3.innerHTML = psi;
    cell4.innerHTML = Mass;
}