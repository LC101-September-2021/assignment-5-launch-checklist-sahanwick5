// Write your JavaScript code here!


window.addEventListener("load", function() {

    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    
    list.style.visibility = "hidden";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const pilotName = document.querySelector("input[name=pilotName]");
        const copilotName = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoMass = document.querySelector("input[name=cargoMass]");
        const val = [validateInput(pilotName.value), validateInput(copilotName.value), validateInput(fuelLevel.value), validateInput(cargoMass.value)];

        if (val[0] == "Empty" || val[1] == "Empty" || val[2] == "Empty" || val[3] == "Empty") {
            alert("All fields are required!");
        } else if (val[0] == "Is a Number" || val[1] == "Is a Number" || val[2] == "Not a Number" || val[3] == "Not a Number") {
            alert("Make sure to enter valid information for each field!");
        }

        formSubmission(document,list,pilotName.value,copilotName.value,fuelLevel.value,cargoMass.value);
    });
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        console.log(planet);
        addDestinationInfo(document,planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image);
    })
   
});